// GET a partial deck of Cards from API to use
function getCards() {
  fetch("http://deckofcardsapi.com/api/deck/new/", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (cards) {
      console.log(cards);
      // get deck ID
      let deckID = cards.deck_id;

      // Shuffle Cards
      function shuffleCards() {
        fetch(`http://deckofcardsapi.com/api/deck/${deckID}/shuffle/`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then(function (response) {
            return response.json();
          })
          .then(function (cards) {
            console.log(cards);
          });
      }

      // Draw the cards from the deck created
      function drawCards() {
        fetch(`http://deckofcardsapi.com/api/deck/${deckID}/draw/?count=21`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then(function (response) {
            return response.json();
          })
          .then(function (deck) {
            console.log(deck);
            // Gets the image source from API
            let images = [
              deck.cards[0].image,
              deck.cards[1].image,
              deck.cards[2].image,
              deck.cards[3].image,
              deck.cards[4].image,
              deck.cards[5].image,
              deck.cards[6].image,
              deck.cards[7].image,
              deck.cards[8].image,
              deck.cards[9].image,
              deck.cards[10].image,
              deck.cards[11].image,
              deck.cards[12].image,
              deck.cards[13].image,
              deck.cards[14].image,
              deck.cards[15].image,
              deck.cards[16].image,
              deck.cards[17].image,
              deck.cards[18].image,
              deck.cards[19].image,
              deck.cards[20].image,
            ];
            // Gets code for cards from API
            let cardCode = [
              deck.cards[0].code,
              deck.cards[1].code,
              deck.cards[2].code,
              deck.cards[3].code,
              deck.cards[4].code,
              deck.cards[5].code,
              deck.cards[6].code,
              deck.cards[7].code,
              deck.cards[8].code,
              deck.cards[9].code,
              deck.cards[10].code,
              deck.cards[11].code,
              deck.cards[12].code,
              deck.cards[13].code,
              deck.cards[14].code,
              deck.cards[15].code,
              deck.cards[16].code,
              deck.cards[17].code,
              deck.cards[18].code,
              deck.cards[19].code,
              deck.cards[20].code,
            ];

            // Displays the cards image
            document.getElementById("img1").src = images[0];
            document.getElementById("img2").src = images[1];
            document.getElementById("img3").src = images[2];
            document.getElementById("img4").src = images[3];
            document.getElementById("img5").src = images[4];
            document.getElementById("img6").src = images[5];
            document.getElementById("img7").src = images[6];
            document.getElementById("img8").src = images[7];
            document.getElementById("img9").src = images[8];
            document.getElementById("img10").src = images[9];
            document.getElementById("img11").src = images[10];
            document.getElementById("img12").src = images[11];
            document.getElementById("img13").src = images[12];
            document.getElementById("img14").src = images[13];
            document.getElementById("img15").src = images[14];
            document.getElementById("img16").src = images[15];
            document.getElementById("img17").src = images[16];
            document.getElementById("img18").src = images[17];
            document.getElementById("img19").src = images[18];
            document.getElementById("img20").src = images[19];
            document.getElementById("img21").src = images[20];

            // Adds drawn cards to a pile
            function drawnCards() {
              fetch(
                `http://deckofcardsapi.com/api/deck/${deckID}/pile/partial/add/?cards=${cardCode}`,
                {
                  method: "GET",
                  headers: {
                    "Content-Type": "application/json",
                  },
                }
              )
                .then(function (response) {
                  return response.json();
                })
                .then(function (deck) {
                  console.log(deck);
                });
            }
            drawnCards();

            // List drawn cards in the pile to use
            function listCards() {
              fetch(
                `http://deckofcardsapi.com/api/deck/${deckID}/pile/partial/list`,
                {
                  method: "GET",
                  headers: {
                    "Content-Type": "application/json",
                  },
                }
              )
                .then(function (response) {
                  return response.json();
                })
                .then(function (deck) {
                  console.log(deck);
                });
            }
            listCards();

            // Column switches
            function columnOne() {
              document.getElementById("img1").src = images[1];
              document.getElementById("img2").src = images[4];
              document.getElementById("img3").src = images[7];
              document.getElementById("img4").src = images[10];
              document.getElementById("img5").src = images[13];
              document.getElementById("img6").src = images[16];
              document.getElementById("img7").src = images[19];
              document.getElementById("img8").src = images[0];
              document.getElementById("img9").src = images[3];
              document.getElementById("img10").src = images[6];
              document.getElementById("img11").src = images[9];
              document.getElementById("img12").src = images[12];
              document.getElementById("img13").src = images[15];
              document.getElementById("img14").src = images[18];
              document.getElementById("img15").src = images[2];
              document.getElementById("img16").src = images[5];
              document.getElementById("img17").src = images[8];
              document.getElementById("img18").src = images[11];
              document.getElementById("img19").src = images[14];
              document.getElementById("img20").src = images[17];
              document.getElementById("img21").src = images[20];
            }

            function columnTwo() {
              document.getElementById("img1").src = images[1];
              document.getElementById("img2").src = images[10];
              document.getElementById("img3").src = images[19];
              document.getElementById("img4").src = images[6];
              document.getElementById("img5").src = images[15];
              document.getElementById("img6").src = images[5];
              document.getElementById("img7").src = images[14];
              document.getElementById("img8").src = images[4];
              document.getElementById("img9").src = images[13];
              document.getElementById("img10").src = images[0];
              document.getElementById("img11").src = images[9];
              document.getElementById("img12").src = images[18];
              document.getElementById("img13").src = images[8];
              document.getElementById("img14").src = images[17];
              document.getElementById("img15").src = images[7];
              document.getElementById("img16").src = images[16];
              document.getElementById("img17").src = images[3];
              document.getElementById("img18").src = images[12];
              document.getElementById("img19").src = images[2];
              document.getElementById("img20").src = images[11];
              document.getElementById("img21").src = images[20];
            }

            function columnThree() {
              document.getElementById("img1").src = images[4];
              document.getElementById("img2").src = images[13];
              document.getElementById("img3").src = images[0];
              document.getElementById("img4").src = images[9];
              document.getElementById("img5").src = images[18];
              document.getElementById("img6").src = images[8];
              document.getElementById("img7").src = images[17];
              document.getElementById("img8").src = images[7];
              document.getElementById("img9").src = images[16];
              document.getElementById("img10").src = images[3];
              document.getElementById("img11").src = images[12];
              document.getElementById("img12").src = images[2];
              document.getElementById("img13").src = images[11];
              document.getElementById("img14").src = images[20];
              document.getElementById("img15").src = images[1];
              document.getElementById("img16").src = images[10];
              document.getElementById("img17").src = images[19];
              document.getElementById("img18").src = images[6];
              document.getElementById("img19").src = images[15];
              document.getElementById("img20").src = images[5];
              document.getElementById("img21").src = images[14];
            }

            function columnOneAgain() {
              document.getElementById("img1").src = images[4];
              document.getElementById("img2").src = images[13];
              document.getElementById("img3").src = images[0];
              document.getElementById("img4").src = images[9];
              document.getElementById("img5").src = images[18];
              document.getElementById("img6").src = images[8];
              document.getElementById("img7").src = images[17];
              document.getElementById("img8").src = images[1];
              document.getElementById("img9").src = images[10];
              document.getElementById("img10").src = images[19];
              document.getElementById("img11").src = images[6];
              document.getElementById("img12").src = images[15];
              document.getElementById("img13").src = images[5];
              document.getElementById("img14").src = images[14];
              document.getElementById("img15").src = images[7];
              document.getElementById("img16").src = images[16];
              document.getElementById("img17").src = images[3];
              document.getElementById("img18").src = images[12];
              document.getElementById("img19").src = images[2];
              document.getElementById("img20").src = images[11];
              document.getElementById("img21").src = images[20];
            }

            function newColumnThree() {
              document.getElementById("img1").src = images[1];
              document.getElementById("img2").src = images[4];
              document.getElementById("img3").src = images[7];
              document.getElementById("img4").src = images[10];
              document.getElementById("img5").src = images[13];
              document.getElementById("img6").src = images[16];
              document.getElementById("img7").src = images[19];
              document.getElementById("img8").src = images[2];
              document.getElementById("img9").src = images[5];
              document.getElementById("img10").src = images[8];
              document.getElementById("img11").src = images[11];
              document.getElementById("img12").src = images[14];
              document.getElementById("img13").src = images[17];
              document.getElementById("img14").src = images[20];
              document.getElementById("img15").src = images[0];
              document.getElementById("img16").src = images[3];
              document.getElementById("img17").src = images[6];
              document.getElementById("img18").src = images[9];
              document.getElementById("img19").src = images[12];
              document.getElementById("img20").src = images[15];
              document.getElementById("img21").src = images[18];
            }

            function newColumnTwo() {
              document.getElementById("img1").src = images[1];
              document.getElementById("img2").src = images[10];
              document.getElementById("img3").src = images[19];
              document.getElementById("img4").src = images[8];
              document.getElementById("img5").src = images[17];
              document.getElementById("img6").src = images[3];
              document.getElementById("img7").src = images[12];
              document.getElementById("img8").src = images[4];
              document.getElementById("img9").src = images[13];
              document.getElementById("img10").src = images[2];
              document.getElementById("img11").src = images[11];
              document.getElementById("img12").src = images[20];
              document.getElementById("img13").src = images[6];
              document.getElementById("img14").src = images[15];
              document.getElementById("img15").src = images[7];
              document.getElementById("img16").src = images[16];
              document.getElementById("img17").src = images[5];
              document.getElementById("img18").src = images[14];
              document.getElementById("img19").src = images[0];
              document.getElementById("img20").src = images[9];
              document.getElementById("img21").src = images[18];
            }

            function newColumnOne() {
              document.getElementById("img1").src = images[4];
              document.getElementById("img2").src = images[13];
              document.getElementById("img3").src = images[2];
              document.getElementById("img4").src = images[11];
              document.getElementById("img5").src = images[20];
              document.getElementById("img6").src = images[6];
              document.getElementById("img7").src = images[15];
              document.getElementById("img8").src = images[1];
              document.getElementById("img9").src = images[10];
              document.getElementById("img10").src = images[19];
              document.getElementById("img11").src = images[8];
              document.getElementById("img12").src = images[17];
              document.getElementById("img13").src = images[3];
              document.getElementById("img14").src = images[12];
              document.getElementById("img15").src = images[7];
              document.getElementById("img16").src = images[16];
              document.getElementById("img17").src = images[5];
              document.getElementById("img18").src = images[14];
              document.getElementById("img19").src = images[0];
              document.getElementById("img20").src = images[9];
              document.getElementById("img21").src = images[18];
            }

            function columnThreeAgain() {
              document.getElementById("img1").src = images[4];
              document.getElementById("img2").src = images[13];
              document.getElementById("img3").src = images[2];
              document.getElementById("img4").src = images[11];
              document.getElementById("img5").src = images[20];
              document.getElementById("img6").src = images[6];
              document.getElementById("img7").src = images[15];
              document.getElementById("img8").src = images[7];
              document.getElementById("img9").src = images[16];
              document.getElementById("img10").src = images[5];
              document.getElementById("img11").src = images[14];
              document.getElementById("img12").src = images[0];
              document.getElementById("img13").src = images[9];
              document.getElementById("img14").src = images[18];
              document.getElementById("img15").src = images[1];
              document.getElementById("img16").src = images[10];
              document.getElementById("img17").src = images[19];
              document.getElementById("img18").src = images[8];
              document.getElementById("img19").src = images[17];
              document.getElementById("img20").src = images[3];
              document.getElementById("img21").src = images[12];
            }

            function anotherColumnTwo() {
              document.getElementById("img1").src = images[0];
              document.getElementById("img2").src = images[3];
              document.getElementById("img3").src = images[6];
              document.getElementById("img4").src = images[9];
              document.getElementById("img5").src = images[12];
              document.getElementById("img6").src = images[15];
              document.getElementById("img7").src = images[18];
              document.getElementById("img8").src = images[1];
              document.getElementById("img9").src = images[4];
              document.getElementById("img10").src = images[7];
              document.getElementById("img11").src = images[10];
              document.getElementById("img12").src = images[13];
              document.getElementById("img13").src = images[16];
              document.getElementById("img14").src = images[19];
              document.getElementById("img15").src = images[2];
              document.getElementById("img16").src = images[5];
              document.getElementById("img17").src = images[8];
              document.getElementById("img18").src = images[11];
              document.getElementById("img19").src = images[14];
              document.getElementById("img20").src = images[17];
              document.getElementById("img21").src = images[20];
            }

            function columnTwoAgain() {
              document.getElementById("img1").src = images[0];
              document.getElementById("img2").src = images[9];
              document.getElementById("img3").src = images[18];
              document.getElementById("img4").src = images[7];
              document.getElementById("img5").src = images[16];
              document.getElementById("img6").src = images[5];
              document.getElementById("img7").src = images[14];
              document.getElementById("img8").src = images[3];
              document.getElementById("img9").src = images[12];
              document.getElementById("img10").src = images[1];
              document.getElementById("img11").src = images[10];
              document.getElementById("img12").src = images[19];
              document.getElementById("img13").src = images[8];
              document.getElementById("img14").src = images[17];
              document.getElementById("img15").src = images[6];
              document.getElementById("img16").src = images[15];
              document.getElementById("img17").src = images[4];
              document.getElementById("img18").src = images[13];
              document.getElementById("img19").src = images[2];
              document.getElementById("img20").src = images[11];
              document.getElementById("img21").src = images[20];
            }

            function anotherColumnThree() {
              document.getElementById("img1").src = images[3];
              document.getElementById("img2").src = images[12];
              document.getElementById("img3").src = images[1];
              document.getElementById("img4").src = images[10];
              document.getElementById("img5").src = images[19];
              document.getElementById("img6").src = images[8];
              document.getElementById("img7").src = images[17];
              document.getElementById("img8").src = images[6];
              document.getElementById("img9").src = images[15];
              document.getElementById("img10").src = images[4];
              document.getElementById("img11").src = images[13];
              document.getElementById("img12").src = images[2];
              document.getElementById("img13").src = images[11];
              document.getElementById("img14").src = images[20];
              document.getElementById("img15").src = images[0];
              document.getElementById("img16").src = images[9];
              document.getElementById("img17").src = images[18];
              document.getElementById("img18").src = images[7];
              document.getElementById("img19").src = images[16];
              document.getElementById("img20").src = images[5];
              document.getElementById("img21").src = images[14];
            }

            function anotherColumnOne() {
              document.getElementById("img1").src = images[3];
              document.getElementById("img2").src = images[12];
              document.getElementById("img3").src = images[1];
              document.getElementById("img4").src = images[10];
              document.getElementById("img5").src = images[19];
              document.getElementById("img6").src = images[8];
              document.getElementById("img7").src = images[17];
              document.getElementById("img8").src = images[0];
              document.getElementById("img9").src = images[9];
              document.getElementById("img10").src = images[18];
              document.getElementById("img11").src = images[7];
              document.getElementById("img12").src = images[16];
              document.getElementById("img13").src = images[5];
              document.getElementById("img14").src = images[14];
              document.getElementById("img15").src = images[6];
              document.getElementById("img16").src = images[15];
              document.getElementById("img17").src = images[4];
              document.getElementById("img18").src = images[13];
              document.getElementById("img19").src = images[2];
              document.getElementById("img20").src = images[11];
              document.getElementById("img21").src = images[20];
            }

            // Card guesses
            function oneTwoOne() {
              columnTwo();
              let guess = document.getElementById("img10").src;

              document.getElementById("img1").src = guess;
              document.getElementById("img2").src = guess;
              document.getElementById("img3").src = guess;
              document.getElementById("img4").src = guess;
              document.getElementById("img5").src = guess;
              document.getElementById("img6").src = guess;
              document.getElementById("img7").src = guess;
              document.getElementById("img8").src = guess;
              document.getElementById("img9").src = guess;
              document.getElementById("img10").src = guess;
              document.getElementById("img11").src = guess;
              document.getElementById("img12").src = guess;
              document.getElementById("img13").src = guess;
              document.getElementById("img14").src = guess;
              document.getElementById("img15").src = guess;
              document.getElementById("img16").src = guess;
              document.getElementById("img17").src = guess;
              document.getElementById("img18").src = guess;
              document.getElementById("img19").src = guess;
              document.getElementById("img20").src = guess;
              document.getElementById("img21").src = guess;
            }

            function oneTwoTwo() {
              columnTwoAgain();
              let guess = document.getElementById("img2").src;

              document.getElementById("img1").src = guess;
              document.getElementById("img2").src = guess;
              document.getElementById("img3").src = guess;
              document.getElementById("img4").src = guess;
              document.getElementById("img5").src = guess;
              document.getElementById("img6").src = guess;
              document.getElementById("img7").src = guess;
              document.getElementById("img8").src = guess;
              document.getElementById("img9").src = guess;
              document.getElementById("img10").src = guess;
              document.getElementById("img11").src = guess;
              document.getElementById("img12").src = guess;
              document.getElementById("img13").src = guess;
              document.getElementById("img14").src = guess;
              document.getElementById("img15").src = guess;
              document.getElementById("img16").src = guess;
              document.getElementById("img17").src = guess;
              document.getElementById("img18").src = guess;
              document.getElementById("img19").src = guess;
              document.getElementById("img20").src = guess;
              document.getElementById("img21").src = guess;
            }

            function oneTwoThree() {
              columnTwo();
              let guess = document.getElementById("img12").src;

              document.getElementById("img1").src = guess;
              document.getElementById("img2").src = guess;
              document.getElementById("img3").src = guess;
              document.getElementById("img4").src = guess;
              document.getElementById("img5").src = guess;
              document.getElementById("img6").src = guess;
              document.getElementById("img7").src = guess;
              document.getElementById("img8").src = guess;
              document.getElementById("img9").src = guess;
              document.getElementById("img10").src = guess;
              document.getElementById("img11").src = guess;
              document.getElementById("img12").src = guess;
              document.getElementById("img13").src = guess;
              document.getElementById("img14").src = guess;
              document.getElementById("img15").src = guess;
              document.getElementById("img16").src = guess;
              document.getElementById("img17").src = guess;
              document.getElementById("img18").src = guess;
              document.getElementById("img19").src = guess;
              document.getElementById("img20").src = guess;
              document.getElementById("img21").src = guess;
            }

            function oneOneTwo() {
              columnTwo();
              let guess = document.getElementById("img4").src;

              document.getElementById("img1").src = guess;
              document.getElementById("img2").src = guess;
              document.getElementById("img3").src = guess;
              document.getElementById("img4").src = guess;
              document.getElementById("img5").src = guess;
              document.getElementById("img6").src = guess;
              document.getElementById("img7").src = guess;
              document.getElementById("img8").src = guess;
              document.getElementById("img9").src = guess;
              document.getElementById("img10").src = guess;
              document.getElementById("img11").src = guess;
              document.getElementById("img12").src = guess;
              document.getElementById("img13").src = guess;
              document.getElementById("img14").src = guess;
              document.getElementById("img15").src = guess;
              document.getElementById("img16").src = guess;
              document.getElementById("img17").src = guess;
              document.getElementById("img18").src = guess;
              document.getElementById("img19").src = guess;
              document.getElementById("img20").src = guess;
              document.getElementById("img21").src = guess;
            }

            function oneOneThree() {
              columnOneAgain();
              let guess = document.getElementById("img12").src;

              document.getElementById("img1").src = guess;
              document.getElementById("img2").src = guess;
              document.getElementById("img3").src = guess;
              document.getElementById("img4").src = guess;
              document.getElementById("img5").src = guess;
              document.getElementById("img6").src = guess;
              document.getElementById("img7").src = guess;
              document.getElementById("img8").src = guess;
              document.getElementById("img9").src = guess;
              document.getElementById("img10").src = guess;
              document.getElementById("img11").src = guess;
              document.getElementById("img12").src = guess;
              document.getElementById("img13").src = guess;
              document.getElementById("img14").src = guess;
              document.getElementById("img15").src = guess;
              document.getElementById("img16").src = guess;
              document.getElementById("img17").src = guess;
              document.getElementById("img18").src = guess;
              document.getElementById("img19").src = guess;
              document.getElementById("img20").src = guess;
              document.getElementById("img21").src = guess;
            }

            function oneThreeOne() {
              columnThree();
              let guess = document.getElementById("img10").src;

              document.getElementById("img1").src = guess;
              document.getElementById("img2").src = guess;
              document.getElementById("img3").src = guess;
              document.getElementById("img4").src = guess;
              document.getElementById("img5").src = guess;
              document.getElementById("img6").src = guess;
              document.getElementById("img7").src = guess;
              document.getElementById("img8").src = guess;
              document.getElementById("img9").src = guess;
              document.getElementById("img10").src = guess;
              document.getElementById("img11").src = guess;
              document.getElementById("img12").src = guess;
              document.getElementById("img13").src = guess;
              document.getElementById("img14").src = guess;
              document.getElementById("img15").src = guess;
              document.getElementById("img16").src = guess;
              document.getElementById("img17").src = guess;
              document.getElementById("img18").src = guess;
              document.getElementById("img19").src = guess;
              document.getElementById("img20").src = guess;
              document.getElementById("img21").src = guess;
            }

            function oneThreeTwo() {
              columnThree();
              let guess = document.getElementById("img11").src;

              document.getElementById("img1").src = guess;
              document.getElementById("img2").src = guess;
              document.getElementById("img3").src = guess;
              document.getElementById("img4").src = guess;
              document.getElementById("img5").src = guess;
              document.getElementById("img6").src = guess;
              document.getElementById("img7").src = guess;
              document.getElementById("img8").src = guess;
              document.getElementById("img9").src = guess;
              document.getElementById("img10").src = guess;
              document.getElementById("img11").src = guess;
              document.getElementById("img12").src = guess;
              document.getElementById("img13").src = guess;
              document.getElementById("img14").src = guess;
              document.getElementById("img15").src = guess;
              document.getElementById("img16").src = guess;
              document.getElementById("img17").src = guess;
              document.getElementById("img18").src = guess;
              document.getElementById("img19").src = guess;
              document.getElementById("img20").src = guess;
              document.getElementById("img21").src = guess;
            }

            function twoOneTwo() {
              anotherColumnOne();
              let guess = document.getElementById("img11").src;

              document.getElementById("img1").src = guess;
              document.getElementById("img2").src = guess;
              document.getElementById("img3").src = guess;
              document.getElementById("img4").src = guess;
              document.getElementById("img5").src = guess;
              document.getElementById("img6").src = guess;
              document.getElementById("img7").src = guess;
              document.getElementById("img8").src = guess;
              document.getElementById("img9").src = guess;
              document.getElementById("img10").src = guess;
              document.getElementById("img11").src = guess;
              document.getElementById("img12").src = guess;
              document.getElementById("img13").src = guess;
              document.getElementById("img14").src = guess;
              document.getElementById("img15").src = guess;
              document.getElementById("img16").src = guess;
              document.getElementById("img17").src = guess;
              document.getElementById("img18").src = guess;
              document.getElementById("img19").src = guess;
              document.getElementById("img20").src = guess;
              document.getElementById("img21").src = guess;
            }

            function twoOneThree() {
              anotherColumnOne();
              let guess = document.getElementById("img12").src;

              document.getElementById("img1").src = guess;
              document.getElementById("img2").src = guess;
              document.getElementById("img3").src = guess;
              document.getElementById("img4").src = guess;
              document.getElementById("img5").src = guess;
              document.getElementById("img6").src = guess;
              document.getElementById("img7").src = guess;
              document.getElementById("img8").src = guess;
              document.getElementById("img9").src = guess;
              document.getElementById("img10").src = guess;
              document.getElementById("img11").src = guess;
              document.getElementById("img12").src = guess;
              document.getElementById("img13").src = guess;
              document.getElementById("img14").src = guess;
              document.getElementById("img15").src = guess;
              document.getElementById("img16").src = guess;
              document.getElementById("img17").src = guess;
              document.getElementById("img18").src = guess;
              document.getElementById("img19").src = guess;
              document.getElementById("img20").src = guess;
              document.getElementById("img21").src = guess;
            }

            function twoTwoOne() {
              columnTwoAgain();
              let guess = document.getElementById("img10").src;

              document.getElementById("img1").src = guess;
              document.getElementById("img2").src = guess;
              document.getElementById("img3").src = guess;
              document.getElementById("img4").src = guess;
              document.getElementById("img5").src = guess;
              document.getElementById("img6").src = guess;
              document.getElementById("img7").src = guess;
              document.getElementById("img8").src = guess;
              document.getElementById("img9").src = guess;
              document.getElementById("img10").src = guess;
              document.getElementById("img11").src = guess;
              document.getElementById("img12").src = guess;
              document.getElementById("img13").src = guess;
              document.getElementById("img14").src = guess;
              document.getElementById("img15").src = guess;
              document.getElementById("img16").src = guess;
              document.getElementById("img17").src = guess;
              document.getElementById("img18").src = guess;
              document.getElementById("img19").src = guess;
              document.getElementById("img20").src = guess;
              document.getElementById("img21").src = guess;
            }

            function twoTwoTwo() {
              columnTwoAgain();
              let guess = document.getElementById("img11").src;

              document.getElementById("img1").src = guess;
              document.getElementById("img2").src = guess;
              document.getElementById("img3").src = guess;
              document.getElementById("img4").src = guess;
              document.getElementById("img5").src = guess;
              document.getElementById("img6").src = guess;
              document.getElementById("img7").src = guess;
              document.getElementById("img8").src = guess;
              document.getElementById("img9").src = guess;
              document.getElementById("img10").src = guess;
              document.getElementById("img11").src = guess;
              document.getElementById("img12").src = guess;
              document.getElementById("img13").src = guess;
              document.getElementById("img14").src = guess;
              document.getElementById("img15").src = guess;
              document.getElementById("img16").src = guess;
              document.getElementById("img17").src = guess;
              document.getElementById("img18").src = guess;
              document.getElementById("img19").src = guess;
              document.getElementById("img20").src = guess;
              document.getElementById("img21").src = guess;
            }

            function twoTwoThree() {
              columnTwoAgain();
              let guess = document.getElementById("img12").src;

              document.getElementById("img1").src = guess;
              document.getElementById("img2").src = guess;
              document.getElementById("img3").src = guess;
              document.getElementById("img4").src = guess;
              document.getElementById("img5").src = guess;
              document.getElementById("img6").src = guess;
              document.getElementById("img7").src = guess;
              document.getElementById("img8").src = guess;
              document.getElementById("img9").src = guess;
              document.getElementById("img10").src = guess;
              document.getElementById("img11").src = guess;
              document.getElementById("img12").src = guess;
              document.getElementById("img13").src = guess;
              document.getElementById("img14").src = guess;
              document.getElementById("img15").src = guess;
              document.getElementById("img16").src = guess;
              document.getElementById("img17").src = guess;
              document.getElementById("img18").src = guess;
              document.getElementById("img19").src = guess;
              document.getElementById("img20").src = guess;
              document.getElementById("img21").src = guess;
            }

            function twoThreeOne() {
              anotherColumnThree();
              let guess = document.getElementById("img10").src;

              document.getElementById("img1").src = guess;
              document.getElementById("img2").src = guess;
              document.getElementById("img3").src = guess;
              document.getElementById("img4").src = guess;
              document.getElementById("img5").src = guess;
              document.getElementById("img6").src = guess;
              document.getElementById("img7").src = guess;
              document.getElementById("img8").src = guess;
              document.getElementById("img9").src = guess;
              document.getElementById("img10").src = guess;
              document.getElementById("img11").src = guess;
              document.getElementById("img12").src = guess;
              document.getElementById("img13").src = guess;
              document.getElementById("img14").src = guess;
              document.getElementById("img15").src = guess;
              document.getElementById("img16").src = guess;
              document.getElementById("img17").src = guess;
              document.getElementById("img18").src = guess;
              document.getElementById("img19").src = guess;
              document.getElementById("img20").src = guess;
              document.getElementById("img21").src = guess;
            }

            function twoThreeTwo() {
              anotherColumnThree();
              let guess = document.getElementById("img11").src;

              document.getElementById("img1").src = guess;
              document.getElementById("img2").src = guess;
              document.getElementById("img3").src = guess;
              document.getElementById("img4").src = guess;
              document.getElementById("img5").src = guess;
              document.getElementById("img6").src = guess;
              document.getElementById("img7").src = guess;
              document.getElementById("img8").src = guess;
              document.getElementById("img9").src = guess;
              document.getElementById("img10").src = guess;
              document.getElementById("img11").src = guess;
              document.getElementById("img12").src = guess;
              document.getElementById("img13").src = guess;
              document.getElementById("img14").src = guess;
              document.getElementById("img15").src = guess;
              document.getElementById("img16").src = guess;
              document.getElementById("img17").src = guess;
              document.getElementById("img18").src = guess;
              document.getElementById("img19").src = guess;
              document.getElementById("img20").src = guess;
              document.getElementById("img21").src = guess;
            }

            function threeOneTwo() {
              newColumnOne();
              let guess = document.getElementById("img11").src;

              document.getElementById("img1").src = guess;
              document.getElementById("img2").src = guess;
              document.getElementById("img3").src = guess;
              document.getElementById("img4").src = guess;
              document.getElementById("img5").src = guess;
              document.getElementById("img6").src = guess;
              document.getElementById("img7").src = guess;
              document.getElementById("img8").src = guess;
              document.getElementById("img9").src = guess;
              document.getElementById("img10").src = guess;
              document.getElementById("img11").src = guess;
              document.getElementById("img12").src = guess;
              document.getElementById("img13").src = guess;
              document.getElementById("img14").src = guess;
              document.getElementById("img15").src = guess;
              document.getElementById("img16").src = guess;
              document.getElementById("img17").src = guess;
              document.getElementById("img18").src = guess;
              document.getElementById("img19").src = guess;
              document.getElementById("img20").src = guess;
              document.getElementById("img21").src = guess;
            }

            function threeOneThree() {
              newColumnOne();
              let guess = document.getElementById("img12").src;

              document.getElementById("img1").src = guess;
              document.getElementById("img2").src = guess;
              document.getElementById("img3").src = guess;
              document.getElementById("img4").src = guess;
              document.getElementById("img5").src = guess;
              document.getElementById("img6").src = guess;
              document.getElementById("img7").src = guess;
              document.getElementById("img8").src = guess;
              document.getElementById("img9").src = guess;
              document.getElementById("img10").src = guess;
              document.getElementById("img11").src = guess;
              document.getElementById("img12").src = guess;
              document.getElementById("img13").src = guess;
              document.getElementById("img14").src = guess;
              document.getElementById("img15").src = guess;
              document.getElementById("img16").src = guess;
              document.getElementById("img17").src = guess;
              document.getElementById("img18").src = guess;
              document.getElementById("img19").src = guess;
              document.getElementById("img20").src = guess;
              document.getElementById("img21").src = guess;
            }

            function threeTwoOne() {
              newColumnTwo();
              let guess = document.getElementById("img10").src;

              document.getElementById("img1").src = guess;
              document.getElementById("img2").src = guess;
              document.getElementById("img3").src = guess;
              document.getElementById("img4").src = guess;
              document.getElementById("img5").src = guess;
              document.getElementById("img6").src = guess;
              document.getElementById("img7").src = guess;
              document.getElementById("img8").src = guess;
              document.getElementById("img9").src = guess;
              document.getElementById("img10").src = guess;
              document.getElementById("img11").src = guess;
              document.getElementById("img12").src = guess;
              document.getElementById("img13").src = guess;
              document.getElementById("img14").src = guess;
              document.getElementById("img15").src = guess;
              document.getElementById("img16").src = guess;
              document.getElementById("img17").src = guess;
              document.getElementById("img18").src = guess;
              document.getElementById("img19").src = guess;
              document.getElementById("img20").src = guess;
              document.getElementById("img21").src = guess;
            }

            function threeTwoTwo() {
              newColumnTwo();
              let guess = document.getElementById("img11").src;

              document.getElementById("img1").src = guess;
              document.getElementById("img2").src = guess;
              document.getElementById("img3").src = guess;
              document.getElementById("img4").src = guess;
              document.getElementById("img5").src = guess;
              document.getElementById("img6").src = guess;
              document.getElementById("img7").src = guess;
              document.getElementById("img8").src = guess;
              document.getElementById("img9").src = guess;
              document.getElementById("img10").src = guess;
              document.getElementById("img11").src = guess;
              document.getElementById("img12").src = guess;
              document.getElementById("img13").src = guess;
              document.getElementById("img14").src = guess;
              document.getElementById("img15").src = guess;
              document.getElementById("img16").src = guess;
              document.getElementById("img17").src = guess;
              document.getElementById("img18").src = guess;
              document.getElementById("img19").src = guess;
              document.getElementById("img20").src = guess;
              document.getElementById("img21").src = guess;
            }

            function threeTwoThree() {
              newColumnTwo();
              let guess = document.getElementById("img12").src;

              document.getElementById("img1").src = guess;
              document.getElementById("img2").src = guess;
              document.getElementById("img3").src = guess;
              document.getElementById("img4").src = guess;
              document.getElementById("img5").src = guess;
              document.getElementById("img6").src = guess;
              document.getElementById("img7").src = guess;
              document.getElementById("img8").src = guess;
              document.getElementById("img9").src = guess;
              document.getElementById("img10").src = guess;
              document.getElementById("img11").src = guess;
              document.getElementById("img12").src = guess;
              document.getElementById("img13").src = guess;
              document.getElementById("img14").src = guess;
              document.getElementById("img15").src = guess;
              document.getElementById("img16").src = guess;
              document.getElementById("img17").src = guess;
              document.getElementById("img18").src = guess;
              document.getElementById("img19").src = guess;
              document.getElementById("img20").src = guess;
              document.getElementById("img21").src = guess;
            }

            function threeThreeOne() {
              columnThreeAgain();
              let guess = document.getElementById("img10").src;

              document.getElementById("img1").src = guess;
              document.getElementById("img2").src = guess;
              document.getElementById("img3").src = guess;
              document.getElementById("img4").src = guess;
              document.getElementById("img5").src = guess;
              document.getElementById("img6").src = guess;
              document.getElementById("img7").src = guess;
              document.getElementById("img8").src = guess;
              document.getElementById("img9").src = guess;
              document.getElementById("img10").src = guess;
              document.getElementById("img11").src = guess;
              document.getElementById("img12").src = guess;
              document.getElementById("img13").src = guess;
              document.getElementById("img14").src = guess;
              document.getElementById("img15").src = guess;
              document.getElementById("img16").src = guess;
              document.getElementById("img17").src = guess;
              document.getElementById("img18").src = guess;
              document.getElementById("img19").src = guess;
              document.getElementById("img20").src = guess;
              document.getElementById("img21").src = guess;
            }

            function threeThreeTwo() {
              columnThreeAgain();
              let guess = document.getElementById("img11").src;

              document.getElementById("img1").src = guess;
              document.getElementById("img2").src = guess;
              document.getElementById("img3").src = guess;
              document.getElementById("img4").src = guess;
              document.getElementById("img5").src = guess;
              document.getElementById("img6").src = guess;
              document.getElementById("img7").src = guess;
              document.getElementById("img8").src = guess;
              document.getElementById("img9").src = guess;
              document.getElementById("img10").src = guess;
              document.getElementById("img11").src = guess;
              document.getElementById("img12").src = guess;
              document.getElementById("img13").src = guess;
              document.getElementById("img14").src = guess;
              document.getElementById("img15").src = guess;
              document.getElementById("img16").src = guess;
              document.getElementById("img17").src = guess;
              document.getElementById("img18").src = guess;
              document.getElementById("img19").src = guess;
              document.getElementById("img20").src = guess;
              document.getElementById("img21").src = guess;
            }

            const buttonOne = document.getElementById("buttonOne");
            const buttonTwo = document.getElementById("buttonTwo");
            const buttonThree = document.getElementById("buttonThree");

            // If Column One button is clicked first
            buttonOne.addEventListener("click", (e) => {
              e.preventDefault();
              columnOne();

              buttonOne.addEventListener("click", (e) => {
                e.preventDefault();
                columnOneAgain();

                // 1-1-2
                buttonTwo.addEventListener("click", (e) => {
                  e.preventDefault();
                  oneOneTwo();
                });

                // 1-1-3
                buttonThree.addEventListener("click", (e) => {
                  e.preventDefault();
                  oneOneThree();
                });
              });

              buttonTwo.addEventListener("click", (e) => {
                e.preventDefault();
                columnTwo();

                // 1-2-1
                buttonOne.addEventListener("click", (e) => {
                  e.preventDefault();
                  oneTwoOne();
                });

                // 1-2-2
                buttonTwo.addEventListener("click", (e) => {
                  e.preventDefault();
                  oneTwoTwo();
                });

                // 1-2-3
                buttonThree.addEventListener("click", (e) => {
                  e.preventDefault();
                  oneTwoThree();
                });
              });

              buttonThree.addEventListener("click", (e) => {
                e.preventDefault();
                columnThree();

                // 1-3-1
                buttonOne.addEventListener("click", (e) => {
                  e.preventDefault();
                  oneThreeOne();
                });

                // 1-3-2
                buttonTwo.addEventListener("click", (e) => {
                  e.preventDefault();
                  oneThreeTwo();
                });
              });
            });

            // If Column Two button is clicked first
            buttonTwo.addEventListener("click", (e) => {
              e.preventDefault();
              anotherColumnTwo();

              buttonOne.addEventListener("click", (e) => {
                e.preventDefault();
                anotherColumnOne();

                // 2-1-2
                buttonTwo.addEventListener("click", (e) => {
                  e.preventDefault();
                  twoOneTwo();
                });

                // 2-1-3
                buttonThree.addEventListener("click", (e) => {
                  e.preventDefault();
                  twoOneThree();
                });
              });

              buttonTwo.addEventListener("click", (e) => {
                e.preventDefault();
                columnTwoAgain();

                // 2-2-1
                buttonOne.addEventListener("click", (e) => {
                  e.preventDefault();
                  twoTwoOne();
                });

                // 2-2-2
                buttonTwo.addEventListener("click", (e) => {
                  e.preventDefault();
                  twoTwoTwo();
                });

                // 2-2-3
                buttonThree.addEventListener("click", (e) => {
                  e.preventDefault();
                  twoTwoThree();
                });
              });

              buttonThree.addEventListener("click", (e) => {
                e.preventDefault();
                anotherColumnThree();

                // 2-3-1
                buttonOne.addEventListener("click", (e) => {
                  e.preventDefault();
                  twoThreeOne();
                });

                // 2-3-2
                buttonTwo.addEventListener("click", (e) => {
                  e.preventDefault();
                  twoThreeTwo();
                });
              });
            });

            // If Column Three button is clicked first
            buttonThree.addEventListener("click", (e) => {
              e.preventDefault();
              newColumnThree();

              buttonOne.addEventListener("click", (e) => {
                e.preventDefault();
                newColumnOne();

                // 3-1-2
                buttonTwo.addEventListener("click", (e) => {
                  e.preventDefault();
                  threeOneTwo();
                });

                // 3-1-3
                buttonThree.addEventListener("click", (e) => {
                  e.preventDefault();
                  threeOneThree();
                });
              });

              buttonTwo.addEventListener("click", (e) => {
                e.preventDefault();
                newColumnTwo();

                // 3-2-1
                buttonOne.addEventListener("click", (e) => {
                  e.preventDefault();
                  threeTwoOne();
                });

                // 3-2-2
                buttonTwo.addEventListener("click", (e) => {
                  e.preventDefault();
                  threeTwoTwo();
                });

                // 3-2-3
                buttonThree.addEventListener("click", (e) => {
                  e.preventDefault();
                  threeTwoThree();
                });
              });

              buttonThree.addEventListener("click", (e) => {
                e.preventDefault();
                columnThreeAgain();

                // 3-3-1
                buttonOne.addEventListener("click", (e) => {
                  e.preventDefault();
                  threeThreeOne();
                });

                // 3-3-2
                buttonTwo.addEventListener("click", (e) => {
                  e.preventDefault();
                  threeThreeTwo();
                });
              });
            });
          });
      }

      shuffleCards();
      drawCards();
    });
}

// Load Cards
document.getElementById("loadCards").addEventListener("click", (e) => {
  e.preventDefault();
  getCards();
});

// Reset Cards
function resetPage() {
  window.location.reload();
}
