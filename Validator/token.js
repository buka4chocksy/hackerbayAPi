var jwt = require('jsonwebtoken');
var secret = process.env.secret 
class Token{
     generateToken(data={}){
        return new Promise((resolve, reject)=>{
            console.log('i am here');
            jwt.sign({...data},secret ,{expiresIn: '24hrs'}, function(err, token){
                if(err){
                    reject(err);
                }else{
                    resolve(token);
                }
            });
    
        });
    } 
    
     verifyToken (token){
        return new Promise((resolve, reject)=>{
            jwt.verify(token.replace("bearer ", ""), secret, function(err, verifiedToken){
                if(err){
                    reject(err);
                }else{
                    resolve(verifiedToken);
                }
            });
        });
    }
}


module.exports = new Token();
