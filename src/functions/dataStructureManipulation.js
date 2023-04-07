import Task from '../classes/task'
import Project from '../classes/project';
import {tasks, projects} from '../index';
import {renderProjectsSideBar, renderDisplay, individualTask, renderAllProjects, renderDueToday} from './DOMmanipulation'

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

export {addProject, addTask, updateTasks}