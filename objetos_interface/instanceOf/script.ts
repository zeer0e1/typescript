class Produto2 {
  name: string;
  preco: number;
  constructor(name: string, preco: number) {
    this.name = name;
    this.preco = preco;
  }
  precoReal() {
    return `R$ ${this.preco}`;
  }
}

const livro = new Produto2("TypeScript", 200);

class Livro {
  autor: string;
  constructor(autor: string) {
    this.autor = autor;
  }
}

class Jogo {
  Jogadores: number;
  constructor(jogadores: number) {
    this.Jogadores = jogadores;
  }
}

function buscarProduto(busca: string) {
  if (busca === "O hobbit") {
    return new Livro("J. R. .R Tolkien");
  }

  if (busca === "Dark Souls") {
    return new Jogo(1);
  }

  return null;
}

const produto3 = buscarProduto("O hobbit");

if (produto3 instanceof Livro) {
  produto3.autor;
}
