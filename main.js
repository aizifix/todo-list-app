// This is just a simple TO-DO LIST project made with HTML - CSS - JS
// This can also be stored in a local storage
// However, API integration such us storing specific strings in an array and maps can also be possible using array and forEach integration
// This is just a beginners guide and in familiarizing in the use of append child and query selectors
// (C) Aizifix - Project Likha 2024

// task inputs 
let todoInput = document.querySelector('#todoinput');

// add button
const addTask = document.querySelector('#addTask');

// task container
const taskContainer = document.querySelector('.task-container');

// task counter
let counter = document.querySelector('#counter-token');

const todoContainer = document.querySelector('.todo-container');

const toasterContainer = document.querySelector('.toaster-container')

// initial value for the task counter 
let countNum = 0;


// Incrementing values for each tasks created
addTask.addEventListener('click', () => {
    if (todoInput.value.trim() != '') {
        inputCard(todoInput.value);
        todoInput.value = '';
        countNum += 1;
        counter.innerHTML = countNum;
    } else {
        toaster();
    }
});

// This will only appear if tasks added are blank
function toaster() {
    const toaster = document.createElement('div');
    toaster.className = 'toaster';

    const toasterMessage = document.createElement('p');
    toasterMessage.textContent = 'Empty fields are not allowed!';

    toaster.appendChild(toasterMessage);
    toasterContainer.appendChild(toaster);

    // This is the time duration of the toaster hover
    setTimeout(() => {
        toaster.remove();
    }, 3000);
}

// This is the card creation during on click process
function inputCard(inputTask) {
    let card = document.createElement('div');
    card.className = 'card';

    let inputCard = document.createElement('input');
    inputCard.classList.add('task-text');
    inputCard.type = 'text';
    inputCard.readOnly = true;
    inputCard.value = inputTask;

    let settings = document.createElement('ul');

    // for each buttons
    const editCtnr = document.createElement('li');
    const editInput = document.createElement('a');
    const editIcon = document.createElement('i');
    editIcon.className = 'bx bx-edit';

    editCtnr.appendChild(editInput);
    editInput.appendChild(editIcon);

    // for each delete buttons
    const deleteCtnr = document.createElement('li');
    const deleteInput = document.createElement('a');
    const deleteIcon = document.createElement('i');
    deleteIcon.className = 'bx bx-trash';

    // for each saved buttons
    const saveCtnr = document.createElement('li');
    const saveInput = document.createElement('a');
    saveInput.className = 'saveButton';

    saveCtnr.appendChild(saveInput);
    saveInput.innerText = '';

    deleteCtnr.appendChild(deleteInput);
    deleteInput.appendChild(deleteIcon);

    settings.appendChild(saveInput);
    settings.appendChild(editCtnr);
    settings.appendChild(deleteCtnr);


    card.appendChild(inputCard);
    card.appendChild(settings);

    taskContainer.appendChild(card);

    // This is use to edit a card
    editInput.addEventListener('click', () => {
        inputCard.removeAttribute('readonly');
        inputCard.focus();
        saveInput.innerText = 'Save';
        inputCard.style.color = 'red';
        inputCard.style.cursor = 'auto';

        // Save new text 
        saveInput.addEventListener('click', ()=> {
            inputCard.readOnly = true;
            inputCard.focus();
            inputCard.style.color = '';
            saveInput.innerText = '';
            inputCard.style.cursor = 'default';
        });
    });

    // This is use to delete a card
    deleteInput.addEventListener('click', () => {
        card.remove();
        countNum -= 1;
        counter.innerHTML = countNum;
    });

}





