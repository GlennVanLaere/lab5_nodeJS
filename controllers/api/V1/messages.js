const Message = require("../../../models/message");

//get
const getAll = (req, res) => {
    Message.find({}, (err, docs) => {
        res.json({
            "status": "succes",
            "data": {
                "messages": docs
            }
    
        })
    })
}
//get(/:id)
const getOne = (req, res) =>{
    Message.find({"_id" : req.params.id}, (err, message)=> {
        res.json({
            "status": "succes",
            "data": {
                "message": message
            }
        })
    })
}
//post
const create = (req, res) => {
    let message = new Message()
    message.text = "nodejs isn't hard is it? "
    message.user = "Pikatchu"
    message.save((err, doc) => {
        if(err){
            res.json({
                "status": "error",
                "message": "could not send this message"
            })
        }
        if(!err){
            res.json({
                "status" : "succes",
                "message": doc
            })
        }
    })

}
//put(/:id)
const update = (req, res) => {
    newMessage = "it can be hard"
    Message.findByIdAndUpdate({"_id" : req.params.id}, {"text": newMessage }, (err, newmessage)=> {
        if(err){
            res.json({
                "status": "error",
                "message": "could not update this message"
            })
        }

        if(!err){
            res.json({
                "status": "succes",
                "data": {
                    "message": "message for " +  req.params.id + " has been changed to "+ newMessage
                }
            })
        }

    })
}
//delete
const deleteOne = (req, res) =>{
    Message.findByIdAndDelete({"_id" : req.params.id}, (err, message) => {
        if(err){
            res.json({
                "status": "error",
                "message": "could not delete this message"
            })            
        }
        if(!err){
            res.json({
                "status": "succes",
                "data": {
                    "message": "message succesfull deleted"
                }
            })
        }
    })

}
//get based op username (req.params.username)

module.exports.getAll = getAll;
module.exports.create = create;
module.exports.getOne = getOne;
module.exports.update = update;
module.exports.deleteOne = deleteOne;