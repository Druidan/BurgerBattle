// *** Dependencies
// =============================================================
const express = require('express');
const db = require('./models');

// =============================================================
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

app.use(express.static('public'));

// Routes
// =============================================================
require('./routes/html-routes.js')(app);
require('./routes/api-routes.js')(app);
    //-------
    // WE CAN REPLACE THE ROUTE NAMES WITH WHATEVER ROUTE FILES WE MAKE
    //-------

// =============================================================
db.sequelize.sync({}).then( () => {
    app.listen(PORT, () => {
        console.log(`App listening on PORT ${PORT}`);
    });
});