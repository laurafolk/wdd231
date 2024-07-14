document.addEventListener('DOMContentLoaded', () => {
    const memberDataUrl = 'data/members.json';
    const spotlightsContainer = document.getElementById('spotlights-container');

    async function fetchMembers() {
        try {
            const response = await fetch(memberDataUrl);
            const data = await response.json();
            displaySpotlights(data);
        } catch (error) {
            console.error('Error fetching member data:', error);
        }
    }

    function displaySpotlights(members) {
        const goldAndSilverMembers = members.filter(member => member.membership === 2 || member.membership === 3);
        const shuffledMembers = goldAndSilverMembers.sort(() => 0.5 - Math.random()).slice(0, 3);

        spotlightsContainer.innerHTML = shuffledMembers.map(member => {
            return `
                <div class="card">
                    <h3>${member.name}</h3>
                    <p>${member.address}</p>
                    ${member.suite ? `<p>${member.suite}</p>` : ''}
                    <p>${member.city}, ${member.state} ${member.zip}</p>
                    <p>Phone: ${member.phone}</p>
                    <p>Website: <a href="${member.website}" target="_blank">${member.website}</a></p>
                    <p>Membership Level: ${member.membership === 3 ? 'Gold' : 'Silver'}</p>
                </div>
            `;
        }).join('');
    }

    fetchMembers();
});
