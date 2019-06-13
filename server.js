 /*
    Server 
 */


var path = require('path');
var express = require('express');
var port = process.env.PORT || 3000;
var sever1 = express();
var exphbs = require('express-handlebars');
var MongoClient = require('mongodb').MongoClient;



sever1.engine('handlebars', exphbs({ defaultLayout: 'webpage' }));
sever1.set('view engine', 'handlebars');
sever1.use(express.static('HTML'));

var data = {};//get data from database

sever1.get('/',function (req, res) {
  res.status(200).render('body',data // insert data here     
  );
});

sever1.get('/iron_man',function (req, res) {
  var name1 = req.params.name;
  res.status(200).render('partials/iron_man',data // insert data here
  );
  console.log("data sended");
});
sever1.get('/hulk',function (req, res) {
  var name1 = req.params.name;
  res.status(200).render('partials/hulk',data // insert data here
  );
  console.log("data sended");
});
sever1.get('/captain_america',function (req, res) {
  var name1 = req.params.name;
  res.status(200).render('partials/captain_america',data // insert data here
  );
  console.log("data sended");
});

sever1.get('/thor',function (req, res) {
  var name1 = req.params.name;
  res.status(200).render('partials/thor',data // insert data here
  );
  console.log("data sended");
});

sever1.get('/Vision',function (req, res) {
  var name1 = req.params.name;
  res.status(200).render('partials/Vision',data // insert data here
  );
  console.log("data sended");
});

sever1.get('/Scarlet_witch',function (req, res) {
  var name1 = req.params.name;
  res.status(200).render('partials/Scarlet_witch',data // insert data here
  );
  console.log("data sended");
});

sever1.get('/Dr_strange',function (req, res) {
  var name1 = req.params.name;
  res.status(200).render('partials/Dr_strange',data // insert data here
  );
  console.log("data sended");
});

sever1.get('/BlackWidow',function (req, res) {
  var name1 = req.params.name;
  res.status(200).render('partials/BlackWidow',data // insert data here
  );
  console.log("data sended");
});

sever1.get('/hawkeye',function (req, res) {
  var name1 = req.params.name;
  res.status(200).render('partials/hawkeye',data // insert data here
  );
  console.log("data sended");
});


 sever1.get('*', function (req, res) {
  res.status(404).render('404', {});
});

 

sever1.listen(port);
console.log("listening to the port",port);