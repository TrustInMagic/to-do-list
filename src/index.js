import Task from './task';
import Project from './project';
import projectManager from './project-manager';
import { popModal, closeModal } from './modal-manipulation';

const addButton = document.querySelector('.add-new');
const closeModalButton = document.querySelector('.modal-header .close');

addButton.addEventListener('click', () => popModal());
closeModalButton.addEventListener('click', () => closeModal());

