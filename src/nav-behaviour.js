const mainAreaTitle = document.querySelector('.main-area-title')

export function displayAllTasks() {
  mainAreaTitle.textContent = 'All Tasks'
}

export function displayTodayTasks() {
  mainAreaTitle.textContent = 'Today';
}

export function displayWeekTasks() {
  mainAreaTitle.textContent = 'Next 7 Days';
}

export function displayImportantTasks() {
  mainAreaTitle.textContent = 'Important';
}
