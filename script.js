const addButtonEl = document.getElementById("button");
const listEl =  document.querySelector("ul");
const inputEl = document.querySelector("input");
addButtonEl.addEventListener('click',addFunc);

 


function addFunc(){
  const inputVal = inputEl.value;
  const liElement = document.createElement('li');
 
// checkbox 
  const checkbox = document.createElement('input');
  checkbox.setAttribute("type", "checkbox");
  liElement.appendChild(checkbox);
  checkbox.addEventListener('change',checkedFunc);

 // span 
  const liTextElement = document.createElement('span');
  liTextElement.innerHTML = inputVal; 
  liElement.appendChild(liTextElement);

//edit Input
  const editEl = document.createElement('input');
  editEl.setAttribute("type", "text");
  liElement.appendChild(editEl);
  editEl.classList.add('editInput');
  editEl.value = liTextElement.innerHTML;
  
// save Button
  const saveBtn = document.createElement('button');
  saveBtn.classList.add('saveBtn');
  saveBtn.innerText = 'Save';
  liElement.appendChild(saveBtn);
  saveBtn.addEventListener('click',saveFunc);

  // append li to ul
  liElement.classList.add('listItem');
  listEl.appendChild(liElement);
 

 // remove Button
  const removeBtnEl = document.createElement('button');
  removeBtnEl.classList.add('removeBtn');
  removeBtnEl.innerText = 'Remove';
  removeBtnEl.addEventListener('click', removeFunc);
  liElement.appendChild(removeBtnEl);
  console.log(liElement.parentElement);


 //edit Button
  const editBtnEl = document.createElement('button');
  editBtnEl.classList.add('editBtn');
  liElement.appendChild(editBtnEl);
  editBtnEl.innerText = 'Edit';
  editBtnEl.addEventListener('click', editFunc);
  
 
  inputEl.value = '';


  function editFunc(e){

    const parentElement = e.target.parentElement;
    parentElement.removeChild(removeBtnEl);
    parentElement.removeChild(editBtnEl);
    parentElement.removeChild(checkbox);
    parentElement.removeChild(liTextElement);
    saveBtn.classList.add('block');
    editEl.classList.add('block');
    console.log(e.target.value ,"FFF")
    
   }

   function saveFunc(e){
    console.log(editEl.value);
    liTextElement.innerHTML = editEl.value;

    const parentElement = e.target.parentElement;
    
    parentElement.appendChild(checkbox);
    parentElement.appendChild(liTextElement);
    parentElement.appendChild(removeBtnEl);
    parentElement.appendChild(editBtnEl);
    parentElement.removeChild(saveBtn);
    parentElement.removeChild(editEl);

  
  }
}


function removeFunc(e){
  e.target.parentElement.remove();
  
}





function checkedFunc(e){

  var element = e.target.parentElement;
  element.classList.toggle("line-through");
 
  
  
}








// function funcInput(value) {
//   var liElement = document.createElement("li");
//   liElement.id = new Date().getTime();
//   liElement.innerHTML =`
//   <div class='element'>
//   <div>
//   <input type='checkbox'/>
//   <span>${value}</span>
//   </div>
//  <div class='btns'>
//  <button class='removeBtn' onclick='removeFunc(this.e)'>Remove</button>
//  <button>Edit</button>
//  </div>
//   </div>
   
//   `;
// //  .appendChild(liElement);

 
//   document.querySelector("input").value = "";
// }
// var removeBtn = document.getElementsByClassName('removeBtn');

// console.log(removeBtn)
// function removeFunc(){
 
   
// }