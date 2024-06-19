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
    const card = document.createElement('div');
    card.className = 'card';

    // Creates and append elements for each piece of prophet data
    const name = document.createElement('h2');
    name.textContent = prophet.name;
    card.appendChild(name);

    const birthdate = document.createElement('p');
    birthdate.textContent = `Birthdate: ${prophet.birthdate}`;
    card.appendChild(birthdate);

    const birthplace = document.createElement('p');
    birthplace.textContent = `Birthplace: ${prophet.birthplace}`;
    card.appendChild(birthplace);

    const image = document.createElement('img');
    image.src = prophet.imageurl;
    image.alt = `Portrait of ${prophet.name}`;
    card.appendChild(image);

    // Appends the card to container
    cards.appendChild(card);
  });
};

// Fetch and display the prophet data
getProphetData();
