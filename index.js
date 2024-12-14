// Set the target date to November 22, 2024 at midnight
const targetDate = new Date("2024-11-22T00:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const timeRemaining = targetDate - now;

  // Check if the target date is in the future
  if (timeRemaining > 0) {
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days.toString().padStart(2, "0");
    document.getElementById("hours").innerText = hours.toString().padStart(2, "0");
    document.getElementById("minutes").innerText = minutes.toString().padStart(2, "0");
    document.getElementById("seconds").innerText = seconds.toString().padStart(2, "0");
  } else {
    // Display a message when the countdown reaches zero
    window.location.href="index2.html";
  }
}

// Call updateCountdown initially to avoid delay, then every second
updateCountdown();
setInterval(updateCountdown, 1000);
