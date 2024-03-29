const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://fullstack-user:${password}@cluster0.ahm7x.mongodb.net/phonebook-app?retryWrites=true&w=majority`

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
})

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Person = mongoose.model('Person', personSchema)

if (process.argv.length < 4) {
  console.log('phonebook:')
  Person.find({}).then(result => {
    result.forEach(person => {
      console.log(`${person.name} ${person.number}`)
      mongoose.connection.close()
    })
  })

} else if (process.argv.length < 6) {
  const newPerson = new Person({
    name: process.argv[3],
    number: process.argv[4],
  })

  newPerson.save().then(() => {
    console.log(`added ${newPerson.name} number ${newPerson.number} to phonebook`)
    mongoose.connection.close()
  })
}