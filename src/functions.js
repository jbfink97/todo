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

    // dropdown
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

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit Task';
    const modal = document.querySelector('.modal');
    editBtn.addEventListener('click', () => {
        document.querySelector('.modal-header').textContent = '';
        document.querySelector('.modal-content').textContent = '';
        document.querySelector('.modal-footer').textContent = '';

        const exitBtn = document.createElement('span');
        exitBtn.innerHTML = '&times';
        exitBtn.className = 'close-btn';
        document.querySelector('.modal-header').append(exitBtn);

        modal.style.display = 'block';
        const modalHeader = document.createElement('h2');
        modalHeader.textContent = `Task: ${task.description}`;
        document.querySelector('.modal-header').append(modalHeader);

        const modalBody = document.querySelector('.modal-content');
        const form = document.createElement('form');
        form.id = 'editTask';
        const input = document.createElement('input');
        input.id = 'editDescription';
        input.value = task.description;
        const dateInput = document.createElement('input');
        dateInput.type = 'date';
        dateInput.id = 'editDate';
        dateInput.value = task.dueDate;
        form.append(input, dateInput);
        modalBody.append(form)

        const priorityLevels = ['high', 'medium', 'low'];
        const select = document.createElement('select');
        for (const level of priorityLevels) {
            const option = document.createElement('option');
            option.value = level;
            option.text = level.charAt(0).toUpperCase() + level.slice(1);
            select.appendChild(option);
        }
        select.id = 'editPriority';
        select.value = task.priority;
        form.append(select);

        const modalFooter = document.querySelector('.modal-footer');
        const changeBtn = document.createElement('button');
        changeBtn.type = 'button';
        changeBtn.htmlFor = 'editTask';
        changeBtn.textContent = 'Confirm Edit';
        modalFooter.append(changeBtn);
        changeBtn.addEventListener('click', () => {
            task.description = input.value;
            task.dueDate = dateInput.value;
            task.priority = select.value;
            modal.style.display = 'none';
            updateTasks();
            renderDisplay(task.project);
        })

        exitBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        })
        window.addEventListener('click', (d) => {
            if (d.target == modal) {
                modal.style.display = 'none';
            }
        })
    })


    const removeBtn = document.createElement('button');
    removeBtn.type = 'button';
    removeBtn.textContent = 'Remove task';
    removeBtn.addEventListener('click', () => {
        tasks.splice(task.index, 1);
        updateTasks();
        renderDisplay(task.project);
    })

    individualTaskDiv.append(descriptionDiv, dateDiv, priorityDiv, completedBtn, editBtn, removeBtn);
    return individualTaskDiv;

}

// need to add all projects and due today
function renderAllProjects() {
    document.getElementById('taskList').textContent = '';
    const header = document.getElementById('currentProject');
    header.className = '';
    header.textContent = 'All Projects:';

    projects.forEach((project) => {

        const projectDiv = document.createElement('div');
        const projectName = document.createElement('h2');
        projectName.textContent = `Project: ${project.name}`;
        projectDiv.classList.add('projectList');
        projectDiv.id = project;
        projectDiv.append(projectName);
        projectName.classList.add('projectName');


        // const projectNameDiv = document.createElement('div');
        // projectNameDiv.textContent = `${project.name}`;
        // projectNameDiv.classList.add('projectList');
        // projectNameDiv.id = project;
        const taskListDiv = document.getElementById('taskList');

        tasks.forEach((task) => {
            if (task.project == project.name) {
                projectDiv.append(individualTask(task, project));
            }
        })
        taskListDiv.append(projectDiv);
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
    const currentDate = `${year}-${month}-${day}`;
    let todaysProjects = [];

    tasks.forEach((task) => {
        if (task.dueDate === currentDate) {
            if (!todaysProjects.includes(task.project)) {
                todaysProjects.push(task.project);
            }
        }
    })

    todaysProjects.forEach((project) => {
        const projectDiv = document.createElement('div');
        const projectName = document.createElement('h2');
        projectName.textContent = `Project: ${project}`;
        projectDiv.classList.add('projectList');
        projectDiv.id = project;
        projectDiv.append(projectName);
        projectName.classList.add('projectName');
        tasks.forEach((task) => {
            if (task.project == project && task.dueDate == currentDate) {
                projectDiv.append(individualTask(task, project));
            }
        })
        document.getElementById('taskList').append(projectDiv);
    })
    document.getElementById('newTaskForm').classList.add('hidden');


}

export { addProject, renderProjectsSideBar, renderDisplay, renderAllProjects, renderDueToday }