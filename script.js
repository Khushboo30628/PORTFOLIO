function toggleMenu() {
    const m = document.getElementById('mobileMenu');
    m.style.display = m.style.display === 'flex' ? 'none' : 'flex';
}

document.getElementById('year').textContent = new Date().getFullYear();


