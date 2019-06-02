var jwt = require('jsonwebtoken');

class Token{
     generateToken(data={}){
        return new Promise((resolve, reject)=>{
            console.log('i am here');
            jwt.sign({...data}, process.env.secret ,{expiresIn: '24hrs'}, function(err, token){
                if(err){
                    reject(err);
                }else{
                    resolve(token);
                }
            });
    
        });
    } 
    
     verifyToken (token =""){
        return new Promise((resolve, reject)=>{
            jwt.verify(token.replace("Bearer",""), process.env.secret, function(err, verifiedToken){
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
