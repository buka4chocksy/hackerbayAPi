var validator = require('../Validator/token');

class routesValidator{
    authenticate (req,res,next){
        var token = req.body.token ||  req.headers['token'];
        if(token){
            validator.verifyToken(token).then(verified =>{
            next();
        }).catch(err =>{
            next(err);
        })
        }else{
            res.status(401).send({success:false, message: "Token does not exist" });
        }
    }
}
module.exports = new routesValidator();