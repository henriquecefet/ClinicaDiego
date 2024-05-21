function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Mensagem enviada com sucesso!');
});

document.querySelector('.menu-toggle').addEventListener('click', function() {
    const navLinks = document.querySelector('nav ul');
    const menuIcon = document.querySelector('.menu-toggle .menu-icon');
    navLinks.classList.toggle('nav-active');
    menuIcon.classList.toggle('rotate');
});
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Coletar os dados do formulário
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Parâmetros do template do EmailJS
    const templateParams = {
        to_name: "dentista Diego",
        from_name: name,
        from_email: email,
        message: message
    };

    // Substitua "YOUR_SERVICE_ID" e "YOUR_TEMPLATE_ID" pelos seus respectivos IDs do EmailJS
    emailjs.send('service_kzow136', 'template_yq8g2do', templateParams)
        .then(function(response) {
            alert('Mensagem enviada com sucesso!');
            document.getElementById('contact-form').reset(); // Limpa o formulário
        }, function(error) {
            alert('Falha no envio da mensagem. Tente novamente mais tarde.');
            console.log(error);
        });
});
