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

// Adiciona o evento de clique aos botões
expandButton.addEventListener("click", () => {
  SMContainerMin.style.display = "none";
  SMContainerExpanded.style.display = "flex";
});

minimizeButton.addEventListener("click", () => {
  SMContainerMin.style.display = "flex";
  SMContainerExpanded.style.display = "none";
});

// Canvas Partículas
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();

window.addEventListener("resize", resizeCanvas);

const particles = [];

for (let i = 0; i < 100; i++) {
    particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 3 + 1,
    dx: (Math.random() - 0.5) * 2,
    dy: (Math.random() - 0.5) * 2
    });
}

function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";

    particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fill();

    p.x += p.dx;
    p.y += p.dy;

    if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
    });

    requestAnimationFrame(drawParticles);
}

drawParticles();

// copiar texto
function copyText(event) {
    event.preventDefault(); // impede navegação padrão do link

    const texto = "sandybraga.psi@gmail.com";
    navigator.clipboard.writeText(texto)
      .then(() => {
        alert("Email copiado para área de transferência.");
      })
      .catch(err => {
        console.error("Erro ao copiar: ", err);
      });
    }