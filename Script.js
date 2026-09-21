// Ensure the DOM is fully loaded before executing scripts
document.addEventListener('DOMContentLoaded', function () {
    
    // Select the contact form element
    const contactForm = document.querySelector('form');

    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            // Prevent default form submission behavior to handle validation
            event.preventDefault();

            // Retrieve input field values
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');

            // Validate that all fields are filled
            if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || messageInput.value.trim() === '') {
                alert('Please fill out all fields before submitting the message.');
                return;
            }

            // Display a success notification to the user
            alert(`Thank you, ${nameInput.value.trim()}! Your message has been sent successfully.`);

            // Clear the form fields after submission
            contactForm.reset();
        });
    }
});