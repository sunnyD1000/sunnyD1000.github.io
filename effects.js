document.querySelectorAll('a.section').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        this.classList.add('exploding');
        const href = this.getAttribute('href');
        setTimeout(() => {
            window.location.href = href;
        }, 500);
    });
});