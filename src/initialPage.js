import {Task, Project} from './classes';
import {tasks, projects} from './index';
import{addProject, renderProjectsSideBar, renderDisplay, renderAllProjects, renderDueToday} from './functions';

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

    const newProjectForm = document.createElement('form');
    newProjectForm.id = 'newProjectForm';
    const projectLabel = document.createElement('label');
    projectLabel.htmlFor = 'newProjectInput';
    projectLabel.textContent = 'Add a new project';
    
    const input = document.createElement('input');
    input.id = 'newProjectInput';
    input.placeholder = 'New project name';

    const newProjectBtn = document.createElement('button');
    newProjectBtn.type = 'button'; ///might need to change this to button. be sure to add prevent default
    newProjectBtn.textContent = 'Add';
    newProjectBtn.htmlFor = 'newProjectInput';
    newProjectBtn.addEventListener('click', addProject)
    newProjectForm.append(projectLabel, input, newProjectBtn);
    sidebar.append(newProjectForm);

    const defaultProject = new Project('Default', 0);
    projects.push(defaultProject);
    sidebar.append(projectList);

    const dueTodayBtn = document.createElement('button');
    dueTodayBtn.type = 'button';
    dueTodayBtn.textContent = 'Projects Due Today';
    dueTodayBtn.addEventListener('click', renderDueToday);

    const showAllBtn = document.createElement('button');
    showAllBtn.type = 'button';
    showAllBtn.textContent = 'Show All Projects';
    showAllBtn.addEventListener('click', renderAllProjects);

    sidebar.append(dueTodayBtn, showAllBtn);
    renderProjectsSideBar();
    renderDisplay(projects[0].name);


}