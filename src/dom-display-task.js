import elementFromHtml from './modal-form-build';
import { buildTaskEditInterface, deleteTask } from './edit-task';

export function buildTaskDomElement(parent, tasks) {
  for (let i = 0; i < tasks.length; i++) {
    const taskTitle = tasks[i].title;
    const taskDetails = tasks[i].description;
    const taskDueDate = tasks[i].date;
    const taskPriority = tasks[i].priority;
    let flagColor;

    let taskElement = elementFromHtml(`
    <div class="task-body task-body-${i}">
      <input type="checkbox" class="task-check task-check-${i}">
      <span class="task-title task-title-${i}">${taskTitle}</span>
      <div class="task-details task-details-${i}">${taskDetails}</div>
      <div class="right-container">
        <div class="task-due-date task-due-date-${i}">${taskDueDate}</div>
        <div class="flag-container flag-container-${i}"></div>
        <div class="task-dots task-dots-${i}">&#x22EE
          <div class="pop-up task-pop-up-${i}">
            <div class="edit task-edit-${i}">Rename</div>
            <div class="delete task-delete-${i}">Delete</div>
          </div>
        </div>
      </div>
    </div>
  `);

    switch (taskPriority) {
      case 'low':
        flagColor = 'blue';
        break;
      case 'medium':
        flagColor = 'orange';
        break;
      case 'high':
        flagColor = 'red';
    }

    let flag = elementFromHtml(`
    <?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
      <svg width="22px" height="22px" viewBox="0 0 24 24" fill="${flagColor}" xmlns="http://www.w3.org/2000/svg">
      <path opacity="0.15" d="M4 4H20L15 9L20 14H4V4Z"/>
      <path d="M4 21V14M4 14V4H20L15 9L20 14H4Z" stroke="${flagColor}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `);

    parent.appendChild(taskElement);
    const flagContainer = taskElement.querySelector('.flag-container');
    const taskDomElement = taskElement.querySelector('.task-body');
    const detailsElement = taskElement.querySelector('.task-details');
    const editTask = taskElement.querySelector('.task-dots');
    const renameButton = taskElement.querySelector('.edit');
    const deleteButton = taskElement.querySelector('.delete');
    const popUp = taskElement.querySelector('.pop-up');

    renameButton.addEventListener('click', buildTaskEditInterface);
    deleteButton.addEventListener('click', deleteTask);
    editTask.addEventListener('click', () => popUp.classList.add('popping'));

    window.addEventListener('click', (e) => {
      if (e.target !== editTask) popUp.classList.remove('popping');
    });

    flagContainer.appendChild(flag);
    taskDomElement.addEventListener('click', () =>
      detailsElement.classList.toggle('show-details')
    );
  }
}
