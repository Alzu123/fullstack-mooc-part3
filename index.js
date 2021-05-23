const express = require('express')
const app = express()

app.use(express.json())

const persons = [
  {
    "name": "Arto Hellas",
    "number": "040-123456",
    "id": 1
  },
  {
    "name": "Ada Lovelace",
    "number": "39-44-5323523",
    "id": 2
  },
  {
    "name": "Dan Abramov",
    "number": "12-43-234345",
    "id": 3
  },
  {
    "name": "Mary Poppendieck",
    "number": "39-23-6423122",
    "id": 4
  }
]

app.get('/info', (request, response) => {
  const infoContent = `
  <p>
    Phonebook has info for ${persons.length} people
  </p>
  <p>
    ${new Date()}
  </p>`
  
  response.send(infoContent)
})

app.get('/api/persons', (request, response) => {
  response.json(persons)
})

const port = 3001
app.listen(port)
console.log(`server on ${port}`)