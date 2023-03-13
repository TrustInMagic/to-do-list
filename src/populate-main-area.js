import {
  displayAllTasks,
  displayImportantTasks,
  displayTodayTasks,
  displayWeekTasks,
} from './nav-utility';
import { renderProjectTasks } from './dom-display-project';

// using this to help populate the main area with the adequate filtered content
export default function populateMainArea() {
  const navSections = document.querySelectorAll('.home > div');
  const projectDomElements = document.querySelector('.projects-area > div > div')
  const functionToRunDictionary = {
    'tasks active': displayAllTasks,
    'today active': displayTodayTasks,
    'seven-days active': displayWeekTasks,
    'important active': displayImportantTasks
  }

  for (let section of navSections) {
    if (section.classList.contains('active')) {
      const classList = section.getAttribute('class')
      functionToRunDictionary[classList]()
    }
  }

  console.log(projectDomElements)
}
