const { Schema, model } = require('mongoose');



const ClienteSchema = new Schema({

    name :{
        type : String,
        required : true,
    },
    user : {
        type : String,
        required : true,
    },
    password : {
        type : String,
        required : true,
    }   

}, {
    timestamps: true,
});

module.exports = model('Cliente', ClienteSchema);