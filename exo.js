/*
exo 1
 */
let exo1 = document.getElementById('is-integer');
if(Number.isInteger(exo1)){
    exo1.innerHTML += " = est un nombre entier";
}
else{
    exo1.innerHTML += " = n'est pas un nombre entier";
}
/*
exo 2
 */
let exo2 = document.getElementById('is-nan');
if (isNaN(exo2)){
    exo2.innerText +=" = la valeur isNan"
}
else {
    exo2.innerText += " = la valeur es un nombre"
}
/*
exo 3
 */
let exo3 = document.getElementById('parse-float');
let number = parseFloat(exo3.innerHTML);
exo3.innerHTML = +(number * 23)+ "% de la population";
/*
exo 4
 */
let exo4 = document.getElementById('parse-int');
let number1 = parseInt(exo4.innerHTML);
exo4.innerHTML = parseInt(number1 / 23)+ "px";
/*
exo 5
 */
let exo5 = document.getElementById('to-fixed');
let number2 =parseFloat(exo5.innerHTML);
exo5.innerHTML=number2.toFixed(2)
