import { buildTaskDomElement } from './dom-display-task';
import projectManager from './project-manager';
import isToday from 'date-fns/isToday';
import addDays from 'date-fns/addDays';
import isBefore from 'date-fns/isBefore';

const mainAreaTitle = document.querySelector('.main-area-title');
const mainAreaContent = document.querySelector('.main-area-content');

function returnAllTasks() {
  const allTasks = [];
  const projects = projectManager.returnProjects();

  projects.forEach((project) => {
    allTasks.push(...project.getTasks());
  });

  return allTasks;
}

function handleNoTasks(taskList) {
  if (taskList.length === 0) {
    mainAreaContent.textContent = 'Yay! No Tasks!';
  }
}

export function displayAllTasks() {
  mainAreaContent.innerHTML = '';
  mainAreaTitle.textContent = 'All Tasks';

  buildTaskDomElement(mainAreaContent, returnAllTasks());
  handleNoTasks(returnAllTasks());
}

export function displayTodayTasks() {
  mainAreaContent.innerHTML = '';
  mainAreaTitle.textContent = 'Today';

  const allTasks = returnAllTasks();
  let todayTasks = [];

  allTasks.forEach((task) => {
    const taskDate = new Date(task.date);
    if (isToday(taskDate)) todayTasks.push(task);
  });

  buildTaskDomElement(mainAreaContent, todayTasks);
  handleNoTasks(todayTasks)
}

export function displayWeekTasks() {
  mainAreaContent.innerHTML = '';
  mainAreaTitle.textContent = 'Next 7 Days';

  const allTasks = returnAllTasks();
  let sevenDaysTasks = [];

  allTasks.forEach((task) => {
    const todayDate = new Date();
    const taskDate = new Date(task.date);
    const oneWeekLaterDate = addDays(todayDate, 7);
    if (isBefore(taskDate, oneWeekLaterDate)) sevenDaysTasks.push(task);
  });

  buildTaskDomElement(mainAreaContent, sevenDaysTasks);
  handleNoTasks(sevenDaysTasks)
}

export function displayImportantTasks() {
  mainAreaContent.innerHTML = '';
  mainAreaTitle.textContent = 'Important';

  const allTasks = returnAllTasks();
  let importantTasks = [];

  allTasks.forEach((task) => {
    if (task.priority === 'high') {
      importantTasks.push(task);
    }
  });

  buildTaskDomElement(mainAreaContent, importantTasks);
  handleNoTasks(importantTasks)
}
