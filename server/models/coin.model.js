const mongoose = require("mongoose");

const CoinSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User'},
    coinType:{
        type: String,
        required: [true,'The type of coin is required'],
        minlength: [3,'The coin type must 3 characters or longer']
    },
    denomination: {
        type: String,
        required: [true,'denomination is required']
    },
    value: {
        type: Number
    },
    description: {
        type: String
    },
    graded: {
        type: Boolean
    },
    gradingService: {
        type: String,
        enum: [
            'ANACS',
            'NGC',
            'PGCS'
        ],
    },
    certificationNumber: {
        type: Number
    },
    

},{timestamps:true})

module.exports = mongoose.Schema("Coin",CoinSchema);