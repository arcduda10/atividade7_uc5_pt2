// documento.js

document.addEventListener("DOMContentLoaded", function() {
    const logo = document.querySelector('.logo');
    const form = document.querySelector('.login-form');

    // Redirecionar ao clicar na logo
    logo.addEventListener('click', function() {
        window.location.href = 'recomecos.html';
    });

    // Salvar o email no armazenamento local ao submeter o formulário
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        const emailInput = form.querySelector('input[type="email"]');
        const email = emailInput.value;

        // Armazenar o email no localStorage
        localStorage.setItem('usuarioEmail', email);

        // Redirecionar para a página inicial após o login
        window.location.href = 'recomecos.html';
    });
});