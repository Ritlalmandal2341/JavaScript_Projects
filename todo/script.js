const addBtn = document.getElementById('add-btn');
const todoInput = document.getElementById('todo-input');
const ulContainer = document.getElementById('ul-container');

addBtn.addEventListener('click', () => {
    const value = todoInput.value;
    console.log('user entered',value);
    const li = document.createElement('li');
    li.innerText = value;
    const delButton = document.createElement('button');
    delButton.innerText = 'X';
    delButton.addEventListener('click', function () { 
        li.remove(li);
    });
    li.appendChild(delButton);
    ulContainer.appendChild(li);
    todoInput.value = '';
    });