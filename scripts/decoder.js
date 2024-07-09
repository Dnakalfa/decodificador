// Função para criptografar a palavra
function codificar() {
    const inputText = document.getElementById('textoDeEntrada').value.toLowerCase();
    const result = inputText
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    document.getElementById('textoDeEntrada').value = result;
    adicionarAoHistorico(result);
}

// Função para descriptografar a palavra
function decodificar() {
    const inputText = document.getElementById('textoDeEntrada').value.toLowerCase();
    const result = inputText
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    document.getElementById('textoDeEntrada').value = result;
    adicionarAoHistorico(result);
}

function adicionarAoHistorico(texto) {
    const listaHistorico = document.getElementById('listaHistorico');
    const novoItem = document.createElement('li');
    novoItem.textContent = texto;
    listaHistorico.appendChild(novoItem);
}

function limparHistorico() {
    document.getElementById('listaHistorico').innerHTML = '';
    document.getElementById('textoDeEntrada').value = '';
}


