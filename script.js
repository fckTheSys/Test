let student_name = document.querySelector('h1');
console.log(student_name);

let btn = document.querySelector('button');
console.log(btn);

btn.addEventListener('click', change_name); 

function change_name () { 
    let y_student_name =  prompt('What is your name');
    student_name.textContent = 'Hello' + ' ' + y_student_name + ' ' + '🚀🍄😛';  
};