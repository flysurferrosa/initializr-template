
  function Deck() {
    this.cards = [];
    this.count = function() {
      return this.cards.length;
    }
    this.init = function() {
      for (s =  1; s <= 4; s++) {
        for (r = 1; r <= 13; r++) {
          this.cards.push(new Card(r, s));
          }   
        }
      }
    this.deal = function(aDeck, p1, p2) {
      while (this.cards.length !== 0) {
        var randomIndex1 = Math.floor(Math.random()*this.cards.length);
        var randomCard1 = this.cards.splice(randomIndex1, 1)[0];
        p1.cards.push(randomCard1);

        var randomIndex2 = Math.floor(Math.random()*this.cards.length);
        var randomCard2 = this.cards.splice(randomIndex2, 1)[0];
        p2.cards.push(randomCard2);
      }
    }
  }
 
  function Card(rank, suit) {
    this.rank = rank;
    this.suit = suit;
    this.show = function() {
      console.log(this.rank + " of " + this.suit);
    }
  }

  d = new Deck;
  d.init();
  d.count();

  function Player() {
    this.cards = [];
    this.name = name;
    this.playCard = function(aHand, aPlayer) {
      thisCard = this.cards.pop();
      console.log("Player "+this.name+" played a "+thisCard.rank+" of "+thisCard.suit);
      $("#gameplay").append("<li>Player "+this.name+" played a "+thisCard.rank+" of "+thisCard.suit+"</li").hide()
      pile.cards.push(thisCard);
    }
  }

  p1 = new Player;
  p2 = new Player;

  function Hand() {
    this.cards = [];

    this.showCards = function(aHand) {
      for (var n = 0; n < this.cards.length; n++) {
        $("#show").append("<li>Card: " + this.cards[n].rank + " of " + this.cards[n].suit + "</li>").hide()
        console.log(this.cards[n].suit + "-" + this.cards[n].rank)
      }
    }

    this.reveal = function() {
      $("#show").fadeIn();
      $(this).fadeOut();
    }
  }

  pile = new Hand;
  p1Points = new Hand;
  p2Points = new Hand;


  

  var cardFromP1, cardFromP2; 

  var playGame = function (cardFromP1, cardFromP2, p1, p2, pile, p2Points, p1Points) {

       
      cardFromP1 = p1.cards.pop();
      console.log("Player 1 played a "+cardFromP1.rank+" of "+cardFromP1.suit);
      pile.cards.push(cardFromP1);
      
      while (p1.cards.length != 0 && p2.cards.length != 0) {

        cardFromP2 = p2.cards.pop();
        console.log("Player 2 played a "+cardFromP2.rank+" of "+cardFromP2.suit);
        pile.cards.push(cardFromP2);

        if (cardFromP2["rank"] == pile.cards[pile.cards.length-2]["rank"]) {
          console.log("Player 2 takes the pile!")
          p2Points.cards = p2Points.cards.concat(p2.cards);
        }

        cardFromP1 = p1.cards.pop();
        console.log("Player 1 played a "+cardFromP1.rank+" of "+cardFromP2.suit);
        pile.cards.push(cardFromP1);

        if (cardFromP1["rank"] == pile.cards[pile.cards.length-2]["rank"]) {
          console.log("Player 1 takes the pile!")
          p1Points.cards = p1Points.cards.concat(p1.cards);
        }
      }
        if (p1Points.cards.length > p2Points.cards.length) {
          console.log("Player 1 wins!")
        }
        else if (p1Points.cards.length < p2Points.cards.length) {
          console.log("Player 2 wins!")
        }
        else {
          console.log("It's a tie!")
        }
  }

  





