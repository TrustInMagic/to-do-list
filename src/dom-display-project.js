import elementFromHtml from './modal-form-build';
import projectManager from './project-manager';

export function buildProjectDomElement(parent) {
  const projects = projectManager.returnProjects();
  const lastProjectAdded = projects[projects.length - 1];
  const projectTitle = lastProjectAdded.getTitle();

  const project = elementFromHtml(`
    <div class="project"><span class="hamburger">☰</span>${projectTitle}
    <span class="dots">&#x22EE</span></div>
  `);

  project.addEventListener('click', () => renderProject());
  parent.appendChild(project);
}

function renderProject() {}
