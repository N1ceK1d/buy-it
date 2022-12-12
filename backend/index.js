const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const fs = require('fs')

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())
const port = 4000

app.get('/products', (req, res) => {
    fs.readFile('products.json', 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          return;
        }
        res.send(data);
      });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}/products`)
})