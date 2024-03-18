function message(text) {
    const div = document.createElement('div');
    const h4 = document.createElement('h4');

    h4.innerText = text;

    div.appendChild(h4);

    setTimeout(() => {
        document.body.appendChild(div);
    }, 2000);
}

const div = document.querySelector('div');
const input = document.querySelector('input');

// função
let btnbbbClickHandler = () => {
    div.innerHTML = '';
    div.innerHTML = '<h2>DARLISON DE SOUZA SILVA</h2><br><br> <p>[...] evolution of mankind, we start to believe that maybe, the correlations made in this text might be correctly indicating a tendency for the arrival of a new "connectivity era".</p>';
    input.style = 'display: block;';
    input.disabled = true;
};

// função
let btncccClickHandler = () => {
    div.innerHTML = '';
    div.innerHTML = '<h2>FORMULÁRIO DE INCRIÇÃO</h2> <br> <input type="text" placeholder="digite o seu nome"> <br> <input type="number" placeholder="digite a sua idade"> <br> <button>VERIFICAR</button> ';
    input.style = 'display: none;';
};

// variável
const btnbbb = window.document.getElementById('bbb').addEventListener('click', btnbbbClickHandler);

// variável
const btnccc = window.document.getElementById('ccc').addEventListener('click', btncccClickHandler);

window.document.querySelector('#ddd').addEventListener('click', () => {
    div.innerHTML = '';
    input.style.display = 'block';
    window.document.getElementById('bbb').removeEventListener('click', btnbbbClickHandler);
    window.document.getElementById('ccc').removeEventListener('click', btncccClickHandler);

    message("SEU TESTE DEU CERTO");
});



window.document.getElementById('aaa').addEventListener('click', btnbbbClickHandler);


window.document.getElementById('mmm').addEventListener('click', function() {
     
    const box = document.querySelector('.box');
    let visible = true;

    const toogleMessage = () => {

        if(visible) {
            box.innerHTML = ''; // oculta a mensagem
        } else {
            box.innerHTML = '<h1>I WILL WIN THIS</h1>';
        }

        visible = !visible; // Inverte o estado da mensagem para o próximo ciclo
    }

    const intervalID = setInterval(toogleMessage, 500);

    setTimeout(() => {
        clearInterval(intervalID); // Cancela o intevalo
        box.innerHTML = '';
    }, 100000);


})