var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
    res.render('index', {title:"Home"});
});

router.get('/aboutme', (req, res, next) => {
    res.render('aboutme', {title:"About Me"});
});

router.get('/resume', (req, res, next) => {
    res.render('resume', {title:"Resume"});
});

router.get('/contact', (req, res, next) => {
    res.render('contact', {title:"Contact Me"});
});

router.get('/projects', (req, res, next) => {
    res.render('projects', {title:"Projects"});
});

router.get('/twitterbot', (req, res, next) => {
    res.render('twitterbot', {title:"Twitterbot"});
});

router.get('/visualizer', (req, res, next) => {
    res.render('visualizer', {title:"Visualizer"});
});

router.get('/tutor', (req, res, next) => {
    res.render('tutor', {title:"Tutor Website"});
});

router.get('/hci', (req, res, next) => {
    res.render('hci', {title:"HCI Project"});
});

router.get('/game', (req, res, next) => {
    res.render('game', {title:"Browser Game"});
});

router.get('/tfe', (req, res, next) => {
    res.render('twenty', {title:"Number Game"});
});

router.get('/wordle', (req, res, next) => {
    res.render('wordle', {title:"Wordle"});
});

router.get('/sudoku', (req, res, next) => {
    res.render('sudoku', {title:"Sudoku"});
});

module.exports = router;