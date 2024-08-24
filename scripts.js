// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const mainContent = document.getElementById('main-content');

darkModeToggle.addEventListener('change', function() {
    if (this.checked) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
});

// Font Size Adjustment
const increaseFontBtn = document.getElementById('increase-font');
const decreaseFontBtn = document.getElementById('decrease-font');

increaseFontBtn.addEventListener('click', function() {
    adjustFontSize(1.1);
});

decreaseFontBtn.addEventListener('click', function() {
    adjustFontSize(0.9);
});

function adjustFontSize(scaleFactor) {
    const elements = mainContent.querySelectorAll('*');
    elements.forEach(element => {
        const currentFontSize = window.getComputedStyle(element).fontSize;
        const newFontSize = parseFloat(currentFontSize) * scaleFactor;
        element.style.fontSize = `${newFontSize}px`;
    });
}
