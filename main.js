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


// Light mode & Dark Mode 
let isDarkMode = false;
const dark = document.querySelector('#dark');

// Individual Icon Toggle Colors
function applyIconStyles() {
    let icons = document.querySelectorAll('i');
    icons.forEach(function (icon) {
        if (isDarkMode) {
            icon.style.backgroundColor = 'hsl(0, 0%, 94%)';
            icon.style.color = 'hsl(0, 0%, 5%)';
        } else {
            icon.style.backgroundColor = '';
            icon.style.color = '';
        }
    });
}

// For Each Input Fields Toggle
function textStyles() {
    let allText = document.querySelectorAll('p');
    allText.forEach(function (text) {
        text.style.color = isDarkMode ? 'hsl(0, 0%, 94%)' : '';
    });
}

function inputStyles() {
    let allInput = document.querySelectorAll('input');
    allInput.forEach(function (inputStyle) {
        if (isDarkMode) {
            inputStyle.style.backgroundColor = 'hsl(0, 0%, 5%)';
            inputStyle.style.color = 'hsl(0, 0%, 94%)';
        } else {
            inputStyle.style.backgroundColor = '';
            inputStyle.style.color = '';
        }
    });
}

// Dark Mode Toggle Logic
dark.addEventListener('click', () => {
    if (isDarkMode = !isDarkMode) {
        document.querySelector('body').style.backgroundColor = isDarkMode ? 'hsl(0, 0%, 5%)' : '';
        document.querySelector('h1').style.color = isDarkMode ? 'hsl(0, 0%, 94%)' : '';
        document.querySelector('button').style.backgroundColor = isDarkMode ? 'hsl(0, 0%, 94%)' : '';
        document.querySelector('button').style.color = isDarkMode ? 'hsl(0, 0%, 5%)' : '';
        dark.className = 'bx bx-sun';
        applyIconStyles();
        textStyles();
        inputStyles();
    } else {
        document.querySelector('body').style.backgroundColor = isDarkMode ? 'hsl(0, 0%, 5%)' : '';
        document.querySelector('h1').style.color = isDarkMode ? 'hsl(0, 0%, 94%)' : '';
        document.querySelector('button').style.backgroundColor = isDarkMode ? 'hsl(0, 0%, 94%)' : '';
        document.querySelector('button').style.color = isDarkMode ? 'hsl(0, 0%, 5%)' : '';
        dark.className = 'bx bx-moon';
        applyIconStyles();
        textStyles();
        inputStyles();
    }
});



// initial value for the task counter 
let countNum = 0;

// Incrementing values for each tasks created
addTask.addEventListener('click', () => {
    if (todoInput.value.trim() != '') {
        toasterSuccess();
        inputCard(todoInput.value);
        todoInput.value = '';
        countNum += 1;
        counter.style.color = 'green'
        counter.innerHTML = countNum;
    } else {
        toasterEmpty();
    }
});

// This will only appear if tasks added are blank
function toasterEmpty() {
    const toaster = document.createElement('div');
    toaster.className = 'toaster';

    const toasterMessage = document.createElement('p');
    toasterMessage.textContent = 'Empty fields are not allowed!';

    toaster.appendChild(toasterMessage);
    toasterContainer.appendChild(toaster);

    // This is the time duration of the toaster hover

    setTimeout(() => {
        toaster.remove();
    }, 1200);

}

// Toaster for task created
function toasterSuccess() {
    const addToaster = document.createElement('div');
    addToaster.className = 'addToaster';

    const addtoasterMsg = document.createElement('p');
    addtoasterMsg.textContent = 'Success! Task added';

    addToaster.appendChild(addtoasterMsg);
    toasterContainer.appendChild(addToaster);

    setTimeout(() => {
        addToaster.remove();
    }, 1200);

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

    applyIconStyles();
    inputStyles();

    // This is use to edit a card
    editInput.addEventListener('click', () => {
        inputCard.removeAttribute('readonly');
        inputCard.focus();
        saveInput.innerText = 'Save';
        inputCard.style.color = 'red';
        inputCard.style.cursor = 'auto';

        // Save new text 
        saveInput.addEventListener('click', () => {
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
        if (countNum == 0) {
            counter.style.color = 'red';
        }
    });

}
