import { popModal, closeModal } from './modal-manipulation';
import { buildProjectDomElement } from './dom-display-project';
import { buildLocalStorageNewUser } from './local-storage';
import {
  displayAllTasks,
  displayImportantTasks,
  displayTodayTasks,
  displayWeekTasks,
} from './nav-utility';
import './style.css';
import './assets/logo-icon.png';
import './assets/7-days.png';
import './assets/important-star.svg';
import './assets/modal-project.png';
import './assets/modal-task.png';
import './assets/page-icon.png';
import './assets/tasks.png';
import './assets/today.png';
import './assets/white-flag-svg.svg';

const addButton = document.querySelector('.add-new');
const closeModalButton = document.querySelector('.modal-header .close');
const projectsArea = document.querySelector('.projects-area');
const allTasks = document.querySelector('.tasks');
const today = document.querySelector('.today');
const nextWeek = document.querySelector('.seven-days');
const important = document.querySelector('.important');

addButton.addEventListener('click', () => popModal());
closeModalButton.addEventListener('click', () => closeModal());

export function utilityRemoveActiveClass() {
  const allElements = document.querySelectorAll('div');
  allElements.forEach((element) => element.classList.remove('active'));
}

allTasks.addEventListener('click', () => {
  displayAllTasks();
  utilityRemoveActiveClass();
  allTasks.classList.add('active');
});

today.addEventListener('click', () => {
  displayTodayTasks();
  utilityRemoveActiveClass();
  today.classList.add('active');
});

nextWeek.addEventListener('click', () => {
  displayWeekTasks();
  utilityRemoveActiveClass();
  nextWeek.classList.add('active');
});

important.addEventListener('click', () => {
  displayImportantTasks();
  utilityRemoveActiveClass();
  important.classList.add('active');
});

buildLocalStorageNewUser();
buildProjectDomElement(projectsArea);
displayAllTasks();
