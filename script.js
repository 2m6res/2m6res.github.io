var viewModsButton = document.querySelector('.btn');
var tabsContainer = document.querySelector('.tabs-container');
var isOpen = false;

viewModsButton.addEventListener('click', function(event) {
  event.preventDefault();
  isOpen = !isOpen;
  tabsContainer.classList.toggle('open', isOpen);
});

window.addEventListener('scroll', function() {
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  var shouldShowTabs = scrollTop > 100 || isOpen;
  tabsContainer.classList.toggle('visible', shouldShowTabs);
});

