const menuLinks = [
    {text: 'The Cause', href: 'index.html' },

  ];
  
  const MenuEl = document.querySelector('#menu');
  if (MenuEl) {
  MenuEl.style.height = '100%';
  MenuEl.classList.add('flex-around');
  }
  
  menuLinks.forEach(link => {
    const a = document.createElement('A');
    a.href = link.href;
    a.textContent = link.text;
    MenuEl.appendChild(a);
  
  });



let card = Array.from(document.getElementsByClassName("card"));
const icons = document.getElementById("all-icons");
let closeicon = document.querySelector(".close");
let modal = document.getElementById("popup1")
const graphics = ["dolphin", "dolphin", "anchor", "anchor", "crab", "crab", "fish", "fish", "whale", "whale", "squid", "squid", "sailboat", "sailboat", "narwhal", "narwhal"];
let firstCard, secondCard;
let flippedCard = false;
let lockBoard = false;
let matchesFound = 0;



function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
};

document.body.onload = startGame();



function startGame(){
    const shuffledCards = shuffle (graphics);
    for (var i = 0; i < card.length; i++){
     const iconEl = document.createElement("i");
      iconEl.classList = `fa-solid fa-${shuffledCards[i]}`
     card[i].appendChild(iconEl)
   }  
  }




function displayCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

    this.classList.add('open', 'show');

  if (!flippedCard) {
    flippedCard = true;
    firstCard = this;
    return;
  }
 secondCard = this;
 checkMatch();
}



function reflipCard() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('open', 'show')
    secondCard.classList.remove('open', 'show')
    resetBoard()
  }, 1000)
}



function resetBoard() {
  flippedCard = false;
  lockBoard = false;
  firstCard = null;
  secondCard = null;
}



function disableCard() {
  firstCard.removeEventListener('click', displayCard)
  secondCard.removeEventListener('click', displayCard)
  resetBoard();
};



function checkMatch() {
  const firstIcon = firstCard.querySelector('i').classList[1];
  const secondIcon = secondCard.querySelector('i').classList[1];

  let match = firstIcon === secondIcon;
  match ? disableCard() : reflipCard()

}


for (var i = 0; i < card.length; i++){
  card[i].addEventListener("click", displayCard);
    
};



