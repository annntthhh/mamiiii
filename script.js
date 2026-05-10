const btn = document.getElementById('magic-btn');
const text = document.getElementById('dynamic-text');

const extraMessages = [
    "Eres mi inspiración diaria. ✨",
    "¡Gracias por tus consejos! 🌸",
    "Te quiero más de lo que las palabras pueden decir. 💖",
    "Hoy celebramos tu alegría. 🥂"
];

btn.addEventListener('click', () => {
    // Cambiar texto aleatoriamente
    const randomMsg = extraMessages[Math.floor(Math.random() * extraMessages.length)];
    text.innerText = randomMsg;

    // Crear elementos flotantes
    createFloatingElement();
});

function createFloatingElement() {
    const heart = document.createElement('div');
    heart.innerHTML = '🌸'; // Puedes usar '❤️' o '✨'
    heart.style.position = 'fixed';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.bottom = '0';
    heart.style.fontSize = Math.random() * 20 + 20 + 'px';
    heart.style.animation = 'float 3s linear forwards';
    heart.style.zIndex = '1000';
    
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 3000);
}

// Agregar la animación al CSS dinámicamente
const style = document.createElement('style');
style.innerHTML = `
    @keyframes float {
        to {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
