const express = require('express');
const app = express();


// Index Route

app.get('/', (req, res) => {

    res.send('myindex');
});

// About Route

app.get('/about', (req, res) => {

    res.send('This is an <b style="color: red;">ABOUT</b> page.');

});

// Home Page Route

app.get('/home', (req, res) => {

    res.send('This is the <b>HOME</b> page of this site');

});

const port = 5000;

app.listen(port, () => {

    console.log(`Server started on port ${port}`);
});