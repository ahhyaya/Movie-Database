const mysql = require('mysql2');
const inquirer = require('inquirer');
const express = require ('express');
const path = require('path');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'movie_db'
    }
);

//  the /api/add-movie route successfully adds a movie when tested using Insomnia. (post)

app.get('/api/add-movie', (req, res) => {
    res.json(`${req.method} request recieved`);
    console.info(`${req.method} request recieved`);
})

app.post('/api/add-movie', (req, res) => {
    res.json(`${req.method} request received`);
    console.info(`${req.method} request recieved`);
});

app.get('/api/movies', (req, res) => {
    res.json(`${req.method} request recieved`);
    console.info(`${req.method} request recieved`);
});

app.delete('/api/movie/:id', (req, res) => {
    res.json(`${req.method} request recieved`);
    console.info(`${req.method} request recieved`);
});

app.get('/api/movie-reviews', (req, res) => {
    db.query(`SELECT reviews JOIN movies ON movies.id = reviews.movie_id`, function (err, results){
        console.log(results);
    })
});

app.put()

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});