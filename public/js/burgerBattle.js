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
    const burgerDisplay = "/api/burgerRoster";
      
    // Begin building an object to contain our API call's query parameters
    // Set the API key
    $.ajax({
        url: burgerDisplay,
        method: "GET"
    }).then(function(response) {
        burgerArray = response;
        // masterLength = response.length;
        // Creating elements to hold the stuff  
    });
    };    
          
          
  function burgerPopulate(burgerSide){  
    let burgerName = burgerArray[0].name;
    let burgerImg = burgerArray[0].picURL;
    let burgerMeat = burgeryArray[0].Meats;
    let burgerCondiments = burgerArray[0].Condiments;
    let burgerBread = burgerArray[0].Breads; 
    let burgerCheese = burgerArray[0].Cheeses;
    burgerID = burgerArray[0].id;
      
          
    const burgerDiv = $('<div class="card" id="'+burgerSide+'" style="width: 12rem;">');
  
    // alert(burgerDiv);
    const burgerTextWrapper1 = $('<div class="card-body text-center">');
    
      
    const burgerTitle = $(`<h5 class="card-title">${burgerName}</h5>`);
    const burgerImage = $(`<img src=${burgerImg} class='card-img-top'>`);
    const burgerDescription = $(`<p class="card-descrition">The ${burgerTitle} features a ${burgerMeat} patty on ${burgerBread}, topped with ${burgerCheese} and ${burgerCondiments}.</p>`);
          
    // Appending the stuff
    burgerDiv.append(burgerImage);
    burgerDiv.append(burgerTextWrapper1);
        burgerTextWrapper1.append(burgerName);
    burgerDiv.append(burgerDescription) 
            
    
           
    $("#burger-display").append(burgerDiv);
}
              
//initialize function
$(document).on("click", "#burgerBattle", burgerInitialize);

function burgerInitialize(){

burgerPopulate("burgerLeft");
leftID = burgerID;
burgerArray.shift();
burgerPopulate("burgerRight");
rightID = burgerID;
burgerArray.shift();

}



//Left Click function
$(document).on("click", "#leftBurger", burgerLeftInitialize);

function burgerLeftInitialize(){
//current burger needs a vote - current ID is leftID
// burgerScore[leftID]++;

//Take current leftID and make it the key in a key value pair with updated score for burger (0 or a 1); 
//Push that key value pair to the burgerScore array.

// testScore = {1:0, 2:2, 3:0, 4:1};

if(leftID in burgerScore){
    burgerScore.leftID + 1;
}
else{
    burgerScore.leftID = 1;
}
if(burgerArray.length === 0){
    databaseCall();
}
else{
burgerPopulate("burgerRight");

rightID = burgerID;
burgerArray.shift();

}
}
//Right Click function
$(document).on("click", "#rightBurger", burgerRightInitialize);
function burgerRightInitialize(){
if(rightID in burgerScore){
    burgerScore.rightID + 1;
}
else{
    burgerScore.rightID = 1;
};
if(burgerArray.length === 0){
    databaseCall();
}
else{


  leftID = burgerID;
burgerPopulate("burgerLeft");
burgerArray.shift();

};
}
//Maybe a for loop not the most efficient way
//Send BurgerArray with post request. Edward does computation on server side api. 
//Api sends back burger stats in the res.json

function databaseCall(){
const burgerDisplay = "/api/burgerRoster";
$.ajax({
  url: burgerDisplay,
  method: "POST",
  data: burgerScore
}).then(function(response) {
  //how to add score to that burger's ID
  
  
});
};
});
