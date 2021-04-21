/*Sequência lógica

1 - armazenar valores e-mail e botão

*/ 

document.querySelector('.button news__button').addEventListener("click", function mostrarEmail(event){

    //evento para a exibição do texto na tela principal
    event.preventDefault();

    let mensagemEmail = document.getElementById('newsInputEmail');
    let mensagemAll = document.querySelector('.mensagem');

    if (mensagemEmail.value === '') {
        mensagemAll.innerHTML = 'Preencha o campo de email';
    } else {
        mensagemAll.innerHTML = (`${newsInputEmail.value} foi o email cadastrado.`);
    }

});
