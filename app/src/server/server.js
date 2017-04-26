const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const path = require('path')

app.use(express.static(path.join(__dirname, '..', '..', 'build')))
app.use(bodyParser.urlencoded({extended: true, limit: '50mb'}))
app.use(bodyParser.json({limit: '50mb'}))
app.listen(8080)

app.get('*', function (req, res) { res.sendFile(path.join(__dirname, '..', '..', 'build', 'index.html')) })
