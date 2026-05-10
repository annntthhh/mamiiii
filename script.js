const btn = document.getElementById('surprise-btn');
const messageArea = document.getElementById('message');

const phrases = [
    "¡Eres la reina de la casa! 👑",
    "Gracias por tus abrazos mágicos. 🤗",
    "Tu comida es mi lugar favorito. 🍲",
    "Te amo hoy, mañana y siempre. ✨"
];

btn.addEventListener('click', () => {
    // Cambia el mensaje
    const randomIndex = Math.floor(Math.random() * phrases.length);
    messageArea.innerText = phrases[randomIndex];

    // Lluvia de flores/corazones
    for (let i = 0; i < 15; i++) {
        createParticle();
    }
});

function createParticle() {
    const particle = document.createElement('div');
    const isHeart = Math.random() > 0.5;
    
    particle.innerHTML = isHeart ? '❤️' : '🌸';
    particle.style.position = 'fixed';
    particle.style.left = Math.random() * 100 + 'vw';
    particle.style.top = '-5vh';
    particle.style.fontSize = Math.random() * 20 + 10 + 'px';
    particle.style.opacity = Math.random();
    particle.style.zIndex = '100';
    
    // Animación de caída
    const duration = Math.random() * 2 + 3;
    particle.style.transition = `transform ${duration}s linear, opacity ${duration}s`;
    
    document.body.appendChild(particle);

    // Ejecutar la caída
    setTimeout(() => {
        particle.style.transform = `translateY(110vh) rotate(${Math.random() * 360}deg)`;
    }, 100);

    // Limpiar el DOM
    setTimeout(() => {
        particle.remove();
    }, duration * 1000);
}
