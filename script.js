// This script adds a very subtle visual glitch to "The De-Rezzing" text 
// to mimic the artifacting seen in your reference photo.

document.addEventListener("DOMContentLoaded", () => {
    const derezText = document.querySelector('.derezzing');
    
    if(derezText) {
        setInterval(() => {
            // Randomly shift text shadow to simulate pixel shifting/artifacting
            const xShift = Math.random() * 4 - 2; 
            const yShift = Math.random() * 2 - 1;
            
            // Only glitch 10% of the time to keep it subtle
            if (Math.random() > 0.9) {
                derezText.style.textShadow = `${xShift}px ${yShift}px 0 rgba(255,255,255,0.8), -${xShift}px -${yShift}px 0 rgba(100,100,100,0.5)`;
                derezText.style.transform = `skewX(${Math.random() * 2 - 1}deg)`;
            } else {
                derezText.style.textShadow = 'none';
                derezText.style.transform = 'none';
            }
        }, 150); // Runs every 150ms
    }
});