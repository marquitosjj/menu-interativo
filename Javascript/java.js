const btnMenu = document.getElementById("btn-menu");
const menu = document.getElementById("menu");

btnMenu.addEventListener("click", () => {
    menu.classList.toggle("ativo");
});

const btnDark = document.getElementById("btn-darkmode");

btnDark.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    btnDark.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

let contador = 0;
const contadorCarrinho = document.getElementById("contador-carrinho");

document.querySelectorAll(".btn-comprar").forEach(btn => {
    btn.addEventListener("click", () => {
        contador++;
        contadorCarrinho.textContent = contador;
        mostrarNotificacao("Item adicionado ao carrinho!");
    });
});

function mostrarNotificacao(texto) {
    const div = document.createElement("div");
    div.className = "notificacao";
    div.textContent = texto;

    Object.assign(div.style, {
        position: "fixed",
        right: "20px",
        bottom: "20px",
        background: "#3b4cca",
        color: "#fff",
        padding: "12px 20px",
        borderRadius: "8px",
        fontSize: "18px",
        zIndex: "1000",
        opacity: "0",
        transition: "0.4s"
    });

    document.body.appendChild(div);

    setTimeout(() => { div.style.opacity = "1"; }, 100);

    setTimeout(() => {
        div.style.opacity = "0";
        setTimeout(() => div.remove(), 400);
    }, 2000);
}

const campoBusca = document.getElementById("campo-busca");
const cards = document.querySelectorAll(".card");

campoBusca.addEventListener("input", () => {
    const termo = campoBusca.value.toLowerCase();
    cards.forEach(card => {
        const nome = card.querySelector("h3").textContent.toLowerCase();
        card.style.display = nome.includes(termo) ? "block" : "none";
    });
});

const filtro = document.getElementById("filtro");

filtro.addEventListener("change", () => {
    const categoria = filtro.value;
    cards.forEach(card => {
        const tipo = card.getAttribute("data-categoria");
        card.style.display = categoria === "todos" || categoria === tipo ? "block" : "none";
    });
});

cards.forEach(card => {
    const estrela = document.createElement("span");
    estrela.textContent = "⭐";
    estrela.className = "favorito";
    estrela.setAttribute("marcado", "false");

    estrela.addEventListener("click", () => {
        const marcado = estrela.getAttribute("marcado") === "true";
        estrela.style.opacity = marcado ? "0.3" : "1";
        estrela.setAttribute("marcado", !marcado);
    });

    card.appendChild(estrela);
});
