let form = document.getElementById('CadastroForm');
let lista = document.getElementById('listaAluno');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nome = document.getElementById('nomeAluno').value;
    const idade = document.getElementById('idadeAluno').value;
    const telefone = document.getElementById('telefone').value;
    const CPF = document.getElementById('CPFAluno').value;

    const novoItem = document.createElement('li');
    novoItem.innerHTML = `<strong>${nome}</strong> - ${idade} anos - CPF: ${CPF} - Telefone: ${telefone}`;

    lista.appendChild(novoItem);

    form.reset();
});