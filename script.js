/* =====================================================
   DRA. MARINES MARQUES
   ADVOCACIA CRIMINALISTA
   TEMA: AZUL ESCURO + BRANCO
===================================================== */


/* =====================================================
   VARIÁVEIS
===================================================== */

:root {

    --azul: #071a33;

    --azul-escuro: #030d1c;

    --azul-medio: #0c2544;

    --azul-claro: #12385f;

    --branco: #ffffff;

    --branco-suave: #f4f7fa;

    --cinza: #b8c2cf;

    --cinza-claro: #d6dde6;

    --cinza-escuro: #7e8a99;

    --borda: rgba(255, 255, 255, 0.10);

    --borda-forte: rgba(255, 255, 255, 0.25);

}


/* =====================================================
   RESET
===================================================== */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


html {
    scroll-behavior: smooth;
}


body {

    font-family: "Montserrat", sans-serif;

    background: var(--azul);

    color: var(--branco);

    line-height: 1.6;

    overflow-x: hidden;

}


a {

    color: inherit;

    text-decoration: none;

}


img {

    max-width: 100%;

    display: block;

}


/* =====================================================
   CONTAINER
===================================================== */

.container {

    width: 92%;

    max-width: 1180px;

    margin: 0 auto;

}


/* =====================================================
   BARRA SUPERIOR
===================================================== */

.top-bar {

    width: 100%;

    height: 4px;

    background: var(--branco);

}


/* =====================================================
   HEADER
===================================================== */

header {

    position: sticky;

    top: 0;

    z-index: 1000;

    background: rgba(3, 13, 28, 0.97);

    border-bottom: 1px solid var(--borda);

    backdrop-filter: blur(14px);

}


.header-container {

    min-height: 84px;

    display: flex;

    align-items: center;

    justify-content: space-between;

    gap: 25px;

}


/* =====================================================
   LOGO
===================================================== */

.logo {

    flex-shrink: 0;

}


.logo h1 {

    font-size: 20px;

    font-weight: 700;

    line-height: 1.1;

    letter-spacing: -0.3px;

}


.logo span {

    display: block;

    margin-top: 5px;

    color: var(--cinza-claro);

    font-size: 9px;

    font-weight: 600;

    letter-spacing: 2px;

    text-transform: uppercase;

}


/* =====================================================
   MENU
===================================================== */

.nav {

    display: flex;

    align-items: center;

    justify-content: center;

    gap: 25px;

}


.nav a {

    position: relative;

    color: #c5ced9;

    font-size: 11px;

    font-weight: 500;

    white-space: nowrap;

    transition: 0.3s ease;

}


.nav a:hover {

    color: var(--branco);

}


.nav a::after {

    content: "";

    position: absolute;

    left: 0;

    bottom: -8px;

    width: 0;

    height: 2px;

    background: var(--branco);

    transition: 0.3s ease;

}


.nav a:hover::after {

    width: 100%;

}


/* =====================================================
   BOTÕES
===================================================== */

.btn {

    display: inline-flex;

    align-items: center;

    justify-content: center;

    min-height: 48px;

    padding: 13px 25px;

    border-radius: 3px;

    font-size: 11px;

    font-weight: 700;

    letter-spacing: 0.2px;

    cursor: pointer;

    transition: 0.3s ease;

}


.btn-primary {

    background: var(--branco);

    color: var(--azul-escuro);

    border: 1px solid var(--branco);

}


.btn-primary:hover {

    background: #dce5ee;

    border-color: #dce5ee;

    transform: translateY(-2px);

    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);

}


.btn-outline {

    background: transparent;

    color: var(--branco);

    border: 1px solid rgba(255, 255, 255, 0.45);

}


.btn-outline:hover {

    background: var(--branco);

    color: var(--azul-escuro);

    border-color: var(--branco);

    transform: translateY(-2px);

}


/* =====================================================
   HERO
===================================================== */

.hero {

    position: relative;

    background:

        radial-gradient(
            circle at 85% 15%,
            rgba(31, 82, 132, 0.40),
            transparent 35%
        ),

        linear-gradient(
            135deg,
            #071a33 0%,
            #06172d 50%,
            #030d1c 100%
        );

}


.hero-container {

    min-height: 690px;

    display: grid;

    grid-template-columns: 1.05fr 0.95fr;

    align-items: center;

    gap: 65px;

    padding: 85px 0;

}


.hero-content {

    animation: aparecer 0.9s ease;

}


.hero h4 {

    margin-bottom: 18px;

    color: #dbe4ed;

    font-size: 11px;

    font-weight: 700;

    letter-spacing: 3.5px;

}


.hero h1 {

    margin-bottom: 25px;

    font-size: clamp(40px, 5vw, 64px);

    line-height: 1.05;

    font-weight: 700;

    letter-spacing: -1.5px;

}


.hero h1 span {

    display: block;

    color: #dce5ee;

}


.hero p {

    max-width: 620px;

    margin-bottom: 32px;

    color: var(--cinza);

    font-size: 14px;

    font-weight: 300;

    line-height: 1.9;

}


.hero-buttons {

    display: flex;

    flex-wrap: wrap;

    gap: 13px;

}


.hero-badge {

    display: inline-block;

    margin-top: 25px;

    padding: 8px 13px;

    color: #bfcad7;

    background: rgba(255, 255, 255, 0.03);

    border: 1px solid var(--borda);

    font-size: 9px;

    letter-spacing: 0.5px;

}


/* =====================================================
   FOTO HERO
===================================================== */

.hero-image {

    position: relative;

    animation: aparecer 1.1s ease;

}


.hero-image::before {

    content: "";

    position: absolute;

    top: -18px;

    right: -18px;

    width: 100%;

    height: 100%;

    border: 1px solid rgba(255, 255, 255, 0.35);

    z-index: 0;

}


.hero-image img {

    position: relative;

    z-index: 1;

    width: 100%;

    max-width: 490px;

    margin-left: auto;

    border-radius: 3px;

    box-shadow:
        0 25px 60px rgba(0, 0, 0, 0.50);

}


/* =====================================================
   SEÇÕES
===================================================== */

section {

    padding: 95px 0;

}


.section-label {

    margin-bottom: 12px;

    color: #cbd6e2;

    font-size: 10px;

    font-weight: 700;

    letter-spacing: 3px;

    text-transform: uppercase;

}


.section-title {

    margin-bottom: 20px;

    font-size: clamp(30px, 4vw, 46px);

    line-height: 1.15;

    font-weight: 700;

    letter-spacing: -0.5px;

}


.section-text {

    max-width: 700px;

    color: var(--cinza);

    font-size: 13px;

    line-height: 1.8;

}


/* =====================================================
   ESPECIALIDADE
===================================================== */

#especialidade {

    background: var(--azul-escuro);

}


.especialidade-box {

    display: grid;

    grid-template-columns: 85px 1fr;

    gap: 30px;

    padding: 55px;

    border: 1px solid rgba(255, 255, 255, 0.13);

    background:

        linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.04),
            rgba(255, 255, 255, 0.015)
        ),

        var(--azul-medio);

    box-shadow:
        0 20px 50px rgba(0, 0, 0, 0.25);

}


.especialidade-icon {

    width: 68px;

    height: 68px;

    display: flex;

    align-items: center;

    justify-content: center;

    border: 1px solid rgba(255, 255, 255, 0.45);

    border-radius: 50%;

    color: var(--branco);

    font-size: 25px;

}


.especialidade-box h2 {

    margin-bottom: 20px;

    font-size: clamp(28px, 4vw, 43px);

    line-height: 1.15;

}


.especialidade-box p {

    max-width: 850px;

    margin-bottom: 15px;

    color: var(--cinza);

    font-size: 13px;

    line-height: 1.8;

}


.especialidade-box .btn {

    margin-top: 10px;

}


/* =====================================================
   ÁREAS DE ATUAÇÃO
===================================================== */

#atuacao {

    background: var(--azul);

}


.grid-atuacao {

    display: grid;

    grid-template-columns: repeat(4, 1fr);

    gap: 18px;

    margin-top: 45px;

}


.card {

    min-height: 170px;

    padding: 30px 24px;

    border: 1px solid var(--borda);

    background: var(--azul-medio);

    transition: 0.3s ease;

}


.card:hover {

    background: var(--azul-claro);

    border-color: rgba(255, 255, 255, 0.30);

    transform: translateY(-6px);

    box-shadow:
        0 15px 35px rgba(0, 0, 0, 0.30);

}


.card h3 {

    margin-bottom: 10px;

    color: var(--branco);

    font-size: 14px;

    font-weight: 700;

}


.card p {

    color: var(--cinza);

    font-size: 11px;

    line-height: 1.7;

}


/* =====================================================
   DIFERENCIAIS
===================================================== */

.diferenciais {

    background: var(--azul-escuro);

}


.grid-diferenciais {

    display: grid;

    grid-template-columns: repeat(4, 1fr);

    gap: 20px;

    margin-top: 45px;

}


.diferencial {

    padding: 38px 25px;

    text-align: center;

    border: 1px solid var(--borda);

    background: var(--azul-medio);

    transition: 0.3s ease;

}


.diferencial:hover {

    border-color: rgba(255, 255, 255, 0.30);

    transform: translateY(-5px);

}


.diferencial-icon {

    margin-bottom: 18px;

    color: var(--branco);

    font-size: 27px;

}


.diferencial h3 {

    margin-bottom: 10px;

    font-size: 14px;

}


.diferencial p {

    color: var(--cinza);

    font-size: 11px;

    line-height: 1.7;

}


/* =====================================================
   CTA
===================================================== */

.cta {

    text-align: center;

    background:

        linear-gradient(
            135deg,
            #0d2949,
            #06172d
        );

    border-top: 1px solid var(--borda);

    border-bottom: 1px solid var(--borda);

}


.cta h2 {

    margin-bottom: 15px;

    font-size: clamp(28px, 4vw, 43px);

    line-height: 1.2;

}


.cta p {

    max-width: 650px;

    margin: 0 auto 28px;

    color: var(--cinza);

    font-size: 13px;

}


/* =====================================================
   SOBRE
===================================================== */

#sobre {

    background: var(--azul-escuro);

}


.sobre-container {

    display: grid;

    grid-template-columns: 0.8fr 1.2fr;

    align-items: center;

    gap: 70px;

}


.sobre-image {

    position: relative;

}


.sobre-image::after {

    content: "";

    position: absolute;

    left: 18px;

    bottom: -18px;

    width: 100%;

    height: 100%;

    border: 1px solid rgba(255, 255, 255, 0.30);

    z-index: 0;

}


.sobre-image img {

    position: relative;

    z-index: 1;

    width: 100%;

    border-radius: 3px;

    box-shadow:
        0 20px 50px rgba(0, 0, 0, 0.45);

}


.sobre-texto p {

    margin-bottom: 17px;

    color: var(--cinza);

    font-size: 13px;

    line-height: 1.85;

}


.sobre-texto .btn {

    margin-top: 10px;

}


/* =====================================================
   AVALIAÇÕES
===================================================== */

#avaliacoes {

    background: var(--azul);

}


.grid-avaliacoes {

    display: grid;

    grid-template-columns: repeat(3, 1fr);

    gap: 20px;

    margin-top: 45px;

}


.avaliacao {

    position: relative;

    padding: 35px;

    border: 1px solid var(--borda);

    background: var(--azul-medio);

    transition: 0.3s ease;

}


.avaliacao:hover {

    transform: translateY(-5px);

    border-color: rgba(255, 255, 255, 0.28);

}


.avaliacao::before {

    content: "“";

    position: absolute;

    top: 12px;

    left: 22px;

    color: rgba(255, 255, 255, 0.20);

    font-size: 55px;

    line-height: 1;

}


.avaliacao p {

    margin-bottom: 20px;

    color: var(--cinza);

    font-size: 12px;

    line-height: 1.8;

    font-style: italic;

}


.avaliacao strong {

    color: var(--branco);

    font-size: 11px;

}


/* =====================================================
   CONTATO
===================================================== */

#contato {

    background: var(--azul-escuro);

}


.contato-container {

    display: grid;

    grid-template-columns: 1fr 1fr;

    align-items: start;

    gap: 60px;

}


.contato-item {

    margin-bottom: 25px;

}


.contato-item h3 {

    margin-bottom: 5px;

    color: var(--branco);

    font-size: 12px;

    font-weight: 700;

    text-transform: uppercase;

    letter-spacing: 1px;

}


.contato-item p,
.contato-item a {

    color: var(--cinza);

    font-size: 13px;

}


.contato-item a {

    transition: 0.3s ease;

}


.contato-item a:hover {

    color: var(--branco);

}


.contato-box {

    padding: 45px;

    border: 1px solid var(--borda);

    background: var(--azul-medio);

    box-shadow:
        0 20px 45px rgba(0, 0, 0, 0.30);

}


.contato-box h3 {

    margin-bottom: 15px;

    font-size: 24px;

    line-height: 1.3;

}


.contato-box p {

    margin-bottom: 28px;

    color: var(--cinza);

    font-size: 13px;

    line-height: 1.8;

}


/* =====================================================
   FOOTER
===================================================== */

footer {

    padding: 38px 0;

    text-align: center;

    background: #020914;

    border-top: 1px solid var(--borda);

}


footer strong {

    display: block;

    margin-bottom: 7px;

    color: var(--branco);

    font-size: 13px;

}


footer p {

    color: var(--cinza-escuro);

    font-size: 10px;

}


/* =====================================================
   WHATSAPP FLUTUANTE
===================================================== */

.whatsapp-float {

    position: fixed;

    right: 22px;

    bottom: 22px;

    z-index: 9999;

    width: 58px;

    height: 58px;

    display: flex;

    align-items: center;

    justify-content: center;

    border-radius: 50%;

    background: #25d366;

    color: #ffffff;

    font-size: 23px;

    box-shadow:
        0 8px 30px rgba(0, 0, 0, 0.40);

    transition: 0.3s ease;

}


.whatsapp-float:hover {

    transform: scale(1.10);

}


/* =====================================================
   ANIMAÇÃO
===================================================== */

@keyframes aparecer {

    from {

        opacity: 0;

        transform: translateY(25px);

    }

    to {

        opacity: 1;

        transform: translateY(0);

    }

}


/* =====================================================
   TABLET
===================================================== */

@media (max-width: 1000px) {


    .header-container {

        gap: 15px;

    }


    .nav {

        gap: 14px;

    }


    .nav a {

        font-size: 9px;

    }


    .hero-container {

        grid-template-columns: 1fr;

        text-align: center;

        padding: 70px 0;

    }


    .hero p {

        margin-left: auto;

        margin-right: auto;

    }


    .hero-buttons {

        justify-content: center;

    }


    .hero-badge {

        margin-bottom: 20px;

    }


    .hero-image {

        width: 85%;

        max-width: 500px;

        margin: 20px auto 0;

    }


    .hero-image img {

        margin: 0 auto;

    }


    .grid-atuacao {

        grid-template-columns: repeat(2, 1fr);

    }


    .grid-diferenciais {

        grid-template-columns: repeat(2, 1fr);

    }


    .grid-avaliacoes {

        grid-template-columns: 1fr;

    }


    .sobre-container {

        grid-template-columns: 1fr;

        gap: 55px;

    }


    .sobre-image {

        width: 85%;

        max-width: 500px;

        margin: 0 auto;

    }


    .contato-container {

        grid-template-columns: 1fr;

    }

}


/* =====================================================
   CELULAR
===================================================== */

@media (max-width: 700px) {


    section {

        padding: 70px 0;

    }


    .container {

        width: 90%;

    }


    .header-container {

        min-height: 70px;

        flex-wrap: wrap;

        padding: 12px 0;

    }


    .logo h1 {

        font-size: 17px;

    }


    .logo span {

        font-size: 7px;

        letter-spacing: 1.5px;

    }


    .header-container > .btn {

        min-height: 38px;

        padding: 9px 13px;

        font-size: 9px;

    }


    .nav {

        order: 3;

        width: 100%;

        justify-content: flex-start;

        gap: 20px;

        overflow-x: auto;

        padding-bottom: 4px;

        scrollbar-width: none;

    }


    .nav::-webkit-scrollbar {

        display: none;

    }


    .nav a {

        font-size: 9px;

    }


    .hero-container {

        min-height: auto;

        padding: 65px 0;

    }


    .hero h1 {

        font-size: 38px;

        letter-spacing: -1px;

    }


    .hero h4 {

        font-size: 9px;

        letter-spacing: 2.5px;

    }


    .hero p {

        font-size: 12px;

        line-height: 1.8;

    }


    .hero-buttons {

        flex-direction: column;

        align-items: stretch;

    }


    .hero-buttons .btn {

        width: 100%;

    }


    .hero-image {

        width: 88%;

    }


    .hero-image::before {

        top: -10px;

        right: -10px;

    }


    .section-title {

        font-size: 30px;

    }


    .especialidade-box {

        grid-template-columns: 1fr;

        padding: 35px 25px;

        gap: 20px;

    }


    .especialidade-icon {

        width: 60px;

        height: 60px;

    }


    .especialidade-box h2 {

        font-size: 29px;

    }


    .especialidade-box p {

        font-size: 12px;

    }


    .especialidade-box .btn {

        width: 100%;

    }


    .grid-atuacao {

        grid-template-columns: 1fr;

    }


    .grid-diferenciais {

        grid-template-columns: 1fr;

    }


    .diferencial {

        padding: 30px 22px;

    }


    .sobre-image {

        width: 88%;

    }


    .sobre-texto p {

        font-size: 12px;

    }


    .sobre-texto .btn {

        width: 100%;

    }


    .grid-avaliacoes {

        gap: 15px;

    }


    .avaliacao {

        padding: 30px 25px;

    }


    .contato-box {

        padding: 32px 25px;

    }


    .contato-box h3 {

        font-size: 21px;

    }


    .contato-box .btn {

        width: 100%;

    }


    .whatsapp-float {

        right: 15px;

        bottom: 15px;

        width: 53px;

        height: 53px;

        font-size: 21px;

    }

}


/* =====================================================
   CELULAR PEQUENO
===================================================== */

@media (max-width: 450px) {


    .hero h1 {

        font-size: 33px;

    }


    .hero h4 {

        font-size: 8px;

    }


    .section-title {

        font-size: 28px;

    }


    .section-label {

        font-size: 9px;

        letter-spacing: 2.5px;

    }


    .especialidade-box {

        padding: 30px 20px;

    }


    .especialidade-box h2 {

        font-size: 27px;

    }


    .card {

        min-height: auto;

        padding: 27px 22px;

    }


    .contato-item a {

        word-break: break-word;

    }


    footer strong {

        font-size: 11px;

    }

}