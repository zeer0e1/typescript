"use strict";
async function fetchProduct() {
    const response = await fetch("https://api.origamid.dev/json/notebook.json");
    const data = await response.json();
    showProduct(data);
}
fetchProduct();
function showProduct(data) {
    document.body.innerHTML = `
    <div>
      <h2>${data.nome}</h2>
      <h3>Descricão</h3>
      <p>${data.descricao}</p>
      <p> <strong>Fabricante </strong>: ${data.empresaFabricante.nome}</p>
    </div>
  `;
}
