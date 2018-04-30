const express = require('express')
const request = require('request')
const app = express()

const serverConfig = require('./server_config.json');

app.use(express.static('dist'))
app.get('/', (req, res) => res.sendFile(__dirname+'/dist/index.html'))

const ids = {
  homepage: "1acgy4aJ80z70Qa4G0XsNAJUXf6AAOWXv",
  research: "15bBeDOieDGXmm4O5vrTy18YuJEOHsQvt",
  teaching: "14fDsHAz2wr0JAVSMz8zsktcoNRYHIibw",
  contact: "1aFVsP3yMmT09x-1k38ppSODSWZ28L0Wi"
};

app.get('/blob/:id', (req, res) => {
  let url = `https://www.googleapis.com/drive/v3/files/${ids[req.params.id]}?key=${serverConfig.apiKey}&alt=media`;
  request({
    url: url,
    json: false
  }, function (error, response, body) {
    res.send(body);
  });
})

app.listen(1337, () => console.log('Ginevras website is running on port 1337!'))
