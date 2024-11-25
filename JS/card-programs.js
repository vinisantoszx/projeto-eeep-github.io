document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card-expandable');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            // Verifica se o card está expandido
            const isExpanded = card.classList.contains('expanded');
            
            // Fecha todos os cards
            cards.forEach(c => c.classList.remove('expanded'));
            
            // Se o card não estava expandido, expande-o
            if (!isExpanded) {
                card.classList.add('expanded');
            }
        });
    });
});
