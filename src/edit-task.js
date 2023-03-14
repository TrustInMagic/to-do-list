import projectManager from './project-manager';
import elementFromHtml from './modal-form-build';
import populateMainArea from './populate-main-area';

export function buildTaskEditInterface(e) {
  const clickedTaskId = e.target.getAttribute('data-id')
  const allTasks = projectManager.returnAllTasks();
  let taskToEdit
  for (let task of allTasks) {
    if (task.id === clickedTaskId) taskToEdit = task
  }

  const body = document.querySelector('body');
  const taskTitle = taskToEdit.title;
  const taskDetails = taskToEdit.description;
  const taskDate = taskToEdit.date;

  const editTaskModal = elementFromHtml(`
    <div class="add-new-modal task-edit-modal-${clickedTaskId}">
      <div class="modal-header">
        <h3>Edit Task</h3>
        <div class="close close-edit-task-${clickedTaskId}">&#x2715</div>
      </div>
      <div class="modal-content">
        <div class="modal-nav">
          <div class="task">
            <img src="../src/assets/modal-task.png">
            <div>Task</div>
          </div>
        </div>
        <form action="" class="task-edit-form-${clickedTaskId}">
          <div>
            <input type="text" id="title" placeholder="Title: Pay bills"
            class="edit-title-${clickedTaskId}" value="${taskTitle}" required/>
            <textarea cols="30" rows="10" placeholder="Details: e.g internet, phone, rent."
            class="edit-details-${clickedTaskId}">${taskDetails}</textarea>
            <div class="date-container">
              <label for="date">Due Date:</label>
              <div class="date"><input type="date" id="date"
              class="edit-date-${clickedTaskId}" value="${taskDate}"/>
              </div>
            </div>
            <div class="priority-radio">
              <span>Priority:</span>
              <label for="low">Low</label>
              <input type="radio" name="priority" value="low" id="low" checked/>
              <label for="medium">Medium</label>
              <input type="radio" name="priority" value="medium" id="medium"/>
              <label for="high">High</label>
              <input type="radio" name="priority" value="high" id="high"/>
              <button type="submit" class="task task-submit">Edit Task</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  `);

  body.appendChild(editTaskModal);

  (function addTaskPriority() {
    const taskPriority = taskToEdit.priority;
    const radioButtons = editTaskModal.querySelectorAll('input[type="radio"]');
    const lowRadioButton = editTaskModal.querySelector('input[id="low"]');
    const mediumRadioButton = editTaskModal.querySelector('input[id="medium"]');
    const highRadioButton = editTaskModal.querySelector('input[id="high"]');

    radioButtons.forEach((button) => button.removeAttribute('checked'));

    switch (taskPriority) {
      case 'low':
        lowRadioButton.setAttribute('checked', '');
        break;
      case 'medium':
        mediumRadioButton.setAttribute('checked', '');
        break;
      case 'high':
        highRadioButton.setAttribute('checked', '');
        break;
    }
  })();

  const taskEditModal = editTaskModal.querySelector(
    `.task-edit-modal-${clickedTaskId}`
  );
  const closeButton = editTaskModal.querySelector(
    `.close-edit-task-${clickedTaskId}`
  );
  const submitForm = editTaskModal.querySelector(
    `.task-edit-form-${clickedTaskId}`
  );
  const editedTitleInput = editTaskModal.querySelector(
    `.edit-title-${clickedTaskId}`
  );
  const editedDetailsInput = editTaskModal.querySelector(
    `.edit-title-${clickedTaskId}`
  );
  const editedDateInput = editTaskModal.querySelector(`
  .edit-date-${clickedTaskId}`);

  taskEditModal.style.cssText = 'transform: scale(1)';
  closeButton.addEventListener('click', () => {
    taskEditModal.style.cssText = 'transform: scale(0)';
  });

  submitForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // edit task in business logic
    const editedTitle = editedTitleInput.value;
    const editedDetails = editedDetailsInput.value;
    const editedDate = editedDateInput.value;
    const radioButtons = editTaskModal.querySelectorAll('input[type="radio"]');

    taskToEdit.changeTitle(editedTitle);
    taskToEdit.addDetails(editedDetails);
    taskToEdit.addDueDate(editedDate);
    radioButtons.forEach((button) => {
      if (button.checked) taskToEdit.priority = button.value;
    });
    //edit project in DOM
    populateMainArea();

    taskEditModal.style.cssText = 'transform: scale(0)';
  });
}

export function deleteTask(e) {
  const clickedTaskId = e.target.getAttribute('data-id');
  const allTasks = projectManager.returnAllTasks();
  let taskToDelete;
  for (let task of allTasks) {
    if (task.id === clickedTaskId) taskToDelete = task;
  }
  //remove project from business logic
  taskToDelete.completionStatus = true;
  const allProjects = projectManager.returnProjects();
  allProjects.forEach((project) => project.removeCompletedTasks())  
  //remove project from DOM
  populateMainArea();
}