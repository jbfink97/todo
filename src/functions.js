import { projects, tasks } from './index';
import { Project, Task } from './classes';
import { format } from 'date-fns';


function addProject() {
    const newProjectName = document.getElementById('newProjectInput').value;
    const checks = obj => obj.name == newProjectName;
    if (projects.some(checks)) {
        alert('You already have a project with that name!');
    } else if (newProjectName.length < 1) {
        alert('Please input a name for your project!');
    } else {
        const index = projects.length;
        const newProject = new Project(newProjectName, index);
        projects.push(newProject);
        let projectList = document.getElementById('projectList');
        projectList.textContent = '';
        renderProjectsSideBar();
    }
    document.getElementById('newProjectForm').reset();
}

function renderProjectsSideBar() {
    const projectList = document.getElementById('projectList');
    projectList.textContent = '';
    for (let i = 0; i < projects.length; i++) {
        projects[i].index = i;
    }

    for (const project of projects) {
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('projectDiv');

        const projectButton = document.createElement('button');
        projectButton.type = 'button';
        projectButton.id = project.name;
        projectButton.classList.add('button');
        projectButton.textContent = project.name;
        projectButton.addEventListener('click', () => {
            renderDisplay(project.name);
        })

        const deleteProjectButton = document.createElement('button');
        deleteProjectButton.textContent = 'Delete Project';
        deleteProjectButton.type = 'button';
        deleteProjectButton.addEventListener('click', () => {
            projects.splice(project.index, 1);
            renderProjectsSideBar();
            if (projects.length < 1) {
                renderAllProjects();
            } else if (document.getElementById('currentProject').classList.contains(project.name)) {
                renderDisplay(projects[0].name);
            }
        })
        projectDiv.append(projectButton, deleteProjectButton);
        projectList.appendChild(projectDiv);
    }
}

function renderDisplay(name) {
    const projectDisplay = document.getElementById('projectDisplay');
    projectDisplay.textContent = '';
    const currentProject = document.createElement('div');
    currentProject.id = 'currentProject'; //??
    currentProject.textContent = `Project: ${name}`;
    currentProject.classList = name;
    projectDisplay.append(currentProject);

    const taskList = document.createElement('div');
    taskList.id = 'taskList';
    projectDisplay.append(taskList);
    updateTasks();

    // create new task form
    const newTaskForm = document.createElement('form');
    newTaskForm.id = 'newTaskForm';
    const input = document.createElement('input');
    input.type = 'text';
    input.id = 'description';
    input.placeholder = 'Task to add';
    const inputLabel = document.createElement('label');
    inputLabel.textContent = 'Name/description of task';
    const inputDiv = document.createElement('div');
    inputDiv.append(inputLabel, input);


    const dateInput = document.createElement('input');
    dateInput.type = 'date';
    dateInput.id = 'dueDate';
    const dateLabel = document.createElement('label');
    dateLabel.textContent = 'Due date';
    const dateDiv = document.createElement('div');
    dateDiv.append(dateLabel, dateInput);

    const priorityLevels = ['high', 'medium', 'low'];
    const select = document.createElement('select');
    for (const level of priorityLevels) {
        const option = document.createElement('option');
        option.value = level;
        option.text = level.charAt(0).toUpperCase() + level.slice(1);
        select.appendChild(option);
    }
    select.id = 'priority';

    const label = document.createElement('label');
    label.htmlFor = 'priority';
    label.textContent = 'Priority level';
    const priorityDiv = document.createElement('div');
    priorityDiv.append(label, select);

    // add task to project button
    const newTaskBtn = document.createElement('button');
    newTaskBtn.type = 'button';
    newTaskBtn.classList.add('button');
    newTaskBtn.textContent = 'Add task to project';
    newTaskBtn.addEventListener('click', addTask);

    newTaskForm.append(inputDiv, dateDiv, priorityDiv, newTaskBtn);
    projectDisplay.append(newTaskForm);
}

function updateTasks() {
    const taskList = document.getElementById('taskList');
    taskList.textContent = '';
    for (let i = 0; i < tasks.length; i++) {
        tasks[i].index = i;
    }
    const project = document.getElementById('currentProject').className;
    for (const task in tasks) {
        if (tasks[task].project === project) {
            taskList.append(individualTask(tasks[task]));
        }
    }
}

function addTask() {
    const project = document.getElementById('currentProject').className;
    const description = document.getElementById('description').value;
    const dueDate = document.getElementById('dueDate').value;
    const priority = document.getElementById('priority').value;
    const task = new Task(project, description, dueDate, priority);
    task.status = 'incomplete';
    task.index = tasks.length;

    if (description.length < 1) {
        alert('Please enter a description for the task');
    } else if (dueDate === '') {
        alert('Please enter a due date');
    } else {
        tasks.push(task);
        updateTasks();
        document.getElementById('newTaskForm').reset();
    }
}

function individualTask(task) {
    const individualTaskDiv = document.createElement('div');
    individualTaskDiv.classList.add('individualTask');

    const descriptionDiv = document.createElement('div');
    descriptionDiv.textContent = `Description: ${task.description}`;

    const dateDiv = document.createElement('div');
    dateDiv.textContent = `Due on: ${task.dueDate}`;

    const priorityDiv = document.createElement('div');
    priorityDiv.textContent = `Priority level: ${task.priority}`;

    const completedBtn = document.createElement('button');
    completedBtn.type = 'button';
    completedBtn.textContent = 'Mark complete';
    completedBtn.addEventListener('click', () => {
        if (task.status == 'incomplete') {
            task.status = 'complete';
            individualTaskDiv.classList.add('complete');
            completedBtn.textContent = 'Complete';
        } else {
            task.status = 'incomplete';
            individualTaskDiv.classList.remove('complete');
            completedBtn.textContent = 'Mark as complete';
        }
    })


    const removeBtn = document.createElement('button');
    removeBtn.type = 'button';
    removeBtn.textContent = 'Remove task';
    removeBtn.addEventListener('click', () => {
        tasks.splice(task.index, 1);
        updateTasks();
    })

    individualTaskDiv.append(descriptionDiv, dateDiv, priorityDiv, completedBtn, removeBtn);
    return individualTaskDiv;

}

// need to add all projects and due today
function renderAllProjects() {
    document.getElementById('taskList').textContent = '';
    const header = document.getElementById('currentProject');
    header.className = '';
    header.textContent = 'All Projects:';

    projects.forEach((project) => {
        const projectNameDiv = document.createElement('div');
        projectNameDiv.textContent = `${project.name}`;
        projectNameDiv.classList.add('projectList');
        projectNameDiv.id = project;
        const taskListDiv = document.getElementById('taskList');

        tasks.forEach((task) => {
            if (task.project == project.name) {
                projectNameDiv.append(individualTask(task, project));
            }
        })
        taskListDiv.append(projectNameDiv);
    })

    document.getElementById('newTaskForm').classList.add('hidden');
}

function renderDueToday() {
    document.getElementById('taskList').textContent = '';
    const header = document.getElementById('currentProject');
    header.textContent = 'Projects Due Today:';

    const date = new Date();
    let year = format(date, 'yyyy');
    let month = format(date, 'MM');
    let day = format(date, 'dd')


}

export { addProject, renderProjectsSideBar, renderDisplay, renderAllProjects, renderDueToday }