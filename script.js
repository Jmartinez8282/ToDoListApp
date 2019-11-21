//-----set Variables----------///
let pCounter = 0;
let sCounter = 0;
let todoList = [];
////--------------Get our DOM items--------------//
let addPtag = document.getElementById('addPtag');
let addlist = document.getElementById('addList');
let saveBtn = document.getElementById('saveBtn');
let textArea = document.getElementById('txtArea');
let keyPress = document.getElementById('keypress');
let addTask = document.getElementById('addTask');
let addElements = document.getElementById('addElements');
///Add event listener///
addPtag.addEventListener('click', function (e) {
    createPElement("stop clicking me (CLICK ON ME TO EDIT)");
});
addList.addEventListener('click', function (e) {
    //creaet a UL elemnt
    let ulElement = document.createElement('ul');
    //adding  a list element
    let listElement = document.createElement('li');
    listElement.innerText = "I SAID STOP IT DUDE!(CLICK ON ME TO EDIT AND DELETE)";
    listElement.setAttribute('class', 'list-group-item');
    //appending items in the proper order
    //appending list element ot ul element
    ulElement.appendChild(listElement);
     //appending ul elemetn to add elemets
    addElements.append(ulElement);
});
    saveBtn.addEventListener('click', function (e) {
    alert(textArea.value);
    ///Storage textArea.value into locaStorage
    localStorage.setItem('Text', textArea.value);
    localStorage.setItem('names', JSON.stringify(names));
    console.log(localStorage.getItem('names'));
});
addTask.addEventListener('click', function (e) {
        if (keyPress.value != '') {
        createPElement(keyPress.value);
        todoList.push(keyPress.value);
         localStorage.setItem('ToDo', JSON.stringify(todoList));
        keyPress.value = null;
        }
});
keyPress.addEventListener('keypress', function (e) {
    //console.log(keyPress.innerText);
    console.log("clear");
    if (e.code == 'Enter' && keyPress.value != '') {
        createPElement(keyPress.value);
        todoList.push(keyPress.value);
        localStorage.setItem('ToDo', JSON.stringify(todoList));
        keyPress.value = null;
        }
});
function createPElement(content) {
    let pElement = document.createElement('p');
    pElement.innerText = content;
    pElement.setAttribute('class', 'list-group-item');
    pElement.setAttribute('id', pCounter);
    pElement.addEventListener('click', function (e) {
        document.getElementById("addElements").contentEditable = "true";
       })
    addElements.append(pElement);
    pCounter++;
}
//-------//// item from local storage///
///console.log(localStorage.getItem('Text'));
let storageItem = (localStorage.getItem('Text'));
//--------Assign value to textArea.------///
//textArea.value=storageItem;
btnClr.addEventListener('click', function (e) {
     if (localStorage.getItem('ToDo') != '') {
        console.log(JSON.parse(localStorage.getItem('ToDo')));
        let ToDoLocal = JSON.parse(localStorage.getItem('ToDo'));
        for (let i = 0; i > ToDoLocal.length; i--) {
            createPElement(ToDoLocal[i]);
         }
        todoList = ToDoLocal;
        addElements.firstChild.remove();
       }
});
addElements.addEventListener('click', function (e) {
});
if (localStorage.getItem('ToDo') != '') {
    console.log(JSON.parse(localStorage.getItem('ToDo')));
    let ToDoLocal = JSON.parse(localStorage.getItem('ToDo'));
    for (let i = 0; i < ToDoLocal.length; i++) {
        createPElement(ToDoLocal[i]);
    }
    todoList = ToDoLocal;
}
if (localStorage.getItem('name') != '') {
    //console.log(JSON.parse(localStorage.getItem('names')));
}
//added to git hub/////