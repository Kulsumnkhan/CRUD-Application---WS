let cl = console.log;

// CRUD >> Create, Read, Update & Delete.

let stdForm = document.getElementById('stdForm');
let fnameControl = document.getElementById('fname');
let lnameControl = document.getElementById('lname');
let emailControl = document.getElementById('email');
let contactControl = document.getElementById('contact');

let stdArray = [];

const onStdSubmit = (eve) => {
    eve.preventDefault();
    // cl('submitted!');
    let obj ={
        fname: fnameControl.value,
        lname: lnameControl.value,
        email: emailControl.value,
        contact: contactControl.value,
    };
    stdArray.push(obj);
    cl(stdArray)
    stdForm.reset();
};

stdForm.addEventListener('submit', onStdSubmit)
