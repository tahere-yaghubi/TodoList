const addButtonEl = document.getElementById("button");
const listEl =  document.querySelector("ul");
const inputEl = document.querySelector("input");
addButtonEl.addEventListener('click',addFunc);

 


function addFunc(){
  const inputVal = inputEl.value;
  const liElement = document.createElement('li');
  var isChecked = false;
  const checkbox = document.createElement('input');
  checkbox.setAttribute("type", "checkbox");
  liElement.appendChild(checkbox);
  checkbox.addEventListener('change',checkedFunc);

  const liTextElement = document.createElement('span');
  liTextElement.innerHTML = inputVal; 
  liElement.appendChild(liTextElement);

  

  
  liElement.classList.add('listItem');
  listEl.appendChild(liElement);


  

  const removeBtnEl = document.createElement('button');
  removeBtnEl.classList.add('removeBtn');
  removeBtnEl.innerText = 'Remove';
  removeBtnEl.addEventListener('click', removeFunc);
  liElement.appendChild(removeBtnEl);
  console.log(liElement.parentElement);

  const editBtnEl = document.createElement('button');
  editBtnEl.classList.add('editBtn');
  editBtnEl.innerText = 'Edit';
  editBtnEl.addEventListener('click', editFunc);
  

  inputEl.value = '';
}

function removeFunc(e){
  e.target.parentElement.remove();
  
}

function editFunc(){
  e.target.parentElement()
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