// Import data from data.js
import strawHatPirates from "./data.js";

const imageCardsContainer = document.querySelector('.image-cards');

strawHatPirates.forEach(pirate => {
    const memberDiv = document.createElement('div');
    memberDiv.classList.add('member', `${pirate.class}`);

    const imageCardDiv = document.createElement('div');
    imageCardDiv.classList.add('image-card');
    imageCardDiv.innerHTML = `<img src="${pirate.imageSrc}" alt="${pirate.name}">`;

    const nameDiv = document.createElement('div');
    nameDiv.classList.add('name');
    nameDiv.textContent = `Name: ${pirate.name}`;

    const positionDiv = document.createElement('div');
    positionDiv.classList.add('position');
    positionDiv.textContent = `Position: ${pirate.position}`;

    const bountyDiv = document.createElement('div');
    bountyDiv.classList.add('bounty');
    bountyDiv.textContent = `Bounty: ${pirate.bounty}`;

    const descriptionDiv = document.createElement('div');
    descriptionDiv.classList.add('description');
    descriptionDiv.textContent = `Description: ${pirate.description}`;

    const abilitiesDiv = document.createElement('div');
    abilitiesDiv.classList.add('abilities');
    abilitiesDiv.textContent = `Abilities: ${pirate.abilities.join(', ')}`;

    // Add hover effect and sound to the divs of members
    memberDiv.addEventListener('mouseenter', () => {
        const audio = new Audio(`./sounds/${pirate.class}.mp3`);
        audio.play();
        setTimeout(function () {
            audio.pause();
            audio.currentTime = 0;
        }, 3000);
    });

    // Appending elements to members div
    memberDiv.appendChild(imageCardDiv);
    memberDiv.appendChild(nameDiv);
    memberDiv.appendChild(positionDiv);
    memberDiv.appendChild(bountyDiv);
    memberDiv.appendChild(descriptionDiv);
    memberDiv.appendChild(abilitiesDiv);

    imageCardsContainer.appendChild(memberDiv);
});
