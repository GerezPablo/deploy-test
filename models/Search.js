const {Schema, model} = require('mongoose');

const SearchSchema = Schema ({
    topic: {
        type: String,
        require: true,
        unique: true
    },
    results: [{ url:String, title:String }],
    counter: {
        type: Number,
        default: 1
    }
});


module.exports = model('Search', SearchSchema);