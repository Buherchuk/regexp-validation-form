let emailFlag = false;
let firstNameFlag = false;
let lastNameFlag = false;
let passwordFlag = false;

function createErrorElement(location){
    if(location.nextElementSibling.className != 'error'){
        let div = document.createElement('div');
        div.classList.add('error');
        div.innerText = `Please provide a valid  ${location.placeholder}`;
        location.after(div);
        return true;
    }else{
        return false;
    }
}
function removeErrorElement(location){
    if(location.nextElementSibling.className == 'error'){
        location.nextElementSibling.remove();
        console.log('error element removed');
        return true;
    }else{
    if(location.nextElementSibling.className != 'error'){
        let div = document.createElement('div');
        div.classList.add('error');
        div.innerText = `Please provide a valid  ${location.placeholder}`;
        location.after(div);
        console.log('error element created');
        return true;
    }
    }
}
document.querySelector('#privacy').onchange = function(){
    if (emailFlag && firstNameFlag && lastNameFlag && passwordFlag){
        removeErrorElement(document.querySelector('#privacy'));
        let button = document.querySelector('#signIn');
        button.disabled = false;
        button.style.backgroundColor = "mediumseagreen";
    }else{
        if(document.querySelector('#privacy').nextElementSibling.className != 'error'){
            let div = document.createElement('div');
            div.classList.add('error');
            div.innerText = 'Please fill all fields below';
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
        if (email.test(targ.value) && targ.nextElementSibling.className == 'error'){
            emailFlag = true;
            removeErrorElement(targ);
        }else if(!email.test(targ.value) && targ.nextElementSibling.className != 'error'){
            emailFlag = false;
            createErrorElement(targ);
        }
    }else if (targ.id == 'firstName'){
        if (firstName.test(targ.value) && targ.nextElementSibling.className == 'error'){
            firstNameFlag = true;            
            removeErrorElement(targ);
        }else if(!firstName.test(targ.value) && targ.nextElementSibling.className != 'error'){
            firstNameFlag = false;
            createErrorElement(targ);
        }
    }else if (targ.id == 'lastName'){
        if (lastName.test(targ.value) && targ.nextElementSibling.className == 'error'){
            lastNameFlag = true;
            removeErrorElement(targ);
        }else if(!lastName.test(targ.value) && targ.nextElementSibling.className != 'error'){
            lastNameFlag = false;
            createErrorElement(targ);
        }
    }else if (targ.id == 'password'){
        if (password.test(targ.value) && targ.nextElementSibling.className == 'error'){
            passwordFlag = true;
            removeErrorElement(targ);
        }else if(!password.test(targ.value) && targ.nextElementSibling.className != 'error'){
            passwordFlag = false;
            createErrorElement(targ);
        }
    }else {
        return;
    }
}


