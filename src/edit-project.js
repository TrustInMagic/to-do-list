import elementFromHtml from './modal-form-build';
import projectManager from './project-manager';
import populateMainArea from './populate-main-area';

export function buildEditInterface(e) {
  const clickedProjectUniqueClass = e.target.classList[1];
  const clickedProjectIndex =
    clickedProjectUniqueClass[clickedProjectUniqueClass.length - 1];
  const allProjects = projectManager.returnProjects();
  const projectToEdit = allProjects[clickedProjectIndex];
  const projectTitle = projectToEdit.getTitle();
  const body = document.querySelector('body');

  const editProjectModal = elementFromHtml(`
    <div class="add-new-modal project-edit-modal-${clickedProjectIndex}">
      <div class="modal-header">
        <h3>Edit Project</h3>
        <div class="close close-edit-project-${clickedProjectIndex}">&#x2715</div>
      </div>
      <div class="modal-content">
        <div class="modal-nav">
          <div class="project">
            <img src="../src/assets/modal-project.png">
            <div>Project</div>
          </div>
        </div>
        <form action="" class="project-edit-form-${clickedProjectIndex}">
          <div>
            <input class="title edit-title-${clickedProjectIndex}" type="text" value="${projectTitle}" required>
            <button type="submit" class="project-submit">
            Edit Project</button>
          </div>
        </form>
      </div>
    </div>
  `);

  body.appendChild(editProjectModal);
  const projectEditModal = editProjectModal.querySelector(
    `.project-edit-modal-${clickedProjectIndex}`
  );
  const closeButton = editProjectModal.querySelector(
    `.close-edit-project-${clickedProjectIndex}`
  );
  const submitForm = editProjectModal.querySelector(
    `.project-edit-form-${clickedProjectIndex}`
  );
  const editedTitleInput = editProjectModal.querySelector(
    `.edit-title-${clickedProjectIndex}`
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
    //edit project in DOM
    editProjectNameFromDom(clickedProjectIndex, editedTitle);

    projectEditModal.style.cssText = 'transform: scale(0)';
  });
}

export function deleteProject(e) {
  const clickedProjectUniqueClass = e.target.classList[1];
  const clickedProjectIndex =
    clickedProjectUniqueClass[clickedProjectUniqueClass.length - 1];
  const allProjects = projectManager.returnProjects();
  const projectToDelete = allProjects[clickedProjectIndex];

  //remove project from business logic
  projectManager.removeProject(projectToDelete)
  //remove project from DOM
  removeProjectFromDom(clickedProjectIndex)
  console.log(allProjects)

  populateMainArea()
}

function editProjectNameFromDom(index, editValue) {
  const projectDomElement = document.querySelector(`.project-${index} > div`);
  projectDomElement.textContent = editValue;
}

function removeProjectFromDom(index) {
  const projectDomElement = document.querySelector(`.project-container-${index} > div`);
  projectDomElement.remove()
}