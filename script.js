
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const phone = this.phone.value;
    const paintingType = this.painting_type.value;
    const email = this.email.value;

    const templateParams = {
        phone: phone,
        painting_type: paintingType,
        client_email: email
    };

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
        .then(function(response) {
           alert('Cererea ta a fost trimisă cu succes!');
        }, function(error) {
           alert('A apărut o eroare. Încearcă din nou.');
        });
});
