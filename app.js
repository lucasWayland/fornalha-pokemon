function busca() {
    let section = document.getElementById("resultados-pesquisa")
console.log(section);

let campoPesquisa = document.getElementById("campo-pesquisa").value

if (!campoPesquisa){
  section.innerHTML = "<p>Nada foi encontrado. Digite o nome do pokemon ou uma caracteristica.</p>"
  return
}

campoPesquisa = campoPesquisa.toLowerCase()

let resultados = "";
let nome = "";
let descricao = "";

for(let dado of dados) {
  nome = dado.nome.toLowerCase()
  descricao = dado.descricao.toLowerCase()

  if (nome.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
    resultados += `
    <div class="item-resultado">
    <h2>${dado.nome}</h2>
      <a href=${dado.link}" target="_blank">Visite a pokedex oficial!</a>
      <p class="descricao-meta">${dado.descricao}</p>
    </div>
    `
   }
  
}

if(!resultados){
  resultados = "<p>Nada foi encontrado.</p>"
}

section.innerHTML = resultados
}

