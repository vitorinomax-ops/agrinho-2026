// 1. Variáveis para armazenar estado
let fontSize = 16;
const bodyElement = document.body;

// 2. Manipulação de Identidade: Boas-vindas personalizada
const inputName = document.getElementById('user-name');
const btnGreet = document.getElementById('btn-greet');
const greetingDisplay = document.getElementById('greeting-display');

// Função para processar o nome e atualizar o DOM
btnGreet.addEventListener('click', () => {
    const name = inputName.value.trim();
    
    if (name !== "") {
        // Armazena e processa a informação antes de exibir
        const message = `Olá, ${name}! Bem-vindo ao futuro do campo.`;
        greetingDisplay.textContent = message;
        greetingDisplay.classList.remove('hidden');
        inputName.parentElement.classList.add('hidden'); // Esconde o input após uso
    } else {
        alert("Por favor, digite seu nome.");
    }
});

// 3. Melhoria de Usuário: Modo Escuro
const btnTheme = document.getElementById('btn-theme');
btnTheme.addEventListener('click', () => {
    bodyElement.classList.toggle('dark-mode');
});

// 4. Melhoria de Usuário: Alteração de tamanho de fonte
const btnFont = document.getElementById('btn-font');
btnFont.addEventListener('click', () => {
    fontSize += 2;
    if (fontSize > 24) fontSize = 16; // Reset após certo tamanho
    document.documentElement.style.setProperty('--base-font', fontSize + 'px');
});
