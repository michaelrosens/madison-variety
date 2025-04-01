document.addEventListener("DOMContentLoaded", () => {
    const map = document.getElementById("map-container");
    const tooltip = document.getElementById("tooltip");

    // Show tooltip on hover over map areas
    map.addEventListener("mouseover", (e) => {
        if (e.target.tagName === "AREA") {
            const destination = e.target.dataset.destination || "Unknown Destination";
            const price = e.target.dataset.price || "Unknown Price";

            tooltip.textContent = `${destination} - ${price}`;
            tooltip.style.display = "block";
            tooltip.style.left = `${e.pageX + 10}px`;
            tooltip.style.top = `${e.pageY + window.scrollY + 10}px`;
        }
    });

    // Move tooltip with mouse
    map.addEventListener("mousemove", (e) => {
        if (tooltip.style.display === "block") {
            tooltip.style.left = `${e.pageX + 10}px`;
            tooltip.style.top = `${e.pageY + window.scrollY + 10}px`;
        }
    });

    // Hide tooltip when mouse leaves area
    map.addEventListener("mouseout", (e) => {
        if (e.target.tagName === "AREA") {
            tooltip.style.display = "none";
        }
    });
});
