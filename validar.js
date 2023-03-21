function validarEnvio() {
    event.preventDefault(); //Evitar o envio do formulario
    if (numero.value.length !== 19) {
        numero.classList.add('is-invalid');
    } if (titular.value.length !== 20) {
        titular.classList.add('is-invalid');
    } if (cpf.value.length !== 14) {
        cpf.classList.add('is-invalid');
    } if (select_mes.value === '') {
        select_mes.classList.add('is-invalid');
    } if (select_ano.value === '') {
        select_ano.classList.add('is-invalid');
    }
}

function alterarNumero(){
    numero.classList.remove('is-invalid')
    if (numero.value.length === 19) {
        numero.classList.add('is-valid')
    }

    card_numero.innerHTML = numero.value;
    
    if (numero.value.substr(0, 1) === "4") {
        card_bandeira.innerHTML = '<img src="assets/logovisa.png" width="40px">';
    } else if (numero.value.substr(0, 1) === "5") {
        card_bandeira.innerHTML = '<img src="assets/Mastercard-Logo.png" width="40px">';
    }
}

function alterarTitulo(){
    titular.classList.remove('is-invalid')
    if (titular.value.length === 20) {
        titular.classList.add('is-valid')
    }

    card_nome.innerHTML = titular.value;
}


function alterarCPF(){
    cpf.classList.remove('is-invalid')
    if (cpf.value.length === 14) {
        cpf.classList.add('is-valid')
    }
}


function alterarMes(){
    select_mes.classList.remove('is-invalid')
    if (select_mes.value === '') {
        select_mes.classList.add('is-valid')
    }

    card_validade.innerHTML = select_mes.value + "/" + select_ano.value;
}


function alterarAno(){
    select_ano.classList.remove('is-invalid')
    card_validade.innerHTML = select_mes.value + "/" + select_ano.value;
}


function alterarCVV() {
    cvv.classList.remove('is-invalid');

    let ultimoDigito = cvv.value.substr(-1);

    if(isNaN(ultimoDigito)){
        let resultado = cvv.value.substr(0, cvv.value.length -1);

        cvv.value = resultado;
    }

    if (cvv.value.length === 3) {
        cvv.classList.add('is-valid');
    }

    card_cvv.innerHTML = cvv.value;
}


function alterarCPF() {
    cpf.classList.remove('is-invalid');

    let ultimoDigito = cpf.value.substr(-1);

    if(isNaN(ultimoDigito)){
        
        let quantidade = cpf.value.length;

        let resultado = cpf.value.substr(0, quantidade -1)

        cpf.value = resultado;
    }

    if (cpf.value.length === 3) {
        cpf.classList.add('is-valid');
    }
}