const express = require("express");
const router = express.Router();
const path = require('path');

//let fs = require('fs');

router.get("/", async (req, res, next) => {
  res.sendFile(path.join(__dirname,'/routes/index.html'))


   //return res.status(200).json({
    //title: "Express Testing",
    //message: "The app is working properly!",
    
  //});

   // fs.readFile('./index.html', null, function (error, data) {
     //  res.write(data);
   //    res.end();
 // });
});

module.exports = router;
