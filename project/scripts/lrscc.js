document.addEventListener('DOMContentLoaded', () => {
    // Fetch JSON data
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            displayData(data);
            storeLastVisit();
        });

    function displayData(data) {
        const container = document.getElementById('json-data');
        container.innerHTML = data.map(item => `
            <div class="card">
                <h2>${item.name}</h2>
                <p>${item.description}</p>
                <p>${item.date}</p>
                <img src="${item.image}" alt="${item.name}">
            </div>
        `).join('');
    }

    function storeLastVisit() {
        const lastVisitKey = 'lastVisit';
        const lastVisit = localStorage.getItem(lastVisitKey);
        const now = new Date();

        if (lastVisit) {
            const lastVisitDate = new Date(lastVisit);
            const diffDays = Math.floor((now - lastVisitDate) / (1000 * 60 * 60 * 24));
            const message = diffDays === 0 ? 'Welcome back! You visited earlier today.' :
                `Welcome back! You last visited ${diffDays} days ago.`;
            document.getElementById('last-visit-message').textContent = message;
        } else {
            document.getElementById('last-visit-message').textContent = 'Welcome! This is your first visit.';
        }

        localStorage.setItem(lastVisitKey, now.toISOString());
    }
});
