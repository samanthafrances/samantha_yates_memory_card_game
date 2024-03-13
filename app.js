const menuLinks = [
    {text: 'The Cause', href: 'index.html' },
    {text: 'Play Game', href: 'game.html' },
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

let card = document.getElementsByClassName("card");

const icons = document.getElementById("all-icons");

let closeicon = document.querySelector(".close");

let modal = document.getElementById("popup1")

//Glen helped troubleshoot here
const banana = ["dolphin", "dolphin", "anchor", "anchor", "crab", "crab", "fish", "fish", "whale", "whale", "squid", "squid", "sailboat", "sailboat", "narwhal", "narwhal"];
var openedCards = [];

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

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
 
    openedCards = [];

  const shuffledCards = shuffle (banana);

  console.log(shuffledCards);
    for (var i = 0; i < card.length; i++){
      const iconEl = document.createElement("i");
      iconEl.classList = `fa-solid fa-${shuffledCards[i]}`
      card[i].appendChild(iconEl)
    }
    
}

var displayCard = function (){
    this.classList.add("open");
    this.classList.toggle("show");
    this.classList.toggle("disabled");
};


function cardOpen() {
    openedCards.push(this);
    var len = openedCards.length;
    if(len === 2){
        moveCounter();
        if(openedCards[0].type === openedCards[1].type){
            matched();
        } else {
            unmatched();
        }
    }
};


for (var i = 0; i < card.length; i++){
  card = card[i];
  card.addEventListener("click", displayCard);
    card.addEventListener("click", cardOpen);
};