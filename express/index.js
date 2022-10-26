const express = require('express')
const bodyParser = require('body-parser')
const multer = require('multer');

const path = require('path');
const app = express()
const upload = multer()

const port = 3000

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

app.use(upload.array()); 

// WARNING: In a real system data would be in a database
let data = [
    {'id': 1, 'name': 'John Doe'},
    {'id': 2, 'name': 'Mary Doe'}
]

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '/templates/about.html'));
})

app.get('/data', (req, res) => {
  res.sendFile(path.join(__dirname, '/templates/data.html'));
})

app.get('/api', (req, res) => {
    res.json(data)
})


app.post('/api/add', (req, res) => {
  let person = {'id': req.body['id'], 'name': req.body['name']}
  data.push(person)
  res.json({'result': 'success, data added'})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})