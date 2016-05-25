module.exports = function(app){
    require('./module/cat_forums/cat_forums.c.js')(app);
    require('./widget/widget')(app);
}
