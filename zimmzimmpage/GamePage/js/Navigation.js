class Navigation {
    constructor() {
        this.pages = {
            'home': document.getElementById('home-page'),
            'games': document.getElementById('games-page'),
            'faq': document.getElementById('faq-page'),
            'about': document.getElementById('about-page')
        };
        
        this.navLinks = document.querySelectorAll('.nav-link');
        this.setupEventListeners();
    }

    setupEventListeners() {
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetPage = e.target.getAttribute('data-page');
                this.navigateTo(targetPage);
            });
        });
    }

    navigateTo(page) {
        // Ocultar todas las páginas
        Object.values(this.pages).forEach(page => {
            if (page) page.style.display = 'none';
        });

        // Mostrar la página seleccionada
        if (this.pages[page]) {
            this.pages[page].style.display = 'block';
        }

        // Actualizar la clase activa en los enlaces de navegación
        this.navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-page') === page) {
                link.classList.add('active');
            }
        });
    }
}

// Inicializar la navegación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    new Navigation();
}); 