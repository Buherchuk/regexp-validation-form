let emailFlag = false;
let firstNameFlag = false;
let lastNameFlag = false;
let passwordFlag = false;

function createErrorElement(location){
    if(location.id != 'privacy'){
        if(location.nextElementSibling.className != 'error'){
            let div = document.createElement('div');
            div.classList.add('error');
            div.innerText = `Please provide a valid  ${location.placeholder}`;
            location.after(div);
        }
    }    
}
function removeErrorElement(location) {
    if (location.id != 'privacy') {
        if (location.nextElementSibling.className == 'error') {
            location.nextElementSibling.remove();
        } else {
            if (location.nextElementSibling.className != 'error') {
                let div = document.createElement('div');
                div.classList.add('error');
                div.innerText = `Please provide a valid  ${location.placeholder}`;
                location.after(div);
            }
        }
    }
}
document.querySelector('#privacy').onchange = function(e){
    if (document.querySelector('#privacy').checked && emailFlag && firstNameFlag && lastNameFlag && passwordFlag){
        document.querySelector('#signIn').disabled = false;
        document.querySelector('#signIn').style.backgroundColor = "mediumseagreen";
        if(document.querySelector('#privacy').nextElementSibling.className == 'error'){
            e.target.nextElementSibling.remove();
        }
    }else if(!document.querySelector('#privacy').checked || !emailFlag || !firstNameFlag || !lastNameFlag || !passwordFlag){
        document.querySelector('#signIn').disabled = true;
        document.querySelector('#signIn').style.backgroundColor = "gray";
        let div = document.createElement('div');
        div.classList.add('error');
        if(document.querySelector('#privacy').nextElementSibling.className != 'error'){            
            div.classList.add('error');
            div.innerText = 'This field is required';
            document.querySelector('#privacy').after(div);
        }
    }
}
document.forms.signUp.onchange = function (e) {
    let targ = e.target;
    let email = /^[A-Za-z]*@/;
    let firstName = /^[a-zA-Z]{1,20}$/;
    let lastName = /^[a-zA-Z]{1,20}$/;
    let password = /^[a-zA-Z0-9]{8,15}$/;
    if (targ.id == 'email'){
        if (email.test(targ.value)){
            emailFlag = true;
            if(targ.nextElementSibling.className == 'error'){
                removeErrorElement(targ);
            }
            
        }else{
            emailFlag = false;
            if(targ.nextElementSibling.className != 'error'){
                createErrorElement(targ);
            }
            
        }
    }else if (targ.id == 'firstName'){
        if (firstName.test(targ.value)){
            firstNameFlag = true;
            if(targ.nextElementSibling.className == 'error'){
                removeErrorElement(targ);
            }    
        }else{
            firstNameFlag = false;
            if(targ.nextElementSibling.className != 'error'){
                createErrorElement(targ);
            }
        }
    }else if (targ.id == 'lastName'){
        if (lastName.test(targ.value)){
            lastNameFlag = true;
            if(targ.nextElementSibling.className == 'error'){
                removeErrorElement(targ);
            }
        }else{
            lastNameFlag = false;
            if(targ.nextElementSibling.className != 'error'){
                createErrorElement(targ);
            }
        }
    }else if (targ.id == 'password'){
        if (password.test(targ.value)){
            passwordFlag = true;
            if(targ.nextElementSibling.className == 'error'){
                removeErrorElement(targ);
            }
        }else{
            passwordFlag = false;
            if(targ.nextElementSibling.className != 'error'){
                createErrorElement(targ);
            }
        }
    }
    if (emailFlag && firstNameFlag && lastNameFlag && passwordFlag){
        document.querySelector('#privacy').disabled = false;
        removeErrorElement(document.querySelector('#privacy'));
    }
}


