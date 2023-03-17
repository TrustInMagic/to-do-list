import projectManager from './project-manager';
import Project from './project';
import Task from './task';
  
export function updateLocalStorage(db) {
  localStorage.setItem('db', JSON.stringify(db));
}

export function retrieveLocalStorage(db) {
  if (localStorage.length > 0) {
    const parsedLocalStorage = JSON.parse(localStorage.getItem(db));
    // adding back all of the methods of the Project class in it's prototype to each instance
    for (let project of parsedLocalStorage)
      Object.setPrototypeOf(project, Project.prototype);
    // adding back all of the methods of the Task class in it's prototype to each instance
    for (let project of parsedLocalStorage) {
      const allTasks = project.getTasks();
      allTasks.forEach((task) => Object.setPrototypeOf(task, Task.prototype));
    }
    return parsedLocalStorage;
  } else return [];
}

export function buildLocalStorageNewUser() {
  if (!localStorage.getItem('db')) {
    const defaultProject = new Project('Your First Project');
    projectManager.addProject(defaultProject);
  }
}