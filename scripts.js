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

    // Verificar se os campos não estão vazios
    if (name === "" || email === "" || message === "") {
        alert('Por favor, preencha todos os campos antes de enviar a mensagem.');
        return;
    }

    // Parâmetros do template do EmailJS
    const templateParams = {
        from_name: name,
        from_email: email,
        message: message
    };

    // Substitua "YOUR_SERVICE_ID" e "YOUR_TEMPLATE_ID" pelos seus respectivos IDs do EmailJS
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
        .then(function(response) {
            alert('Mensagem enviada com sucesso!');
            document.getElementById('contact-form').reset(); // Limpa o formulário
        }, function(error) {
            alert('Falha no envio da mensagem. Tente novamente mais tarde.');
        });
});

document.getElementById('whatsapp-link').addEventListener('click', function(event) {
    event.preventDefault();

    // Coletar os dados do formulário
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Verificar se os campos não estão vazios
    if (name === "" || email === "" || message === "") {
        alert('Por favor, preencha todos os campos antes de enviar a mensagem.');
        return;
    }

    // Criar a mensagem do WhatsApp
    const whatsappMessage = `Nome: ${name}\nEmail: ${email}\nMensagem: ${message}`;
    
    // Número de telefone com código do país e DDD
    const phoneNumber = '5521995526833'; // Substitua pelo número do WhatsApp de destino

    // URL do WhatsApp
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    // Abrir a URL do WhatsApp
    window.open(whatsappUrl, '_blank');
});
