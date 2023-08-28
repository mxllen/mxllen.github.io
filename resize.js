let imgSize = document.getElementsByClassName("fakeimg"),
titleGif = document.getElementsByClassName("headimg"),
enlarged = false;

let noResizeSwitch = false

let im = new Image();
im.src = 'images\0023.gif';

console.log(imgSize);

//imgResize.onmouseover = hover;
//imgResize.onmouseout = preview;

function headerGif() {
document.getElementById("headimgsrc").src = "images\\0023.gif";
}

function headerUnGif() {
document.getElementById("headimgsrc").src = "images\\112121.jpg";
console.log('boop');
}

function noResize () {
	noResizeSwitch = true;
}

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

if (noResizeSwitch === false) {
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