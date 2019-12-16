import {messages} from './messages';
// Подключение css
import './css/styles.css';

const myList = document.querySelector('#list').onchange = () => {
        let listValue = document.querySelector('#list');
        let txt = document.querySelector('.text');
        for (let i = 0; i < listValue.length; i++) {
            if (listValue.options[i].selected == true) {
                txt.value = listValue.options[i].text;
            }
        }
    };

const button = document.querySelector('#btn').onclick = () => {
        let listValue = document.querySelector('#list');
        let txt = document.querySelector('.text').value;
        txt = txt.trim();
        for (let i = 0; i < listValue.length; i++) {
            if (listValue.options[i].selected == true && txt != '') {
                listValue.options[i].text = txt;
            }
            else if (txt == ''){
                document.querySelector('.text').classList.add('error');
            }
        }
    };

const deleteError = document.querySelector('.text').onfocus = () => {
    let txt =  document.querySelector('.text');
    txt.classList.remove('error');
};


