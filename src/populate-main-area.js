import {
  displayAllTasks,
  displayImportantTasks,
  displayTodayTasks,
  displayWeekTasks,
} from './nav-utility';
import { renderProjectTasks } from './dom-display-project';
import projectManager from './project-manager';

// using this to help populate the main area with the adequate filtered content
export default function populateMainArea() {
  const navSections = document.querySelectorAll('.home > div');
  const projectDomElements = document.querySelectorAll(
    '.projects-area > div > div'
  );
  const functionToRunDictionary = {
    'tasks active': displayAllTasks,
    'today active': displayTodayTasks,
    'seven-days active': displayWeekTasks,
    'important active': displayImportantTasks,
  };

  for (let section of navSections) {
    if (section.classList.contains('active')) {
      const classList = section.getAttribute('class');
      functionToRunDictionary[classList]();
      break;
    }
  }

  for (let project of projectDomElements) {
    if (project.classList.contains('active')) {
      const projectID = project.getAttribute('data-id');
      const allProjects = projectManager.returnProjects();
      let projectToDisplay;
      for (let project of allProjects) {
        if (project.id === projectID) projectToDisplay = project;
      }
      renderProjectTasks(projectToDisplay);
      break;
    }
  }

  //if no nav button or project is selected, switch to All Tasks 'tab'
  displayAllTasks();
}
