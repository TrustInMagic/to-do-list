import elementFromHtml from './modal-form-build';
import projectManager from './project-manager';
import { displayAllTasks } from './nav-utility';
import { buildConfirmDeleteProjectPopUp } from './build-pop-ups';
import { updateLocalStorage } from './local-storage';

export function buildEditInterface(e) {
  const clickedProjectId = e.target.getAttribute('data-id');
  const allProjects = projectManager.returnProjects();

  let projectToEdit;
  for (let project of allProjects) {
    if (project.id === clickedProjectId) projectToEdit = project;
  }

  const projectTitle = projectToEdit.getTitle();
  const body = document.querySelector('body');

  const editProjectModal = elementFromHtml(`
    <div class="add-new-modal project-edit-modal-${clickedProjectId}">
      <div class="modal-header">
        <h3>Edit Project</h3>
        <div class="close close-edit-project-${clickedProjectId}">&#x2715</div>
      </div>
      <div class="modal-content">
        <div class="modal-nav">
          <div class="project">
            <img src="../src/assets/modal-project.png">
            <div>Project</div>
          </div>
        </div>
        <form action="" class="project-edit-form-${clickedProjectId}">
          <div>
            <input class="title edit-title-${clickedProjectId}" type="text" value="${projectTitle}" required>
            <button type="submit" class="project-submit">
            Edit Project</button>
          </div>
        </form>
      </div>
    </div>
  `);

  body.appendChild(editProjectModal);
  const projectEditModal = editProjectModal.querySelector(
    `.project-edit-modal-${clickedProjectId}`
  );
  const closeButton = editProjectModal.querySelector(
    `.close-edit-project-${clickedProjectId}`
  );
  const submitForm = editProjectModal.querySelector(
    `.project-edit-form-${clickedProjectId}`
  );
  const editedTitleInput = editProjectModal.querySelector(
    `.edit-title-${clickedProjectId}`
  );

  projectEditModal.style.cssText = 'transform: scale(1)';

  closeButton.addEventListener('click', () => {
    projectEditModal.style.cssText = 'transform: scale(0)';
  });

  submitForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // edit project in business logic
    const editedTitle = editedTitleInput.value;
    projectToEdit.changeTitle(editedTitle);
    updateLocalStorage(allProjects)
    //edit project in DOM
    editProjectNameFromDom(clickedProjectId, editedTitle);

    projectEditModal.style.cssText = 'transform: scale(0)';
  });
}

export function deleteProject(e) {
  e.stopPropagation();
  const clickedProjectId = e.target.getAttribute('data-id');
  const allProjects = projectManager.returnProjects();

  buildConfirmDeleteProjectPopUp();
  const deleteButton = document.querySelector('.pop-up-delete');
  const projectName = document.querySelector('.project-name');

  let projectToDelete;
  for (let project of allProjects) {
    if (project.id === clickedProjectId) projectToDelete = project;
  }

  projectName.textContent = `${projectToDelete.getTitle()}`
  deleteButton.addEventListener('click', removeProjectAfterConfirm);

  function removeProjectAfterConfirm() {
    //remove project from business logic
    projectManager.removeProject(projectToDelete);
    //remove project from DOM
    removeProjectFromDom(clickedProjectId);
    displayAllTasks();
  }
}

function editProjectNameFromDom(id, editValue) {
  const projectDomElement = document.querySelector(
    `.project[data-id="${id}"] > div`
  );
  projectDomElement.textContent = editValue;
}

function removeProjectFromDom(id) {
  const projectDomElement = document.querySelector(
    `.project-container[data-id="${id}"]`
  );
  projectDomElement.remove();
}
