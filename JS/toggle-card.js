function toggleCard(headerElement) {
    const card = headerElement.parentElement;
    const cardBody = card.querySelector('.card-body');
    const h2 = document.querySelector('.cardh2');


    if (cardBody.style.maxHeight) {
        cardBody.style.maxHeight = null;
        cardBody.classList.remove('expanded');
    } else {
        cardBody.style.maxHeight = cardBody.scrollHeight + "px";
        cardBody.classList.add('expanded');
    }

    const content = document.querySelector('.expandable-content');
    content.classList.toggle('expanded');
}
