const express = require('express');
const app = express();
const ejsMate = require('ejs-mate');

app.set('view engine', 'ejs');
app.engine('ejs', ejsMate);

app.use(express.static('public'))


app.get("/", function (req, res) {
    res.render('home.ejs');
});

app.get("/hotels", function (req, res) {
    res.render('hotels/hotel.ejs');
});



// For Setting Up the Port at Local Host 4000
const PORT = 4000
app.listen(PORT, function () {
    console.log(`Listening on port ${PORT}`);
});