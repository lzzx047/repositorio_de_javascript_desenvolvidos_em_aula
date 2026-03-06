

function exercicio2salariojs () {
//Peça o valor que uma pessoa ganha por hora e a quantidade de horas trabalhadas no mês.
//Mostre quanto ela vai receber no final do mês.
const hora = Number(prompt('Digite uma hora: '))
const valor = Number(prompt('Digite um valor por hora: '))
alert("resultado de "+ hora + " * " + valor + " = " + (hora * valor))    

}
 
const buttonexercicios2 = document.getElementById("Exercicio2salario.js")
buttonexercicios2.addEventListener('click', () => { exercicio2salariojs ()})
// o carinha de escuta - addEventListener