// Typewriter effect
const messages = [
    "Every moment with you is special...",
    "I love your smile, your laugh, your heart...",
    "You make me want to be a better person...",
    "Will you go out on a date with me?"
];

let messageIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeMessage() {
    const typewriterElement = document.getElementById('typewriterText');
    const currentMessage = messages[messageIndex];

    if (!isDeleting && charIndex < currentMessage.length) {
        charIndex++;
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
    } else if (!isDeleting && charIndex === currentMessage.length) {
        isDeleting = true;
        setTimeout(typeMessage, 2000);
        return;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        messageIndex = (messageIndex + 1) % messages.length;
    }

    typewriterElement.textContent = currentMessage.substring(0, charIndex);
    setTimeout(typeMessage, isDeleting ? 50 : 100);
}

// Countdown timer
function updateCountdown() {
    // Set your desired date here (YYYY-MM-DD format)
    const targetDate = new Date('2026-03-15').getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        document.getElementById('days').textContent = String(days).padStart(2, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    }
}

// Falling hearts animation
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.textContent = '❤️';
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.animationDuration = (Math.random() * 3 + 5) + 's';
    heart.style.animationDelay = Math.random() * 2 + 's';
    document.querySelector('.falling-hearts').appendChild(heart);

    setTimeout(() => heart.remove(), 8000);
}

// Move the "No" button
function moveButton(btn) {
    const randomX = Math.random() * 200 - 100;
    const randomY = Math.random() * 200 - 100;
    btn.style.transform = `translate(${randomX}px, ${randomY}px)`;
}

// Handle "Yes" button click
function handleYes() {
    const responseDiv = document.getElementById('response');
    responseDiv.innerHTML = '🎉 You just made me the happiest person! 🎉';
    
    // Create confetti
    createConfetti();
    
    // Play celebration sound (optional)
    playMusic();

    // Disable buttons
    document.getElementById('yesBtn').disabled = true;
    document.getElementById('noBtn').disabled = true;

    // Add more hearts
    for (let i = 0; i < 20; i++) {
        setTimeout(createHeart, i * 100);
    }
}

// Confetti effect
function createConfetti() {
    const confettiContainer = document.getElementById('confetti');
    const colors = ['#ff1493', '#ff69b4', '#ffb6c1', '#ffd700', '#00ff00'];

    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti-piece');
        confetti.textContent = ['🎉', '💕', '✨', '🌹', '💑'][Math.floor(Math.random() * 5)];
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.top = '-10px';
        confetti.style.fontSize = Math.random() * 20 + 20 + 'px';
        confetti.style.opacity = Math.random() * 0.5 + 0.5;

        confettiContainer.appendChild(confetti);

        const duration = Math.random() * 3 + 2;
        const distance = Math.random() * 300 + 100;

        confetti.animate([
            { transform: 'translateY(0) translateX(0) rotate(0deg)', opacity: 1 },
            { transform: `translateY(${distance}px) translateX(${Math.random() * 200 - 100}px) rotate(${Math.random() * 360}deg)`, opacity: 0 }
        ], {
            duration: duration * 1000,
            easing: 'ease-out'
        });

        setTimeout(() => confetti.remove(), duration * 1000);
    }
}

// Background music
function playMusic() {
    const audio = document.getElementById('bgMusic');
    audio.play().catch(err => console.log('Audio play failed:', err));
}

// Display current date
document.getElementById('dateDisplay').textContent = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
});

// Initialize
typeMessage();
setInterval(updateCountdown, 1000);
updateCountdown();
setInterval(createHeart, 3000);
