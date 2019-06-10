 /*
    Server 
 */


var url = require('url');
var http = require('http');
var fs = require('fs');
var port = process.env.PORT || 3000;
var index_html,index_js,style_css,html_404;

fs.readFile('webpage.html',function(err,content){
    if(err)throw err;
    index_html  = content;
});
fs.readFile('sub-webpage.html.html',function(err,content){
    if(err)throw err;
  html_404  = content;
});
/*
fs.readFile('public/index.js',function(err,content){
    if(err)throw err;
  index_js  = content;
});
fs.readFile('public/style.css',function(err,content){
    if(err)throw err;
  style_css  = content;
});*/


function requestHandler(req, res){

  if(req.url ==="webpage.html" || req.url === "/"){
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    res.write(index_html);
    res.end();
  }
  /*
  else if(req.url ==="/404.html"){
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    res.write(html_404);
    res.end();
  }
  
  else if(req.url ==="/style.css"){
    res.statusCode = 200;
    res.setHeader('Content-Type','text/css');
    res.write(style_css);
    res.end();
  }
  
  else if(req.url ==="/index.js"){
    res.statusCode = 200;
    res.setHeader('Content-Type','text/js');
    res.write(index_js);
    res.end();
  }
  
  else{
    res.statusCode = 404;
    res.setHeader('Content-Type','text/html');
    res.write(html_404);
    res.end();
  }
  */
};


var server1 = http.createServer(requestHandler);
server1.listen(port,function(){
  console.log("==listening port 3000");
});