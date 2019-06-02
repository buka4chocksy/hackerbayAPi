var token = require('../Validator/token');

class login{
    login (req,res, next){
        var userDetails = {
            username: req.body.username,
            password:req.body.password
        }
        token.generateToken(userDetails).then(userToken =>{
            if(userToken == null){
                console.log('i reach here');
                res.json({message:'Sorry authentication failed'})
            }else{
                res.json({message:'Login Successful', token:userToken  })
            }
        }) 
     }   
}
module.exports = new login();