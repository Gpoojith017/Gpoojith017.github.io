document.addEventListener('DOMContentLoaded', () => {

    // --- SMOOTH SCROLL & ACTIVE LINK HIGHLIGHTING ---
    const navLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.pageYOffset >= sectionTop - 70) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // --- SCROLL-IN ANIMATIONS ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show-anim');
            } else {
                // Optional: remove animation to re-trigger on scroll up
                // entry.target.classList.remove('show-anim');
            }
        });
    });

    const hiddenElements = document.querySelectorAll('.card, .portfolio-card, .skill-category, .about-text, h2');
    hiddenElements.forEach((el) => {
        el.classList.add('hidden-anim'); // Add base class for animation
        observer.observe(el);
    });
    
    // --- CONTACT FORM SIMULATION ---
    const contactForm = document.querySelector('.contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent page from reloading

        const submitButton = contactForm.querySelector('button[type="submit"]');
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;

        // Simulate a network request
        setTimeout(() => {
            submitButton.textContent = 'Message Sent!';
            submitButton.style.backgroundColor = '#28a745'; // Green for success

            // Reset form and button after a delay
            setTimeout(() => {
                contactForm.reset();
                submitButton.textContent = 'Send Message';
                submitButton.style.background = ''; // Revert to gradient
                submitButton.disabled = false;
            }, 2000);

        }, 1500);
    });
});