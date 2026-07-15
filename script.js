// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Form submission handler
const quoteForm = document.querySelector('.quote-form form');
if (quoteForm) {
    quoteForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = this.querySelector('input[placeholder="Your Name"]').value;
        const email = this.querySelector('input[placeholder="Your Email"]').value;
        const phone = this.querySelector('input[placeholder="Your Phone"]').value;
        const service = this.querySelector('select').value;
        const message = this.querySelector('textarea').value;
        
        // Create mailto link with form data
        const subject = `Quote Request - ${service}`;
        const body = `Name: ${name}%0DPhone: ${phone}%0D%0DService: ${service}%0D%0DMessage:%0D${message}`;
        const mailtoLink = `mailto:stanley.thevanexpress@gmail.com?subject=${subject}&body=${body}`;
        
        // Open email client
        window.location.href = mailtoLink;
        
        // Reset form
        this.reset();
        alert('Thank you for your quote request! We will contact you shortly.');
    });
}

// Add scroll animation for elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe service cards and reason cards
document.querySelectorAll('.service-card, .reason-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Mobile menu toggle (if needed in future)
console.log('Van Express website loaded successfully!');