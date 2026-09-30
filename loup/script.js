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

const wolfNoteButton = document.querySelector('#wolf-note-button');
const wolfNoteText = document.querySelector('#wolf-note-text');
const wolfNotes = [
	'Les loups peuvent parcourir de longues distances pour trouver de la nourriture et explorer leur territoire.',
	'Les louveteaux naissent généralement au printemps, après une gestation d’environ deux mois.',
	'Le régime du loup varie selon les proies présentes et les saisons.'
];
let previousWolfNote = 0;

if (wolfNoteButton && wolfNoteText) {
	wolfNoteButton.addEventListener('click', () => {
		let nextWolfNote = Math.floor(Math.random() * wolfNotes.length);

		while (wolfNotes.length > 1 && nextWolfNote === previousWolfNote) {
			nextWolfNote = Math.floor(Math.random() * wolfNotes.length);
		}

		previousWolfNote = nextWolfNote;
		wolfNoteText.textContent = wolfNotes[nextWolfNote];
	});
}