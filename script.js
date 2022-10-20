const h1=document.querySelector('h1');
const p=document.querySelector('p');
const parrafoClass=document.querySelector('.parrafoClass');
const parrafoID=document.querySelector('#parrafoID');
const input=document.querySelector('input');

console.log(input.value);

console.log({
h1,p,parrafoClass,parrafoID,input
});

h1.innerHTML='clase <br> JavaScrip';
h1.innerText='clase <br> JavaScrip';
console.log(h1.getAttribute('class')); 
console.log(h1.setAttribute('class','rojo')); 
h1.classList.add('amarillo');

const img=document.createElement('img');
img.setAttribute('src','https://static.javatpoint.com/images/javascript/javascript_logo.png');
console.log(img);
parrafoID.innerHTML="";
parrafoID.append('clase <br> JavaScrip');


