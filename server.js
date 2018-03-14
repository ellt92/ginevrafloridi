const express = require('express')
const app = express()

app.use(express.static('dist'))
app.get('/', (req, res) => res.sendFile(__dirname+'/dist/index.html'))

app.listen(1337, () => console.log('Ginevras website is running on port 1337!'))
