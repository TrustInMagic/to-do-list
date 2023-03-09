import { popModal, closeModal } from './modal-manipulation';
import { buildProjectDomElement } from './dom-display-project';
import {
  displayAllTasks,
  displayImportantTasks,
  displayTodayTasks,
  displayWeekTasks,
} from './nav-utility';

const addButton = document.querySelector('.add-new');
const closeModalButton = document.querySelector('.modal-header .close');
const projectsArea = document.querySelector('.projects-area');
const allTasks = document.querySelector('.tasks');
const today = document.querySelector('.today');
const nextWeek = document.querySelector('.seven-days');
const important = document.querySelector('.important');
const navButtons = document.querySelectorAll('.home > div');

addButton.addEventListener('click', () => popModal());
closeModalButton.addEventListener('click', () => closeModal());

allTasks.addEventListener('click', () => {
  displayAllTasks();
  navButtons.forEach((button) => {
    if (button.classList.contains('tasks')) {
      button.classList.add('active');
    } else button.classList.remove('active');
  });
});

today.addEventListener('click', () => {
  displayTodayTasks();
  navButtons.forEach((button) => {
    if (button.classList.contains('today')) {
      button.classList.add('active');
    } else button.classList.remove('active');
  });
});

nextWeek.addEventListener('click', () => {
  displayWeekTasks();
  navButtons.forEach((button) => {
    if (button.classList.contains('seven-days')) {
      button.classList.add('active');
    } else button.classList.remove('active');
  });
});

important.addEventListener('click', () => {
  displayImportantTasks();
  navButtons.forEach((button) => {
    if (button.classList.contains('important')) {
      button.classList.add('active');
    } else button.classList.remove('active');
  });
});

buildProjectDomElement(projectsArea);
displayAllTasks();
