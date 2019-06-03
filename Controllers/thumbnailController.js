var thumbnail = require('node-thumbnail').thumb;
var path = require('path');
var fs = require('fs');

class imagethumbnail{
    thumbnailCreation(req,res){
        var file = path.basename(req.body.source)
        file = file.substr(0,file.lastIndexOf("."));
        var ext = path.extname(req.body.source);
        var data = {
            source:req.body.source,
            destination: 'imageFolder',
            suffix:new Date(),
            width:50,
            height:50,
            concurrency:4
      }
     if(fs.existsSync(data.source)){
         thumbnail(data ,function (files, err, stdout, stderr){
           res.json({file:`imageFolder/`+file+data.suffix+ext})
       }).catch(err =>{
           res.json({ message:'File inserted was not valid'});
       })  
     }else{
         res.json("File not found ")
     }
    }
}

module.exports = new imagethumbnail()