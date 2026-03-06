const rodape = document.getElementById("rodape")
// rodape.style.color = "red"
const novoTitulo = document.createElement("h2")
novoTitulo.textContent = "Um novo Titulo"
// console.log(novoTitulo)
rodape.appendChild(novoTitulo)


const header = document.getElementById("exemplo")
header.appendChild(novoTitulo)

header.addEventListener("click", () => {
    alert("batata")
})