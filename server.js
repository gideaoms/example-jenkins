const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello world!!! (new version)'))

app.listen(process.env.PORT || 3000, err => console.log(err || 'Running...'))