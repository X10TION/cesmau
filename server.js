const { Console } = require('console')
const express = require('express')
const app = express()
const path = require('path')

const PORT = process.env.PORT || 2023

app.use(express.static(path.join(__dirname, 'frontend')))
app.use(express.static('./frontend/styles'))
app.use(express.static('./frontend/images'))
app.use(express.static('./frontend/js'))

app.listen(PORT, () => console.log('server is listening to port' + PORT))