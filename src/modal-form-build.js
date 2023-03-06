function elementFromHtml(html) {
  const container = document.createElement('div');
  container.innerHTML = html.trim();
  return container;
}

const taskForm = elementFromHtml(`
  <input type="text" id="title" placeholder="Title: Pay bills" required/>
  <div class="dropdown">
    <label for="project">Project to assign to: </label>
    <select name="" id="project"></select>
  </div>
  <textarea cols="30" rows="10" placeholder="Details: e.g internet, phone, rent."></textarea>
  <div class="date-container">
    <label for="date">Due Date:</label>
    <div class="date"><input type="date" id="date" /></div>
  </div>
  <div class="priority-radio">
    <span>Priority:</span>
    <label for="low">Low</label>
    <input type="radio" name="priority" value="low" id="low"/>
    <label for="medium">Medium</label>
    <input type="radio" name="priority" value="medium" id="medium"/>
    <label for="high">High</label>
    <input type="radio" name="priority" value="high" id="high"/>
    <button type="submit" class="task">Add Task</button>
  </div>
`);

const projectForm = elementFromHtml(`
  <input class="title" type="text" placeholder="Title: House Renovation" required>
  <button type="submit">Create Project</button>
`);

export { taskForm, projectForm };
