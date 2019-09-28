const { Schema, model } = require('mongoose');



const HorarioSchema = new Schema({

    cliente :{
        type : Schema.Types.ObjectId,
        ref : 'Cliente',
    },
    date : {
        type : Date, 
        required : true,
    }

}, {
    timestamps: true,
});

module.exports = model('Horario', HorarioSchema);