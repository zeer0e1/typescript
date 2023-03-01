"use strict";
function preencherDados(dados) {
    document.body.innerHTML = `
  <div>
    <h2> ${dados.nome}</h2>
    <p> ${dados.preco}</p>
    <p> ${dados.teclado ? "sim" : "Não"} </p>
  </div>`;
}
preencherDados({
    nome: "Computador",
    preco: 23.0,
    teclado: true,
});
function pintarCategoria(categoria) {
    if (categoria === "Codigo") {
        console.log("Pintar azul");
    }
}
