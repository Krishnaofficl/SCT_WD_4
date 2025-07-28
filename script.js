const form = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskDate = document.getElementById('task-date');
const taskList = document.getElementById('task-list');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  addTask(taskInput.value, taskDate.value);
  taskInput.value = '';
  taskDate.value = '';
});

function addTask(text, datetime) {
  const li = document.createElement('li');

  const taskText = document.createElement('span');
  taskText.className = 'task-text';
  taskText.textContent = text;

  const small = document.createElement('small');
  if (datetime) {
    const date = new Date(datetime);
    small.textContent = date.toLocaleString();
  }

  const actions = document.createElement('div');
  actions.className = 'actions';

  const completeBtn = document.createElement('button');
  completeBtn.textContent = '✔';
  completeBtn.onclick = () => {
    taskText.classList.toggle('done');
  };

  const editBtn = document.createElement('button');
  editBtn.textContent = '✏';
  editBtn.onclick = () => {
    const newText = prompt('Edit task:', taskText.textContent);
    if (newText) taskText.textContent = newText;
  };

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '🗑';
  deleteBtn.onclick = () => {
    taskList.removeChild(li);
  };

  actions.appendChild(completeBtn);
  actions.appendChild(editBtn);
  actions.appendChild(deleteBtn);

  li.appendChild(taskText);
  if (datetime) li.appendChild(small);
  li.appendChild(actions);

  taskList.appendChild(li);
}
