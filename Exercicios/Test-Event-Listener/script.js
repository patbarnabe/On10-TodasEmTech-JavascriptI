document.getElementById('acoesBotao').addEventListener('click', function acionarBotao(event) {
    event.preventDefault();

    const mudarCorTitulo = document.querySelector('.meu-titulo').style.color = "blue"; 
    console.log(mudarCorTitulo.value);

    const mudaParagrafo = document.querySelector('#meuNome').innerHTML += " e eu tenho 25 anos.";

    const mudarEstiloSpan = document.querySelector('span').style.textDecoration = 'underline';
});
