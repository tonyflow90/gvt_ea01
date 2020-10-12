let rotateImageInterval;
let nImageAngle = 0;
let bAnimationRunnig = false;

let dinoJumpInterval;
let nDinoRunFrame;


const loadImage = (nAngle) => {
    let oImage = document.querySelector('#idCircleImage');
    oImage.setAttribute('src', `/images/circles/circle_${nAngle ? nAngle : nImageAngle}.svg`);
}

let rotateImage = _ => {
    nImageAngle < 345 ? nImageAngle += 15 : nImageAngle = 0;
    loadImage(nImageAngle);
};

document.onkeypress = (oKey) => {
    let sKey = oKey.key;

    switch (sKey) {
        case "a":
            bAnimationRunnig = !bAnimationRunnig;
            if (bAnimationRunnig) {
                rotateImageInterval = setInterval(rotateImage, 100);
            } else {
                clearInterval(rotateImageInterval);
            }
            break;
        case "r":
            nImageAngle < 360 ? nImageAngle += 15 : nImageAngle = 0;
            loadImage(nImageAngle);
            break;
        case "l":
            nImageAngle <= 0 ? nImageAngle = 345 : nImageAngle -= 15;
            loadImage(nImageAngle);
            break;
        default:
            console.info(`key: ${sKey} pressed`)
    }
};


let dinoJump = _ => {
    let oDinoImage = document.querySelector('#idDinoImage');
    if (!nDinoRunFrame) {
        nDinoRunFrame = 1;
    } else {
        nDinoRunFrame < 8 ? nDinoRunFrame += 1 : nDinoRunFrame = 1;
    }

    oDinoImage.setAttribute('src', `/images/dino/Run (${nDinoRunFrame}).png`);
};

document.body.onload = _ => {
    console.info("loaded!");
    loadImage(nImageAngle);
    dinoJumpInterval = setInterval(dinoJump, 500 / 8);
};