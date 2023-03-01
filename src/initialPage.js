import sidebarInfo from "./sidebarinfo";

export default function initialPage() {

    // Select content div to elements to and create header
    const content = document.getElementById('content');

    // Placeholder Modal
    const modalDiv = document.createElement('div');

    const modalHeader = document.createElement('div');
    modalHeader.classList.add('modalHeader');
    const title = document.createElement('div');
    title.classList.add('title');
    title.textContent = 'Example Modal';
    modalHeader.appendChild(title);

    const closeButton = document.createElement('button');
    closeButton.classList.add('closeButton');
    closeButton.innerHTML = '&times;';
    modalHeader.appendChild(closeButton);

    modalDiv.appendChild(modalHeader);

    const modalBody = document.createElement('div');
    modalBody.classList.add('modalBody');

    const projectForm = document.createElement('form');

    const projectName = document.createElement('input');
    projectName.id = 'projectName';
    projectName.placeholder = 'Project Name';

    const taskName = document.createElement('input');
    taskName.id = 'taskName';
    taskName.placeholder = 'Task Name';
    projectForm.appendChild(projectName);
    projectForm.appendChild(taskName);
    modalBody.appendChild(projectForm);

    modalDiv.appendChild(modalBody);

    const heading = document.createElement('h1');
    heading.textContent = 'To Do List!';
    heading.id = 'heading';
    content.appendChild(heading);

    // Creating divs for main content, sidebar
    const main = document.createElement('div');
    main.id = 'main';
    content.appendChild(main);

    const sidebar = document.createElement('div');
    sidebar.id = 'sidebar';
    main.appendChild(sidebar);

    // Add button for new project
    const addNewBtn = document.createElement('button');
    addNewBtn.textContent = 'Add new project';
    sidebar.appendChild(addNewBtn);

    // Adding info to sidebar
    const all = sidebarInfo('all', 'All items');
    sidebar.appendChild(all);

    const today = sidebarInfo('today', 'Due today');
    sidebar.appendChild(today);

    const thisWeek = sidebarInfo('thisWeek', 'Items due within a week');
    sidebar.appendChild(thisWeek);

    const display = document.createElement('div');
    display.id = 'display';
    main.appendChild(display);
    display.appendChild(modalDiv);
}