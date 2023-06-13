const btn = document.querySelector('btn');
const tabs = document.querySelectorAll('tab');

btn.addEventListener('click', () => {
  tabs.forEach(tab => {
    tab.style.display = 'block';
    tab.style.animation = 'slideIn 0.5s ease-in-out forwards';
  });
});
