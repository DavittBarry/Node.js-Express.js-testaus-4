const fortuneCookies = require('./fortuneCookies/fortuneCookies');
const dotenv = require('dotenv');
dotenv.config( {path: './config/config.env'});
const ejs = require('ejs');
const port = process.env.PORT || 3332;

// Tehdään nyt apin.

const express = require('express');
const app = express();
const draw = fortuneCookies()

// Asennatann 'view' enginiksi.

app.use(express.static('public'));
app.set('view engine', 'ejs');

// Sijaitsevat /views-kansiossa
// Routes

app.get('/', (req, res) => {
    res.render('index', )
    res.send('Random aphorisms: ' + draw)
    });     

app.listen(port);
console.log('Server is on port: ' + port);
console.log(draw);