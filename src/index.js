import {messages} from './messages';
// Подключение css
import './css/styles.css';

let listValue = document.querySelector('#list'); // onchange
let button = document.querySelector('#btn'); // onclick
let txt = document.querySelector('.text'); // onfocus

button.addEventListener("click", function () {
    txt.value = txt.value.trim();
    if (!txt.value) {
        return txt.classList.add('error');
    }
    for (let i = 0; i < listValue.length; i++) {
        if (listValue.options[i].selected) {
            listValue.options[i].text = txt.value;
        }
    }
});

listValue.addEventListener("change", function () {

    if (txt.classList.contains('error')) {
        txt.classList.remove('error');
    }

    for (let i = 0; i < this.length; i++) {
        if (this.options[i].selected) {
            txt.value = this.options[i].text;
        }
    }
});

txt.addEventListener("focus", function () {
    this.classList.remove('error');
});

window.onload = function () {
    txt.value = listValue.options[listValue.selectedIndex].text;
}



