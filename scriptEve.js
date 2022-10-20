const calculo1=document.querySelector('#calculo1');
const calculo2=document.querySelector('#calculo2');
const boton=document.querySelector('#btnCalcular');
const form=document.querySelector('#form');
const resultado=document.querySelector('#resultado');

form.addEventListener('submit', sumarInputValues);

function sumarInputValues(event){
    event.preventDefault();
    resultado.innerHTML='Resultado: '+calculo1.value +calculo2.value;
}


