const mongoose =require('mongoose');

const bankSchema = mongoose.Schema({
    bank_reg_number: {
        type: String,
        required: true,
        unique: true,  
    },
    bank_identification_code: {
        type: String,
        required: true,
        unique: true  
    },
    bank_name: {
        type: String,
        required: false
    },
    country: {
        type: String,
        required: true,
    },
    registered_address: {
         type: String,
        required: true,
    }

})

var bankdata=mongoose.model('bankdata',bankSchema);
module.exports= bankdata;