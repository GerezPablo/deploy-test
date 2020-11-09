const {Schema, model} = require('mongoose');

const SearchSchema = Schema ({
    topic: {
        type: String,
        require: true,
        unique: true
    },
    counter: {
        type: Number,
        default: 1
    },
    page: [{
        number: {
            type:Number,
            default: 0
        },
        results: [{ 
            url:String, 
            title:String 
        }], 
    }]
});




module.exports = model('Search', SearchSchema);