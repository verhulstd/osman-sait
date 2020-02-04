const { Client } = require('pg')

const client = new Client({
    user: 'root',
    host: 'localhost',
    database: 'meraki',
    password: 'rootpass',
    port: 5433,
})
client.connect(err => {
    if (err) {
        console.error('connection error', err.stack)
    }
})
client.query("CREATE TABLE friends(id serial PRIMARY KEY, name VARCHAR (75) NOT NULL, age integer NOT NULL, country VARCHAR (75) UNIQUE NOT NULL)", (err, queryRes) => {
    if (err) {
        console.error('connection error', err.stack)
    } else {
        console.log('DONE PARTY !!!!!!')
    }
})
client.query("CREATE TABLE friends(id serial PRIMARY KEY, name VARCHAR (75) NOT NULL, age integer NOT NULL, country VARCHAR (75) UNIQUE NOT NULL)", (err, queryRes) => {
    if (err) {
        console.error('connection error', err.stack)
    } else {
        console.log('DONE PARTY !!!!!!')
    }
})
