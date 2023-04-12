const path = require('path');

const router = require('express').Router();

//Sends notes to the notes.html file
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
})

//if issues exist this sends it to the homepage
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

module.exports = router;