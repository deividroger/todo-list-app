module.exports = function(req,res,next){

    res.header('Access-Control-Allow-Origin','*')
    res.header('Access-Control-Allow-Methods','GET,POST,OPTIONS,PATCH,DELETE, PUT');
    res.header('Access-Control-Allow-Headers','X-Requested-With, Content-Type, Accepted');
    
    next();
}