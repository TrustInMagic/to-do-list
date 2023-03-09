import elementFromHtml from './modal-form-build';

export function buildTaskDomElement(parent, tasks) {
  for (let i = 0; i < tasks.length; i++) {
    const taskTitle = tasks[i].title;
    const taskDetails = tasks[i].description;
    const taskDueDate = tasks[i].date;
    const taskPriority = tasks[i].priority;
    let flagColor;

    let taskElement = elementFromHtml(`
    <div class="task-body">
      <input type="checkbox" class="task-check">
      <span class="task-title">${taskTitle}</span>
     <div class="task-due-date">${taskDueDate}</div>
     <div class="flag-container${i}"></div>
     <div class="task-dots">&#x22EE</div>
    </div>
  `);
    
    switch (taskPriority) {
      case 'low':
        flagColor = 'blue'
        break;
      case 'medium':
        flagColor = 'orange'
        break
      case 'high':
        flagColor = 'red'
    }
    
    let flag = elementFromHtml(`
    <?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
      <svg width="22px" height="22px" viewBox="0 0 24 24" fill="${flagColor}" xmlns="http://www.w3.org/2000/svg">
      <path opacity="0.15" d="M4 4H20L15 9L20 14H4V4Z"/>
      <path d="M4 21V14M4 14V4H20L15 9L20 14H4Z" stroke="${flagColor}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `);
    
        
    parent.appendChild(taskElement)
    const flagContainer = document.querySelector(`.flag-container${i}`)
    flagContainer.appendChild(flag)
  }
}
