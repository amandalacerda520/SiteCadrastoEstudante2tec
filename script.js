let form = document.getElementById('CadastroForm');
let lista = document.getElementById('listaAluno');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nome = document.getElementById('nomeAluno').value;
    const idade = document.getElementById('idadeAluno').value;

    const novoItem = document.createElement('li');
    novoItem.innerHTML = `<strong>${nome}</strong> - ${idade} anos`;

    lista.appendChild(novoItem);

    form.reset();
});