import elementFromHtml from './modal-form-build';
import projectManager from './project-manager';
import { buildTaskDomElement } from './dom-display-task';
import { buildEditInterface, deleteProject } from './edit-project';

const mainAreaContent = document.querySelector('.main-area-content');
const mainAreaTitle = document.querySelector('.main-area-title');

export function buildProjectDomElement(parent) {
  const projects = projectManager.returnProjects();
  const lastProjectAdded = projects[projects.length - 1];
  const projectTitle = lastProjectAdded.getTitle();
  const projectIndex = projects.indexOf(lastProjectAdded);

  const project = elementFromHtml(`
    <div class="project-container project-container-${projectIndex}">
      <div class="project project-${projectIndex}">
        <span class="hamburger">☰</span>
        <div>${projectTitle}</div>
        <span class="dots dots-${projectIndex}">&#x22EE</span>
      </div>
      <div class="pop-up pop-up-${projectIndex}">
        <div class="edit edit-${projectIndex}">Rename</div>
        <div class="delete delete-${projectIndex}">Delete</div>
      </div>
    </div>
  `);

  parent.appendChild(project);
  project.addEventListener('click', () => renderProjectTasks(lastProjectAdded));

  const projectEdit = document.querySelector(`.dots-${projectIndex}`);
  const popUp = document.querySelector(`.pop-up-${projectIndex}`);
  const renameButton = document.querySelector(`.edit-${projectIndex}`);
  const deleteButton = document.querySelector(`.delete-${projectIndex}`);

  renameButton.addEventListener('click', (e) => buildEditInterface(e));
  deleteButton.addEventListener('click', (e) => deleteProject(e))
  projectEdit.addEventListener('click', () => popUp.classList.add('popping'));

  window.addEventListener('click', (e) => {
    if (e.target !== projectEdit) popUp.classList.remove('popping');
  });
}

function renderProjectTasks(project) {
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
