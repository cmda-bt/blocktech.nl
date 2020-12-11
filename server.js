const express = require('express')

const app = express()
const port = process.env.PORT || 3000;

const students = require('./data/students_20-21.json');

app.use('/static', express.static('static'));
app.set('view engine', 'pug')

app.get('/', index);
app.get('/back-end', backend);
app.get('/front-end', frontend);
app.get('/project-tech', project);
app.get('/grades', grades);
app.get('/videos', videos);
app.get('/material', material);
app.get('/classlist', classlist);
app.get('/showcase', showcase);

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

function videos(req, res) {
  res.render('videos');
}

function grades(req, res) {
  res.render('grades');
}

function resources(req, res) {
  res.render('resources');
}

function showcase(req, res) {
  res.render('showcase');
}

function material(req, res) {
  res.render('material');
}

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
