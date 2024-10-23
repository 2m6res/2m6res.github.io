const light_it_up = document.getElementById("background");
const blur_circle = document.getElementById("blur-circle");
const dotted_bg = document.getElementById("dotted-bg");

document.body.onmouseenter = event => {
    dottedBgScaleUp();

    light_it_up.animate({
        opacity: "100%"
    }, {duration: 120, fill: "forwards"})

    blur_circle.animate({
        opacity: "100%"
    }, {duration: 120, fill: "forwards"})
}

function dottedBgScaleUp() {
    dotted_bg.animate({
        transform: "scale(1.2)"
    }, {duration: 500, fill: "forwards", easing: "cubic-bezier(0,0,0,1)"})
}

function dottedBgScaleDown() {
    console.log("dottedBgScaleDown");
    dotted_bg.animate({
        transform: "scale(1)"
    }, {duration: 500, fill: "forwards", easing: "cubic-bezier(0,0,0,1)"})
}

document.onmouseenter = event => {
    dottedBgScaleUp();
}

document.onmouseleave = event => {
    dottedBgScaleDown();
}

document.body.onmouseleave = event => {
    dottedBgScaleUp();

    light_it_up.animate({
        opacity: "0%"
    }, {duration: 120, fill: "forwards"})

    blur_circle.animate({
        opacity: "0%"
    }, {duration: 120, fill: "forwards"})
}

document.body.onmousemove = event => {
    const { 
        clientX, 
        clientY 
    } = event;

    document.body.animate({
        "--x": `${clientX}px`,
        "--y": `${clientY}px`
    }, {duration: 0, fill: "forwards"})
}