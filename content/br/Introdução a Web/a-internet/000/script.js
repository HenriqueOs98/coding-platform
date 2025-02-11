
// script.js
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Iniciando aplicação...');
    console.log('💡 Dica: Você pode inspecionar o código-fonte para aprender mais!');
    
    // Mostra as tecnologias disponíveis
    console.log('🛠️ Tecnologias utilizadas:');
    console.log('📌 HTML: Estrutura da página');
    console.log('📌 CSS: Estilização e design');
    console.log('📌 JavaScript: Interatividade e animações');
    const startButton = document.getElementById('startButton');
    const welcomeCard = document.querySelector('.welcome-card');
    
    // Adiciona animação de entrada
    welcomeCard.style.opacity = '0';
    welcomeCard.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        welcomeCard.style.transition = 'all 0.8s ease';
        welcomeCard.style.opacity = '1';
        welcomeCard.style.transform = 'translateY(0)';
    }, 100);

    // Adiciona efeito de clique no botão
    startButton.addEventListener('click', () => {
        console.log('👆 Botão clicado!');
        startButton.style.transform = 'scale(0.95)';
        setTimeout(() => {
            startButton.style.transform = 'scale(1)';
            console.log('🎉 Iniciando jornada de programação...');
            alert('Bem-vindo! Vamos começar sua jornada de programação! 🎉');
        }, 150);
    });

    // Adiciona efeito hover nos ícones de tecnologia
    const techIcons = document.querySelectorAll('.icon');
    techIcons.forEach(icon => {
        icon.addEventListener('mouseover', () => {
            console.log(`🔍 Explorando ${icon.textContent}...`);
            icon.style.transform = 'scale(1.1)';
        });
        
        icon.addEventListener('mouseout', () => {
            icon.style.transform = 'scale(1)';
        });
    });
});