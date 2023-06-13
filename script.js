window.addEventListener("scroll", function() {
  var tabsContainer = document.getElementById("tabs-container");
  if (window.pageYOffset > 0) {
    tabsContainer.classList.add("show");
  } else {
    tabsContainer.classList.remove("show");
  }
});

function openTab(event, tabName) {
  var i, tabContent, tabLinks;

  tabContent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabContent.length; i
