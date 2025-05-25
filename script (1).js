document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const phone = this.phone.value;
    const paintingType = this.painting_type.value;
    const email = this.email.value;
    const orderNumber = Math.floor(Math.random() * 100000);

    const templateParams = {
        phone: phone,
        painting_type: paintingType,
        client_email: email,
        order_number: orderNumber,
        email: email
    };

    emailjs.send('service.vudhtiy', 'template_v6m8vpu', templateParams)
        .then(function(response) {
           alert('Vă mulțumim pentru mesaj! Veți fi contactat în 1–7 zile lucrătoare. 🎨');
        }, function(error) {
           alert('A apărut o eroare. Încercați din nou.');
           console.error("EmailJS error: ", error);
        });
});
