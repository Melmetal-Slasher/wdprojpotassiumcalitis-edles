const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

// Set public folder for static files like CSS, JS, and images
app.use(express.static(path.join(__dirname, 'public')));

// Set view engine to use Handlebars
app.set('view engine', 'hbs');

// Middleware for parsing form data
app.use(bodyParser.urlencoded({ extended: true }));

// Routes for each page
app.get('/', (req, res) => {
    res.render('Home.hbs');  // Renders Home.hbs
});

app.get('/StarterBuilds', (req, res) => {
    res.render('StarterBuilds.hbs');  // Renders StarterBuilds.hbs
});

app.get('/BrickMatch', (req, res) => {
    res.render('BrickMatch.hbs');  // Renders MemoryGame.hbs
});

app.get('/CommunityHighlights', (req, res) => {
    res.render('CommunityHighlights.hbs');  // Renders CommunityHighlights.hbs
});

// Start the server
const port = 3000;
app.listen(port, () => console.log(`Server running at http://localhost:${port}`));
