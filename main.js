let form = document.getElementById('addForm');
let itemList = document.getElementById('items');

//form submit event--->
form.addEventListener('submit',addItem);

//delete Event
itemList.addEventListener('click',removeItem);

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
    //create del button element
    let deleteBtn = document.createElement('button');
    //add class to del button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    //Append text Node
    deleteBtn.appendChild(document.createTextNode('X'));
    //Append button to li
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