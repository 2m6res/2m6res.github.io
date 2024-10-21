document.body.ontouchmove = event => {
    const {
        clientX,
        clientY
    } = event.touches[0];

    document.body.animate({
        "--x": `${clientX}px`,
        "--y": `${clientY}px`
    }, {duration: 0, fill: "forwards"})
}

document.body.ontouchstart = event => {
    const {
        clientX,
        clientY
    } = event.touches[0];

    dotted_bg.animate({
        transform: "scale(1.2)"
    }, {duration: 500, fill: "forwards", easing: "cubic-bezier(0,0,0,1)"})

    document.body.animate({
        "--x": `${clientX}px`,
        "--y": `${clientY}px`
    }, {duration: 0, fill: "forwards"})

    light_it_up.animate({
        opacity: "100%"
    }, {duration: 120, fill: "forwards"})

    blur_circle.animate({
        opacity: "100%"
    }, {duration: 120, fill: "forwards"})
}

document.body.ontouchend = event => {
    dotted_bg.animate({
        transform: "scale(1)"
    }, {duration: 500, fill: "forwards", easing: "cubic-bezier(0,0,0,1)"})

    light_it_up.animate({
        opacity: "0%"
    }, {duration: 120, fill: "forwards"})
    
    blur_circle.animate({
        opacity: "0%"
    }, {duration: 120, fill: "forwards"})
}

document.body.ontouchcancel = event => {
    dotted_bg.animate({
        transform: "scale(1)"
    }, {duration: 500, fill: "forwards", easing: "cubic-bezier(0,0,0,1)"})

    light_it_up.animate({
        opacity: "0%"
    }, {duration: 120, fill: "forwards"})

    blur_circle.animate({
        opacity: "0%"
    }, {duration: 120, fill: "forwards"})
}