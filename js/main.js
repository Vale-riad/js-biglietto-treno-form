"use strict";
// 1. chiedo all'utente nome e cognome
const nomeCognome=document.getElementById("name").value;
console.log(nomeCognome);
// 2. chiedo all'utente quanti km vuole percorrere
const km=Number(document.getElementById("km").value);
console.log(km);
// 3. chiedo all'utente la sua fascia d'età
const age=document.getElementById("age").value;
console.log(age);
// 4. calcola la tariffa in base al km
let price =(0.21 * km);
console.log(price);
// 5. applicare uno sconto del 20% se il passeggero è minorenne
if (age<18) {
    price = price-(price * 0.2);
    console.log(price+(" minorenne"));
    document.getElementById("age").innerHTML=("Minorenne");
}
// .6 applicare uno sconto del 40% se il passeggero è un over 65
else if (age>=65) {
    price = price-(price * 0.4);
    console.log(price+(" over-65"));
    document.getElementById("age").innerHTML=("Over-65");
}
console.log('${price.toFixed(2)}€');

const btnGenerator = document.getElementById('btn-generator');
btnGenerator.addEventListener('click', function() {
  const nomeCognome = document.getElementById('name');
  console.log(nomeCognome.value);
  nomeCognome.value = '';
  const km = document.getElementById('km');
  console.log(km.value);
  km.value = '';
});