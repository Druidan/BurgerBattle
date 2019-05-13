$(document).ready((getBurgerInfo) => {
  let burgerArray = [];
  let burgerScore = {};
  let leftID = 0;
  let rightID = 0;
  let burgerID = 0;

  // This function grabs all of our burger data from the database and stores it in the burgerArray variable.
  function getBurgerInfo() {

    //insert url for burger display
    const burgerDisplay = "/api/burgerRoster/";

    // Begin building an object to contain our API call's query parameters
    // Set the API key

    // Make our initial ajax call.
    $.ajax({
      url: burgerDisplay,
      method: "GET"
    }).then(function (response) {
      burgerArray = response;
    });

    // I suggest switching over to this more straightforward version of ajax calls, but it's up to you.
    // $.get(burgerDisplay, (response) => {
    //   burgerArray = response;
    //   console.log(response)
    // })
  };

  // Call the function that gets all of our burger data.
  getBurgerInfo()

  // This function creates the divs and elements that holds the next challenger burger's data.
  function burgerPopulate(burgerSide) {

    // Establish our name, url, and id variables.
    let burgerName = burgerArray[0].name;
    let burgerImg = burgerArray[0].picURL;
    burgerID = burgerArray[0].id;

    // Create a string of all the meat on this burger.
    let meatArr = [];
    const burgerMeat = burgerArray[0].Meats;
    burgerMeat.forEach(meat => {
      meatArr.push(meat.name);
    })
    const allMeat = meatArr.join(', ');

    // Create a string of all the condiments on this burger.
    let condArr = [];
    const burgerCondiments = burgerArray[0].Condiments;
    burgerCondiments.forEach(cond => {
      condArr.push(cond.name);
    });
    const allCondiments = condArr.join(', ');

    // Create a string of all the bread on this burger.
    let breadArr = [];
    const burgerBread = burgerArray[0].Breads;
    burgerBread.forEach(bread => {
      breadArr.push(bread.name);
    });
    const allBread = breadArr.join(', ');

    // Update the left or right ID depending on the side that was selected.
    if (burgerSide === "burgerLeft") {
      leftID = burgerID;
    } else if (burgerSide === "burgerRight") {
      rightID = burgerID;
    }

    // Establish the div that will have the incoming data appended to.
    const burgerDiv = $(`<div class="card" id="${burgerSide}" style="width: 12rem;">`);
    const burgerTextWrapper1 = $('<div class="card-body text-center">');

    // Establish interior elements of the card incorporating the burger data.
    const burgerTitle = $(`<h5 class="card-title">${burgerName}</h5>`);
    const burgerImage = $(`<img src=${burgerImg} class='card-img-top'>`);
    const burgerDescription = $(`<p class="card-descrition">The ${burgerName} features ${allMeat} on ${allBread}, topped with ${allCondiments}.</p>`);

    // Appending the divs and elements together.
    burgerDiv.append(burgerImage);
    burgerDiv.append(burgerTextWrapper1);
    burgerTextWrapper1.append(burgerName);
    burgerDiv.append(burgerDescription)

    // Choose which div we must append to based on the side we are populating.
    if (burgerSide === "burgerLeft") {
      $("#burgerLeftDiv").append(burgerDiv);
    } else if (burgerSide === "burgerRight") {
      $("#burgerRightDiv").append(burgerDiv);
    }

  };

  //This starting function populates both empty divs, establishes starting ids, and removes the data from the burgerArray.
  function burgerInitialize() {
    burgerPopulate("burgerLeft");
    leftID = burgerID;
    burgerArray.shift();
    burgerPopulate("burgerRight");
    rightID = burgerID;
    burgerArray.shift();
  }

  // This function, which starts when the left burger is clicked, adds a point to that burger's score in the burger score object, and triggers the population of the next burger challenger.
  function burgerLeftInitialize() {

    // Empty the right burger div to clear the way for the next challenger.
    $("#burgerRightDiv").empty();

    // Create a temporary object to hold the burger's id and intial choosen value. 
    let chosenBurger = {}
    chosenBurger[leftID] = 1;

    // If the burger's information already exists in the burgerScore object, increase the score.
    if (burgerScore[leftID]) {
      let currentScore = burgerScore[leftID];
      currentScore++;
      burgerScore[leftID] = currentScore;
    } else { // If the burger's information isn't in the burgerScore object, put the chosenBurger starting key value pair into it.
      $.extend(burgerScore, chosenBurger);
    };

    // If there are no more burgers in the burgerArray to select from, update the database with the new scores, otherwise populate the next challenger burger div and remove it from the array.
    if (burgerArray.length === 0) {
      databaseCall();
    } else {
      burgerPopulate("burgerRight");
      burgerArray.shift();
    };
  }

  // This function, which starts when the right burger is clicked, adds a point to that burger's score in the burger score object, and triggers the population of the next burger challenger.
  function burgerRightInitialize() {

    // Empty the left burger div to clear the way for the next challenger.
    $("#burgerLeftDiv").empty();

    // Create a temporary object to hold the burger's id and intial choosen value. 
    let chosenBurger = {}
    chosenBurger[rightID] = 1;

    // If the burger's information already exists in the burgerScore object, increase the score.
    if (burgerScore[rightID]) {
      let currentScore = burgerScore[rightID];
      currentScore++;
      burgerScore[rightID] = currentScore;
    } else { // If the burger's information isn't in the burgerScore object, put the chosenBurger starting key value pair into it.
      $.extend(burgerScore, chosenBurger);
    };

    // If there are no more burgers in the burgerArray to select from, update the database with the new scores, otherwise populate the next challenger burger div and remove it from the array.
    if (burgerArray.length === 0) {
      databaseCall();
    } else {
      burgerPopulate("burgerLeft");
      burgerArray.shift();
    };
  }

  // This function calls the API route that will update the database with the new scores.
  function databaseCall() {
    const burgerDisplay = '/api/burgerRoster';
    $.ajax({
      url: burgerDisplay,
      method: "PUT",
      data: burgerScore
    }).then(function (response) {
    });
  };

// All Click Event Handlers: ************************

$('#burgerBattle').click(() => {
  burgerInitialize();
})

$('#burgerLeftDiv').click(() => {
  burgerLeftInitialize();
})

$('#burgerRightDiv').click(() => {
  burgerRightInitialize();
})

//***************************************************


});