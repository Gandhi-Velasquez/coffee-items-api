const PORT = process.env.PORT || 3000
const express = require('express');
const cors = require('cors');

const app = express()
app.use(express.json())
app.use(cors())

async function loadApi(req, res) {
    res.json('Welcome to the Coffee Shop Items Api!')
}

async function getCoffees(req, res) {
  const data = await require('./data/coffeeData.json')
  const coffeeItems = data.coffees
  res.json(coffeeItems)
}

async function getPastries(req, res) {
  const data = await require('./data/pastrieData.json')
  const pastrieItems = data.pastries
  res.json(pastrieItems)
}

async function getMilks(req, res) {
  const data = await require('./data/milkData.json')
  const milkItems = data.milks
  res.json(milkItems)
}

async function getTeas(req, res) {
  const data = await require('./data/teaData.json')
  const teaItems = data.teas
  res.json(teaItems)
}

async function getFoods(req, res) {
  const data = await require('./data/foodData.json')
  const foodItems = data.foods
  res.json(foodItems)
}

app.get('/', loadApi)
app.get('/coffees', getCoffees)
app.get('/pastries', getPastries)
app.get('/teas', getTeas)
app.get('/milks', getMilks)
app.get('/foods', getFoods)

app.listen(PORT, () => console.log(`Server Running on PORT ${PORT}`));