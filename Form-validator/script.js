const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Show input error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small=formControl.querySelector('small');
    small.innerText= message;
}


//Show success outline
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}


// Check email is valid
function checkEmail(input){
    const regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          
    if(regexp.test(input.value.trim())){
        showSuccess(input);
    }else{
        showError(input, 'Email is not valid');
    }
}



// check required fields
function checkRequired(inputArr) {
    inputArr.forEach(function(input) {
        //console.log(input.value);
        if(input.value.trim() === ''){
            showError(input,`${getFieldName(input)} is required`);
        }
    });
}


//Check input length
function checkLength(input,min,max){
    if(input.value.length < min){
        showError(input, `${getFieldName(input)} must be atleast ${min} characters`);
    }else if(input.value.length > max){
        showError(input, `${getFieldName(input)} must be less than ${max} characters`);
    }else{
        showSuccess(input);
    }
}


// Check passwords match
function checckPasswordsMatch(input1,input2){
    if(input1.value !== input2.value){
        showError(input2, 'Passwords do not match');
    }else{
        showSuccess(input2);
    }
}


// Get fieldName
function getFieldName(input){
    return input.id.charAt(0).toUpperCase()+input.id.slice(1);
}



/* eventListner used for submit */
form.addEventListener('submit',function(e){
    e.preventDefault();

    checkRequired([username,email,password,password2]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    checkEmail(email);
    checckPasswordsMatch(password,password2);


    //very messy too many if-else
    /*if(username.value == ''){
        //alert('Username required');
        showError(username, 'Username required');
    }else{
        showSuccess(username);
    }

    if(email.value == ''){
        //alert('email required');
        showError(email, 'Email required');
    }else if(!isValidEmail(email.value)){
        showError(email, 'Email is not valid');
    }else{
        showSuccess(email);
    }


    if(password.value == ''){
        //alert('password required');
        showError(password, 'Password required');
    }else{
        showSuccess(password);
    }

    if(password2.value == ''){
        //alert('password2 required');
        showError(password2, 'Password required');
    }else{
        showSuccess(password2);
    }*/
    //console.log(username.value);
})