// assets/js/script.js

// 1. Variáveis de Estado
const state = {
    userName: "",
    isDarkMode: false,
    fontSize: 16
};

// 2. Elementos do DOM
const btnStart = document.getElementById('start-btn');
const inputUser = document.getElementById('user-input');
const welcomeMsg = document.getElementById('welcome-msg');
const modeToggle = document.getElementById('mode-toggle');

// 3. Função de Boas-vindas (Processamento de Informação)
btnStart.addEventListener('click', () => {
    const rawName = inputUser.value.trim();
    
    if(rawName.length > 2) {
        state.userName = rawName;
        // Altera o HTML dinamicamente
        welcomeMsg.innerHTML = `<strong>Seja bem-vindo(a), ${state.userName}!</strong> Vamos juntos semear o amanhã.`;
        welcomeMsg.style.display = "block";
        inputUser.parentElement.style.display = "none";
        
        // Inicia contadores de impacto (Efeito visual)
        runCounters();
    } else {
        alert("Por favor, insira um nome válido para continuar.");
    }
});

// 4. Modo Escuro (Interatividade)
modeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    state.isDarkMode = !state.isDarkMode;
});

// 5. Função para simular contadores de sustentabilidade
function runCounters() {
    const prodDisplay = document.getElementById('counter-prod');
    let count = 0;
    const interval = setInterval(() => {
        count += 15;
        prodDisplay.innerText = count + "+";
        if(count >= 1500) clearInterval(interval);
    }, 20);
}

// 6. Acessibilidade: Aumento de Fonte
document.getElementById('font-up').addEventListener('click', () => {
    state.fontSize += 2;
    if(state.fontSize > 24) state.fontSize = 16;
    document.body.style.fontSize = state.fontSize + "px";
});
