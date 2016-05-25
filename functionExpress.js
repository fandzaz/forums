module.exports = new function(){
    this.isAuthenticated = function(req, res, next) {
        if(req.user){
            return next(); 
        }else{
           res.redirect('/'); 
        }
   }
}
