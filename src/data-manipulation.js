import projectManager from './project-manager';
import Project from './project';
import Task from './task';
export { getDataFromForms };

function getDataFromForms(e) {
  e.preventDefault();
  //check if the form is associated with adding a task or a project
  if (e.target.getAttribute('class').includes('task')) {
    getDataFromTaskForm();
  } else getDataFromProjectForm();
}

function getDataFromTaskForm() {
  const taskTitleQuerier = document.querySelector('form #title');
  const projectToAssignQuerier = document.querySelector('form select');
  const detailsQuerier = document.querySelector('form textarea');
  const dueDateQuerier = document.querySelector('form #date');
  const priorityQuerier = document.querySelectorAll('form input[type="radio"]');

  const taskTitle = taskTitleQuerier.value;
  const projectToAssignTo = projectToAssignQuerier.value;
  const details = detailsQuerier.value;
  const dueDate = dueDateQuerier.value;
  let priority;

  priorityQuerier.forEach((radio) => {
    if (radio.checked) priority = radio.value;
  });

  const taskToAdd = new Task(taskTitle);
  taskToAdd.addDetails(details);
  taskToAdd.addDueDate(dueDate);
  taskToAdd.addPriority(priority);

  const projects = projectManager.returnProjects();
  projects.forEach((project) => {
    if (project.getTitle() === projectToAssignTo) {
      project.addTask(taskToAdd);
    }
  });

  // const projectos = projectManager.returnProjects();
  // projectos.forEach((project) => console.log(project.getTasks()));
}

function getDataFromProjectForm() {
  const projectTitleQuerier = document.querySelector('form .title');

  const projectTitle = projectTitleQuerier.value;

  const projectToAdd = new Project(projectTitle);
  projectManager.addProject(projectToAdd);
}
