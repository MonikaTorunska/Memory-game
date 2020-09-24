let clickedCard = false
let firstMatch, secondMatch;
const colors = ["mint", "pink", "grey", "green", "blue", "graphite", "navy", "red"]


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
    return alert("NICE!");
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

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

const game = document.querySelector(".memory-game");
function startGame() {
  game.innerHTML = "";

  const squaresColors = [...colors, ...colors];
  const shuffleSquareColors = shuffle(squaresColors);
  shuffleSquareColors.forEach((color) => {
    game.appendChild(createSquare(color));
  })

  const cards = document.querySelectorAll('.memory-game .memory-card')
  cards.forEach(card => card.addEventListener("click", onCardClicked))

}
window.onload = () => startGame();


let button = document.createElement('button');
button.innerHTML = "Play again";
document.body.appendChild(button);

button.addEventListener("click", startGame);

function createSquare(color) {
  const square = document.createElement('div');
  square.classList.add('memory-card', 'color-hidden', color);
  square.dataset.color = color;

  return square;
}






