class Task {
    constructor(project, description, dueDate, priority) {
        this.project = project;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.status = 'incomplete';
        this.index = null;
    }
}

class Project {
    constructor(name, index) {
        this.name = name;
        this.index = index;
    }
}

export {Task, Project}