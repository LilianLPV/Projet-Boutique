document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".minecoins-case, .search-case").forEach(container => {
        const img = container.querySelector(".end-case"); // Sélectionner l'image dans le conteneur
        const originalSrc = img.src;
        const hoverSrc = originalSrc.replace(".png", "-hover.png");

        // Change l'image lors du survol du conteneur
        container.addEventListener("mouseenter", () => {
            img.src = hoverSrc;
        });

        // Restaure l'image originale lors du départ du survol
        container.addEventListener("mouseleave", () => {
            img.src = originalSrc;
        });
    });
});

document.querySelector('.sidebar-extend').addEventListener('click', function() {
    document.querySelector('.sidebar').classList.toggle('open');
});

document.querySelectorAll(".cath-button").forEach(button => {
    const originalSrc = button.src;
    const hoverSrc = originalSrc.replace(".png", "-hover.png");

    button.addEventListener("mouseenter", () => button.src = hoverSrc);
    button.addEventListener("mouseleave", () => button.src = originalSrc);
});

document.querySelectorAll(".swipper-arrow").forEach(arrow => {
    const originalSrc = arrow.src;
    const hoverSrc = originalSrc.replace(".png", "-hover.png");

    // Appliquer l'effet de survol uniquement si l'image n'est pas 'none'
    if (!originalSrc.includes("none")) {
        arrow.addEventListener("mouseenter", () => {
            arrow.src = hoverSrc;
        });

        arrow.addEventListener("mouseleave", () => {
            arrow.src = originalSrc;
        });
    }
});