// Define UI Variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();

// Load all event listeners

function loadEventListeners() {
// Add task event
	document.addEventListener('DOMContentLoaded', getTasks)
	form.addEventListener('submit', addTask);
	taskList.addEventListener('click', removeTask);
	clearBtn.addEventListener('click', clearTasks);
	filter.addEventListener('keyup', filterTasks);


}

// Add Task
function addTask(e) {
	if(taskInput.value===''){
		alert('Add a task');
	}

// Create li element
	const li = document.createElement('li');

// Add class
	li.className = 'collection-item';

// Create text node and append to li
	li.appendChild(document.createTextNode(taskInput.value));

// Create new link element
	const link = document.createElement('a');

//Add class
	link.className = 'delete-item secondary-content';

// Add icon html
	link.innerHTML = '<i class="fa fa-remove"></i>';

// Append the link to li
	li.appendChild(link);

// Append li to ul
	taskList.appendChild(li);

	storeTaskInLocalStorage(taskInput.value);

//Clear input
	taskInput.value = '';


	e.preventDefault();

}

function getTasks() {
	let tasks;

	tasks = localStorage.getItem('tasks') === null ? [] : JSON.parse(localStorage.getItem('tasks'));

	tasks.forEach(function (task) {

// Create li element
		const li = document.createElement('li');

// Add class
		li.className = 'collection-item';

// Create text node and append to li
		li.appendChild(document.createTextNode(task));

// Create new link element
		const link = document.createElement('a');

//Add class
		link.className = 'delete-item secondary-content';

// Add icon html
		link.innerHTML = '<i class="fa fa-remove"></i>';

// Append the link to li
		li.appendChild(link);

// Append li to ul
		taskList.appendChild(li);

	});

}

function storeTaskInLocalStorage(task) {
	let tasks;

	tasks = localStorage.getItem('tasks') === null ? [] : JSON.parse(localStorage.getItem('tasks'));
	tasks.push(task);

	localStorage.setItem('tasks', JSON.stringify(tasks));
}

function removeTask(e) {
	if(e.target.parentElement.classList.contains('delete-item')){
		if (confirm('Are You Sure?')){
			e.target.parentElement.parentElement.remove();

//Remove from local storage

			removeTaskFromLocalStorage(e.target.parentElement.parentElement);
		}
	}
}

function removeTaskFromLocalStorage(taskItem) {
	let tasks;
	tasks = localStorage.getItem('tasks') === null ? [] : JSON.parse(localStorage.getItem('tasks'));

	tasks.forEach(function (task, index) {
		if (taskItem.textContent === task) {
			tasks.splice(index, 1);
		}
	});

	localStorage.setItem('tasks', JSON.stringify(tasks));
}

function clearTasks(e) {
	while(taskList.firstChild){
		taskList.removeChild(taskList.firstChild);
	}

	clearTasksFromLocalStorage();
}

function clearTasksFromLocalStorage(){
	localStorage.clear();
}

function filterTasks(e) {
	const text = e.target.value.toLowerCase();

	document.querySelectorAll('.collection-item').
	forEach(function(task){
		const item = task.firstChild.textContent;
		task.style.display = (item.toLowerCase().indexOf(text) !== -1) ? 'block' : 'none';
	});


}


