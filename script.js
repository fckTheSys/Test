document.addEventListener("DOMContentLoaded", ePassword);

function ePassword() {
    let pass = 1+"123EEe"
    console.log(pass);
    let enterPass = prompt('enter the password')
    if (pass === enterPass) {
        alert("Hello!");
    }
    else {
        alert("NOT");
        ePassword()++;
    }
};


let student_name = document.querySelector('h1');
console.log(student_name);

let btn = document.querySelector('button');
console.log(btn);

btn.addEventListener('click', change_name);

function change_name() {
    let y_student_name = prompt('What is your name');
    if (y_student_name) 
        student_name.textContent = 'Hello' + ' ' + y_student_name + ' ' + '🚀🍄😛';
    else {
        alert("need yor name");
    }
};


document.addEventListener("DOMContentLoaded", function () {
    console.log('page loaded')
    let place_to_paste = document.querySelector('.para-place');
    function addPara() {
        console.log(place_to_paste);
        let para = document.createElement('p');
        para.classList.add('th-nm');
        para.textContent = prompt('create paragraph');
        if (para) {
            place_to_paste.appendChild(para);
        }
        if (para = null) {
            alert("add the paragraph");
        }
        else {
            alert('place paragraph');
        };
    }
    const paraBtn = document.querySelectorAll('.add-para');
    for (let i = 0; i < paraBtn.length; i++) {
        paraBtn[i].addEventListener('click', addPara);
        console.log(typeof paraBtn);
    }
});

