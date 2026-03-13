//Peça três notas de um aluno, calcule a média e informe:
//"Aprovado" se a média for maior ou igual a 7
//"Recuperação" se for maior ou igual a 5 e menor que 7
//"Reprovado" se for menor que 5
 
const nota1 = Number(prompt("digite a primeira nota"))
const nota2 = Number(prompt("digite a segunda nota"))
const nota3 = Number(prompt("digite a terçeira nota"))
 
const media = (nota1 + nota2 + nota3) / 3
console.log(media)
 
if (media > 6) {
    alert ("aprovado")
}else if ( media >= 5) {
    alert ("Recuperação")
}else if (media <= 4) {
    alert ("reprovado")
}
 