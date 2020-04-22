//VARIABLES
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');
const btnSend = document.getElementById('send');
const sendForm = document.getElementById('send-email');
const resetBtn = document.getElementById('resetBtn');

//EVENT LISTENERS

eventListeners();

function eventListeners() {

    //Unable summit when app begins
    document.addEventListener('DOMContentLoaded', initApp);

    //Fields form
    email.addEventListener('blur', checkField);
    subject.addEventListener('blur', checkField);
    message.addEventListener('blur', checkField);

    //Send form
    //btnSend.addEventListener('click', sendEmail)
    sendForm.addEventListener('submit', sendEmail);

    //Reset button
    resetBtn.addEventListener('click', resetForm);

}

//FUNCTIONS

function initApp(){
    //Unable send
    btnSend.disabled = true;
}

//Check field is not empty
function checkField(){
    
    //Check text length and not empty
    checkLength(this);

    //Check email
    if(this.type === 'email'){
        validateEmail(this);
    }

    let errors = document.querySelectorAll('error');

    if(email.value !== '' && subject.value !== '' && message.value !== ''){
        if(errors.length === 0) {
            btnSend.disabled = false;
        }
        
    }

}

//Reset form
function resetForm(e){
    e.preventDefault();

    sendForm.reset();
}

//Check text length in the fields
function checkLength(field) {

    if(field.value.length) {
        field.style.borderBottomColor = 'green';
        field.classList.remove('error');
    } else {
        field.style.borderBottomColor = 'red';
        field.classList.add('error');
    }
}

function validateEmail(email) {

    const message = email.value;
    if(message.indexOf('@') !== -1) {
        email.style.borderBottomColor = 'green';
        email.classList.remove('error');
    } else {
        email.style.borderBottomColor = 'red';
        email.classList.add('error');
    }
}

//Send email
function sendEmail(e){
    //Spinner to press Send
    const spinnerGif = document.querySelector('#spinner');
    spinnerGif.style.display = 'block';

    //Gif which sends email
    const sent = document.createElement('img');
    sent.src = 'img/mail.gif';
    sent.style.display = 'block';

    //Hide spinner and show sent gif
    setTimeout(function(){
        spinnerGif.style.display = 'none';
        document.querySelector('#loaders').appendChild(sent);
        setTimeout(function(){
            sent.remove();
            sendForm.reset();
        },3000);
    }, 2000);

    e.preventDefault();

}