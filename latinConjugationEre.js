let colere = {
	meaning: [
	'to cultivate',
	'to worship',
	'to take care of',
	'to inhabit',
	'to till'
	],
	stem: 'col', 
	type: 'ere'
};
let apparere = {
	meaning: [
	'to appear',
	'to show up',
	'to occur'
	],
	stem: 'appar',
	type: 'longEre',
	passive: 'false'
};
let regere = {
	meaning: [
	'to rule',
	'to guide'
	],
	stem: ['reg', 'rex'],
	type: 'shortEre'
};
let respondere = {
	meaning: [
	'to answer'
	],
	stem: 'respond',
	type: 'longEre',
	Exception: 'true'
};
let tenere = {
	meaning: [
	'to hold',
	'to keep'
	],
	stem: 'ten',
	type: 'longEre',
	Exception: 'true'
};
let restituere = {
	meaning: [
	'to restore',
	'to revive'
	],
	stem: 'restitu',
	stem2: 'restit',
	type: 'ere',
	Exception: 'true'
};

let ere = {
	presentIndicative:
	['ō', 
	'is', 
	'it',
	'imus', 
	'itis', 
	'unt'
	],
	imperfectIndicative: [
	'ēbam', 
	'ēbās', 
	'ēbat',
	'ēbāmus',
	'ēbātis',
	'ēbant'
	],
	perfectIndicative: [
	'uī',
	'uistī',
	'uit',
	'uimus',
	'uistis',
	'ērunt'
	],
	presentPassive: [
	'or',
	'eris',
	'itur',
	'imur',
	'imini',
	'untur'
	],
	type: 'ere'
}; 

let shortEre = {
	presentIndicative:
	['ō', 
	'is', 
	'it',
	'imus', 
	'itis', 
	'unt'
	],
	imperfectIndicative: [
	'ēbam', 
	'ēbās', 
	'ēbat',
	'ēbāmus',
	'ēbātis',
	'ēbant'
	],
	perfectIndicative: [
	'ī',
	'istī',
	'it',
	'imus',
	'istis',
	'ērunt'
	],
	presentPassive: [
	'or',
	'eris',
	'itur',
	'imur',
	'imini',
	'untur'
	],
	type: 'ere'
};

let longEre = {
	presentIndicative:
	['eō', 
	'ēs', 
	'et',
	'ēmus', 
	'ētis', 
	'ent'
	],
	imperfectIndicative: [
	'ēbam', 
	'ēbās', 
	'ēbat',
	'ēbāmus',
	'ēbātis',
	'ēbant'
	],
	perfectIndicative: [
	'uī',
	'uistī',
	'uit',
	'uimus',
	'uistis',
	'uērunt'
	],
	perfectIndicativeE: [
	'ī',
	'istī',
	'it',
	'imus',
	'istis',
	'ērunt'
	],
	presentPassive: [
	'-',
	'-',
	'-',
	'-',
	'-',
	'-'
	],
	presentPassiveE: [
	'eor',
	'ēris',
	'ētur',
	'ēmur',
	'ēmini',
	'entur'
	],
	type: 'ere'
}; 

function conjugateEre(verb, tense) {
	let person = 0;
	if (verb.type === 'ere') {
		if (tense === 'presentActive') {
			for (let person of iterable) {
				console.log(`${verb.stem}${ere.presentIndicative[person]}`);
				person +=1;
			}
		} else if (tense === 'pastPerfect') {
			if (verb.Exception === 'true') {
				for (let person of iterable) {
				console.log(`${verb.stem2}${ere.perfectIndicative[person]}`);
				person +=1;
				}
			} else {
				for (let person of iterable) {
				console.log(`${verb.stem}${ere.perfectIndicative[person]}`);
				person +=1;
				}
			}
		} else if (tense === 'pastImperfect') {
			for (let person of iterable) {
				console.log(`${verb.stem}${ere.imperfectIndicative[person]}`);
				person +=1;
			}
		} else if (tense === 'presentPassive') {
			if (verb.Exception === 'true') {
				for (let person of iterable) {
				console.log(`${verb.stem}${ere.presentPassive[person]}`);
				person +=1;
				}
			} else {
				for (let person of iterable) {
				console.log(`${verb.stem}${ere.presentPassive[person]}`);
				person +=1;
				}
			}
		}
	} else if (verb.type === 'longEre') {
		if (tense === 'presentActive') {
			for (let person of iterable) {
				console.log(`${verb.stem}${longEre.presentIndicative[person]}`);
				person +=1;
			}
		} else if (tense === 'pastPerfect') {
			if (verb.Exception === 'true') {
			for (let person of iterable) {
				console.log(`${verb.stem}${longEre.perfectIndicativeE[person]}`);
				person +=1;
			}	
			} else {
			for (let person of iterable) {
				console.log(`${verb.stem}${longEre.perfectIndicative[person]}`);
				person +=1;
			}	
			}

		} else if (tense === 'pastImperfect') {
			for (let person of iterable) {
				console.log(`${verb.stem}${longEre.imperfectIndicative[person]}`);
				person +=1;
			}
		} else if (tense === 'presentPassive') {
			if (verb.Exception === 'true') {
			for (let person of iterable) {
				console.log(`${verb.stem}${longEre.presentPassiveE[person]}`);
				person +=1;
			}
			} else if (verb.passive === 'false') {
				return 0;
			}
			} else {
			for (let person of iterable) {
				console.log(`${verb.stem}${longEre.presentPassive[person]}`);
				person +=1;
			}
			}
	} else if (verb.type === 'shortEre') {
		if (tense === 'presentActive') {
			for (let person of iterable) {
				console.log(`${verb.stem[0]}${shortEre.presentIndicative[person]}`);
				person +=1;
			}
		} else if (tense === 'pastPerfect') {
			for (let person of iterable) {
				console.log(`${verb.stem[1]}${shortEre.perfectIndicative[person]}`);
				person +=1;
			}	
		} else if (tense === 'pastImperfect') {
			for (let person of iterable) {
				console.log(`${verb.stem[0]}${shortEre.imperfectIndicative[person]}`);
				person +=1;
			}
		} else if (tense === 'presentPassive') {
			for (let person of iterable) {
				console.log(`${verb.stem[0]}${shortEre.presentPassive[person]}`);
				person +=1;
			}
		}
	}
	return tense;
}