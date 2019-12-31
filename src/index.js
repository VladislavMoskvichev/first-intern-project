import {messages} from './messages';
// Подключение css
import './css/styles.css';

let listValue = document.querySelector('#list'); // onchange
let editButton = document.querySelector('#edit-btn'); // onclick
let addButton = document.querySelector('#add-btn'); // onclick
let txtEdit = document.querySelector('#text-edit'); // onfocus
let txtAdd = document.querySelector('#text-add'); // onfocus

editButton.addEventListener("click", function () {
    txtEdit.value = txtEdit.value.trim();
    if (!txtEdit.value) {
        return txtEdit.classList.add('error');
    }
    for (let i = 0; i < listValue.length; i++) {
        if (listValue.options[i].selected) {
            listValue.options[i].text = txtEdit.value;
        }
    }
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

    const t = Array.from(listValue, value => value.text == txtAdd.value).some(value => value == true);
    if (t) return txtAdd.classList.add('error');


    const myOption = new Option(txtAdd.value);
    listValue.append(myOption);

    txtAdd.value = null;

});

txtAdd.addEventListener("focus", function () {
    this.classList.remove('error');
});

