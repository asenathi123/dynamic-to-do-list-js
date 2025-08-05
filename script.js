// Step 1: Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {

    // Step 2: Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Step 3: Define addTask function
    function addTask() {
        const taskText = taskInput.value.trim(); // Remove whitespace

        // Step 4: Validate input
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Step 5: Create a new task item (li)
        const li = document.createElement('li');
        li.textContent = taskText;

        // Step 6: Create a remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.className = "remove-btn";

        // Step 7: Add click event to remove task
        removeBtn.onclick = () => {
            taskList.removeChild(li);
        };

        // Step 8: Add button to li, and li to task list
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Step 9: Clear the input field
        taskInput.value = "";
    }

    // Step 10: Add task when "Add Task" button is clicked
    addButton.addEventListener('click', addTask);

    // Step 11: Add task when "Enter" key is pressed
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    // Get DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Load tasks from localStorage
    const storedTasks = getTasksFromStorage();
    storedTasks.forEach(renderTask);

    // Add task on button click
    addButton.addEventListener('click', addTask);

    // Add task on Enter key
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Define addTask inside here so it has access to taskInput, taskList
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        const task = {
            id: Date.now(),
            text: taskText,
            completed: false
        };

        const tasks = getTasksFromStorage();
        tasks.push(task);
        saveTasksToStorage(tasks);

        renderTask(task);
        taskInput.value = "";
    }

    function renderTask(task) {
        const li = document.createElement('li');
        li.textContent = task.text;
        li.dataset.id = task.id;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.className = "remove-btn";

        removeBtn.onclick = () => {
            li.remove();
            deleteTaskFromStorage(task.id);
        };

        li.appendChild(removeBtn);
        taskList.appendChild(li);
    }
});
function getTasksFromStorage() {
    return JSON.parse(localStorage.getItem('tasks')) || [];
}

function saveTasksToStorage(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function deleteTaskFromStorage(taskId) {
    let tasks = getTasksFromStorage();
    tasks = tasks.filter(task => task.id !== taskId);
    saveTasksToStorage(tasks);
}
document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    const storedTasks = getTasksFromStorage();
    storedTasks.forEach(renderTask);

    addButton.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        const task = {
            id: Date.now(),
            text: taskText,
            completed: false
        };

        const tasks = getTasksFromStorage();
        tasks.push(task);
        saveTasksToStorage(tasks);

        renderTask(task);
        taskInput.value = "";
    }

    function renderTask(task) {
        const li = document.createElement('li');
        li.textContent = task.text;
        li.dataset.id = task.id;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.className = "remove-btn";

        removeBtn.onclick = () => {
            li.remove();
            deleteTaskFromStorage(task.id);
        };

        li.appendChild(removeBtn);
        taskList.appendChild(li);
    }
});

// Outside DOMContentLoaded
function getTasksFromStorage() {
    return JSON.parse(localStorage.getItem('tasks')) || [];
}

function saveTasksToStorage(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function deleteTaskFromStorage(taskId) {
    let tasks = getTasksFromStorage();
    tasks = tasks.filter(task => task.id !== taskId);
    saveTasksToStorage(tasks);
}
