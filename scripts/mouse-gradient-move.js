const light_it_up = document.getElementById("background");
const blur_circle = document.getElementById("blur-circle");

var x = 0;
var y = 0;

document.body.onmouseenter = event => {
    light_it_up.animate({
        opacity: "100%"
    }, {duration: 120, fill: "forwards"})
    blur_circle.animate({
        opacity: "100%"
    }, {duration: 120, fill: "forwards"})
}

document.body.onmouseleave = event => {
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