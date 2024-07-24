document.getElementById('addForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const itemText = document.getElementById('item').value;
    const taskDate = document.getElementById('taskDate').value;
    if (itemText.trim() === '') return;
    addTask(itemText, taskDate);
    document.getElementById('item').value = ''; // Clear the input after adding
    document.getElementById('taskDate').value = ''; // Clear the date input
});

function addTask(text, date) {
    const list = document.getElementById('items');
    const listItem = document.createElement('li');
    listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
    
    const textSpan = document.createElement('span');
    textSpan.textContent = `${text} (Due: ${date})`;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'btn btn-danger btn-sm';
    deleteBtn.onclick = function() {
        list.removeChild(listItem);
    };

    const prioritySelect = document.createElement('select');
    prioritySelect.className = 'form-control form-control-sm';
    ['High', 'Medium', 'Low'].forEach(level => {
        const option = document.createElement('option');
        option.value = level.toLowerCase();
        option.textContent = level;
        prioritySelect.appendChild(option);
    });
    prioritySelect.onchange = function() {
        listItem.className = `list-group-item ${this.value}`;
    };

    listItem.appendChild(textSpan);
    listItem.appendChild(prioritySelect);
    listItem.appendChild(deleteBtn);
    list.appendChild(listItem);
}

function toggleButton(input, buttonId) {
    const button = document.getElementById(buttonId);
    button.disabled = input.value.trim() === '';
}
