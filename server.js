require('dotenv').config()

const express = require('express')

const app = express()

const PORT = 3000

// Load the connectDB function
const connectDB = require('./config/db')

// Connect to database
connectDB()

const pokemon = require('./models/pokemons')

const Pokemon = require('./models/pokemonsModels')

const { createEngine } = require ("jsx-view-engine")
app.set("view engine", "jsx")
app.engine("jsx", createEngine())

// Load the method-override middleware
const methodOverride = require('method-override')

app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!');
})


app.get('/pokemon', async (req, res) => {
    const pokemons = await Pokemon.find()
    res.render("./index", pokemons)
})

app.get('/pokemon/new', (req, res) => {
    res.render('./New')
})

app.post('/', async (req, res) => {
    try{
        const result = await Pokemon.create(req.body)
    } catch (err) {
        res.send(err.message)
    }
    res.redirect('/pokemon')
})

app.listen(PORT, () => {
    console.log('Listening on port 3000')
})