   //default main page on load
   var path = require('path');

   app.use(function(req, res){
       res.send('/home.html');
   });