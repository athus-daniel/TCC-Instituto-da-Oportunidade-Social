// Buscar elementos

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const telefoneInput = document.querySelector('#telefone');
const horario = document.querySelector('#horario');
const msg = document.querySelector('.msg');
const msg_email = document.querySelector('#.msg_email');
const clientes = document.querySelector('#users')

//Método para receber o envio do formulário
myForm.addEventListener('submit', cadCliente);

//Função para registrar o cadastro
function cadCliente(evento){
    evento.preventDefault();

    if(nameInput.value === '' || emailInput.value === '' || telefoneInput.value === '' || horario.value === ''){
        const msgError = document.createElement('p');
        msgError.classList.add('error');
        msgError.innerHTML = 'Por favor preencha o campo vazio do formulário';
        msg.appendChild(msgError);

        setTimeout(() => msgError.remove(), 5000);
    }   else{

    //Criar elemento <li>
    const li = document.createElement('li');
    // Iserindo o conteúdo no elemento
    li.appendChild(
        document.createTextNode(`${nameInput.value} : ${emailInput.value} : ${telefoneInput.value} : ${horario.value}`)
    );
    //Associar informações do formulário
    clientes.appendChild('li');
    // Apagar informações do formulário
    nameInput.value = '';
    emailInput.value = '';
    telefoneInput.value = '';
    horario.getElementsByTagName('option')[0].selected = 'selected';
    nameInput.focus();

    };
};
