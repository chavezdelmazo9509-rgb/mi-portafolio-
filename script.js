document.addEventListener("DOMContentLoaded", function () {
    // 1. Ocultar el preloader de código suavemente tras 1.6 segundos
    const preloader = document.getElementById("cyber-preloader");
    setTimeout(() => {
        preloader.classList.add("fade-out");
    }, 1200);

    // 2. Activador de aparición escalonada (Stagger Reveal) para proyectos
    const cards = document.querySelectorAll(".project-card");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Retraso dinámico multiplicando el índice (entra una tras otra)
                setTimeout(() => {
                    entry.target.classList.add("visible");
                }, index * 200); // 200 milisegundos de diferencia por tarjeta

                observer.unobserve(entry.target); // Solo se anima una vez
            }
        });
    }, {
        threshold: 0.15
    });

    cards.forEach(card => {
        observer.observe(card);
    });
});