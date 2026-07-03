/* =========================
   SCROLL SUAVE
========================= */

const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

/* =========================
   HEADER DINÂMICO
========================= */

window.addEventListener("scroll", function () {
    const header = document.getElementById("header");

    if (window.scrollY > 50) {
        header.style.background = "rgba(0,0,0,0.95)";
        header.style.borderBottom = "1px solid #d4af37";
    } else {
        header.style.background = "rgba(0,0,0,0.7)";
        header.style.borderBottom = "1px solid rgba(212,175,55,0.2)";
    }
});

/* =========================
   FAQ ABRIR / FECHAR
========================= */

const faqs = document.querySelectorAll(".faq-item");

faqs.forEach(item => {
    item.addEventListener("click", () => {
        const p = item.querySelector("p");

        if (p.style.display === "block") {
            p.style.display = "none";
        } else {
            p.style.display = "block";
        }
    });
});

/* =========================
   ANIMAÇÃO AO SCROLL
========================= */

const elements = document.querySelectorAll(".card, .box, .avaliacao, .sobre-container");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
        }
    });
}, {
    threshold: 0.1
});

elements.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = "translateY(30px)";
    el.style.transition = "0.6s ease-out";
    observer.observe(el);
});

/* =========================
   WHATSAPP FLUTUANTE (PULSO)
========================= */

const whatsapp = document.querySelector(".whatsapp-float");

setInterval(() => {
    whatsapp.style.transform = "scale(1.1)";
    setTimeout(() => {
        whatsapp.style.transform = "scale(1)";
    }, 300);
}, 3000);