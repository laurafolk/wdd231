document.addEventListener("DOMContentLoaded", () => {
    const visitMessage = document.getElementById('visitMessage');
    const lastVisit = localStorage.getItem('lastVisit');
    const currentVisit = Date.now();

    if (lastVisit) {
        const daysBetween = Math.floor((currentVisit - lastVisit) / (1000 * 60 * 60 * 24));
        visitMessage.textContent = daysBetween === 1 
            ? "You last visited 1 day ago." 
            : `You last visited ${daysBetween} days ago.`;
    } else {
        visitMessage.textContent = "Welcome! Let us know if you have any questions.";
    }

    localStorage.setItem('lastVisit', currentVisit);
});