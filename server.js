const express = require('express')

const app = express()
const port = 3000

const students = require('./data/students_20-21.json');

app.use('/static', express.static('static'));
app.set('view engine', 'pug')

app.get('/', index);
app.get('/back-end', backend);
app.get('/front-end', frontend);
app.get('/project-tech', project);
app.get('/classlist', classlist);

function index(req, res) {
  res.render('index');
}

function backend(req, res) {
  res.render('back-end');
}

function frontend(req, res) {
  res.render('front-end');
}

function project(req, res) {
  res.render('project-tech');
}

function classlist(req, res) {
  res.render('classlist', { students });
}

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
