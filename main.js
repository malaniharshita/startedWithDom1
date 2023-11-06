let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');

//form submit event--->
form.addEventListener('submit',addItem);

//delete Event
itemList.addEventListener('click',removeItem);

// Filter event
filter.addEventListener('keyup', filterItems);

//add item
function addItem(e){
    e.preventDefault();
    //get input value
    let newItem = document.getElementById('item').value;
    let newItem1 = document.getElementById('description').value;
    //create new li element
    let li = document.createElement('li');
    //add class
    li.className = 'list-group-item';
    //add text node with input value
    li.appendChild(document.createTextNode(newItem+" "+newItem1));
    // li.appendChild(document.createTextNode(newItem1));
    //create del button element
    let deleteBtn = document.createElement('button');
    let editBtn = document.createElement('button');
    //add class to del button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    //Append text Node
    deleteBtn.appendChild(document.createTextNode('X'));
    editBtn.appendChild(document.createTextNode("Edit"));
    //Append button to li
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    
    //append li to list
    itemList.appendChild(li); 
    
}

//remove item
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            let li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

// Filter Items
function filterItems(e){
    // convert text to lowercase
    const text = e.target.value.toLowerCase();
    // Getting list
    const items = itemList.getElementsByTagName('li');
    // Convert to an array
    Array.from(items).forEach(function(item){
      const itemName = item.firstChild.textContent;
      const description = item.children[1].textContent;
      if(itemName.toLowerCase().indexOf(text) != -1 || description.toLowerCase().indexOf(text) != -1){
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }