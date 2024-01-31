/* Show menu */

/* Menu Show*/
/* Validar se a constante existe */

/* Menu Hidden */
/* Validar se a constante existe */

/* Remover menu do celular */

/* Scroll sections active Link */

/* Change background header */

/* Show scroll up */

/* About tabs */
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]');

tabs.forEach((tab) => {
    tab.addEventListener('click', () => { 
        const target = document.querySelector(tab.dataset.target);

        tabContents.forEach((tabContent) => {
            tabContent.classList.remove('tab__active');
        });

        target.classList.add('tab__active');

        tabs.forEach((tab) => {
            tab.classList.remove('tab__active')
        });

        tab.classList.add('tab__active');
    });
});

/* Formulário de contato */
const contatoForm = document.getElementById('contato-form'),
      contatoName = document.getElementById('contato-name'),
      contatoEmail = document.getElementById('contato-email'),
      contatoSubject = document.getElementById('contato-subject'),
      contatoMessage = document.getElementById('contato-message'),
      mensagemErro = document.getElementById('mensagem-erro');

    const enviarEmail = (e) => {
        e.preventDefault();

        // Verificar se o campo a ser preenchido tem algum tipo de valor
        if (
            contatoName.value === '' ||
            contatoEmail.value === '' || 
            contatoSubject.value === '' || 
            contatoMessage.value === ''
          ) {

        // Mensagem de erro
            mensagemErro.textContent = 'Preencha todos os campos obrigatórios'
        } 

        else {
            // serviceID - TemplateID - #form - publickey
            emailjs.sendForm(
                'service_rj4nwud',
                'template_p2ri2vl',
                '#contato-form',
                'XAvL7RxhjDLFfUFEm'
                ).then(() => {
                    // Show menssage and add color, window + dot to open emoji
                    mensagemErro.classList.add('color-first');
                    mensagemErro.textContent = 'Mensagem enviada com sucesso!';

                    // Remover mensagem depois de 7 segundos
                    setTimeout(() => {
                        mensagemErro.textContent = '';
                    }, 5000);
                }, 
                (error) => {
                    alert('Oxe! Alguma coisa aconteceu de errado...', error);
                }
            );

            // limpar campos de entrada
            contatoName.value = '';
            contatoEmail.value = '';
            contatoSubject.value = '';
            contatoMessage.value = '';
        }
};

    contatoForm.addEventListener('submit', enviarEmail);

/* Efeito Máscara */

/*const items = document.querySelectorAll(".portifolio__img");
const mascara = document.querySelectorAll(".mascara-off");
items.forEach((item, index) => {
    item.addEventListener("mouseover", () => {
        item.classList.add("mascara-on");
        mascara[index].classList.remove("mascara-off");
        mascara[index].classList.add("mascara-on");
    });

    item.addEventListener("mouseout", () => {
        item.classList.remove("mascara-on");
        mascara[index].classList.remove("mascara-on");
        mascara[index].classList.add("mascara-off");
    });
});*/
