// Seleção de elementos do DOM
const formUser = document.getElementById('form-user');
const inputName = document.getElementById('username');
const welcomeArea = document.getElementById('welcome-message');
const btnTheme = document.getElementById('btn-theme');

// Função para processar o nome e atualizar a tela
formUser.addEventListener('submit', (event) => {
    event.preventDefault(); // Evita o recarregamento da página
    
    // Armazena o valor em uma variável antes de processar
    const name = inputName.value.trim();
    
    if (name) {
        // Manipulação funcional do DOM
        formUser.classList.add('hidden');
        welcomeArea.innerHTML = `<h3>Seja bem-vindo(a), ${name}!</h3>
                                 <p>O equilíbrio começa com consciência. Explore o site abaixo.</p>`;
        welcomeArea.classList.remove('hidden');
        welcomeArea.style.color = 'var(--accent)';
    }
});

// Lógica de Modo Escuro
btnTheme.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    // Salva a preferência ou atualiza ícone se necessário
    console.log("Tema alterado pelo usuário.");
});

// Lógica de Tamanho de Fonte
let currentSize = 16;
document.getElementById('btn-font-up').addEventListener('click', () => {
    currentSize += 2;
    document.body.style.fontSize = currentSize + 'px';
});

document.getElementById('btn-font-down').addEventListener('click', () => {
    if(currentSize > 12) {
        currentSize -= 2;
        document.body.style.fontSize = currentSize + 'px';
    }
});
