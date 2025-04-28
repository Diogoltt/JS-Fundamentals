let count = 1;

function addItem() {
    const item = document.createElement('li'); // cria elemento li
    const list = document.querySelector('ol'); // get element ol

    item.innerText = `Item ${count++}`; // adiciona o texto ao elemento li
    list.appendChild(item); // adiciona o elemento li ao elemento ol
}

function removeItem() {
    const list = document.querySelector('ol');
    const item = list.querySelector('li:first-child');

    list.removeChild(item);
}

const buttonAdd = document.getElementById('new-item');
const buttonRemove = document.getElementById('remove-item');

buttonAdd.addEventListener('click', addItem);
buttonRemove.addEventListener('click', removeItem)