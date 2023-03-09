import { popModal, closeModal } from './modal-manipulation';
import { buildProjectDomElement } from './dom-display-project';
import {
  displayAllTasks,
  displayImportantTasks,
  displayTodayTasks,
  displayWeekTasks,
} from './nav-behaviour';

const addButton = document.querySelector('.add-new');
const closeModalButton = document.querySelector('.modal-header .close');
const projectsArea = document.querySelector('.projects-area');
const allTasks = document.querySelector('.tasks');
const today = document.querySelector('.today');
const nextWeek = document.querySelector('.seven-days');
const important = document.querySelector('.important');

addButton.addEventListener('click', () => popModal());
closeModalButton.addEventListener('click', () => closeModal());
allTasks.addEventListener('click', () => displayAllTasks());
today.addEventListener('click', () => displayTodayTasks());
nextWeek.addEventListener('click', () => displayWeekTasks());
important.addEventListener('click', () => displayImportantTasks());

buildProjectDomElement(projectsArea);
displayAllTasks();
