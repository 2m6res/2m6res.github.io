const blob1 = document.getElementById("blob1");
const blob2 = document.getElementById("blob2");
const blob3 = document.getElementById("blob3");
const blob4 = document.getElementById("blob4");

function rndInt(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function blob1Animate() {
    x = rndInt(1, 100);
    y = rndInt(1, 100);
    width = rndInt(15, 20)

    duration = rndInt(6000, 8000);

    blob1.animate({
        width: `${width}rem`,
        left: `${x}%`,
        top: `${y}%`
    }, {duration: duration, fill: "forwards", easing: "ease-in-out"});

    setTimeout(blob1Animate, duration - 3000);
}

function blob2Animate() {
    x = rndInt(1, 100);
    y = rndInt(1, 100);
    width = rndInt(10, 17)

    duration = rndInt(6000, 8000);

    blob2.animate({
        width: `${width}rem`,
        left: `${x}%`,
        top: `${y}%`
    }, {duration: duration, fill: "forwards", easing: "ease-in-out"});

    setTimeout(blob2Animate, duration - 3000);
}

function blob3Animate() {
    x = rndInt(1, 100);
    y = rndInt(1, 100);
    width = rndInt(7, 14)

    duration = rndInt(6000, 8000);

    blob3.animate({
        width: `${width}rem`,
        left: `${x}%`,
        top: `${y}%`
    }, {duration: duration, fill: "forwards", easing: "ease-in-out"});

    setTimeout(blob3Animate, duration - 3000);
}

function blob4Animate() {
    x = rndInt(1, 100);
    y = rndInt(1, 100);
    width = rndInt(7, 12)

    duration = rndInt(6000, 8000);

    blob4.animate({
        width: `${width}rem`,
        left: `${x}%`,
        top: `${y}%`
    }, {duration: duration, fill: "forwards", easing: "ease-in-out"});

    setTimeout(blob4Animate, duration - 3000);
}

blob1Animate();
blob2Animate();
blob3Animate();
blob4Animate();