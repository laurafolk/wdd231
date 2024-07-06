document.addEventListener('DOMContentLoaded', () => {
    const memberContainer = document.getElementById('member-container');
    const memberCards = Array.from(memberContainer.getElementsByClassName('member-card'));

    // Shuffle the member cards array
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // Shuffle and select the first three member cards
    const shuffledCards = shuffle(memberCards).slice(0, 3);

    // Clear the container and append the selected cards
    memberContainer.innerHTML = '';
    shuffledCards.forEach(card => {
        memberContainer.appendChild(card);
    });
});