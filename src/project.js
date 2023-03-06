export default class Project {
  constructor(title) {
    this.title = title;
    this.tasks = [];
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
}
