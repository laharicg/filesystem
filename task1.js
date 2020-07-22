const express = require("express");
const app = express();
const fs  = require("fs")
const favicon = require('serve-favicon')
//app.use(favicon(__dirname + '/' + 'node_modules' + '/' + 'serve-favicon' + '/' + 'favicon.ico'));
//console.log(__dirname + '/' + 'node_modules' + '/' + 'serve-favicon' + '/' + 'favicon.ico');
process.env.PWD = process.cwd()
app.use(express.static(process.env.PWD + '/public'));

app.get("/", function (req,res) {
 fs.readdir("C:\\Users\\LENOVO", function (err,files) {
    if(err) throw(err);
    //res.json(files)
    let heading = `<h1 style="background-color:#F5B7B1;">FOLDERS & FILES</h1>`
    let result = `<ul style="background-color:#FDEDEC; list-style: none;">`;
    files.forEach(function (file) {
      var path = "C:\\Users\\LENOVO" + '/' +file;   
      var stats = fs.statSync(path)
      if(stats.isFile()) { result += `<img src="/f2.jpg" /><li style="color: blue;"><b>${"File :"+file}</b></li>` }
      else if(stats.isDirectory()){ result += `<img src="/f1.jpg" /><li><b>${"Folder :"+file}</b></li>` }
    });
    result += `</ul>`;
    //res.send(heading);
    res.send(heading + result);
 });
});


app.listen(3001, function () {
console.log("chandana");
});



