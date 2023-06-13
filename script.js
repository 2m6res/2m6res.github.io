window.addEventListener('scroll', function() {
  var tabsContainer = document.querySelector('.tabs-container');
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

  if (scrollTop > 100 || tabsContainer.classList.contains('open')) {
    tabsContainer.classList.add('visible');
  } else {
    tabsContainer.classList.remove('visible');
  }
});

var viewModsButton = document.querySelector('.btn');
var tabsContainer = document.querySelector('.tabs-container');

viewModsButton.addEventListener('click', function(event) {
  event.preventDefault();
  tabsContainer.classList.toggle('open');
});
