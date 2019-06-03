var jsonpatch = require('jsonpatch');

class jsonPatch{
    patch(req,res){
        var mydoc = typeof(req.body.mydoc)=="string" ? JSON.parse(req.body.mydoc) : req.body.mydoc ;
        var patch = typeof(req.body.patch)=="string" ? JSON.parse(req.body.patch) : req.body.patch;
        mydoc = jsonpatch.apply_patch(mydoc,patch);
        res.json(mydoc);
    }
}

module.exports = new jsonPatch();