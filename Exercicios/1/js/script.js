document.querySelector('#botaoDeEnviar').addEventListener('click', function armazenarDados(event) {
    event.preventDefault();

    let pegaNome = document.getElementById('nomeDaPessoa');
    let exibeResposta = document.getElementById('resposta');

    if (pegaNome.value === '') {
        exibeResposta.innerText = 'Por favor, digite o seu nome';
    } else {
        exibeResposta.innerHTML = (`${pegaNome.value}, seus dados foram salvos com sucesso!`);
    }
})


//Resolvendo o exercício com Condicional Ternário ao invés do if/else

pegaNome.value === '' ? exibeResposta.innerText= 'Por favor, digite o seu nome' : exibeResposta.innerHTML = (`${pegaNome.value}, dados salvos com sucesso!`)

