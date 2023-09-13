// Define frameworks //
const router = require('express').Router();
////create unique id npm i uuid///////
const { v4: uuidv4 } = require('uuid');
uuidv4();
const fs = require ("fs");

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////// create API routes GET /api/notes, return the notes.html files and create db.json file on the backend to store and retrieve ///////////
router.get('/api/notes', async (req, res) => {
    const dbJson = await JSON.parse(fs.readFileSync("db/db.json", "utf8"));
    res.json(dbJson);
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////// create API routes POST /api/notes + source: https://www.tabnine.com/code/javascript/functions/express/Router/post/////////////////////
router.post('/api/notes', async (req, res) => {
    const dbJson = JSON.parse(fs.readFileSync("db/db.json", "utf8"));
    const newFeedback = {
        title: req.body.title,
        text: req.body.text,
        id: uuidv4(),
    };
    dbJson.push(newFeedback);
    fs.writeFileSync("db/db.json", JSON.stringify(dbJson));
    res.json(dbJson);
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////// create the delete request DELETE /api/notes/:id //////////////////////////////////////////////////////////////////////////////////////
// app.delete('/api/notes/:id', (req, res) => {
//     res.send("DELETE Request Called")
// })
 
// app.listen(PORT, function (err) {
//     if (err) console.log(err);
//     console.log("Server listening on PORT", PORT);
// });

// router.delete('/api/notes/:id', (req, res) => {
//     let
// })

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// export file to server.js//
module.exports = router;