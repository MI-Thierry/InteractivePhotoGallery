const cards = Array.from(document.getElementsByClassName("card"));
let isAnimationAllowed = false

function HandleCardHover(event) {
    const targetCard = event.target;
    const knowMoreElement = targetCard.querySelector(".know-more");
    const nameElement = targetCard.querySelector(".name");
    const locationElement = targetCard.querySelector(".location");

    if (!isAnimationAllowed) {
        // Enable animations
        cards.forEach(card => {
            card.querySelector(".know-more").classList.remove("no-transition-animations");
            card.querySelector(".name").classList.remove("no-transition-animations");
            card.querySelector(".location").classList.remove("no-transition-animations");
        })
        isAnimationAllowed = true;
    }

    // Handle hovering event
    if (event.type === "mouseenter") {
        knowMoreElement.style.opacity = 1
        nameElement.style.transform = "translateY(0px)";
        locationElement.style.transform = "translateY(0px)";
    }

    else {
        knowMoreElement.style.opacity = 0;
        nameElement.style.transform = `translateY(${knowMoreElement.offsetHeight + 6}px)`;
        locationElement.style.transform = `translateY(${knowMoreElement.offsetHeight + 6}px)`;
    }

}

// Iterate through all elements with class name of card
cards.forEach(card => {
    const knowMoreElement = card.querySelector(".know-more");
    const nameElement = card.querySelector(".name");
    const locationElement = card.querySelector(".location");

    // Remove transition animations using class defined in CSS while positioning descriptions
    knowMoreElement.classList.add("no-transition-animations");
    nameElement.classList.add("no-transition-animations");
    locationElement.classList.add("no-transition-animations");

    // Positions descriptions
    locationElement.style.transform = `translateY(${knowMoreElement.offsetHeight + 6}px)`;
    nameElement.style.transform = `translateY(${knowMoreElement.offsetHeight + 6}px)`;

    // Add event listeners to handle mouse hovering events
    card.addEventListener("mouseenter", HandleCardHover);
    card.addEventListener("mouseleave", HandleCardHover);
});