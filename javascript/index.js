function alertar() {
    alert('Ola');
}

function mostrarSaudacao() {
    let nome = window.prompt('Qual seu nome?');
    let idade = window.prompt('Qual sua idade?');
    let altura = window.prompt('Qual sua altura?');

    alert(`Olá ${nome}, sua idade é ${idade} e altura sua ${altura}`);
}

function somar() {
    let valor1 = Number(window.prompt('Digite o valor 1'));
    let valor2 = Number(window.prompt('Digite o valor 2'));

    let resultado = (valor1 + valor2);

    alert(resultado);
}

// criando botao para mudar a cor de fundo do body e voltar para cor original mudando a info do botao.
function mudarCorBody() {
    let corpo = document.querySelector('body');
    let button = document.querySelector('#mudar-cor');

    if (corpo.getAttribute('style') !== 'background-color: black') {
        corpo.setAttribute('style', 'background-color: black');
        button.innerHTML = 'Voltar para cor anterior';
    } else {
        corpo.setAttribute('style', 'background-color: white');
        button.innerHTML = 'Mudar Cor';
    }
}

// mostrar quadrados e circulos

let alternar = false;

// funcao para pegar uma div com classe, selecionar ela e mostrar com forEach setando os estilos e apresentando quando clicar no botao.
function mostrarQuadrados() {
    let divs = document.querySelectorAll('.quadrado');
    let button = document.querySelector('#mostrar-quadrados')
    alternar = !alternar;

    if (alternar === true) {
        divs.forEach(div => {
            div.setAttribute('style', 'width: 100px; height: 100px; border: 5px solid red;');
        });

        button.innerHTML = 'Esconder quadrados';
    } else {
        divs.forEach(div => {
            div.setAttribute('style', null);
        });

        button.innerHTML = 'Mostrar quadrados';
    }
}


// funcao para pegar uma div com classe, selecionar ela e mostrar com forEach setando os estilos e apresentando quando clicar no botao.
function mostrarCirculos() {
    let divs = document.querySelectorAll('.circulo');
    let button = document.querySelector('#mostrar-circulos')

    alternar = !alternar;


    if (alternar === true) {
        divs.forEach(div => {
            div.setAttribute('style', 'width: 100px; height: 100px; border: 5px solid green; border-radius: 50%;');

            button.innerHTML = 'Esconder circulos';
        });
    } else {
        divs.forEach(div => {
            div.setAttribute('style', null);

            button.innerHTML = 'Mostrar circulos';
        });
    
    }
}

