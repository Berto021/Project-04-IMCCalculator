//capturar o evento de submit(enviar)
const form = document.querySelector('#formulario');//aqui eu to selecionando o Id:formulario e dando pra variavel form
form.addEventListener('submit', function(evento){//aqui eu to adicionando a variavel form um evento de submit que vai fazer um evento e esse evento é um preventDefault que cancela o evento, ou seja ele vai cancelar o envio quando apertarmos o botão
    evento.preventDefault();
const inputPeso = evento.target.querySelector('#peso')

const inputAltura = evento.target.querySelector('#altura');

const peso = Number(inputPeso.value);
const altura = Number(inputAltura.value);

if (!peso ){
    mostrarResultado('Peso inválido, digite novamente',false)
    return;

}
if (!altura){
    mostrarResultado('Altura inválida, digite novamente',false)
    return;

}
const imc = getImc(peso, altura);
const TipoImc = getTipoImc(imc);

const msg = `Seu IMC é ${imc} (${TipoImc}).`

mostrarResultado(msg,true);

});
function getTipoImc(imc){
    const nivel =['Abaixo do peso', 'Peso normal','Sobre peso','Obesidade grau 1','Obesidade grau 2','Obesidade grau 3']

    if(imc>=39.9){
        return nivel[5]
    }
    if(imc>= 34.9){
        return nivel[4]
    }
    if(imc >=29.9){
                        
        return nivel[3]
    }
    if(imc >= 24.9){
        return nivel [2]

    }
    if (imc >= 18.5){
        return nivel [1]
    }
    if (imc < 18.5){
        return nivel [0]
    }
}

function getImc (peso, altura){
    const imc = peso / altura ** 2;
    return imc.toFixed(2)

}


function criaP(className){
    const paragrafo = document.createElement('p');
    return paragrafo;
}

function mostrarResultado (msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML=``;

  

    const p = criaP();

    if(isValid){

     p.classList.add(`resultado-bom`)
    }else{
        p.classList.add(`resultado-ruim`)
    }


    p.innerHTML = msg
    resultado.appendChild(p)


}