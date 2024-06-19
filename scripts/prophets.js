const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() {
  const response = await fetch(url);
  const data = await response.json();
  // console.table(data.prophets); // temporary testing of data response
  displayProphets(data.prophets);
}

const displayProphets = (prophets) => {
  prophets.forEach(prophet => {
    // Creates the card element
    const card = document.createElement('section');
    card.className = 'card';

    // Creates and append elements for each piece of prophet data
    const fullName = document.createElement('h2');
    fullName.textContent = `${prophet.name} ${prophet.lastname}`;
    card.appendChild(fullName);

    const birthdate = document.createElement('p');
    birthdate.textContent = `Birthdate: ${prophet.birthdate}`;
    card.appendChild(birthdate);

    const birthplace = document.createElement('p');
    birthplace.textContent = `Birthplace: ${prophet.birthplace}`;
    card.appendChild(birthplace);

    const portrait = document.createElement('img');
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '200');
    portrait.setAttribute('height', '300');
    card.appendChild(portrait);

    // Appends the card to container
    cards.appendChild(card);
  });
};

// Fetch and display the prophet data
getProphetData();
