let columnHeightRight = document.getElementById("rightColumn"),
columnHeightLeft = document.getElementById("leftColumn"),
brLineAdjustCard = document.getElementById("cardFall")
brLineAdjustHr = document.getElementById("brFall")
columnHeightLeft.style.height = columnHeightRight.offsetHeight;
brLineAdjustHr.style.width = brLineAdjustCard.offsetWidth - 60;

window.onresize = alignColumns;

function alignColumns(){
	columnHeightLeft.style.height = columnHeightRight.offsetHeight,
	brLineAdjustHr.style.width = brLineAdjustCard.offsetWidth - 60;
}