// Carousel Functionality
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
    setInterval(nextSlide, 100000);

    // Clock Functionality
    const startDate = new Date("March 18, 2025 10:32:31"); // Your specified start date
    const startTimeMs = startDate.getTime(); // Start time in milliseconds

    function updateClock() {
        const clockElement = document.getElementById('clock');
        
        // Calculate the difference between the current system time and the start time
        const now = new Date();
        const currentTimeMs = now.getTime();
        const timeDifferenceMs = currentTimeMs - startTimeMs;
        
        // Create a new date object starting from the start date and add the time difference
        const adjustedTime = new Date(startDate.getTime() + timeDifferenceMs);
        
        // Format the date
        const options = { month: 'long', day: '2-digit', year: 'numeric' };
        const dateString = adjustedTime.toLocaleDateString('en-US', options);
        
        // Format the time (24-hour format)
        const hours = adjustedTime.getHours().toString().padStart(2, '0');
        const minutes = adjustedTime.getMinutes().toString().padStart(2, '0');
        const seconds = adjustedTime.getSeconds().toString().padStart(2, '0');
        const timeString = `${hours}:${minutes}:${seconds}`;
        
        // Combine date and time
        clockElement.textContent = `${dateString} | ${timeString}`;
    }

    // Update the clock immediately and then every second
    updateClock(); // Initial call
    setInterval(updateClock, 1000); // Update every 1 second
});