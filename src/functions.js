import {projects, tasks} from './index';
import {Project, Task} from './classes';


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
        renderProjects();
    }
    document.getElementById('newProjectForm').reset();
}

function renderProjects() {
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
            renderProjects();
            if (document.getElementById('currentProject').classList.contains(project.name)) {
                renderDisplay(projects[0].name);
            }
            //showAll();
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
}

export {addProject, renderProjects, renderDisplay}