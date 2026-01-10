const toggleButton = document.getElementById('nav-toggle');
const navLinks = document.querySelector('.nav-links');

toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
