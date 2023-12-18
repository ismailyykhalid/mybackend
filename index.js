 require('dotenv').config();

const express = require('express')
const app = express()



app.get('/', (req, res) => {
  res.send('Home')

})

app.get('/profile', (req, res) => {
    res.send('Profile')
  
  })

app.listen(process.env.PORT || 3000, () => {
    console.log(`Example app listening on port ${process.env.PORT || 3000}`);
  });
  