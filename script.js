/* =========================
   RESET
========================= */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: 'Montserrat', sans-serif;
    background: #0b0b0b;
    color: #ffffff;
    line-height: 1.7;
}

img {
    max-width: 100%;
    display: block;
}

a {
    text-decoration: none;
    color: inherit;
}

.container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
}


/* =========================
   CORES
========================= */

:root {
    --preto: #080808;
    --preto-2: #111111;
    --preto-3: #181818;
    --dourado: #c9a227;
    --dourado-claro: #e2c35a;
    --branco: #ffffff;
    --cinza: #bdbdbd;
    --borda: rgba(201, 162, 39, 0.35);
}


/* =========================
   HEADER
========================= */

.header {
    position: sticky;
    top: 0;
    z-index: 1000;
    background: rgba(8, 8, 8, 0.96);
    border-bottom: 1px solid var(--borda);
    backdrop-filter: blur(10px);
}

.header-container {
    min-height: 85px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 25px;
}

.logo h1 {
    font-size: 21px;
    font-weight: 600;
    letter-spacing: 0.5px;
    color: var(--branco);
}

.logo span {
    display: block;
    color: var(--dourado);
    font-size: 11px;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-top: 2px;
}


/* =========================
   MENU
========================= */

.nav ul {
    display: flex;
    list-style: none;
    gap: 25px;
}

.nav a {
    font-size: 13px;
    color: #dddddd;
    transition: 0.3s;
}

.nav a:hover {
    color: var(--dourado-claro);
}


/* =========================
   BOTÕES
========================= */

.btn-primary,
.btn-secondary,
.btn-whatsapp-header {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 14px 24px;
    border-radius: 3px;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.3px;
    transition: 0.3s ease;
    cursor: pointer;
}

.btn-primary {
    background: var(--dourado);
    color: #080808;
    border: 1px solid var(--dourado);
}

.btn-primary:hover {
    background: var(--dourado-claro);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(201, 162, 39, 0.2);
}

.btn-secondary {
    border: 1px solid var(--dourado);
    color: var(--dourado-claro);
    background: transparent;
}

.btn-secondary:hover {
    background: var(--dourado);
    color: #080808;
}

.btn-whatsapp-header {
    background: transparent;
    color: var(--dourado-claro);
    border: 1px solid var(--dourado);
    white-space: nowrap;
}

.btn-whatsapp-header:hover {
    background: var(--dourado);
    color: #080808;
}


/* =========================
   HERO
========================= */

.hero {
    position: relative;
    min-height: 680px;
    display: flex;
    align-items: center;
    overflow: hidden;
    background:
        radial-gradient(circle at 80% 50%, rgba(201, 162, 39, 0.08), transparent 35%),
        #080808;
}

.hero-container {
    position: relative;
    z-index: 2;
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    align-items: center;
    gap: 60px;
    padding: 80px 0;
}

.hero-text {
    max-width: 650px;
}

.hero-specialty {
    display: inline-block;
    color: var(--dourado-claro);
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 4px;
    margin-bottom: 18px;
}

.hero h2 {
    font-size: clamp(38px, 5vw, 65px);
    line-height: 1.1;
    font-weight: 600;
    margin-bottom: 25px;
}

.hero p {
    max-width: 580px;
    color: #c8c8c8;
    font-size: 17px;
    font-weight: 300;
    margin-bottom: 32px;
}

.hero-buttons {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
}

.hero-badge {
    margin-top: 28px;
    color: var(--dourado-claro);
    font-size: 12px;
    letter-spacing: 0.5px;
}

.hero-image {
    position: relative;
}

.hero-image::before {
    content: "";
    position: absolute;
    inset: -12px;
    border: 1px solid var(--borda);
    z-index: 0;
}

.hero-image img {
    position: relative;
    z-index: 1;
    width: 100%;
    max-height: 600px;
    object-fit: cover;
    object-position: center;
}


/* =========================
   FAIXA
========================= */

.top-bar {
    background: var(--dourado);
    color: #080808;
    text-align: center;
    padding: 14px 10px;
}

.top-bar p {
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.5px;
}


/* =========================
   ESPECIALIDADE
========================= */

.especialidade {
    padding: 100px 0;
    background:
        linear-gradient(
            135deg,
            #121212 0%,
            #080808 100%
        );
}

.especialidade-box {
    position: relative;
    display: grid;
    grid-template-columns: 100px 1fr;
    gap: 35px;
    padding: 55px;
    border: 1px solid var(--dourado);
    background:
        radial-gradient(
            circle at 10% 20%,
            rgba(201, 162, 39, 0.10),
            transparent 35%
        ),
        #101010;
    box-shadow: 0 25px 70px rgba(0, 0, 0, 0.5);
}

.especialidade-icon {
    width: 75px;
    height: 75px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--dourado);
    color: var(--dourado-claro);
    font-size: 34px;
}

.especialidade-label {
    display: block;
    color: var(--dourado);
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 3px;
    margin-bottom: 10px;
}

.especialidade h2 {
    color: var(--branco);
    font-size: clamp(30px, 4vw, 48px);
    line-height: 1.2;
    margin-bottom: 22px;
}

.especialidade p {
    color: #c3c3c3;
    font-size: 15px;
    font-weight: 300;
    max-width: 850px;
    margin-bottom: 18px;
}

.especialidade .btn-primary {
    margin-top: 12px;
}


/* =========================
   TÍTULOS
========================= */

.section-title {
    text-align: center;
    font-size: clamp(28px, 4vw, 42px);
    font-weight: 500;
    margin-bottom: 15px;
}

.section-title::after {
    content: "";
    display: block;
    width: 55px;
    height: 2px;
    background: var(--dourado);
    margin: 18px auto 0;
}

.section-subtitle {
    text-align: center;
    max-width: 700px;
    margin: 0 auto 50px;
    color: var(--cinza);
    font-weight: 300;
}


/* =========================
   ÁREAS DE ATUAÇÃO
========================= */

.atuacao {
    padding: 100px 0;
    background: #0b0b0b;
}

.grid-atuacao {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 18px;
}

.card {
    padding: 30px 25px;
    background: var(--preto-2);
    border: 1px solid #252525;
    min-height: 190px;
    transition: 0.3s ease;
}

.card:hover {
    border-color: var(--dourado);
    transform: translateY(-5px);
}

.card h3 {
    color: var(--dourado-claro);
    font-size: 17px;
    margin-bottom: 12px;
}

.card p {
    color: #aaa;
    font-size: 13px;
    font-weight: 300;
}


/* =========================
   DIFERENCIAIS
========================= */

.diferenciais {
    padding: 100px 0;
    background: #101010;
}

.grid-diferenciais {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    margin-top: 50px;
}

.box {
    padding: 35px 25px;
    text-align: center;
    border-top: 2px solid var(--dourado);
    background: #0b0b0b;
}

.box h3 {
    color: var(--dourado-claro);
    font-size: 16px;
    margin-bottom: 12px;
}

.box p {
    color: #aaa;
    font-size: 13px;
    font-weight: 300;
}


/* =========================
   CTA
========================= */

.cta {
    padding: 90px 20px;
    text-align: center;
    background:
        radial-gradient(
            circle at center,
            rgba(201, 162, 39, 0.12),
            transparent 50%
        ),
        #080808;
    border-top: 1px solid #222;
    border-bottom: 1px solid #222;
}

.cta h2 {
    font-size: clamp(28px, 4vw, 42px);
    margin-bottom: 15px;
}

.cta p {
    color: #aaa;
    margin-bottom: 30px;
}


/* =========================
   SOBRE
========================= */

.sobre {
    padding: 100px 0;
    background: #101010;
}

.sobre-container {
    display: grid;
    grid-template-columns: 0.8fr 1.2fr;
    gap: 70px;
    align-items: center;
    margin-top: 55px;
}

.sobre-img {
    position: relative;
}

.sobre-img::after {
    content: "";
    position: absolute;
    top: 15px;
    left: 15px;
    right: -15px;
    bottom: -15px;
    border: 1px solid var(--dourado);
    z-index: 0;
}

.sobre-img img {
    position: relative;
    z-index: 1;
    width: 100%;
}

.sobre-texto p {
    color: #c1c1c1;
    font-size: 15px;
    font-weight: 300;
    margin-bottom: 20px;
}


/* =========================
   AVALIAÇÕES
========================= */

.avaliacoes {
    padding: 100px 0;
    background: #0b0b0b;
}

.grid-avaliacoes {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
    margin-top: 50px;
}

.avaliacao {
    padding: 35px;
    background: #111111;
    border: 1px solid #252525;
}

.avaliacao p:first-child {
    color: var(--dourado);
    letter-spacing: 3px;
    margin-bottom: 15px;
}

.avaliacao p {
    color: #c4c4c4;
    font-size: 14px;
    font-weight: 300;
}

.avaliacao span {
    display: block;
    margin-top: 20px;
    color: var(--dourado-claro);
    font-size: 12px;
}


/* =========================
   FAQ
========================= */

.faq {
    padding: 100px 0;
    background: #101010;
}

.faq-item {
    max-width: 900px;
    margin: 20px auto;
    padding: 25px 30px;
    background: #0b0b0b;
    border-left: 2px solid var(--dourado);
}

.faq-item h3 {
    color: var(--dourado-claro);
    font-size: 16px;
    margin-bottom: 8px;
}

.faq-item p {
    color: #aaa;
    font-size: 14px;
    font-weight: 300;
}


/* =========================
   CONTATO
========================= */

.contato {
    padding: 100px 0;
    background: #080808;
}

.contato-box {
    max-width: 700px;
    margin: 50px auto 0;
    padding: 45px;
    text-align: center;
    border: 1px solid #292929;
    background: #111111;
}

.contato-box p {
    color: #bbb;
    margin-bottom: 15px;
    font-size: 14px;
}

.contato-box strong {
    color: var(--dourado-claro);
}


/* =========================
   FOOTER
========================= */

.footer {
    padding: 30px 20px;
    text-align: center;
    background: #050505;
    border-top: 1px solid #222;
}

.footer p {
    color: #777;
    font-size: 11px;
}


/* =========================
   WHATSAPP FLUTUANTE
========================= */

.whatsapp-float {
    position: fixed;
    right: 25px;
    bottom: 25px;
    z-index: 2000;

    width: 62px;
    height: 62px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;

    background: #25D366;
    color: white;

    font-size: 28px;

    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4);

    transition: 0.3s ease;
}

.whatsapp-float:hover {
    transform: scale(1.08);
}


/* =========================
   RESPONSIVO
========================= */

@media (max-width: 1000px) {

    .nav {
        display: none;
    }

    .grid-atuacao {
        grid-template-columns: repeat(2, 1fr);
    }

    .grid-diferenciais {
        grid-template-columns: repeat(2, 1fr);
    }

    .hero-container {
        grid-template-columns: 1fr;
        text-align: center;
    }

    .hero-text {
        margin: 0 auto;
    }

    .hero-buttons {
        justify-content: center;
    }

    .hero-badge {
        text-align: center;
    }

    .hero-image {
        max-width: 550px;
        margin: 0 auto;
    }

    .sobre-container {
        grid-template-columns: 1fr;
        gap: 50px;
    }

    .sobre-img {
        max-width: 500px;
        margin: 0 auto;
    }

    .sobre-texto {
        text-align: center;
    }

    .grid-avaliacoes {
        grid-template-columns: 1fr;
        max-width: 600px;
        margin-left: auto;
        margin-right: auto;
    }

}


/* =========================
   CELULAR
========================= */

@media (max-width: 600px) {

    .container {
        width: 92%;
    }

    .header-container {
        min-height: 75px;
    }

    .logo h1 {
        font-size: 17px;
    }

    .logo span {
        font-size: 9px;
        letter-spacing: 1.5px;
    }

    .btn-whatsapp-header {
        padding: 10px 12px;
        font-size: 10px;
    }


    /* HERO */

    .hero {
        min-height: auto;
    }

    .hero-container {
        padding: 65px 0;
        gap: 50px;
    }

    .hero h2 {
        font-size: 37px;
    }

    .hero p {
        font-size: 14px;
    }

    .hero-buttons {
        flex-direction: column;
    }

    .hero-buttons a {
        width: 100%;
    }


    /* ESPECIALIDADE */

    .especialidade {
        padding: 65px 0;
    }

    .especialidade-box {
        grid-template-columns: 1fr;
        padding: 30px 22px;
        text-align: center;
    }

    .especialidade-icon {
        margin: 0 auto;
    }

    .especialidade h2 {
        font-size: 30px;
    }

    .especialidade p {
        font-size: 14px;
    }

    .especialidade .btn-primary {
        width: 100%;
    }


    /* ÁREAS */

    .atuacao,
    .diferenciais,
    .sobre,
    .avaliacoes,
    .faq,
    .contato {
        padding: 70px 0;
    }

    .grid-atuacao {
        grid-template-columns: 1fr;
    }

    .grid-diferenciais {
        grid-template-columns: 1fr;
    }


    /* CTA */

    .cta {
        padding: 70px 20px;
    }


    /* SOBRE */

    .sobre-texto p {
        font-size: 14px;
        text-align: left;
    }

    .sobre-texto .btn-primary {
        width: 100%;
    }


    /* CONTATO */

    .contato-box {
        padding: 30px 20px;
    }

    .contato-box p {
        word-break: break-word;
    }

    .contato-box .btn-primary {
        width: 100%;
    }


    /* WHATSAPP */

    .whatsapp-float {
        width: 55px;
        height: 55px;
        right: 18px;
        bottom: 18px;
        font-size: 24px;
    }

}


/* =========================
   ANIMAÇÃO SUAVE
========================= */

@keyframes aparecer {

    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }

}

.hero-text,
.especialidade-box,
.card,
.box {
    animation: aparecer 0.8s ease both;
}