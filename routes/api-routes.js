// Define frameworks //
const fs = require ("fs");
const router = require('express').Router();

////create unique id npm i uuid///////
const { v4: uuidv4 } = require('uuid');
uuidv4();


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////// create API routes GET /api/notes, return the notes.html files and create db.json file on the backend to store and retrieve ///////////
router.get('/api/notes', async (req, res) => {
    const dbJson = await JSON.parse(fs.readFileSync("db/db.json", "utf8"));
    res.json(dbJson);
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////// create API routes POST /api/notes ////////////////////////////////////////////////////////////////////////////////////////////////////
router.post('/api/notes', async (req, res) => {
    const dbJson = JSON.parse(fs.readFileSync("db/db.json", "utf8"));
    const newFeedback = {
        title: req.body.title,
        text: req.body.text,
        id: uuidv4(),
    };
    dbJson.push(newFeedback);
})

module.exports = router;