const uuid = require('uuid/v4')

const movies = [
    {
        "title": "Titanic",
        "id": uuid()
    },
    {
        "title": "Saw",
        "id": uuid()
    },
    {
        "title": "Star wars",
        "id": uuid()
    }
];

module.exports = movies;