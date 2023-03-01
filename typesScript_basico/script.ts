// Com ts temos que definir na criação da variavel o tipo que ela vai ter
// Fazemos isso com dois pontos :
const produto: string = "Livro";
let preco: number = 200;

// Depois de adicionado o tipo não podemos colocar outro valor na variável a não ser do tipo que foi definido

/**
 * Isso geraria um erro:
 *  preco = "Texto"
 * Se fosse fosse no js isso não iria gerar um erro mas no TS sim
 */

const carro: {
  marca: string;
  portas: number;
} = {
  marca: "audi",
  portas: 2,
};

// a type anotation é mais usado em funções para passar o tipo do parametro

function somar(a: number, b: number): number {
  return a + b;
}

somar(4, 10);
somar(3, 2);

const nintendo = {
  nome: "Nintendo",
  preco: "2000",
};

/** todo parametro de funcao deve ser tipao */

function transformarPreco(produto: { nome: string; preco: string }) {
  produto.preco = "R$ " + produto.preco;
  return produto;
}

//**UNION TYPES */

// Podemos passar para a variavel string ou number através do union types
let total2: string | number = 200;
total2 = "4000";

function isNumber(value: string | number) {
  if (typeof value === "number") {
    return true;
  } else {
    return false;
  }
}

const button2 = document.querySelector("button");

button2?.click();
