function mostrarDados(event) {
     event.preventDefault();

     let getTitulo = document.getElementById('titulo').value;
     let getAutor = document.getElementById('autor').value;
     let getIsbn = document.getElementById('isbn').value;
     let getData = document.getElementById('data').value;
     let getPaginas = document.getElementById('paginas').value;
     let dataCadastro = new Date().toLocaleDateString('pt-br'); 
     let horaCadastro = new Date().toLocaleTimeString('pt-br');
    
     document.getElementById('resposta').innerHTML += `
        <tr id="tabelaLivro">
            <td>${getTitulo}</td>
            <td>${getAutor}</td>
            <td>${getIsbn}</td>
            <td>${getData}</td>
            <td>${getPaginas}</td>
            <td>${dataCadastro}, ${horaCadastro}</td>
        </tr>
     `
} 

document.querySelector('#botarDeletar').addEventListener('click', function deletarLivro(event){
    event.preventDefault();

        document.getElementById('tabelaLivro').remove();
    
})