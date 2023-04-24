const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard(){
    if(lockBoard) return;
    if (this=== firstCard) return;


    this.classList.add('flip');

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        
    } else {
        hasFlippedCard = false;
        secondCard = this;
        console.log(firstCard.dataset.framework);
        console.log(secondCard.dataset.framework);
    if(firstCard.dataset.framework === secondCard.dataset.framework) {
            firstCard.removeEventListener('click', flipCard);
            secondCard.removeEventListener('click', flipCard);
            resetBoard();
        } else {
            lockBoard = true;
            setTimeout(() => {
                firstCard.classList.remove('flip');
                secondCard.classList.remove('flip');
                resetBoard();
            }, 1500);
        }
    }
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
  }
  
(function shuffle() {
    cards.forEach(card => {
      let randomPos = Math.floor(Math.random() * 12);
      card.style.order = randomPos;
    });
})();

cards.forEach(card => card.addEventListener('click', flipCard))

