//-----set Variables----------///
let pCounter = 0;
let sCounter = 0;





////--------------Get our DOM items--------------//

let addPtag = document.getElementById('addPtag');
let addlist = document.getElementById('addList');
let saveBtn = document.getElementById('saveBtn');
let textArea = document.getElementById('txtArea');
let keyPress = document.getElementById('keypress');

let addElements = document.getElementById('addElements');

///Add event listener///
addPtag.addEventListener('click',function(e){
    let pElement = document.createElement('p');
    pElement.innerText = "I have Spoken";
    pElement.setAttribute('class','list-group-item');
    pElement.setAttribute('id',pCounter);
    pElement.addEventListener('click',function(e){
        alert("Hello, I am P Tag!");
    })
    addElements.append(pElement);
});
addList.addEventListener('click',function(e){
//creaet a UL elemnt
let ulElement = document.createElement('ul');
//adding  a list element
let listElement = document.createElement('li');
listElement.innerText = "I am a list Item";
listElement.setAttribute('class','list-group-item');
//appending items in the proper order
//appending list element ot ul element
ulElement.appendChild(listElement);

//appending ul elemetn to add elemets
addElements.append(ulElement);

});


saveBtn.addEventListener('click',function(e){

    alert(textArea.value);

    ///Storage textArea.value into locaStorage
    localStorage.setItem('Text',textArea.value);
});
keyPress.addEventListener('keypress',function(e){
    //console.log(keyPress.innerText);
    if(e.code=='Enter'&& keyPress.value!=''){
        let pElement = document.createElement('p');
    pElement.innerText = keyPress.value;
    pElement.setAttribute('class','list-group-item');
    pElement.setAttribute('id',pCounter);
    pElement.addEventListener('click',function(e){
        alert("Hello, I am P Tag!");
    })
    addElements.append(pElement);
    pCounter++;
    keyPress.value = "";

    }
});   
//-------////Tetrive item from local storage///
///console.log(localStorage.getItem('Text'));
let storageItem =(localStorage.getItem('Text'));
//--------Assign value to textArea.------///
textArea.value=storageItem;

textArea.addEventListener('click',function(e){

});

addElements.addEventListener('click',function(e){

});



//added to git hub/////