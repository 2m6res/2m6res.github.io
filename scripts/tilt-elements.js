VanillaTilt.init(document.querySelectorAll(".socials img"), {
    max: 30,
    speed: 100,
    reverse: false,
    perspective: 200,
    glare: true,
    scale: 1.2,
    transition: false
});

var hasTouchscreen = 'ontouchstart' in window;

if(!hasTouchscreen) {
    VanillaTilt.init(document.getElementById("dotted-bg"), {
        max: 5,
        speed: 1000,
        reverse: false,
        perspective: 1000,
        glare: false,
        scale: 1.05,
        transition: false
        });

    VanillaTilt.init(document.getElementById("blob-cotainer"), {
        max: 5,
        speed: 1000,
        reverse: false,
        perspective: 1000,
        glare: false,
        scale: 0.9,
        transition: false
    });
}