const bodyParser = require("body-parser");
const SpotifyWebApi = require('spotify-web-api-node');

const axios = require('axios');
const { response } = require('express');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.static(__dirname + '/build'));
app.use(cors())
app.use(bodyParser.json())
app.get('/', (req, res)=> {
  res.sendFile(__dirname + '/build/index.html');
})
app.get('/quotes', async(req, res)=> {
  const u = await axios.get('https://zenquotes.io/api/random')
  res.send(u.data)
})

app.post('/refresh' , (req,res) => {
  const refreshToken = req.body.refreshToken
  const spotifyApi = new SpotifyWebApi({
      redirectUri: 'http://localhost:3000',
      clientId: '7ddba64e308841f495cb6c6054d6ff9c',
      clientSecret: 'ae38937dcfbd4185b12a41b9004619b5',

  })
  spotifyApi.refreshAccessToken().then(
    (data) => {
      res.json({
        accessToken: data.body.accessToken,
        expiresIn: data.body.expiresIn
      })
    })
    .catch(() => {
      res.sendStatus(400)
    })
})

  app.post('/login' , (req,res) => {
    const code = req.body.code
    const spotifyApi = new SpotifyWebApi({
        redirectUri: 'http://localhost:3000',
        clientId: '7ddba64e308841f495cb6c6054d6ff9c',
        clientSecret: 'ae38937dcfbd4185b12a41b9004619b5'
    })
  
  spotifyApi
    .authorizationCodeGrant(code)
    .then(data => {
        res.json({
            accessToken: data.body.access_token,
            refreshToken: data.body.refresh_token, 
            expiresIn: data.body.expires_in
        })
    }).catch(err => {
        res.sendStatus(400)
    })
})

app.listen(8080,()=>{console.log("Server starting on port 8080")});
