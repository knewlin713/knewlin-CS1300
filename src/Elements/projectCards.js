function initializeHoverCards() {
    const hoverCards = document.querySelectorAll('.hover-card');

    hoverCards.forEach(card => {
        const imageUrl = card.getAttribute('data-image-url');
        const title = card.getAttribute('data-title');
        const description = card.getAttribute('data-description');
        const navigate = card.getAttribute('data-navigate');
        const img = card.querySelector('.card-image');
        const cardTitle = card.querySelector('.title');
        const cardDescription = card.querySelector('.description');

        img.src = imageUrl;
        cardTitle.textContent = title;
        cardDescription.textContent = description;
        let hovered = false;
        card.addEventListener("mouseenter", () => {
            hovered = true;
            card.classList.add("hovered");
        });

        card.addEventListener("mouseleave", () => {
            hovered = false;
            card.classList.remove("hovered");
        });

        card.addEventListener("click", () => {
            if (navigate.startsWith("http://") || navigate.startsWith("https://")) {
                window.open(navigate, "_blank");
            } else {
                window.parent.location.hash = navigate;
            }
        });
    });
}

document.addEventListener("DOMContentLoaded", initializeHoverCards);