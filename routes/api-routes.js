// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our model
const db = require('../models');

// Routes
// =============================================================

module.exports = function(app) {

  //GET route for all burger data
  app.get('/api/burgerRoster/', (req, res) => {
    db.Burgers.findAll({
      include: [
        // {
        //   model: db.Condiments,
        //   as: 'Condiments',
        //   required: false,
        //   attributes: ['id', 'name'],
        //   through: { attributes: [] }
        // },
        {
          model: db.Breads,
          as: 'Breads',
          required: false,
          attributes: ['id', 'name'],
          through: { attributes: [] }
        },
        {
          model: db.Meats,
          as: 'Meats',
          required: false,
          attributes: ['id', 'name'],
          through: { attributes: [] }
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
      include: [{
        model: models.Condiments,
        as: 'condiments',
        required: false,
        attributes: ['id', 'name'],
        through: { attributes: [] }
      }],
      where: { 
        id: req.params.id,
      },
    })
      .then((burgerData) => {
        res.json(burgerData);
      });
  });
  // ------------------

  // POST route
  app.post('/api/WhateverWeNameIt', (req, res) => {
    db.WhateverWeNameIt.create({
      // stuff goes here
    })
      .then((data) => {
        res.json(data);
      });
  });
  // ------------------

  // PUT route
  app.put('/api/WhateverWeNameIt', (req, res) => {
    db.WhateverWeNameIt.update(req.body,
      {
        where: {
          id: req.body.id,
        },
      })
      .then((data) => {
        res.json(data);
      });
  });
  // ------------------

  // DELETE route
  app.delete('/api/WhateverWeNameIt/:id', (req, res) => {
    db.WhateverWeNameIt.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then((data) => {
        res.json(data);
      });
  });
  // ------------------
};

// *********************************************************************************
