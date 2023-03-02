type curso = [DadosCurso];
type tittleCurso = HTMLElement;
interface DadosCurso {
  nome: string;
  horas: number;
  aulas: number;
  gratuito: boolean;
  tags: String[];
  id: Array<Number>;
  nivel: string;
}

async function fethCursos() {
  const response = await fetch("https://api.origamid.dev/json/cursos.json");
  const data = await response.json();
  mostrarCursos(data);
}

fethCursos();

function mostrarCursos(cursos: curso) {
  const title: HTMLElement = document.createElement("h2");
  cursos.forEach((curso) => {
    document.body.innerHTML += `
     <h2> ${(title.innerHTML = curso.nome)}</h2>
      <p>Horas: ${curso.horas}</p>
      <p>Quantidade de aulas: ${curso.aulas} </p>
      <p>É gratuito: ${curso.gratuito ? "Sim" : "Não"}</p>
      <span>Tags: </span>
      ${curso.tags.map((tag) => {
        return ` ${tag} `;
      })}
    `;
  });
}

function colorTittle(value: HTMLElement, nivelCurso: string) {
  if (nivelCurso === "Iniciante") {
    return (value.style.color = "Blue");
  } else {
    return (value.style.color = "Red");
  }
}
