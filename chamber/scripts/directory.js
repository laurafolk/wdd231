// const hamburgerElement = document.querySelector('#menuButton');
// const navElement = document.querySelector('.menuLinks');

// hamburgerElement.addEventListener('click', () => {
//     navElement.classList.toggle('open');
//     hamburgerElement.classList.toggle('open');
// });

document.addEventListener('DOMContentLoaded', async () => {
    const hamburgerElement = document.querySelector('#menuButton');
    const navElement = document.querySelector('.menuLinks');
    const container = document.getElementById('member-container');
    const toggleButton = document.querySelector('.toggle-button');
    let isGridView = true;

    hamburgerElement.addEventListener('click', () => {
        navElement.classList.toggle('open');
        hamburgerElement.classList.toggle('open');
    });

    async function fetchMembers() {
        const response = await fetch('data/members.json');
        const members = await response.json();
        return members;
    }

    function createMemberCard(member) {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h3>${member.name}</h3>
            <p>Address: ${member.address}${member.suite ? ', ' + member.suite : ''}</p>
            <p>City: ${member.city}</p>
            <p>State: ${member.state}</p>
            <p>ZIP: ${member.zip || ''}</p>
            <p>Phone: ${member.phone}</p>
            <p>Website: <a href="${member.website}" target="_blank">${member.website}</a></p>
            <p>Membership Level: ${member.membership === 1 ? 'Member' : member.membership === 2 ? 'Silver' : 'Gold'}</p>
        `;
        return card;
    }

    function displayMembers(members) {
        container.innerHTML = '';
        members.forEach(member => {
            const card = createMemberCard(member);
            container.appendChild(card);
        });
    }

    toggleButton.addEventListener('click', () => {
        isGridView = !isGridView;
        container.className = `container ${isGridView ? 'grid' : 'list'}`;
    });

    const members = await fetchMembers();
    displayMembers(members);
});
  