let imgSize = document.getElementsByClassName("fakeimg");
let enlarged = false;

console.log(imgSize);

//imgResize.onmouseover = hover;
//imgResize.onmouseout = preview;

function hover() {
    if (enlarged === false) {
        imgSize.style.height = 'auto';
        imgSize.style.width = '350px';
    } else if (enlarged === true) {
        imgSize.style.height = 'auto';
        imgSize.style.width = '810px';
    }
}

function preview() {
    if (enlarged === false) {
        imgSize.style.height = 'auto';
        imgSize.style.width = '300px';
    } else if (enlarged === true) {
        imgSize.style.height = 'auto';
        imgSize.style.width = '800px';
    }
}

for (const smallImage of imgSize) {
    console.log('test');
    /*	smallImage.onmouseover = () => {
    smallImage.style.width = `${smallImage.offsetWidth*1.05}px`;
    }
    smallImage.onmouseout = () => {
    smallImage.style.width = `${smallImage.offsetWidth*0.95}px`;
    } */
    smallImage.onclick = function () {
        console.log('test');
        if (enlarged) {
            smallImage.className = 'fakeimg';
            enlarged = false;
        } else {
            smallImage.className = 'bigImg';
            enlarged = true;
        }
    }
}

/*
for (let i = 0; i < imgSize.length; i++) {
imgSize[i].onclick = function() {
console.log('test');
imgSize[i].className = 'bigImg';
imgSize[i].onclick = null;
}
}
 */

function resize() {

    /*
    if (enlarged === false) {
    imgSize.style.height = 'auto';
    imgSize.style.width = '800px';
    enlarged = true;
    } else {
    imgSize.style.height = 'auto';
    imgSize.style.width = '300px';
    enlarged = false;
    } */
}