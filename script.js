// Contador de cliques nos botões
const links = document.querySelectorAll("a");
links.forEach(link => {
  link.addEventListener("click", () => {
    console.log(`Botão clicado: ${link.textContent}`);
  });
});

// Efeito de fade-in simples
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".container").style.opacity = 0;
  setTimeout(() => {
    document.querySelector(".container").style.transition = "opacity 1s";
    document.querySelector(".container").style.opacity = 1;
  }, 100);
});

// função de ler mais e ler menos do sobre mim
const expandButton = document.querySelector(".expand-button");
const minimizeButton = document.querySelector(".minimize-button");
const SMContainerMin = document.querySelector(".SM-container-min");
const SMContainerExpanded = document.querySelector(".SM-container-expanded");

expandButton.addEventListener("click", () => {
  SMContainerMin.style.display = "none";
  SMContainerExpanded.style.display = "flex";
});

minimizeButton.addEventListener("click", () => {
  SMContainerMin.style.display = "flex";
  SMContainerExpanded.style.display = "none";
});