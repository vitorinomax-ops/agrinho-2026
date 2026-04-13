// Efeito de mudança no header ao rolar a página
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.padding = "0.5rem 5%";
        header.style.backgroundColor = "rgba(255, 255, 255, 0.95)";
    } else {
        header.style.padding = "1rem 5%";
        header.style.backgroundColor = "#fff";
    }
});

// Menu Mobile básico
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // Para um menu mobile funcional, você adicionaria CSS para a classe .active
    alert("Funcionalidade de menu mobile clicada!"); 
});
