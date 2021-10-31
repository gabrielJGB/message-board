const Message = require('../models/message');

const index = (req,res)=>{
    Message.find().sort({createdAt:-1})
    .then((result)=>{
        res.render('index',{title:'Message board',messages:result});
    })
    .catch(error=>{console.log(error)});
}

const message_create_post = (req,res)=>{
    console.log(req.body)
    const message = new Message(req.body);
    message.save()
        .then((response)=>{
            res.redirect('/');
        })
        .catch(error=>console.log(error));
}


module.exports = {
    index,
    message_create_post
};