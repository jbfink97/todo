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

export default Task