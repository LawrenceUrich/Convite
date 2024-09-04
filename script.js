// script.js
document.getElementById('inviteButton').addEventListener('click', function(event) {
    const overlay = document.getElementById('overlay');
    overlay.classList.remove('hidden'); // Mostra o overlay
    
    launchConfetti(); // Inicia a explosão de confetes a partir do topo do site
});

document.getElementById('closeButton').addEventListener('click', function() {
    const overlay = document.getElementById('overlay');
    overlay.classList.add('hidden'); // Esconde o overlay
});

function launchConfetti() {
    const confettiContainer = document.getElementById('confettiContainer');
    confettiContainer.innerHTML = ''; // Limpa confetes anteriores

    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        
        // Define a posição inicial dos confetes como o topo do site
        confetti.style.left = `${Math.random() * window.innerWidth}px`; // Posição horizontal aleatória
        confetti.style.top = `0px`; // Começa no topo da tela
        confetti.style.backgroundColor = getRandomColor();
        
        // Adiciona o confete ao contêiner
        confettiContainer.appendChild(confetti);
        
        // Anima a queda dos confetes
        setTimeout(() => {
            const distanceX = Math.random() * 200 - 100; // deslocamento horizontal aleatório para dar um efeito de dispersão
            const distanceY = window.innerHeight + Math.random() * 200; // distância vertical para cair até o fundo da tela
            confetti.style.transform = `translate(${distanceX}px, ${distanceY}px) rotate(${Math.random() * 360}deg)`;
            confetti.style.opacity = 1; // Define a opacidade para garantir visibilidade
        }, 100); // Pequeno atraso para garantir visualização do efeito
        
        // Remove o confete após a animação
        setTimeout(() => {
            confetti.remove();
        }, 3000);
    }
}

function getRandomColor() {
    const colors = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
                    '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
                    '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
                    '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
                    '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC',
                    '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
                    '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680',
                    '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
                    '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3',
                    '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];
    return colors[Math.floor(Math.random() * colors.length)];
}
