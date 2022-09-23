// function anonymous

const mostrarNomeCompleto = function (nome, sobrenome) {
    return nome + sobrenome;
}

// arrow function

const IMC = (peso, altura) => {
    return peso / (altura * altura);
}

console.log(mostrarNomeCompleto('Bruno ', 'Fernandes Hebling'));
console.log(IMC(120, 1.90));
