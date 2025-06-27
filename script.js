/* This is a basic script.js file. You can add more interactivity as needed.
    Here are a few examples to get you started:
*/

// Example 1: Smooth scrolling to section on nav link click
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1); // Get the section ID without the #
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Example 2:  Basic form validation (if you add a form)
/*
const contactForm = document.getElementById('contact-form'); //  Replace 'contact-form' with the actual ID of your form
if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        let isValid = true;
        const nameField = document.getElementById('name'); //  Replace 'name' with the actual ID of your name input
        const emailField = document.getElementById('email'); //  Replace 'email' with the actual ID of your email input
        const messageField = document.getElementById('message'); //  Replace 'message' with the actual ID of your message input

        if (!nameField.value.trim()) {
            alert('Please enter your name.');
            isValid = false;
            event.preventDefault();
        }

        if (!emailField.value.trim()) {
            alert('Please enter your email.');
            isValid = false;
            event.preventDefault();
        } else if (!isValidEmail(emailField.value.trim())) {
            alert('Please enter a valid email address.');
            isValid = false;
            event.preventDefault();
        }

        if (!messageField.value.trim()) {
            alert('Please enter your message.');
            isValid = false;
            event.preventDefault();
        }

        if (!isValid) {
          event.preventDefault(); // Prevent form submission if not valid
        }
    });

    function isValidEmail(email) {
        //  Basic email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
}
*/

// Example 3: Change header background on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) { //  Change 50 to the scroll distance you want
        header.style.backgroundColor = '#41729F';  //  A slightly darker shade
        header.style.transition = 'background-color 0.5s ease';
    } else {
        header.style.backgroundColor = '#508AA8';
        header.style.transition = 'background-color 0.5s ease';
    }
});