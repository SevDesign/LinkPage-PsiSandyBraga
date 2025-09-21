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
