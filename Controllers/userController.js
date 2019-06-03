var token = require('../Validator/token');

class login{
    login (req,res, next){
        var userDetails = {
            username: req.body.username,
            password:req.body.password
        }
        if(userDetails.username ==''||  userDetails.password ==''){
            res.status(400).send({ success: false , 'message':'Sorry you cant submit empty field' })  
        }else{
            token.generateToken(userDetails).then(userToken =>{
                if(userToken == null){
                    res.status(400).send({success:false, message:'Sorry authentication failed'})
                }else{
                    res.status(200).send({ success: true, message:'Login Successful', token:userToken  })
                }
            }) 
        }
       
     }   
}
module.exports = new login();