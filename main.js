const form = document.getElementById('form-contato');
const imgLixeira = '<img src="./images/lixeira.png" alt="Lixeira" />';
const imgEditar = '<img src="./images/editar.png" alt="Editar" />';
const cadastro = [];
const telefone = [];

let linhas = '';

form.addEventListener ('submit', function(e)  {
    e.preventDefault();
   
    adicionaLinha();
    atualizaTabela();
    
    //alert(`Atividade: ${inputNomeAtividade.value} - Nota: ${inputNotaAtividade.value}` );
});

function adicionaLinha() {
    const inputNomeCompleto = document.getElementById('nome-completo');
    const inputTelefone = document.getElementById('numero-telefone');

    if(cadastro.includes(inputNomeCompleto.value)){
        alert(`O Nome: ${inputNomeCompleto.value} já foi inserido`);
    } else {
        cadastro.push(inputNomeCompleto.value);
        telefone.push(inputTelefone.value);
    
        let linha = '<tr>';
        linha += `<td>${inputNomeCompleto.value}</td>`;
        linha += `<td>${inputTelefone.value}</td>`;
        linha += `<td>${imgLixeira} ${imgEditar}</td>`;
        linha += '</tr>';

        linhas += linha;
    }

        inputNomeCompleto.value = '';
        inputTelefone.value = '';

    }

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}


