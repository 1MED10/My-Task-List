//Ui vars

const form = document.querySelector('form');
const input = document.querySelector('#txtTaskName');
const btnDeleteAll = document.querySelector('#task-List');
const taskList = document.querySelector('#task-List')

//CALL EVENT LİSTENEER
eventListeners();

function eventListeners() {
    //submit event
    form.addEventListener('submit', addNewItem);

    //delete an item 
    taskList.addEventListener('click', deleteItem);

    //delete all items
    btnDeleteAll.addEventListener('click',deleteAllItems);
}

//add new item
function addNewItem(e) {
    if (input.value === '') {
        alert('add new item');
    }
    //create li
    const li = document.createElement('li');
    li.className = 'list-group-item list-group-item-secondary'
    li.appendChild(document.createTextNode(input.value));

    //create a
    const a = document.createElement('a');
    a.classList = 'delete-item float-end';
    a.setAttribute('href', '#');
    a.innerHTML = '<i class="fas fa-plus"></i>'
    //add a to li
    li.appendChild(a);
    //add li to ul
    taskList.appendChild(li);
    //clear input
    input.value = '';



    e.preventDefault();
}

//delete an item
function deleteItem(e) {
    if (e.target.className === 'fas fa-times') {
        e.target.parentElement.parentElement.remove();
    }

    e.preventDefault();
}

//delete all items
function deleteAllItems(e) {
    if(confirm('Eminmisiniz?')){
    let i=0;
    do{
     taskList.children[i].remove();
    }while(taskList.children.length>i)
    }
     e.preventDefault();
    }