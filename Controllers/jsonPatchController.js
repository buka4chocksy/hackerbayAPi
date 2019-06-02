var jsonpatch = require('jsonpatch');

class jsonPatch{
    patch(req,res,next){
        var mydoc = typeof(req.body.mydoc)=="string" ? JSON.parse(req.body.mydoc) : req.body.mydoc ;
        var patch = typeof(req.body.patch)=="string" ? JSON.parse(req.body.patch) : req.body.patch;
        mydoc = jsonpatch.apply_patch(mydoc,patch);
        res.json({success:true , data:mydoc});
    }
}

module.exports = new jsonPatch();