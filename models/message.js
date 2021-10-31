/* creo el esquema, despues creo un modelo basado en este esquema*/
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchemma = new Schema({
    name:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    }
    
},{timestamps:true});

// 'Message' es el singular del messages que hay en la collecion de la db
const Message = mongoose.model('Message',messageSchemma); 

module.exports = Message;