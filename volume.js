let setVolume = document.getElementsByClassName('volumeAdjust')


for (let volumeSwitch of setVolume) {
	let volumeOutput = SC.Widget(volumeSwitch);
	volumeOutput.bind(SC.Widget.Events.READY, function(){
		volumeOutput.setVolume(0);
		console.log(volumeOutput);
	})
}