const express = require('express')

const app = express()
const port = 3000

app.use('/static', express.static('static'));
app.set('view engine', 'pug')

app.get('/', home);

function home(req, res) {
  res.render('index');
}

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
