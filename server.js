const express = require('express')
const app = express()
const port = 3000

app.use('/static', express.static('static'));

app.get('/', home);

function home(req, res) {
  res.send('Hello World');
}

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
