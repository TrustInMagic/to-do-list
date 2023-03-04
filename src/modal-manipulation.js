import { taskForm, projectForm } from './modal-form-build';
import { dataFromForms } from './data-manipulation';
export { popModal, closeModal };

function toggleBlur() {
  const modal = document.querySelector('.add-new-modal');
  const header = document.querySelector('.header');
  const content = document.querySelector('.content');
  //check if 'popping' class in modal; means we are opening modal
  if (modal.getAttribute('class').includes('popping')) {
    header.style.cssText = 'filter: blur(3px)';
    content.style.cssText = 'filter: blur(3px)';
  } else {
    header.style.cssText = 'filter: blur(0px)';
    content.style.cssText = 'filter: blur(0px)';
  }
}

function popModal() {
  const modal = document.querySelector('.add-new-modal');
  const form = document.querySelector('form');
  modal.classList.add('popping');
  modal.style.cssText = 'transform: scale(1)';
  toggleBlur();
  form.innerHTML = '';
  form.appendChild(taskForm);
  taskSubmit();
}

function closeModal() {
  const modal = document.querySelector('.add-new-modal');
  modal.classList.remove('popping');
  modal.style.cssText = 'transform: scale(0)';
  toggleBlur();
}

(function switchToTask() {
  const taskButton = document.querySelector('.modal-nav .task');
  const form = document.querySelector('form');
  taskButton.addEventListener('click', () => {
    form.innerHTML = '';
    form.appendChild(taskForm);
  });
})();

(function switchToProject() {
  const projectButton = document.querySelector('.modal-nav .project');
  const form = document.querySelector('form');
  projectButton.addEventListener('click', () => {
    form.innerHTML = '';
    form.appendChild(projectForm);
  });
})();

function taskSubmit() {
  const taskSubmitButton = document.querySelector('form .task');
  taskSubmitButton.removeEventListener('click', dataFromForms);
  taskSubmitButton.addEventListener('click', dataFromForms);
}
