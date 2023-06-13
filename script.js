

function animateTabs() {
  var tabs = document.getElementsByClassName('tab');
  var delay = 100;

  for (var i = 0; i < tabs.length; i++) {
    (function(index) {
      setTimeout(function() {
        tabs[index].style.display = 'block';
        tabs[index].style.opacity = '0';
        tabs[index].style.transform = 'translateY(20px)';
        tabs[index].style.transition = 'opacity 0.5s, transform 0.5s';
        setTimeout(function() {
          tabs[index].style.opacity = '1';
          tabs[index].style.transform = 'translateY(0)';
        }, 50);
      }, delay);
    })(i);

    delay += 100;
  }
}



