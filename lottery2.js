// Clock Functionality
const startDate = new Date("March 18, 2025 10:32:31"); // Your specified start date
const startTimeMs = startDate.getTime(); // Start time in milliseconds

function updateClock() {
    const clockElement = document.getElementById('clock');
    if (!clockElement) return; // Ensure element exists before updating

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

// Ensure script runs after the DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
    updateClock(); // Initial call
    setInterval(updateClock, 1000); // Update every second
});