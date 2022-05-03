// use GET method with a more simplified way and create less lines of code
function apiGet(path) {
  return fetch(`https://deckofcardsapi.com/api/deck/${path}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
}

// GET a partial deck of Cards from API to use
function getCards() {
  apiGet(`new/`)
    .then(function (response) {
      return response.json();
    })
    .then(function (cards) {
      console.log(cards);
      // get deck ID
      let deckID = cards.deck_id;

      // Shuffle Cards
      function shuffleCards() {
        apiGet(`${deckID}/shuffle/`)
          .then(function (response) {
            return response.json();
          })
          .then(function (cards) {
            console.log(cards);
          });
      }
      shuffleCards();

      // Draw the cards from the deck created
      function drawCards() {
        apiGet(`${deckID}/draw/?count=21`)
          .then(function (response) {
            return response.json();
          })
          .then(function (deck) {
            console.log(deck);

            let images = [];
            let cardCode = [];

            // Gets the image source from API and pushes to empty images array
            for (let index = 0; index < deck.cards.length; index++) {
              images.push(deck.cards[index].image);
            }
            // Gets code for cards from API and pushes to empty cardCode array
            for (let index = 0; index < deck.cards.length; index++) {
              cardCode.push(deck.cards[index].code);
            }

            // Displays the cards image
            function cardImgSource() {
              for (let index = 1; index <= images.length; index++) {
                document.getElementById(`img${index}`).src = images[index - 1];
              }
            }
            cardImgSource();

            // Adds drawn cards to a pile
            function drawnCards() {
              apiGet(`${deckID}/pile/partial/add/?cards=${cardCode}`)
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
              apiGet(`${deckID}/pile/partial/list`)
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

            // Card Guesses
            function cardGuessTen() {
              let imgTen = document.getElementById("img10").src;
              let guess = imgTen;

              for (let index = 1; index <= 21; index++) {
                document.getElementById(`img${index}`).src = guess;
              }
            }

            function cardGuessEleven() {
              let imgTen = document.getElementById("img11").src;
              let guess = imgTen;

              for (let index = 1; index <= 21; index++) {
                document.getElementById(`img${index}`).src = guess;
              }
            }

            function cardGuessTwelve() {
              let imgTen = document.getElementById("img12").src;
              let guess = imgTen;

              for (let index = 1; index <= 21; index++) {
                document.getElementById(`img${index}`).src = guess;
              }
            }

            // Card sequences
            function oneTwoOne() {
              columnTwo();
              cardGuessTen();
            }

            function oneTwoTwo() {
              columnTwo();
              cardGuessEleven();
            }

            function oneTwoThree() {
              columnTwo();
              cardGuessTwelve();
            }

            function oneOneTwo() {
              columnOneAgain();
              cardGuessEleven();
            }

            function oneOneThree() {
              columnOneAgain();
              cardGuessTwelve();
            }

            function oneThreeOne() {
              columnThree();
              cardGuessTen();
            }

            function oneThreeTwo() {
              columnThree();
              cardGuessEleven();
            }

            function twoOneTwo() {
              anotherColumnOne();
              cardGuessEleven();
            }

            function twoOneThree() {
              anotherColumnOne();
              cardGuessTwelve();
            }

            function twoTwoOne() {
              columnTwoAgain();
              cardGuessTen();
            }

            function twoTwoTwo() {
              columnTwoAgain();
              cardGuessEleven();
            }

            function twoTwoThree() {
              columnTwoAgain();
              cardGuessTwelve();
            }

            function twoThreeOne() {
              anotherColumnThree();
              cardGuessTen();
            }

            function twoThreeTwo() {
              anotherColumnThree();
              cardGuessEleven();
            }

            function threeOneTwo() {
              newColumnOne();
              cardGuessEleven();
            }

            function threeOneThree() {
              newColumnOne();
              cardGuessTwelve();
            }

            function threeTwoOne() {
              newColumnTwo();
              cardGuessTen();
            }

            function threeTwoTwo() {
              newColumnTwo();
              cardGuessEleven();
            }

            function threeTwoThree() {
              newColumnTwo();
              cardGuessTwelve();
            }

            function threeThreeOne() {
              columnThreeAgain();
              cardGuessTen();
            }

            function threeThreeTwo() {
              columnThreeAgain();
              cardGuessEleven();
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
