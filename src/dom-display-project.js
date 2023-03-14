import elementFromHtml from './modal-form-build';
import projectManager from './project-manager';
import { buildTaskDomElement } from './dom-display-task';
import { buildEditInterface, deleteProject } from './edit-project';
import { utilityRemoveActiveClass } from './index';

const mainAreaContent = document.querySelector('.main-area-content');
const mainAreaTitle = document.querySelector('.main-area-title');

export function buildProjectDomElement(parent) {
  const projects = projectManager.returnProjects();
  const lastProjectAdded = projects[projects.length - 1];
  const projectTitle = lastProjectAdded.getTitle();
  const projectId = lastProjectAdded.id;
  

  const project = elementFromHtml(`
    <div class="project-container" data-id="${projectId}">
      <div class="project" data-id="${projectId}">
        <span class="hamburger">☰</span>
        <div>${projectTitle}</div>
        <span class="dots" data-id="${projectId}">&#x22EE
          <div class="pop-up" data-id="${projectId}">
            <div class="edit" data-id="${projectId}">Rename</div>
            <div class="delete" data-id="${projectId}">Delete</div>
          </div>
        </span>
      </div>
    </div>
  `);

  parent.appendChild(project);

  const projectContainer = project.querySelector('.project-container');
  projectContainer.addEventListener('click', () => {
    renderProjectTasks(lastProjectAdded);
    utilityRemoveActiveClass();
    projectContainer.classList.add('active');
  });

  const projectEdit = project.querySelector('.dots');
  const popUp = project.querySelector('.pop-up');
  const renameButton = project.querySelector('.edit');
  const deleteButton = project.querySelector('.delete');

  renameButton.addEventListener('click', buildEditInterface);
  deleteButton.addEventListener('click', deleteProject);
  projectEdit.addEventListener('click', () => popUp.classList.add('popping'));

  window.addEventListener('click', (e) => {
    if (e.target !== projectEdit) popUp.classList.remove('popping');
  });
}

export function renderProjectTasks(project) {
  const projectTasks = project.getTasks();
  const projectTitle = project.getTitle();
  mainAreaContent.innerHTML = '';

  mainAreaTitle.textContent = `Project: ${projectTitle}`;
  buildTaskDomElement(mainAreaContent, projectTasks);

  if (projectTasks.length === 0) {
    mainAreaContent.textContent =
      'This project appears empty. Add tasks to get started!';
  }
}
