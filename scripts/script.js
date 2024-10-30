// let alexGame = {gameName: "Spongebob vs Doodlebob", gameURL: "https://a-nunley.github.io/dev-david/", gameAuthor: "Alex Nunley"};
// let allisonGame = {gameName: "Square Game", gameURL: "https://allisonlacy.github.io/alligamerepo/", gameAuthor: "Allison Lacy"};
// let baileeGame = {gameName: "Escape the Garden", gameURL: "https://baileestrait.github.io/dev-david-lab/", gameAuthor: "Bailee Strait"};
// let brittneyGame = {gameName: "Race Against the Clock: Dr. Cumbie's Time Tangle", gameURL: "https://bdaniel3.github.io/timeTangle/", gameAuthor: "Brittney Daniel"};
// let evanGame = {gameName: "Meh Game", gameURL: "https://mrspartan38.github.io/dev-david-hw/", gameAuthor: "Evan Sager"};
// let garrettGame = {gameName: "Mario Coin Catcher", gameURL: "https://gbouldin43.github.io/vigilant-giggle-david/",gameAuthor: "Garrett Bouldin"};
// let isabellaGame = {gameName: "Catch the Butterfly", gameURL: "https://iarcher444.github.io/dev-david-lab/", gameAuthor: "Isabella Archer"};
// let jacksonGame = {gameName: "Vroom", gameURL: "https://jaxn-harvey.github.io/dev-david/", gameAuthor: "Jackson Harvey"};
// let janetGame = {gameName: "Futbol Mania", gameURL: "https://jm-2017.github.io/urban-carnival-nuExample/", gameAuthor: "Janet Martinez"};
// let joshuaGame = {gameName: "Escape Room", gameURL: "https://joshuabrad03.github.io/scaling-octo-david/", gameAuthor: "Joshua Bradley"};
// let justinGame = {gameName: "Justin's Game", gameURL: "https://justinalkire.github.io/redesigned-fiesta/", gameAuthor: "Justin Alkire"};
// let kethanGame = {gameName: "Rock-Paper-Scissors", gameURL: "https://kethanpilla.github.io/dev-freddie-hw/", gameAuthor: "Kethan Pilla"};
// let masonGame = { gameName: "colorName", gameURL: "https://mlsmason6.github.io/improved-computing-machine-colorName/", gameAuthor: "Mason Schrader" };
// let millyGame = {gameName: "The Emoji Game", gameURL: "https://mtrejo03.github.io/dev-david-hw/", gameAuthor: "Milly Trejo"};
// let nickGame = {gameName: "David V Goliath", gameURL: "https://germannnick.github.io/Dev-David-Goliath/", gameAuthor: "Nick Germann"};
// let paridhiGame = {gameName: "Wow Game", gameURL: "https://pmalhotra21.github.io/wow-game/", gameAuthor: "Paridhi Malhotra"};
// let seanGame = {gameName: "Slides", gameURL: "https://basstbone.github.io/dev-david-hw/", gameAuthor: "Sean Oliver"};
// let spencerGame = {gameName: "Cow Game",gameURL: "https://sblakeuna.github.io/literate-octo-disco-david/",gameAuthor: "Spencer Blake"};
// let tuesdayGame = {gameName: "Find the Surprise!", gameURL: "https://tuesdayannb.github.io/miniature-enigma-david/", gameAuthor: "Tuesday Brown"};

let gamesList = [
    {gameName: "Spongebob vs Doodlebob", gameURL: "https://a-nunley.github.io/dev-david/", gameAuthor: "Alex Nunley"},
    {gameName: "Square Game", gameURL: "https://allisonlacy.github.io/alligamerepo/", gameAuthor: "Allison Lacy"},
    {gameName: "Escape the Garden", gameURL: "https://baileestrait.github.io/dev-david-lab/", gameAuthor: "Bailee Strait"},
    {gameName: "Race Against the Clock: Dr. Cumbie's Time Tangle", gameURL: "https://bdaniel3.github.io/timeTangle/", gameAuthor: "Brittney Daniel"},
    {gameName: "Meh Game", gameURL: "https://mrspartan38.github.io/dev-david-hw/", gameAuthor: "Evan Sager"},
    {gameName: "Mario Coin Catcher", gameURL: "https://gbouldin43.github.io/vigilant-giggle-david/",gameAuthor: "Garrett Bouldin"},
    {gameName: "Catch the Butterfly", gameURL: "https://iarcher444.github.io/dev-david-lab/", gameAuthor: "Isabella Archer"},
    {gameName: "Vroom", gameURL: "https://jaxn-harvey.github.io/dev-david/", gameAuthor: "Jackson Harvey"},
    {gameName: "Futbol Mania", gameURL: "https://jm-2017.github.io/urban-carnival-nuExample/", gameAuthor: "Janet Martinez"},
    {gameName: "Escape Room", gameURL: "https://joshuabrad03.github.io/scaling-octo-david/", gameAuthor: "Joshua Bradley"},
    {gameName: "Justin's Game", gameURL: "https://justinalkire.github.io/redesigned-fiesta/", gameAuthor: "Justin Alkire"},
    {gameName: "Rock-Paper-Scissors", gameURL: "https://kethanpilla.github.io/dev-freddie-hw/", gameAuthor: "Kethan Pilla"},
    {gameName: "colorName", gameURL: "https://mlsmason6.github.io/improved-computing-machine-colorName/", gameAuthor: "Mason Schrader"},
    {gameName: "The Emoji Game", gameURL: "https://mtrejo03.github.io/dev-david-hw/", gameAuthor: "Milly Trejo"},
    {gameName: "David V Goliath", gameURL: "https://germannnick.github.io/Dev-David-Goliath/", gameAuthor: "Nick Germann"},
    {gameName: "Wow Game", gameURL: "https://pmalhotra21.github.io/wow-game/", gameAuthor: "Paridhi Malhotra"},
    {gameName: "Slides", gameURL: "https://basstbone.github.io/dev-david-hw/", gameAuthor: "Sean Oliver"},
    {gameName: "Cow Game",gameURL: "https://sblakeuna.github.io/literate-octo-disco-david/",gameAuthor: "Spencer Blake"},
    {gameName: "Find the Surprise!", gameURL: "https://tuesdayannb.github.io/miniature-enigma-david/", gameAuthor: "Tuesday Brown"}
];

for (j = 0; j < gamesList.length; j++){
      $('#gameCards').append("<div class='col-md-3'><div class='card'><h4> <a target='_blank' href='" + 
        gamesList[j].gameURL + "'>" + gamesList[j].gameName + "</a></h4> by " + gamesList[j].gameAuthor + "</div></div>"); 
  };