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

router.get('/projects', (req, res, next) => {
    res.render('projects', {title:"Projects"});
});

router.get('/twitterbot', (req, res, next) => {
    res.render('twitterbot', {title:"Twitterbot"});
});

module.exports = router;