module.exports = function(app){
    app.get('/widget/nav',function(req,res,next){
        res.render('./widget/nav');
    });
}