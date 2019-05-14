// Requiring our model
const db = require('../models');

// Routes
// =============================================================

module.exports = function (app) {

  //GET route for all burger data, including the associated data from the condiments, bread, and meat tables.
  app.get('/api/burgerRoster/', (req, res) => {
    db.Burgers.findAll({
        // We order by ascending so that unchosen burgers have a better chance to have a score increase, and so that the most popular burgers don't utterly monopolize the ranking.
        order: [
          ['score', 'ASC'],
        ],
        include: [{ // Include condiments
            model: db.Condiments,
            as: 'Condiments',
            required: false,
            attributes: ['id', 'name'],
            through: {
              attributes: []
            }
          },
          { // Include bread
            model: db.Breads,
            as: 'Breads',
            required: false,
            attributes: ['id', 'name'],
            through: {
              attributes: []
            }
          },
          { // Include meat
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
        // Return data
        res.json(burgerData);
      })
  })


  // PUT route to update the score of all burgers that were selectd positively by the users.
  app.put('/api/burgerRoster', function (req, res) { // When the update request is sent to the api...

    // We are recieving an object full of key value pairs with an id and an integer to add to the previous burger score.
    const burgersObj = req.body;

    // We take our recieved object and run through each key value pair, using the id to find each burger and then increment the value.
    for (burger in burgersObj) {

      // We identify the integer we are adding to the score with a variable.
      const addToScore = burgersObj[burger];

      // We use the find by primary key method to find the burger, and then use the increment method to add our integer to the currently existing score.
      db.Burgers.findByPk(burger).then(burger => {
          return burger.increment('score', {
            by: parseFloat(addToScore)
          })
        })
        .then((upData) => {
          res.json('Sucess!')
          console.log("The deed is done, sire.")
        });

    };
  });
  // ------------------
};

// *********************************************************************************