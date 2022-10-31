const mysql = require('mysql2');
const inquirer = require('inquirer');
const { appendFile } = require('fs');
const express = require ('express');
const path = require('path');

const PORT = process.env.PORT || 3001;
const app = express();

// routes

//  the /api/add-movie route successfully adds a movie when tested using Insomnia. (post)
app.post('/api/add-movie', (req, res) => {
    console.info('hello')
})