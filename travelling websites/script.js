// You can add interactivity here if needed
// Example: Highlight active nav link on click

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelectorAll('.nav-links a').forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});

// Book Car button logic: open new details page with car info
document.querySelectorAll('.book-car-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const params = new URLSearchParams({
            car: this.getAttribute('data-car'),
            price: this.getAttribute('data-price'),
            img: this.getAttribute('data-img'),
            desc: this.getAttribute('data-desc')
        });
        window.location.href = `car-details.html?${params.toString()}`;
    });
});

// Book Taxi button logic: open details page with taxi info
document.querySelectorAll('.book-taxi-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const params = new URLSearchParams({
            car: this.getAttribute('data-car'),
            price: this.getAttribute('data-price'),
            img: this.getAttribute('data-img'),
            desc: this.getAttribute('data-desc')
        });
        window.location.href = `car-details.html?${params.toString()}`;
    });
});
