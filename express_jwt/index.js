const express = require('express')
const jwt = require('jsonwebtoken')

// This should move to a .env file
const JWT_SECRET = "goK!pusp6ThEdURUtRenOwUhAsWUCLheBazl!uJLPlS8EbreWLdrupIwabRAsiBu"

const bodyParser = require('body-parser')
const multer = require('multer');

const path = require('path');
const app = express()
const upload = multer()

const port = 3000

// Later on this will become middleware
function verifyToken(req, res, next) {
  const bearerHeader = req.headers['authorization']

  if(typeof bearerHeader !== "undefined") {
    const bearerToken = bearerHeader.split(" ")[0] 
    req.token = bearerToken
    console.log(bearerToken)
    next()
  }
  else {
    res.sendStatus(403)
  }
}

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

app.use(upload.array()); 

// WARNING: In a real system data would be in a database
let users = [
    {'id': 1, 'username': 'jdoe', 'password': '1234', 'role': 'admin'},
    {'id': 2, 'username': 'mdoe', 'password': '1234', 'role': 'moderator'},
]

app.get('/', (req, res) => {
  res.send('JWT Example')
})

app.post('/api/login', (req, res) => {
    let ok = false
    for(let user of users) {
      if(user['username'] == req.body['username'] && user['password'] == req.body['password'] ) {
        ok = true
        jwt.sign({'user': user['username'], 'role': user['role']}, JWT_SECRET, (err, token) => {
          res.json(token)
        })
      }
    }
    if(!ok) {
        res.json({'result': 'invalid username/password'})
    }
})


app.get('/api/data', verifyToken, (req, res) => {
  console.log(req.token)
  jwt.verify(req.token, JWT_SECRET, (err, authData) => {
    if(err) {
      res.json({'error': "token invalid"})
    }
    else {
      console.log(authData)
      res.json({'result': "token received", 'user': authData['user'], 'role': authData['role']})
    }
  })
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})