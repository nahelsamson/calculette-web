function calculer() {
const n1 = parseFloat(document.getElementById('num1').value);
const n2 = parseFloat(document.getElementById('num2').value);
const operation = document.getElementById('operation').value;
const resultat = document.getElementById('resultat');


if (isNaN(n1) || isNaN(n2)) {
resultat.textContent = 'Résultat : valeurs invalides';
return;
}


let res;


switch (operation) {
case 'add':
res = n1 + n2;
break;
case 'sub':
res = n1 - n2;
break;
case 'mul':
res = n1 * n2;
break;
default:
resultat.textContent = 'Résultat : opération inconnue';
return;
}


resultat.textContent = 'Résultat : ' + res;
}