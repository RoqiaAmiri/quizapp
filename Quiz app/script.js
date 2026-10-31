let currentCard = 1;

let cards = document.querySelectorAll(".question-card");

function showCards() {

    cards.forEach((card, index) => {

        card.classList.remove("active");

        if (index === currentCard) {
            card.classList.add("active");
        }
    });
}


function nextCard() {

    if (currentCard < cards.length - 1) {
        currentCard++;
    } else {
        currentCard = 0;
    }

    showCards();
}


function backCard() {

    if (currentCard > 0) {
        currentCard--;
    } else {
        currentCard = cards.length - 1;
    }

    showCards();
}