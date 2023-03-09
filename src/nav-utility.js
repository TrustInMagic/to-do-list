import { buildTaskDomElement } from './dom-display-task';
import projectManager from './project-manager';
import isToday from 'date-fns/isToday'


const mainAreaTitle = document.querySelector('.main-area-title');
const mainAreaContent = document.querySelector('.main-area-content');

export function displayAllTasks() {
  mainAreaContent.innerHTML = '';
  mainAreaTitle.textContent = 'All Tasks';

  const allTasks = [];
  const projects = projectManager.returnProjects();
  
  projects.forEach((project) => {
    allTasks.push(...project.getTasks());
  });

  buildTaskDomElement(mainAreaContent, allTasks);
}

export function displayTodayTasks() {
  mainAreaContent.innerHTML = '';
  mainAreaTitle.textContent = 'Today';

  const todayTasks = [];


}

export function displayWeekTasks() {
  mainAreaTitle.textContent = 'Next 7 Days';
}

export function displayImportantTasks() {
  mainAreaTitle.textContent = 'Important';
}
