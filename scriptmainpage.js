function showTooltip(text) {
    const tooltip = document.getElementById('tooltip');
    tooltip.textContent = text;
    tooltip.style.display = 'block';
}

function hideTooltip() {
    document.getElementById('tooltip').style.display = 'none';
}

// Prevent default touch behavior to avoid unwanted scrolling or zooming
document.addEventListener('touchstart', function(event) {
    if (event.target.classList.contains('hotspot')) {
        event.preventDefault();
    }
}, { passive: false });

const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const navLinks = document.querySelector('.nav-links');

        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });