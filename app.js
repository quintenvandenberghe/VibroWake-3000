'use strict';

const switcher = document.querySelector('.btn');

// Bij het laden: check localStorage en zet juiste theme
window.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.classList.remove('light-theme', 'dark-theme');
        document.body.classList.add(savedTheme);
        switcher.textContent = savedTheme === 'light-theme' ? 'Dark' : 'Light';
    }
});

switcher.addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    const className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Dark";
    } else {
        this.textContent = "Light";
    }
    // Sla de huidige theme op
    localStorage.setItem('theme', className);
    console.log('current class name: ' + className);
});