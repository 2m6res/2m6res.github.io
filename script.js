window.addEventListener('scroll', function() {
  var tabsContainer = document.querySelector('.tabs-container');
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

  if (scrollTop > 100) {
    tabsContainer.classList.add('visible');
  } else {
    tabsContainer.classList.remove('visible');
  }
});
