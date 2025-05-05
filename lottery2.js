function updateClock() {
    const clock = document.getElementById("clock");
    if (clock) {
      const now = new Date();
      const options = { year: "numeric", month: "long", day: "numeric" };
      const date = now.toLocaleDateString(undefined, options);
      const time = now.toLocaleTimeString();
      clock.textContent = `${date} | ${time}`;
    }
  }
  setInterval(updateClock, 1000);
  updateClock();
  