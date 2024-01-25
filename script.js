let number1 = prompt(`Insira primeiro número`);
let number2 = prompt(`Insira o segundo número`);

let sum = Number(number1) + Number(number2);
let subt = Number(number1) - Number(number2);
let mult = Number(number1) * Number(number2);
let divis = Number(number1) / Number(number2);
let rest = Number(number1) % Number(number2);

alert(sum)
alert(subt)
alert(mult)
alert(divis)
alert(rest)


let parImpar = sum/2
if (sum & 1) {
    alert(`A soma é impar`)
} else {
    alert("A soma é par")
}

if (number1 == number2) {
    alert(`Os dois números são iguais`)
} else {
    alert(`Os números são diferentes`)
}