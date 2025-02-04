function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskValue = taskInput.value;

    const li = document.createElement('li');
    li.textContent = taskValue;

    li.onclick = function () {

        if (!li.classList.contains('completed')) {
            li.classList.add('completed');  
        }
    };

    const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = function () {
            li.remove();
        };
    
        li.appendChild(removeButton);

    document.getElementById('taskList').appendChild(li);

    taskInput.value = '';
}


