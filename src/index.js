import {messages} from './messages';
// Подключение css
import './css/styles.css';

let listValue = document.querySelector('#list'); // onchange
let button = document.querySelector('#btn'); // onclick
let txt = document.querySelector('.text'); // onfocus

button.addEventListener("click", function () {
    txt.value = txt.value.trim();
    if (txt.value) {
        for (let i = 0; i < listValue.length; i++) {
            if (listValue.options[i].selected) {
                listValue.options[i].text = txt.value;
            }
        }
    } else {
        txt.classList.add('error');
    }
});

listValue.addEventListener("change", function () {
    for (let i = 0; i < this.length; i++) {
        if (this.options[i].selected) {
            txt.value = this.options[i].text;
            if (txt.classList.contains('error')) {
                txt.classList.remove('error');
            }
        }
    }
});

txt.addEventListener("focus", function () {
    this.classList.remove('error');
});

