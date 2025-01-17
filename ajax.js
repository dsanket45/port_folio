document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission

    const form = e.target;
    const formData = new FormData(form);
    const responseMessage = document.createElement('div');
    form.appendChild(responseMessage);

    fetch(form.action || '/', {
        method: 'POST',
        body: formData,
    })
    .then((response) => {
        if (response.ok) {
            responseMessage.innerHTML = '<p style="color: green;">Form submitted successfully!</p>';
            form.reset(); // Clear the form
        } else {
            responseMessage.innerHTML = '<p style="color: red;">Error submitting the form. Try again!</p>';
        }
    })
    .catch((error) => {
        responseMessage.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
    });
});
