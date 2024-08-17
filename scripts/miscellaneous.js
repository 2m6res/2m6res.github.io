window.addEventListener('load', function() {
    const profileContainer = document.getElementById('profile-container');
    profileContainer.style.transform = 'translateZ(0)';
    profileContainer.style.opacity = '99.9%'; // Force a tiny change
    setTimeout(() => {
        profileContainer.style.transform = '';
        profileContainer.style.opacity = '100%';
    }, 10);
});