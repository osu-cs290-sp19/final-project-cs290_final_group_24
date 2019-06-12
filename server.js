 /*
    Server 
 */


var path = require('path');
var express = require('express');
var port = process.env.PORT || 3000;
var sever1 = express();
var exphbs = require('express-handlebars');


sever1.engine('handlebars', exphbs({ defaultLayout: 'webpage' }));
sever1.set('view engine', 'handlebars');
sever1.use(express.static('HTML'));

var data = {};//get data from database

sever1.get('/',function (req, res) {

  res.status(200).render('body',data // insert data here
  );
});

sever1.get('/:name',function (req, res) {
  var name1 = req.params.name;
  res.status(200).render('partials/'+name1,data // insert data here
  );
  console.log("data sended");
});

 sever1.get('*', function (req, res) {
  res.status(404).render('404', {});
});


sever1.listen(port);