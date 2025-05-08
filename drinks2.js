function updateClock() {
    const clockElement = document.getElementById("clock");
    const now = new Date();

    // Get date parts
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    const dateString = now.toLocaleDateString('en-US', options);

    // Get time parts
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // hour '0' should be '12'
    const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;

    // Combine date and time
    clockElement.textContent = `${dateString} | ${timeString}`;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial call to set immediately
updateClock();
