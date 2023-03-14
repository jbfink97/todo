import {Task, Project} from './classes';
import {tasks, projects} from './index';

export default function initialPage() {
    const content = document.getElementById('content');

    const heading = document.createElement('div');
    heading.id = 'heading';
    heading.textContent = 'To Do List!';
    content.appendChild(heading);

    const main = document.createElement('div');
    main.id = 'main';
    content.appendChild(main);

    const sidebar = document.createElement('div');
    sidebar.id = 'sidebar';
    main.appendChild(sidebar);

    const projectList = document.createElement('div');
    projectList.id = 'projectList';

    const projectDisplay = document.createElement('div');
    projectDisplay.id = 'projectDisplay';
    main.appendChild(projectDisplay);

    const newProjectDiv = document.createElement('form');
    newProjectDiv.id = 'newProjectDiv';
    const projectLabel = document.createElement('label');
    projectLabel.htmlFor = 'newProjectInput';
    projectLabel.textContent = 'Add a new project';
    
    const input = document.createElement('input');
    input.id = 'newProjectInput';
    input.placeholder = 'New project name';

    const newProjectBtn = document.createElement('button');
    newProjectBtn.type = 'submit'; ///might need to change this to button. be sure to add prevent default
    newProjectBtn.textContent = 'Add';
    newProjectBtn.htmlFor = 'newProjectInput';
    // newProjectBtn.addEventListener('click', )
    newProjectDiv.append(projectLabel, input, newProjectBtn);
    sidebar.append(newProjectDiv);

    const defaultProjectDiv = document.createElement('div');
    defaultProjectDiv.classList.add('projectDiv');

    const defaultProjectBtn = document.createElement('button');
    defaultProjectBtn.type = 'button';
    defaultProjectBtn.textContent = 'Default';
    defaultProjectBtn.id = 'Default';
    const defaultProject = new Project('Default', 0);
    projects.push(defaultProject);
    //defaultProjectBtn.addEventListener('click', )

    const deleteDefaultProjectBtn = document.createElement('button');
    deleteDefaultProjectBtn.type = 'button';
    deleteDefaultProjectBtn.textContent = 'Delete Project';
    //deleteDefaultProjectBtn.addEventListener('click',)

    defaultProjectDiv.append(defaultProjectBtn, deleteDefaultProjectBtn);
    projectList.append(defaultProjectDiv);

    const showAllBtn = document.createElement('button');
    showAllBtn.type = 'button';
    showAllBtn.textContent = 'Show All Projects';
    //showAllBtn.addEventListener('click',)

    sidebar.append(projectList, showAllBtn);

}