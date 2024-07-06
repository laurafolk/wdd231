document.addEventListener('DOMContentLoaded', () => {
    const memberDataUrl = 'data/members.json';
    const spotlightsContainer = document.getElementById('spotlights-container');

    async function fetchMembers() {
        try {
            const response = await fetch(memberDataUrl);
            const data = await response.json();
            displaySpotlights(data.members);
        } catch (error) {
            console.error('Error fetching member data:', error);
        }
    }

    function displaySpotlights(members) {
        const goldAndSilverMembers = members.filter(member => member.membershipLevel === 'Gold' || member.membershipLevel === 'Silver');
        const shuffledMembers = goldAndSilverMembers.sort(() => 0.5 - Math.random()).slice(0, 3);

        spotlightsContainer.innerHTML = shuffledMembers.map(member => {
            return `
                <div class="card">
                    <h3>${member.name}</h3>
                    <p>${member.description}</p>
                    <p>Membership Level: ${member.membershipLevel}</p>
                </div>
            `;
        }).join('');
    }

    fetchMembers();
});