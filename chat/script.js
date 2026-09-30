const factButton = document.querySelector('#fact-button');
const catFact = document.querySelector('#cat-fact');
const catFacts = [
	'Le ronronnement ne signifie pas toujours « tout va bien » : certains chats ronronnent aussi pour s’apaiser.',
	'Les chats peuvent faire pivoter leurs oreilles indépendamment pour localiser un son.',
	'Le jeu qui imite une petite proie permet au chat d’exprimer sa curiosité et ses comportements de chasse.',
	'Les vibrisses sont des poils très sensibles qui transmettent des informations sur l’environnement proche.'
];
let previousFact = 0;

if (factButton && catFact) {
	factButton.addEventListener('click', () => {
		let nextFact = Math.floor(Math.random() * catFacts.length);

		while (catFacts.length > 1 && nextFact === previousFact) {
			nextFact = Math.floor(Math.random() * catFacts.length);
		}

		previousFact = nextFact;
		catFact.textContent = catFacts[nextFact];
	});
}

const observationButton = document.querySelector('#observation-button');
const observationText = document.querySelector('#observation-text');
const observations = [
	'Un chat détendu peut avoir le corps souple et les oreilles dans une position neutre.',
	'Se cacher ou s’éloigner peut vouloir dire qu’il préfère être laissé tranquille.',
	'Un changement soudain de posture ou d’habitudes mérite d’être observé avec attention.'
];
let previousObservation = 0;

if (observationButton && observationText) {
	observationButton.addEventListener('click', () => {
		let nextObservation = Math.floor(Math.random() * observations.length);

		while (observations.length > 1 && nextObservation === previousObservation) {
			nextObservation = Math.floor(Math.random() * observations.length);
		}

		previousObservation = nextObservation;
		observationText.textContent = observations[nextObservation];
	});
}