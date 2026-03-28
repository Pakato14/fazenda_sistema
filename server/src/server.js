const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const routes = require('./routes')
require ('dotenv').config()

const app = express()
app.use(cookieParser())
app.use(express.json())


var corsOptions = {
  origin: [
    'http://localhost:2803', 
    'http://sistemafazenda.com.br', 
    'https://sistemafazenda.com.br'
  ],
  credentials: true,
  methods: ['GET', 'PUT', 'POST','PATCH', 'DELETE'],
  allowedHeaders: ["Content-Type", "Authorization"],
  };
  
app.use(cors(corsOptions));

routes(app)

const port = process.env.PORT

app.listen(port, () => console.log(`O servidor está On`))

module.exports = app