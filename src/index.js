import {messages} from './messages';
// Подключение css
import './css/styles.css';

const select = document.querySelector('#list');
const editButton = document.querySelector('#edit-btn');
const addButton = document.querySelector('#add-btn');
const txtEdit = document.querySelector('#text-edit');
const txtAdd = document.querySelector('#text-add');

function removeError(el) {
    if (el.classList.contains('error')) {
        el.classList.remove('error');
    }
}

const workWithSelect = {
    editSelect: function () {
        txtEdit.value = txtEdit.value.trim();

        const opts = Array.from(select).map(i => i.label);
        if (opts.some(value => value === txtEdit.value) || !txtEdit.value) return txtEdit.classList.add('error');

        opts[select.selectedIndex] = txtEdit.value;
        saveToLocalStorage(opts);

        for (let i = 0; i < select.length; i++) {
            if (select.options[i].selected) {
                select.options[i].label = txtEdit.value;
            }
        }
    },
    pushValueToEdit: function () {
        removeError(txtEdit);
        for (let i = 0; i < this.length; i++) {
            if (this.options[i].selected) {
                txtEdit.value = this.options[i].label;
            }
        }
    },
    saveCurrentlyValue: function () {
        console.log(select.options[select.selectedIndex])
        txtEdit.value = select.options[select.selectedIndex].label;
    },
    addValueToSelect: function () {
        txtAdd.value = txtAdd.value.trim();
        if (!txtAdd.value) {
            return txtAdd.classList.add('error');
        }
        const currentOpts =  Array.from(select).map(i => i.label);
        if (currentOpts.some(value => value === txtAdd.value)) return txtAdd.classList.add('error');

        const myOption = new Option(txtAdd.value);
        saveToLocalStorage([...currentOpts, txtAdd.value]);

        select.append(myOption);

        txtAdd.value = null;
    }
};

function saveToLocalStorage(arr) {
    localStorage.setItem('myList', JSON.stringify(arr));
}

txtEdit.addEventListener("focus", function (data) {
    removeError(data.target);
});

txtAdd.addEventListener("focus", function (data) {
    removeError(data.target);
});

window.addEventListener("load", function () {
    const myList = JSON.parse(localStorage.getItem('myList'));
    myList.forEach(function (item, index) {
        const opt = document.createElement("option");
        opt.label = item;
        select.append(opt);
    });

    workWithSelect.saveCurrentlyValue();
});

editButton.onclick = workWithSelect.editSelect;
select.onchange = workWithSelect.pushValueToEdit;
txtEdit.onfocus = removeError(txtEdit);
addButton.onclick = workWithSelect.addValueToSelect;
txtAdd.onfocus = removeError(txtAdd);












