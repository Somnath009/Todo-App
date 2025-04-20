const inputBox = document.getElementById('input-box');
const addBtn = document.getElementById('add-btn');

const todoItem = document.getElementById('todo-item');

addBtn.addEventListener('click', () => {
    const value = inputBox.value;
    console.log('User entered', value);

    const li = document.createElement('li');
    li.innerText = value;

    const delBtn = document.createElement('button');
    delBtn.innerText = 'X'
    li.appendChild(delBtn);

    delBtn.addEventListener('click', () => {
        li.remove();
    })

    todoItem.appendChild(li);
    inputBox.value = '';
} )