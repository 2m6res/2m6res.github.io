$('img').on('dragstart', function(event) { event.preventDefault(); });

$(document).scroll((e) => {
    let percentScrolled = window.scrollY / window.innerHeight;
    
    container = document.getElementById("container");
    
    if(percentScrolled > 0.1 && !container.classList.contains("containerScaleDown")) {
        if (container.classList.contains("containerScaleUp")) {
            container.classList.remove("containerScaleUp");
        }
        container.classList.add("containerScaleDown");
    }
    
    if (percentScrolled < 0.1 && container.classList.contains("containerScaleDown")) {
        container.classList.remove("containerScaleDown");
        container.classList.add("containerScaleUp");
    }
});
