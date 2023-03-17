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

        for (const project of projects) {
            const projectDiv = document.createElement('div');
            projectDiv.classList.add('project Div');

            const projectButton = document.createElement('button');
            projectButton.type = 'button';
            projectButton.textContent = project.name;
            projectButton.id = project;

            projectButton.addEventListener('click', () => {
                //renderDisplay(project.name)
            });
            projectDiv.appendChild(projectButton);

            const deleteProjectButton = document.createElement('button');
            deleteProjectButton.type = 'button';
            deleteProjectButton.textContent = 'Delete Project';
            deleteProjectButton.addEventListener('click', () => {
                projects.splice(project.index, 1);
                //renderProjects();
            })
        }
    }
    document.getElementById('newProjectForm').reset();
}

export {addProject}