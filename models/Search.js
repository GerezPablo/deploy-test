const {Schema, model} = require('mongoose');

const SearchSchema = Schema ({
    topic: {
        type: String,
        require: true,
        unique: true
    },
    counter: {
        type: Number,
        default: 0
    }
});


module.exports = model('Search', SearchSchema);