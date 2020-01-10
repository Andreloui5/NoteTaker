const express = require("express");
const fs = require("fs");
const path = require("path");
const db = require("../db/db.json");
const util = require("util");

//Express = app
const app = express();

//Sets up a port for our server
const PORT = process.env.PORT || 8080;

//Middleware extensions
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//Array for data storage
let allNotes = [];

//Routes:
//API routes
//===================================================================================================
app.get("/api/notes", (req, res) => {
  res.json(db);
});

app.post("/api/notes", (req, res) => {
  // get current json article)
  fs.readFile("../db/db.json", "utf8", (err, data) => {
    if (err) throw err;
    //parses json data from db.json
    let oldNotes = JSON.parse(data);
      //makes a useable array of objects
      allNotes = oldNotes;
      // read the data coming in
      let newId = allNotes.length;
      let newNote = {
        title: req.body.title,
        text: req.body.text,
        //dynamically adds id length
        id: newId
      };

      //pushes the user's incoming data into allNotes array
      allNotes.push(newNote);
      // console.log(allNotes);
      res.json(true);
      //writes new file to db.json
      fs.writeFile("../db/db.json", JSON.stringify(allNotes), (err) => {
        if (err) throw err;
      });
  });
});

app.delete("/api/notes/:id", () => {
  //get id (check out the front end/how they got id)
  //read the file
  fs.readFile("../db/db.json", "utf8", (err, data) => {
    if (err) throw err;
    //parses json data from db.json
    let oldNotes = JSON.parse(data);


      // console.log(allNotes);
      res.json(true);
  });
  //do some logic to delete (like a filter)
  //rewrite the file without the deleted info
});


//HTML routes
//===================================================================================================
app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "notes.html"));
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});



//Sets server to listen
//===================================================================================================
app.listen(PORT, () => {
  console.log(`listening on PORT: ${PORT}`);
});