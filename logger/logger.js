var logger = ()=>{
    return (req,res,next)=>{
        next();
    }
}

module.exports = logger