const light_it_up = document.getElementById("background");

var x = 0;
var y = 0;

document.body.onmouseenter = event => {
    light_it_up.animate({
        opacity: "100%"
    }, {duration: 120, fill: "forwards"})
}

document.body.onmouseleave = event => {
    light_it_up.animate({
        opacity: "0%"
    }, {duration: 120, fill: "forwards"})
}

document.body.onmousemove = event => {
    const { 
        clientX, 
        clientY 
    } = event;

    light_it_up.animate({
        mask: `radial-gradient(13rem at ${clientX}px ${clientY}px, rgba(0,0,0,0.8858996479451156) 0%, rgba(0,0,0,0.8606895639115021) 9%, rgba(0,0,0,0.7710537095697654) 26%, rgba(0,0,0,0.5973842417826505) 44%, rgba(0,0,0,0.35690805130646013) 63%, rgba(0,0,0,0.07357471797312676) 91%, rgba(0,0,0,0) 100%)`
    }, {duration: 0, fill: "forwards"})

}