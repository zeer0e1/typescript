/// Criando um type produto para passar como parametros
type Produto = {
  nome: string;
  preco: number;
  teclado: boolean;
};

function preencherDados(dados: Produto) {
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

// Pode usado para qualquer coisa como se fosse escolhas
type Categorias = "Design" | "Codigo" | "Descord";

function pintarCategoria(categoria: Categorias) {
  if (categoria === "Codigo") {
    console.log("Pintar azul");
  }
}
