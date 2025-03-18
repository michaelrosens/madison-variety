document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.reviews-container');
    const cards = document.querySelectorAll('.review-card');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.carousel-controls.prev');
    const nextBtn = document.querySelector('.carousel-controls.next');
    
    let currentIndex = 0;
    const cardWidth = cards[0].offsetWidth + 20; // Including gap

    function updateCarousel() {
        container.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % cards.length;
        updateCarousel();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        updateCarousel();
    }

    // Event listeners
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel();
        });
    });

    // Optional: Auto-play
    setInterval(nextSlide, 5000);
});


// clock.js

// Set your custom starting date and time here
const startDate = new Date("March 18, 2025 10:32:31"); // Adjust this to your desired start time
const startTimeMs = startDate.getTime(); // Get the starting time in milliseconds

// Store the time when the script first runs
const scriptStartTime = Date.now();

function updateClock() {
    const clockElement = document.getElementById('clock');
    
    // Calculate elapsed time since the script started (in milliseconds)
    const elapsedMs = Date.now() - scriptStartTime;
    
    // Add elapsed time to the starting time
    const currentTimeMs = startTimeMs + elapsedMs;
    const now = new Date(currentTimeMs);
    
    // Format the date
    const options = { month: 'long', day: '2-digit', year: 'numeric' };
    const dateString = now.toLocaleDateString('en-US', options);
    
    // Format the time (24-hour format)
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    
    // Combine date and time
    clockElement.textContent = `${dateString} | ${timeString}`;
}

// Update the clock immediately and then every second
updateClock(); // Initial call
setInterval(updateClock, 1000); // Update every 1 second