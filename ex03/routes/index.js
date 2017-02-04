module.exports = function(app){
  app.get('/', function(req, res){
    res.render('index.html');
  });
  app.get('/todos', function(req,res){
    res.render('todos.html');
  });
  app.post('/todos', function(req,res){
    console.log('title : '+ req.body.title + 'content : ' + req.body.content);
  });
}
