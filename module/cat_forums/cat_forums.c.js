module.exports = function(app){
  app.get('/cat',func.isAuthenticated,function(req,res,next){
      res.render('./cat_forums/v_cat_forums');
  });
  app.get('/cat/boostrap',function(req,res,next){
     res.render('boostrap'); 
  });
}
