const factButton = document.querySelector('#fact-button');
const wolfFact = document.querySelector('#wolf-fact');
const wolfFacts = [
	'Le hurlement aide les loups à communiquer à distance et à signaler leur présence.',
	'Les loups utilisent aussi des expressions corporelles et des odeurs pour échanger.',
	'Le territoire d’un groupe dépend notamment de la disponibilité des proies et des caractéristiques du milieu.',
	'Les jeunes loups apprennent beaucoup en observant les autres membres de leur groupe.'
];
let previousFact = 0;

if (factButton && wolfFact) {
	factButton.addEventListener('click', () => {
		let nextFact = Math.floor(Math.random() * wolfFacts.length);

		while (wolfFacts.length > 1 && nextFact === previousFact) {
			nextFact = Math.floor(Math.random() * wolfFacts.length);
		}

		previousFact = nextFact;
		wolfFact.textContent = wolfFacts[nextFact];
	});
}

const observationButton = document.querySelector('#observation-button');
const observationText = document.querySelector('#observation-text');
const observations = [
	'Un grand territoire ne signifie pas qu’un loup s’y déplace de façon uniforme : ses passages dépendent de ses besoins et des saisons.',
	'Le loup évite généralement les humains; l’observer dans la nature demande patience et distance.',
	'La présence du loup et les moyens de cohabitation varient selon les régions : les informations locales sont essentielles.'
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