const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Menu déroulant (clic sur mobile/tablette)
document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
    toggle.addEventListener('click', (e) => {
        e.preventDefault();
        const parent = toggle.closest('.dropdown');
        parent.classList.toggle('open');
    });
});

// Changer l'image principale au clic sur une vignette
document.querySelectorAll('.product-thumbs img').forEach(thumb => {
    thumb.addEventListener('click', () => {
        const mainImg = thumb.closest('.product-card-v2').querySelector('.product-image-v2 img');
        mainImg.src = thumb.src;
    });
});