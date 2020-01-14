const express = require('express')
const uuid = require('uuid/v4');
const data = require('./data')
const bodyParser = require('body-parser');

const server = express()
server.listen(5678)
server.use(bodyParser.json())


/* HTTP METHOD GET */

server.get('/api/movies', function (req, res) {
    console.log('requested all movies')
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(data)
})

server.get('/api/movies/:id', function (req, res) {
    console.log('requested one movie')
    res.setHeader('Access-Control-Allow-Origin', '*');
    const id = req.params.id
    res.send(data.find(movie => movie.id === id))
})

server.get('/api/movies/bulk/:ids', function (req, res) {
    console.log('requested multiple movies based on csv ids')
    res.setHeader('Access-Control-Allow-Origin', '*');
    const ids = req.params.ids.split(',')
    res.send(data.filter(movie => ids.includes(movie.id)))
})

/* POST DATA TO A RESTFULL ENDPOINT */

server.post('/api/movies', function (req, res) {
    data.push({
        title: req.body.title,
        id: uuid()
    })
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(data)
})