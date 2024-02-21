// Ativar links do menu

const menu_navegacao = Array.from(
  document.querySelectorAll(".header .navegacao a")
);

function menuAtivo(elemento) {
  const url_atual = window.location.href;
  if (url_atual.includes(elemento.href)) {
    elemento.classList.add("ativo");
  }
}

menu_navegacao.forEach(menuAtivo);

// Ativar links do orçamento

const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
}

parametros.forEach(ativarProduto);

// Perguntas frequentes

const perguntas = document.querySelectorAll(".perguntas-bg button");

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("ativa");
  const ativa = resposta.classList.contains("ativa");
  pergunta.setAttribute("aria-expanded", ativa);
}

function eventosPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}

perguntas.forEach(eventosPerguntas);

// Galeria de imagens

const galeria = Array.from(document.querySelectorAll(".bicicleta-imagens img"));
const galeriaContainer = document.querySelector(".bicicleta-imagens")

function trocaClique(event) {
  const imagem = event.currentTarget;
  galeriaContainer.prepend(imagem);
}

function galeriaClique(imagem) {
  imagem.addEventListener("click", trocaClique);
}

galeria.forEach(galeriaClique);
