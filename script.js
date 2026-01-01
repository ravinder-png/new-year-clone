// Trigger confetti on page load
window.onload = function() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
};

// Optional: Add more effects, like continuous fireworks
setInterval(() => {
    confetti({
        particleCount: 10,
        angle: 60,
        spread: 55,
        origin: { x: 0 }
    });
    confetti({
        particleCount: 10,
        angle: 120,
        spread: 55,
        origin: { x: 1 }
    });
}, 2000);
