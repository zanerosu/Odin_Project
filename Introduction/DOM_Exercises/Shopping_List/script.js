const itemList = document.querySelector('ul');
const userInput = document.querySelector('#item');
const addBtn = document.querySelector('button');

//Adds item to list on 'Add item' button click
addBtn.addEventListener('click', () => {
    const newItem = userInput.value
    userInput.value = ''

    const item = document.createElement('li');
    const itemName = document.createElement('span');
    const delBtn = document.createElement('button');

    item.appendChild(itemName)
    item.appendChild(delBtn)

    itemName.textContent = newItem
    delBtn.textContent = 'Delete'

    itemList.appendChild(item)

    //Delete list item on 'Delete' button click
    delBtn.addEventListener('click', () =>{
        item.remove();
    })

    userInput.focus();
})