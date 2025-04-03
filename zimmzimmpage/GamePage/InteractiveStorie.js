// Detección de dispositivo y características
function detectDevice() {
    const userAgent = navigator.userAgent;
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
    const isTablet = /iPad|Android/i.test(userAgent) && !isMobile;
    const isDesktop = !isMobile && !isTablet;
    const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const isLandscape = window.innerWidth > window.innerHeight;
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    
    return {
        isMobile,
        isTablet,
        isDesktop,
        hasTouch,
        isLandscape,
        screenWidth,
        screenHeight,
        deviceType: isMobile ? 'Móvil' : isTablet ? 'Tablet' : 'Escritorio'
    };
}

// Función para mostrar información del dispositivo
function showDeviceInfo() {
    const device = detectDevice();
    const deviceInfo = document.createElement('div');
    deviceInfo.className = 'device-info';
    deviceInfo.innerHTML = `
        <div class="device-badge ${device.deviceType.toLowerCase()}">
            ${device.deviceType}
        </div>
    `;
    document.querySelector('.game-header').prepend(deviceInfo);
}

// Función para manejar la navegación móvil
function setupMobileNav() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.setAttribute('aria-expanded', 
                menuToggle.getAttribute('aria-expanded') === 'true' ? 'false' : 'true'
            );
        });

        // Cerrar menú al hacer clic en un enlace
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
            });
        });

        // Cerrar menú al hacer clic fuera
        document.addEventListener('click', (e) => {
            if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
                navLinks.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }
}

// Función para manejar eventos táctiles y de ratón
function setupInputHandlers() {
    const device = detectDevice();
    const choices = document.querySelectorAll('.game-choice');
    
    choices.forEach(choice => {
        if (device.hasTouch) {
            choice.addEventListener('touchstart', handleChoiceSelect, { passive: true });
            choice.addEventListener('touchend', handleChoiceSelect, { passive: true });
        } else {
            choice.addEventListener('click', handleChoiceSelect);
        }
    });
}

// Función para manejar la selección de opciones
function handleChoiceSelect(event) {
    event.preventDefault();
    const button = event.currentTarget;
    const choiceId = button.getAttribute('data-choice');
    const scene = storyData[currentScene];
    const choice = scene.choices.find(c => c.id === choiceId);
    
    if (choice) {
        updateScene(choice.next);
    }
}

// Función para manejar el redimensionamiento
function handleResize() {
    const device = detectDevice();
    const container = document.querySelector('.container');
    
    if (device.isLandscape && device.screenHeight < 600) {
        container.classList.add('landscape-mode');
    } else {
        container.classList.remove('landscape-mode');
    }
}

// Función para actualizar la escena
function updateScene(sceneId) {
    const scene = storyData[sceneId];
    if (!scene) return;

    currentScene = sceneId;
    locationName.textContent = scene.location;
    storyText.textContent = scene.text;
    
    // Actualizar opciones
    choicesContainer.innerHTML = scene.choices.map(choice => `
        <button class="game-choice" data-choice="${choice.id}">
            <span class="choice-prefix">${String.fromCharCode(65 + scene.choices.indexOf(choice))}.</span>
            ${choice.text}
        </button>
    `).join('');

    // Configurar manejadores de eventos para las nuevas opciones
    setupInputHandlers();
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    // Configurar navegación móvil
    setupMobileNav();
    
    // Inicializar escena
    updateScene('start');
    
    // Configurar manejadores de eventos
    setupInputHandlers();
    
    // Manejar cambios de orientación y redimensionamiento
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);
    
    // Prevenir el comportamiento por defecto del scroll en iOS
    document.body.addEventListener('touchmove', (e) => {
        if (e.target.classList.contains('game-text')) {
            e.stopPropagation();
        }
    }, { passive: false });

    // Prevenir el zoom en dispositivos móviles
    document.addEventListener('gesturestart', (e) => {
        e.preventDefault();
    });
});

// Datos de la historia
const storyData = {
    start: {
        location: "La Mansión de los Espejos",
        text: "Te encuentras en la entrada de una antigua mansión victoriana. El aire está cargado de misterio y los espejos que cubren las paredes reflejan tu imagen de manera inquietante. ¿Qué decides hacer?",
        choices: [
            { id: "explore", text: "Explorar la sala principal", next: "mainHall" },
            { id: "mirrors", text: "Examinar los espejos más de cerca", next: "mirrors" },
            { id: "stairs", text: "Subir por la escalera principal", next: "stairs" }
        ]
    },
    mainHall: {
        location: "Sala Principal",
        text: "La sala principal es imponente, con candelabros antiguos y tapices que cuentan historias misteriosas. En el centro hay un reloj de péndulo que parece estar funcionando al revés.",
        choices: [
            { id: "clock", text: "Examinar el reloj", next: "clock" },
            { id: "tapestry", text: "Estudiar los tapices", next: "tapestry" },
            { id: "return", text: "Volver a la entrada", next: "start" }
        ]
    },
    mirrors: {
        location: "Galería de Espejos",
        text: "Los espejos reflejan tu imagen de manera distorsionada. En uno de ellos, parece que tu reflejo se mueve de manera independiente.",
        choices: [
            { id: "touch", text: "Tocar el espejo", next: "mirrorTouch" },
            { id: "look", text: "Observar más detenidamente", next: "mirrorLook" },
            { id: "return", text: "Volver a la entrada", next: "start" }
        ]
    },
    stairs: {
        location: "Escalera Principal",
        text: "La escalera principal se eleva hacia la oscuridad. Los peldaños crujen con cada paso y las sombras parecen moverse.",
        choices: [
            { id: "up", text: "Subir las escaleras", next: "upstairs" },
            { id: "down", text: "Bajar las escaleras", next: "start" },
            { id: "look", text: "Examinar las sombras", next: "shadows" }
        ]
    }
};

// Estado del juego
let currentScene = 'start';

// Elementos del DOM
const storyImage = document.getElementById('story-image');
const locationName = document.querySelector('.location-name');
const storyText = document.querySelector('.game-text p');
const choicesContainer = document.querySelector('.game-choices');

// Funciones de control de ventana
document.querySelectorAll('.window-control').forEach(button => {
    button.addEventListener('click', () => {
        const action = button.getAttribute('aria-label').toLowerCase();
        handleWindowControl(action);
    });
});

function handleWindowControl(action) {
    switch(action) {
        case 'cerrar':
            // Implementar lógica de cierre
            break;
        case 'maximizar':
            // Implementar lógica de maximizar
            break;
        case 'minimizar':
            // Implementar lógica de minimizar
            break;
    }
}
