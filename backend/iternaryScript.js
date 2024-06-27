// public/script.js

// Example JavaScript code to handle form submission asynchronously
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const formData = new FormData(form);
        
        fetch('/iternary', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            // Handle response data as needed (e.g., update UI with weather and plan data)
            console.log(data);
            // Example: Update DOM elements
            // Note: Update with actual DOM manipulation as per your HTML structure
        })
        .catch(error => {
            console.error('Error:', error);
            // Handle error condition (e.g., show error message to user)
            alert('An error occurred. Please try again.');
        });
    });
});
