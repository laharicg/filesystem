
const express = require("express");
const app = express();
const fs  = require("fs")

app.get("/list", function (req,res) {
 fs.readdir("C:\\Users\\LENOVO", function (err,files) {
    if(err) throw(err);
    //res.json(files)
    let result = "<ul>";

    files.forEach(function (file) {
      var path = "C:\\Users\\LENOVO" + '/' +file;
      var stats = fs.statSync(path)
      if(stats.isFile()) { result += `<li>${"File :"+file}</li>` }
      else if(stats.isDirectory()){ result += `<li>${"Folder :"+file}</li>` }
    });
    result += "</ul>";
    res.send(result);
 });
});


app.listen(3000, function () {
console.log("chandana");
});



