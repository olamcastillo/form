const formulario = document.getElementById("formulario");

const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");

const alertSuccess = document.getElementById("alert-success");
const alertName = document.getElementById("alert-name");
const alertEmail = document.getElementById("alert-mail");

const regUserName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const regUserEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;

const showSuccess = () => {
    alertSuccess.classList.remove('d-none')
}

const showErrors = (errors) => {
    errors.forEach( item => {
        console.log(item);
        item.type.classList.remove('d-none');
        item.type.textContent = item.msg;
        
        console.log(item);

    });
}

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    alertSuccess.classList.add('d-none')
    const errors = [];

    if (!regUserName.test(userName.value) || !userName.value.trim()) {
        userName.classList.add('is-invalid');
        errors.push({
            type: alertName,
            msg : 'Escriba un formato valido. Ej: olam' 
        })
    }else {
        userName.classList.remove('is-invalid'),
        userName.classList.add('is-valid'),
        alertName.classList.add('d-none')
    }

    if (!regUserEmail.test(userEmail.value) || !userEmail.value.trim()) {
        userEmail.classList.add('is-invalid');
        errors.push({
            type: alertEmail,
            msg : 'Escriba un formato valido. Ej: olam@dev.com' 
        })
    }else {
        userEmail.classList.remove('is-invalid'),
        userEmail.classList.add('is-valid'),
        alertEmail.classList.add('d-none')
    }

    if(errors.length !== 0) {
        showErrors(errors);
        return;
    }

    console.log ( " formulario enviado " ) ;
    showSuccess()
})