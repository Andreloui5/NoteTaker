const express = require("express");
const fs = require("fs");
const path = require("path");
const db = require("../db/db.json");

//Express = app
const app = express();

//Sets up a port for our server
const PORT = process.env.PORT || 8080;

//Middleware extensions
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));


//Routes:
//API routes
//===================================================================================================
app.get("/api/notes", (req, res) => {
  res.json(db);
  // console.log(res);
});

app.post("/api/notes", (req, res) => {
  let newNote = req.body;
  fs.readFile("../db/db.json", (err, data) => {
    if (err) {
      throw err;
    } 
    content = data
    console.log(content);
  })
  // read the file coming in
  
  // get current json article
  // figure out how to write a unique id to the incoming info
  // fs.writeFile(__dirname + ) (Etc)
});

app.delete("/api/notes/:id", () => {
  //get id (check out the front end/how they got id)
  //read the file
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