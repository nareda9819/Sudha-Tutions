document.addEventListener('DOMContentLoaded', function() {
    // Smooth Scrolling
    const links = document.querySelectorAll('nav a');
    for (const link of links) {
        link.addEventListener('click', smoothScroll);
    }

    function smoothScroll(event) {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    }

    // Form Validation
    const form = document.getElementById('contact-form');
    const message = document.getElementById('form-message');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const messageContent = document.getElementById('message').value.trim();

        if (name === '' || email === '' || messageContent === '') {
            message.textContent = 'All fields are required.';
            message.style.color = 'red';
        } else {
            message.textContent = 'Thank you for your message!';
            message.style.color = 'green';
            form.reset();
        }
    });
});
