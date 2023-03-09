import elementFromHtml from './modal-form-build';
import projectManager from './project-manager';
import { buildTaskDomElement } from './dom-display-task';

const mainAreaContent = document.querySelector('.main-area-content');

export function buildProjectDomElement(parent) {
  const projects = projectManager.returnProjects();
  const lastProjectAdded = projects[projects.length - 1];
  const projectTitle = lastProjectAdded.getTitle();

  const project = elementFromHtml(`
    <div class="project-container">
      <div class="project"><span class="hamburger">☰</span>${projectTitle}
      <span class="dots">&#x22EE</span></div>
      <div class="pop-up">
        <div class="edit">Rename</div>
        <div class="delete">Delete</div>
      </div>
    </div>
  `);

  project.addEventListener('click', () => renderProject(lastProjectAdded));
  parent.appendChild(project);

  const projectEdit = document.querySelector('.dots');
  const popUp = document.querySelector('.pop-up')

  projectEdit.addEventListener('click', () => {
    console.log(popUp)
    popUp.classList.toggle('popping')
  });
}

function renderProject(project) {
  mainAreaContent.innerHTML = '';
  const projectTasks = project.getTasks();
  buildTaskDomElement(mainAreaContent, projectTasks);
}
