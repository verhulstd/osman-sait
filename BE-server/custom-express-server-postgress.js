const express = require('express')
const uuid = require('uuid/v4');
const cors = require('cors')
const morgan = require('morgan')
const data = require('./data')
const { Client } = require('pg')
// before express version Express < 4.16.0
// const bodyParser = require('body-parser');

const server = express()
server.listen(5678)
server.use(express.json())
server.use(cors())
server.use(morgan('dev'))

/* HTTP METHOD GET */

// GET ALL MOVIES
server.get('/api/movies', function (req, res) {
    console.log('requested all movies')
    const client = new Client({
        user: 'postgres',
        host: 'localhost',
        database: 'postgres',
        password: 'rootpass',
        port: 5432,
    })
    client.connect()
    client.query('SELECT * FROM movies', (err, queryRes) => {
        if (err) {
            console.log(err)
        }
        res.send(queryRes.rows)
        client.end()
    })
})

// GET 1 OR MULTIPLE MOVIES
server.get('/api/movies/:ids', function (req, res) {
    console.log('requested one movie')
    //res.setHeader('Access-Control-Allow-Origin', '*');
    const id = req.params.ids
    if (id.indexOf(',') === -1) {
        res.send(data.find(movie => movie.id === id))
    } else {
        const ids = req.params.ids.split(',')
        res.send(data.filter(movie => ids.includes(movie.id)))
    }
})


// /* POST DATA TO A RESTFULL ENDPOINT */
server.post('/api/movies', function (req, res) {
    data.push({
        title: req.body.title,
        id: uuid()
    })
    //res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(data)
})

server.put('/api/movies/:id', function (req, res) {
    //searching for the movie with specific id => movieObj
    const foundMovieObj = data.find(movie => movie.id === req.params.id)
    //where is this movieObj situated in the data array
    const positionInArray = data.indexOf(foundMovieObj)
    //at that specific spot i need to update the movieObject 
    data[positionInArray].title = req.body.title
    //res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(data)
})

server.delete('/api/movies/:id', function (req, res) {
    //searching for the movie with specific id => movieObj
    const foundMovieObj = data.find(movie => movie.id === req.params.id)
    //where is this movieObj situated in the data array
    const positionInArray = data.indexOf(foundMovieObj)
    data.splice(positionInArray, 1)
    res.send(data)
})