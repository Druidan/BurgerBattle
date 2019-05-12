$(document).ready((getBurgerInfo) => {
  let burgerArray = [];
  let burgerScore = {};
  let leftID = 0;
  let rightID = 0;
  let burgerID = 0;
  // let masterLength = 0;

  function getBurgerInfo() {
    // event.preventDefault();
    // $('#burger-display').empty();
    // queryURL is the url we'll use to query the API

    //insert url for burger display
    const burgerDisplay = "/api/burgerRoster/";

    // Begin building an object to contain our API call's query parameters
    // Set the API key
    $.ajax({
      url: burgerDisplay,
      method: "GET"
    }).then(function (response) {
      burgerArray = response;
      // masterLength = response.length;
      // Creating elements to hold the stuff  
    });


    // $.get(burgerDisplay, (response) => {
    //   burgerArray = response;
    //   console.log(response)
    // })
  };

  getBurgerInfo()

  function burgerPopulate(burgerSide) {
 
    let burgerName = burgerArray[0].name;
    let burgerImg = burgerArray[0].picURL;

    let meatArr = [];
    const burgerMeat = burgerArray[0].Meats;
    burgerMeat.forEach(meat => {
      meatArr.push(meat.name);
    })
    const allMeat = meatArr.join(', ');

    let condArr = [];
    const burgerCondiments = burgerArray[0].Condiments;
    burgerCondiments.forEach(cond => {
      condArr.push(cond.name);
    });
    const allCondiments = condArr.join(', ');

    let breadArr = [];
    const burgerBread = burgerArray[0].Breads;
    burgerBread.forEach(bread => {
      breadArr.push(bread.name);
    });
    const allBread = breadArr.join(', ');
    burgerID = burgerArray[0].id;

    if (burgerSide === "burgerLeft") {
      leftID = burgerID;
      // q(leftID)
    } else if (burgerSide === "burgerRight") {
      rightID = burgerID;
      // q(rightID)
    }

    const burgerDiv = $('<div class="card" id="' + burgerSide + '" style="width: 12rem;">');

    // alert(burgerDiv);
    const burgerTextWrapper1 = $('<div class="card-body text-center">');


    const burgerTitle = $(`<h5 class="card-title">${burgerName}</h5>`);
    const burgerImage = $(`<img src=${burgerImg} class='card-img-top'>`);
    const burgerDescription = $(`<p class="card-descrition">The ${burgerName} features ${allMeat} on ${allBread}, topped with ${allCondiments}.</p>`);

    // Appending the stuff
    burgerDiv.append(burgerImage);
    burgerDiv.append(burgerTextWrapper1);
    burgerTextWrapper1.append(burgerName);
    burgerDiv.append(burgerDescription)


    if (burgerSide === "burgerLeft") {
      $("#burgerLeftDiv").append(burgerDiv);
    } else if (burgerSide === "burgerRight") {
      $("#burgerRightDiv").append(burgerDiv);
    }
    
  };

  //initialize function
  // $(document).on("click", "#burgerBattle", burgerInitialize);

  $('#burgerBattle').click(() => {
    burgerInitialize();
  })
 
  function burgerInitialize() {
    burgerPopulate("burgerLeft");
    leftID = burgerID;
    burgerArray.shift();
    burgerPopulate("burgerRight");
    rightID = burgerID;
    burgerArray.shift();

  }

  $('#burgerLeftDiv').click(() => {
    burgerLeftInitialize();
  })

  //Left Click function
  // $(document).on("click", "#leftBurger", burgerLeftInitialize);

  function burgerLeftInitialize() {
    //current burger needs a vote - current ID is leftID
    // burgerScore[leftID]++;

    //Take current leftID and make it the key in a key value pair with updated score for burger (0 or a 1); 
    //Push that key value pair to the burgerScore array.

    // testScore = {1:0, 2:2, 3:0, 4:1};

    $("#burgerRightDiv").empty();

    let chosenBurger = {}
    chosenBurger[leftID] = 1;
    // q(chosenBurger)

    if (burgerScore[leftID]) {
      let currentScore = burgerScore[leftID];
      currentScore++;
      burgerScore[leftID] = currentScore;
      q(burgerScore[leftID])
    } else {
      $.extend( burgerScore, chosenBurger );
      q(burgerScore[leftID])
    };
    if (burgerArray.length === 0) {
      databaseCall();
    } else {
      burgerPopulate("burgerRight");
      burgerArray.shift();
    };

  }


  $('#burgerRightDiv').click(() => {
    burgerRightInitialize();
  })
  // //Right Click function
  // $(document).on("click", "#rightBurger", burgerRightInitialize);

  function burgerRightInitialize() {

    $("#burgerLeftDiv").empty(); 


    // if (burgerScore.includes(rightID)) {
    //   burgerScore.rightID + 1;
    // } else burgerScore.rightID = 1;

    let chosenBurger = {}
    chosenBurger[rightID] = 1;
    // q(chosenBurger)

    if (burgerScore[rightID]) {
      let currentScore = burgerScore[rightID];
      currentScore++;
      burgerScore[rightID] = currentScore;
      q(burgerScore[rightID])
    } else {
      $.extend( burgerScore, chosenBurger );
      q(burgerScore[rightID])
    };
    if (burgerArray.length === 0) {
      databaseCall();
    } else {
      burgerPopulate("burgerLeft");
      burgerArray.shift();
    };
  }
  //Maybe a for loop not the most efficient way
  //Send BurgerArray with post request. Edward does computation on server side api. 
  //Api sends back burger stats in the res.json

  function databaseCall() {
    q(burgerScore);
    const burgerDisplay = '/api/burgerRoster';
    $.ajax({
      url: burgerDisplay,
      method: "PUT",
      data: burgerScore
    }).then(function (response) {
      //how to add score to that burger's ID


    });
  };
});