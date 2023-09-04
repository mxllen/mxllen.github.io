let anima = {
	meaning: [
	'soul', 
	'spirit', 
	'life', 
	'air', 
	'breeze', 
	'breath'
	],
	singular: 
	['anima', 
	'animae', 
	'animae', 
	'animam', 
	'anima'
	],
	plural: [
	'animae', 
	'animarum', 
	'animabus', 
	'animas', 
	'animabus'],
	gender: 'feminine'
};

let gladius = {
	meaning: [
	'sword', 
	'death (by sword)', 
	'penis (colloquial)', 
	'swordfish'
	],
	singular: [
	'gladius', 
	'gladii', 
	'gladio', 
	'gladium', 
	'gladio'
	],
	plural: 
	['gladii', 
	'gladiorum', 
	'gladiis', 
	'gladios', 
	'gladiis'
	],
	gender: 'masculine'
	
};  

let saeculum = {
	meaning: [
	'Century', 
	'Age (time/era)', 
	'worldliness', 
	'generation',
	'lifetime'
	],
	singular: [
	'Saeculum', 
	'Saeculi', 
	'Saeculo', 
	'Saeculum', 
	'Saeculo'
	],
	plural: [
	'Saecula', 
	'Saeculorum', 
	'Saeculis', 
	'Saecula', 
	'Saeculis'
	],
	gender: 'neuter'
	
};  

/*
fetch('LatinNounsUs.json')
	.then(response => response.json())
	.then(LatinNounsUs => showInfo(LatinNounsUs));
	
function showInfo(LatinNounsUs) {
	console.table(LatinNounsUs.gladius);
}  */ 

fetch('LatinNounsUs.json')
	.then(response => response.json())
	.then(data => showInfo(data));
	
function showInfo(data) {
	console.table(data.gladius);
}