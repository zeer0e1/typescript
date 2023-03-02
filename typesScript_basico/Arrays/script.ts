const numeros = [10, 20, 30, 40];
const produtos = [30, 40, "TAXA", 20, "PRODUTO", 40];
function maiorQue10(data: number[]) {
  data.filter((n) => n > 10);
}

function filtrarValores(data: (string | number)[]) {
  return data.filter((item) => typeof item == "number");
}
