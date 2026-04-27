// 1. Variáveis de estado
let fontSize = 16;
const body = document.body;

// 2. Elementos
const themeBtn = document.getElementById('theme-btn');
const fontBtn = document.getElementById('font-up');
const actionBtn = document.getElementById('main-action');
const inputName = document.getElementById('user-name');
const welcomeBox = document.getElementById('display-welcome');
const interactionBox = document.getElementById('interaction-box');

// Função: Modo Escuro
themeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    console.log("Tema alternado");
});

// Função: Aumentar Fonte
fontBtn.addEventListener('click', () => {
    fontSize += 2;
    if (fontSize > 26) fontSize = 16; // Reinicia se ficar muito grande
    body.style.fontSize = fontSize + "px";
});

// Função: Processar Nome e Alterar DOM
actionBtn.addEventListener('click', () => {
    const nomeUsuario = inputName.value.trim();

    if (nomeUsuario !== "") {
        // Manipulação funcional: Esconde um e mostra outro
        interactionBox.classList.add('hidden');
        
        welcomeBox.innerHTML = `
            <div style="padding: 20px; border: 2px solid var(--primary); border-radius: 10px;">
                <h2>Bem-vindo à revolução, ${nomeUsuario}!</h2>
                <p>Obrigado por apoiar um agro mais forte e sustentável.</p>
            </div>
        `;
        welcomeBox.classList.remove('hidden');
    } else {
        alert("Por favor, digite seu nome para continuar.");
    }
});
