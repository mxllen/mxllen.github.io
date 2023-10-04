let ire = {
    meaning: 'to go',
    presentIndicative:
    ['eo',
        'iis',
        'iit',
        'iimus',
        'iitis',
        'eunt'
    ],
    imperfectIndicative: [
        'iibam',
        'iibas',
        'iibat',
        'iibamus',
        'iibatis',
        'iibant'
    ],
    perfectIndicative: [
        'iivi',
        'iisti',
        'iivit',
        'iimus',
        'iistis',
        'ierunt'
    ],
    type: 'ire'
};

let esse = {
    meaning: 'to be',
    presentIndicative:
    ['sum',
        'es',
        'est',
        'sumus',
        'estis',
        'sunt'
    ],
    imperfectIndicative: [
        'eram',
        'eras',
        'erat',
        'eramus',
        'eratis',
        'erant'
    ],
    perfectIndicative: [
        'fui',
        'fuisti',
        'fuit',
        'fuimus',
        'fuistis',
        'fuerunt'
    ],
    type: 'ire'
};

let finire = {
    meaning: [
        'to finish',
        'to limit',
        'to determine'
    ],
    stem: 'fin',
    type: 'ireIrregular'
};

let audire = {
    meaning: [
        'to hear',
        'to listen'
    ],
    stem: 'aud',
    type: 'ire'
};

let redire = {
    meaning: [
        'to return',
        'to go back'
    ],
    stem: 'red',
    type: 'ire'
};
let abire = {
    meaning: [
        'to depart',
        'to disappear'
    ],
    stem: 'ab',
    type: 'ire'
};
let adire = {
    meaning: [
        'to approach',
        'to visit'
    ],
    stem: 'ad',
    type: 'ire'
};
let exire = {
    meaning: [
        'to come out',
        'to go out'
    ],
    stem: 'ex',
    type: 'ire'
};
let inire = {
    meaning: [
        'to enter',
        'to go in'
    ],
    stem: 'in',
    type: 'ire'
};
let scire = {
    meaning: [
        'to know',
        'to understand'
    ],
    stem: 'sc',
    type: 'ireIrregular'
};
let cupere = {
    meaning: [
        'to wish',
        'to desire',
        'to long for'
    ],
    stem: 'cup',
    type: 'ireIrregular',
    passiveException: 'true'
};
let petere = {
    meaning: [
        'to desire',
        'to ask for',
        'to aim at/for',
        'to attack'
    ],
    stem: 'pet',
    type: 'ireIrregular',
    Exception: 'true'
};

let irregularIre = {
    presentIndicative:
    ['io',
        'is',
        'it',
        'imus',
        'itis',
        'iunt'
    ],
    presentIndicativeE:
    ['o',
        'is',
        'it',
        'imus',
        'itis',
        'unt'
    ],
    imperfectIndicative: [
        'iēbam',
        'iēbas',
        'iēbat',
        'iēbamus',
        'iēbatis',
        'iēbant'
    ],
    imperfectIndicativeE: [
        'ēbam',
        'ēbas',
        'ēbat',
        'ēbamus',
        'ēbatis',
        'ēbant'
    ],
    perfectIndicative: [
        'īvi',
        'īvisti',
        'īvit',
        'īvimus',
        'īvistis',
        'īverunt'
    ],
    presentPassive: [
        'ior',
        'īris',
        'ītur',
        'īmur',
        'īminī',
        'iuntur'
    ],
    presentPassiveE: [
        'ior',
        'eris',
        'ītur',
        'īmur',
        'īminī',
        'iuntur'
    ],
    presentPassiveEm: [
        'or',
        'eris',
        'ītur',
        'īmur',
        'īminī',
        'untur'
    ],
    type: 'ire'
};

let standardIre = {
    presentIndicative:
    ['eō',
        'īs',
        'it',
        'īmus',
        'ītis',
        'eunt'
    ],
    imperfectIndicative: [
        'ībam',
        'ībās',
        'ībat',
        'ībāmus',
        'ībātis',
        'ībant'
    ],
    perfectIndicative: [
        'iī',
        'īstī',
        'iit',
        'iimus',
        'īstis',
        'iērunt'
    ],
    presentPassive: [
        '-',
        '-',
        'ītur',
        '-',
        '-',
        '-'
    ],
    type: 'ire'
};

const iterable = [0, 1, 2, 3, 4, 5];

function conjugate(verb, tense) {
    if (verb.type === 'ireIrregular' || verb.type === 'ire') {
        conjugateIre(verb, tense);
    } else if (verb.type === 'are' || verb.type === 'nonStandardAre') {
        conjugateAre(verb, tense);
    } else if (verb.type === 'ere' || verb.type === 'shortEre' || verb.type === 'longEre') {
        conjugateEre(verb, tense);
    }
}

function conjugateIre(verb, tense) {
    let person = 0;
    if (verb.type === 'ireIrregular') {
        if (tense === 'presentActive') {
            if (verb.Exception === 'true') {
                for (let person of iterable) {
                    console.log(`${verb.stem}${irregularIre.presentIndicativeE[person]}`);
                    person += 1;
                }
            } else {
                for (let person of iterable) {
                    console.log(`${verb.stem}${irregularIre.presentIndicative[person]}`);
                    person += 1;
                }
            }
        } else if (tense === 'pastPerfect') {
            for (let person of iterable) {
                console.log(`${verb.stem}${irregularIre.perfectIndicative[person]}`);
                person += 1;
            }
        } else if (tense === 'pastImperfect') {
            if (verb.Exception === 'true') {
                for (let person of iterable) {
                    console.log(`${verb.stem}${irregularIre.imperfectIndicativeE[person]}`);
                    person += 1;
                }
            } else {
                for (let person of iterable) {
                    console.log(`${verb.stem}${irregularIre.imperfectIndicative[person]}`);
                    person += 1;
                }
            }
        } else if (tense === 'presentPassive') {
            if (verb.passiveException === 'true') {
                for (let person of iterable) {
                    console.log(`${verb.stem}${irregularIre.presentPassiveE[person]}`);
                    person += 1;
                }
            } else if (verb.Exception === 'true') {
                for (let person of iterable) {
                    console.log(`${verb.stem}${irregularIre.presentPassiveEm[person]}`);
                    person += 1;
                }
            } else {
                for (let person of iterable) {
                    console.log(`${verb.stem}${irregularIre.presentPassive[person]}`);
                    person += 1;
                }
            }
        } else if (verb.type === 'ire') {
            if (tense === 'presentActive') {
                for (let person of iterable) {
                    console.log(`${verb.stem}${standardIre.presentIndicative[person]}`);
                    person += 1;
                }
            } else if (tense === 'pastPerfect') {
                for (let person of iterable) {
                    console.log(`${verb.stem}${standardIre.perfectIndicative[person]}`);
                    person += 1;
                }
            } else if (tense === 'pastImperfect') {
                for (let person of iterable) {
                    console.log(`${verb.stem}${standardIre.imperfectIndicative[person]}`);
                    person += 1;
                }
            } else if (tense === 'presentPassive') {
                console.log(`${verb.stem}${standardIre.presentPassive[2]}`);
            }
        }
        return tense;
    }
}