import {messages} from './messages';
// Подключение css
import './css/styles.css';

let listValue = document.querySelector('#list'); // onchange
let editButton = document.querySelector('#edit-btn'); // onclick
let addButton = document.querySelector('#add-btn'); // onclick
let txtEdit = document.querySelector('#text-edit'); // onfocus
let txtAdd = document.querySelector('#text-add'); // onfocus
let todos;
let arr;

function toLocal(){
    todos = Array.from(listValue).map(value => value.label);
    localStorage.setItem('todos', JSON.stringify(todos));
    arr = localStorage.getItem('todos');
    arr = JSON.parse(arr);

}

// if (localStorage.getItem('arr')) {
//     for (let i = 0; i < arr.length; i++) {
//         listValue.options[i].label = arr[i];
//     }
// }


editButton.addEventListener("click", function () {
    txtEdit.value = txtEdit.value.trim();

    const isRepeat = Array.from(listValue).some(value => value.label == txtEdit.value);
    if (isRepeat) return txtEdit.classList.add('error');

    if (!txtEdit.value) {
        return txtEdit.classList.add('error');
    }
    for (let i = 0; i < listValue.length; i++) {
        if (listValue.options[i].selected && !isRepeat) {
            listValue.options[i].text = txtEdit.value;
        }
    }
    toLocal();

});

listValue.addEventListener("change", function () {

    if (txtEdit.classList.contains('error')) {
        txtEdit.classList.remove('error');
    }

    for (let i = 0; i < this.length; i++) {
        if (this.options[i].selected) {
            txtEdit.value = this.options[i].text;
        }
    }
    toLocal();

});

txtEdit.addEventListener("focus", function () {
    this.classList.remove('error');
});

window.onload = function () {
    txtEdit.value = listValue.options[listValue.selectedIndex].text;
}

addButton.addEventListener("click", function () {
    txtAdd.value = txtAdd.value.trim();
    if (!txtAdd.value) {
        return txtAdd.classList.add('error');
    }

    const checkRepeat = Array.from(listValue).some(value => value.label == txtAdd.value);
    if (checkRepeat) return txtAdd.classList.add('error');

    const myOption = new Option(txtAdd.value);
    listValue.append(myOption);

    txtAdd.value = null;
    toLocal();

});

txtAdd.addEventListener("focus", function () {
    this.classList.remove('error');
});




