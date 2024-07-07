document.addEventListener('DOMContentLoaded', () => {
    const timestampField = document.getElementById('timestamp');
    timestampField.value = new Date().toISOString();

    document.getElementById('currentYear').textContent = new Date().getFullYear();
});

function openModal() {
    document.getElementById('membershipModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('membershipModal').style.display = 'none';
}

function toggleMenu() {
    const menuLinks = document.querySelector('.menuLinks');
    menuLinks.classList.toggle('show');
}