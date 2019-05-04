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
  // GET route
  app.get('/api/WhateverWeNameIt/', (req, res) => {
    db.WhateverWeNameIt.findAll({})
      .then((data) => {
        res.json(data);
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
