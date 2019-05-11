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

  // GET route for a specific burger.
  app.get('/api/burgerRoster/:id', (req, res) => {
    db.Burgers.findAll({
        where: {
          id: req.params.id,
        },
      })
      .then((burgerData) => {
        res.json(burgerData);
      });
  });
  // ------------------

  // PUT route
  app.put('/api/burgerRoster/', (req, res) => { // When the update request is sent to the api...
    // We are recieving an array of key value pairs with an id and an integer to add to the previous burger score.
    const burgersObj = req.body;

    // We take our recieved arrar and make a get call and then update call on each burger.
    for (burger in burgersObj) {

      const addToScore = burgersObj[burger]; // We identify the integer we are adding to the score with a variable.
      const burgerURL = `/api/burgerRoster/${burger}` // We establish a URL for our GET call using the burger id.

      $.ajax({ // We make a call to our API for a specific burger.
        url: burgerURL,
        method: "GET"
      }).then(oldBurger => {

        //We establish the burger's original score
        const ogBurgerScore = oldBurger.score;
        const newBurgerScore = ogBurgerScore + addToScore; // We create a new score by adding the integer we recieved.
        oldBurger.score = newBurgerScore;

        // We make the update call to the database for that specific burger using its ID.
        db.Burgers.update(oldBurger, {
            where: {
              id: burger,
            },
          })
          .then((upData) => {
            res.json(upData);
          });
      })
    };
  });
  // ------------------

};

// *********************************************************************************