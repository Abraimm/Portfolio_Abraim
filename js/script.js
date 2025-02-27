// DEIXAR O MENU HAMBURGUER COMO X
const menuHamburguer = document.querySelector('.menu-hamburguer')
menuHamburguer.addEventListener('click', () => {
    toggleMenu();
});

function toggleMenu() {
    const nav = document.querySelector('.nav-responsive');
    menuHamburguer.classList.toggle('change');

    if (menuHamburguer.classList.contains('change')) {
        nav.style.display = 'block';

    } else {
        nav.style.display = 'none';
    }
}
// //MENU HAMBURGUER FECHADO

// FORMULÀRIO
// document.getElementById("contact").addEventListener("submit", function (event) {
//     event.preventDefault(); // Evita recarregar a página

function sendEmail() {
    // Coletando os valores do formulário
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const whatsapp = document.getElementById("whatsapp").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    // Verifica se todos os campos foram preenchidos
    if (!name || !email || !whatsapp || !subject || !message) {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    // Envia os dados para o EmailJS
    emailjs.send("service_0fqrky4", "template_w1lfnl7", {
        from_name: name,
        from_email: email,
        whatsapp: whatsapp, // Passando o campo whatsapp
        subject: subject,
        message: message
    })
    .then(response => {
        console.log("✅ E-mail enviado com sucesso!", response);
        alert("Mensagem enviada com sucesso!");
        document.getElementById("contact-form").reset(); // Limpa o formulário após envio
    })
    .catch(error => {
        console.error("❌ Erro ao enviar e-mail:", error);
        alert("Erro ao enviar mensagem. Tente novamente!");
    });
}

