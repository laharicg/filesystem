/*
var fs = require('fs');
fs.readdir("C:\\Users\\Lahari\\Tasks\\18-06-2020\\ResumeDom",function(err,files)
{
    if(err) throw err;
    console.log(files)
}) 

var stats = fs.statSync("C:\\Users\\Lahari\\Tasks\\18-06-2020\\ResumeDom\\19-06-2020.txt");
console.log('is file ? ' + stats.isFile()); 

*/
/*
const fs = require("fs");
fs.readdir("C:\\Users\\LENOVO", function (err, files) {
  if (err) throw err;

  // console.log(files); 
  files.forEach((file) => {
    //  console.log(file); 
    var stats = fs.statSync("C:\\Users\\LENOVO\\" + `${file}`);
    //  console.log(stats);
    var res = stats.isDirectory();

    if (res === true) {
      let data = {
        name: file,
        type: "directory",
      };
      console.log(data);
    } else {
      let data1 = {
        name: file,
        type: "file",
      };
      console.log(data1);
    }

  });
}); */


const express = require("express");
const app = express();
const fs  = require("fs")

app.get("/files", function (req,res) {
 fs.readdir("C:\\Users\\LENOVO", function (err,files) {
    if(err) throw(err);
    res.json(files)
 });
});

app.listen(3000, function () {
console.log("lahari");
}); 




