const cards = document.querySelectorAll('.memory-game .memory-card')
cards.forEach(card => card.addEventListener("click", onCardClicked))

let clickedCard = false
let firstMatch, secondMatch;

function onCardClicked(event){
  console.log(event)
  event.target.classList.toggle("color-hidden");
    if(!clickedCard) {
      clickedCard = true;
      firstMatch = event.target;
    } else {
      clickedCard = false
      secondMatch = event.target;
      console.log({firstMatch, secondMatch})
      checkForMatch(firstMatch, secondMatch);
    }
}

function checkForMatch(first, second) {
  if(first.dataset.color === second.dataset.color) {
    first.removeEventListener("click", onCardClicked);
    second.removeEventListener("click", onCardClicked);
  } else {
    clearMatches(first, second);
  }
}

function clearMatches(first, second) {
  setTimeout(() => {
    first.classList.add("color-hidden");
    second.classList.add("color-hidden");
  }, 1500)
}
