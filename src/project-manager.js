export default (function projectManager() {
  const projects = [];

  const addProject = (project) => {
    projects.push(project);
  };

  const removeProject = (project) => {
    for (let i = 0; i < projects.length; i++) {
      if (projects[i].title === project) {
        projects.splice(i, 1);
      }
    }
  };

  const returnProjects = () => projects;

  return { addProject, removeProject, returnProjects };
})();
