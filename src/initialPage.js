import sidebarInfo from "./sidebarinfo";

export default function initialPage() {

    // Select content div to elements to and create header
    const content = document.getElementById('content');
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

    // Adding info to sidebar
    const all = sidebarInfo('all', 'All items');
    sidebar.appendChild(all);

    const today = sidebarInfo('today', 'Due today');
    sidebar.appendChild(today);

    const thisWeek = sidebarInfo('thisWeek', 'Items due within a week');
    sidebar.appendChild(thisWeek);


}