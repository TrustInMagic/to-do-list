export default class Project {
  constructor(title) {
    this.title = title;
    this.tasks = [];
    this.generateId();
  }

  addTask(task) {
    this.tasks.push(task)
  }

  changeTitle(value) {
    this.title = value
  }

  getTitle() {
    return this.title
  }

  getTasks() {
    return this.tasks
  }

  generateId() {
    this.id = `prj-id${Math.random().toString(16).slice(2)}`
  }

  removeCompletedTasks() {
    for (let i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i].completionStatus === true) {
        this.tasks.splice(i, 1)
      }
    }
  }
}
