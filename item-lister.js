let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');


//submit event
form.addEventListener('submit', addItem);
//delete event
itemList.addEventListener('click', removeItem);
//filter event
filter.addEventListener('keyup', filterItems);


//add item
function addItem(e){
  e.preventDefault();
  
  //get input value
  let newItem = document.getElementById('item').value;
  //create new li element
  let li = document.createElement('li');
  //add class
  li.className = 'list-group-item';
  //add text node with input value
  li.appendChild(document.createTextNode(newItem));
  //create delete button
  let deleteButton = document.createElement('button');
  //add class in button
  deleteButton.className = 'btn btn-danger btn-sm float-right delete';
  //add the X in button
  deleteButton.appendChild(document.createTextNode('X'));
  //append button to li
  li.appendChild(deleteButton);
  //append li to list
  itemList.appendChild(li);
}

//delete item
function removeItem(e){
  //check if the click was on the button
  if(e.target.classList.contains('delete')){
    if(confirm('Deletar este item?')){
      let li = e.target.parentElement;
      itemList.removeChild(li);
    };
  }
}

function filterItems(e){
  //convert text to lowercase
  let text = e.target.value.toLowerCase();
  //get lis
  let items = itemList.getElementsByTagName('li');
  //convert to an array
  Array.from(items).forEach(function(item){
    let itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  })

}