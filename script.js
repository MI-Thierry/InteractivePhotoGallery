const cards = Array.from(document.getElementsByClassName("card"));

// Iterate through all elements with class name of card
cards.forEach(card => {
    const knowMoreClass = card.querySelector(".know-more");
    const nameClass = card.querySelector(".name");
    const locationClass = card.querySelector(".location");

    // Remove transition animations while positioning descriptions
    knowMoreClass.classList.add("no-transition-animations");
    nameClass.classList.add("no-transition-animations");
    locationClass.classList.add("no-transition-animations");

    // Positions descriptions
    locationClass.style.transform = `translateY(${knowMoreClass.offsetHeight + 6}px)`;
    nameClass.style.transform = `translateY(${knowMoreClass.offsetHeight + 6}px)`;

    // Add event listeners to every card that have className of card
    card.addEventListener("mouseenter", function (event) {
        const targetCard = event.target;
        targetCard.querySelector(".know-more").style.opacity = 1

        targetCard.querySelector(".name").style.transform = "translateY(0px)";
        targetCard.querySelector(".location").style.transform = "translateY(0px)";
    });

    card.addEventListener("mouseleave", function (event) {
        const targetCard = event.target;
        const knowMoreClass = targetCard.querySelector(".know-more");

        knowMoreClass.style.opacity = 0;

        targetCard.querySelector(".name").style.transform = `translateY(${knowMoreClass.offsetHeight + 6}px)`;
        targetCard.querySelector(".location").style.transform = `translateY(${knowMoreClass.offsetHeight + 6}px)`;
    });
});

// Wait small time before enabling the transition animations in elements
setTimeout(() => {
    cards.forEach((card, index) => {
        card.querySelector(".know-more").classList.remove("no-transition-animations");
        card.querySelector(".name").classList.remove("no-transition-animations");
        card.querySelector(".location").classList.remove("no-transition-animations");
    });
}, 0.5);