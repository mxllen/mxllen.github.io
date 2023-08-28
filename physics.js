


function dataScreenFallCalculator() {
document.getElementById("fallCalculationSpeed").innerHTML = ` Speed (max): 00.00 m/s | 00.00 Km/h`; 
document.getElementById("fallCalculationTime").innerHTML = ` Time (total): 00.00s | 00:00:00 h`; 
document.getElementById("fallCalculationEnergy").innerHTML = ` Energy (at impact): 0000.00 J | 00.00 kJ`; 
}

function fallCalculation(){

let fallHeight = document.getElementById("fallHeight").value,
weight = document.getElementById("weight").value;
h = parseFloat(fallHeight),
m = parseFloat(weight);

if (h > 0) {
	let speedMs = Math.sqrt(19.6 * h),
	speedKms = 3.6 * speedMs,
	timeS = Math.sqrt(h / 4.9),
	timeSs = timeS % 60,
	timeM = (timeS / 60) % 60,
	timeH  = timeS / 3600,
	forceJ = m * h * 9.8,
	forceKj = forceJ / 1000,
	timeTotal = undefined;
	if (timeH > 24) {
		timeS = NaN;
		timeSs = NaN;
		timeM = NaN;
		timeH = NaN;
		timeTotal = 'The fall would take more than 24 hours.'
	} else if (timeH < 24) {
		timeTotal = `${timeH.toFixed(0)}:${Math.floor(timeM.toFixed(0))}:${timeSs.toFixed(0)} h`;
	}
	console.log(` Speed: ${speedMs.toFixed(2)} m/s | ${speedKms.toFixed(2)} Km/h \n  Time: ${timeS.toFixed(2)}s | ${timeTotal} \nEnergy: ${forceJ.toFixed(2)} J | ${forceKj.toFixed(2)} kJ`);
	//document.getElementById("fallCalculationOutput").innerHTML = ` Speed: ${speedMs.toFixed(2)} m/s | ${speedKms.toFixed(2)} Km/h \n  Time: ${timeS.toFixed(2)}s | ${timeTotal} \nEnergy: ${forceJ.toFixed(2)} J | ${forceKj.toFixed(2)} kJ`;
	document.getElementById("fallCalculationSpeed").innerHTML = `Speed (max): ${speedMs.toFixed(2)} m/s | ${speedKms.toFixed(2)} Km/h`;
	document.getElementById("fallCalculationTime").innerHTML = `Time (total): ${timeS.toFixed(2)}s | ${timeTotal}`;
	document.getElementById("fallCalculationEnergy").innerHTML = `Energy (at impact): ${forceJ.toFixed(2)} J | ${forceKj.toFixed(2)} kJ`;
}
}