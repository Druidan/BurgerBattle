// Requiring our model
const db = require('../models');

// Routes
// =============================================================

module.exports = function (app) {

  //GET route for all burger data
  app.get('/api/burgerRoster/', (req, res) => {
    db.Burgers.findAll({
        include: [{
            model: db.Condiments,
            as: 'Condiments',
            required: false,
            attributes: ['id', 'name'],
            through: {
              attributes: []
            }
          },
          {
            model: db.Breads,
            as: 'Breads',
            required: false,
            attributes: ['id', 'name'],
            through: {
              attributes: []
            }
          },
          {
            model: db.Meats,
            as: 'Meats',
            required: false,
            attributes: ['id', 'name'],
            through: {
              attributes: []
            }
          },
        ],
      })
      .then((burgerData) => {
        res.json(burgerData);
      })
  })


  // PUT route
  app.put('/api/burgerRoster', function (req, res) { // When the update request is sent to the api...
    // We are recieving an array of key value pairs with an id and an integer to add to the previous burger score.
    const burgersObj = req.body;


    // We take our recieved arrar and make a get call and then update call on each burger.
    for (burger in burgersObj) {
      const addToScore = burgersObj[burger]; // We identify the integer we are adding to the score with a variable.
      const burgerURL = `/api/burgerRoster/${burger}` // We establish a URL for our GET call using the burger id.

      // We make a call to our API for a specific burger.
      app.get(burgerURL, (req, res) => {
        db.Burgers.findAll({
          where: {
            id: req.params.id,
          },
        })
        .then((burgerData) => {
        const ogBurgerScore = burgerData.score;
        console.log(ogBurgerScore)
        const newBurgerScore = ogBurgerScore + parseFloat(addToScore); // We create a new score by adding the integer we recieved.
        burgerData.score = newBurgerScore;
        // We make the update call to the database for that specific burger using its ID.
        db.Burgers.update(burgerData, {
            where: {
              id: burger,
            },
          })
          .then((upData) => {
            res.json(upData);
          });
        });
      })
    };
  });
  // ------------------

};

// *********************************************************************************