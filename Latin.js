let anima = {
	meaning: ['soul', 'spirit', 'life', 'air', 'breeze', 'breath'],
	singular: ['anima', 'animae', 'animae', 'animam', 'anima'],
	plural: ['animae', 'animarum', 'animabus', 'animas', 'animabus'],
	gender: 'feminine'
};

/*let gladius = {
	meaning: ['sword', "death (by sword)", 'penis (colloquial)', 'swordfish'],
	singular: ['gladius', 'gladii', 'gladio', 'gladium', 'gladio'],
	plural: ['gladii', 'gladiorum', 'gladiis', 'gladios', 'gladiis'],
	gender: 'masculine'
	
}; */ 

fetch('LatinNounsUs.json')
	.then(response => response.json())
	.then(data => showInfo(data));
	
function showInfo(data) {
	console.table(data.gladius);
}