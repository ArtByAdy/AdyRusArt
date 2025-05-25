
(function () {
  emailjs.init("PsbNvcoD-8HrxNsE2");
})();

document.getElementById("contact-form").addEventListener("submit", function (event) {
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
  };

  emailjs.send('service.vudhtiy', 'template_pnqznj9', templateParams)
    .then(function (response) {
      console.log("Email către Adi trimis cu succes!");
    }, function (error) {
      alert("A apărut o eroare la trimiterea către Adi.");
      console.error("Eroare Adi:", error);
    });

  emailjs.send('service.vudhtiy', 'template_v6m8vpu', { email: email })
    .then(function (response) {
      alert("Cererea a fost trimisă cu succes! Veți primi un email de confirmare.");
    }, function (error) {
      alert("A apărut o eroare la trimiterea confirmării către client.");
      console.error("Eroare client:", error);
    });

});
