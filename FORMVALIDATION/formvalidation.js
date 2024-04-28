let nameerror = document.getElementById("nameError");
let phoneerror = document.getElementById("phoneError");
let mailerror = document.getElementById("mailError");
let messageerror = document.getElementById("textError");
let submiterror = document.getElementById("submitError");

function validateName() {
    let name = document.getElementById("contact-name").value;
    if (name.length == 0) {
        nameerror.innerHTML = 'Name is Required';
        return false;
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameerror.innerHTML = 'Write full name'
        return false;
    }
    nameerror.innerHTML = 'Valid';
    return true;
}

function validatePhone() {
    let phone = document.getElementById("phone-no").value;
    if (phone.length == 0) {
        phoneerror.innerHTML = 'Mobile Number is Required';
        return false;
    }
    if (phone.length !== 10) {
        phoneerror.innerHTML = 'Phone Number Should be 10 digit';
        return false;
    }
    if (!phone.match(/^[0-9]{10}$/)) {
        phoneerror.innerHTML = 'Only digit Please';
        return false;
    }
    phoneerror.innerHTML = 'Valid';
    return true;
}
function validateEmail() {
    let email = document.getElementById("phone-no").value;
    if (email.length == 0) {
        mailerror.innerHTML = 'E-mail Number is Required';
        return false;
    }

    if (!email.match(/^[A-Za-z\>_\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        mailerror.innerHTML = 'Only valid Email';
        return false;
    }
    mailerror.innerHTML = 'Valid';
    return true;
}
function validateMsg() {
    let msg = document.getElementById("text-msg").value;
    let required = 30;
    let left = required - msg.length;
    if (left > 0) {
        messageerror.innerHTML = left + ' more Character required'
        return false;
    }
    messageerror.innerHTML = 'Valid';
    return true;
}

function validateform() {
    if (!validateName() || !validatePhone || !validateEmail() || !validateMsg()) {
        submiterror.style.display = 'block'
        submiterror.innerHTML = 'Please fix Error to Submit'
        setTimeout(function () {
            submiterror.style.display = 'none'
        }, 3000);
        return false;
    }
}