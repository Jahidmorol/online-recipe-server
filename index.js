const express = require('express')
const app = express()
const port = process.env.PORT || 5000;

const chefs = require('./data/chefs.json');

app.get('/', (req, res) => {
  res.send(chefs)
})

app.get('/:id', (req, res) => {
  const id = req.params.id;
  const chef = chefs.find(chef => chef.id == id)
  res.send(chef)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})