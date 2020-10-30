const {response, json} = require('express');
const Search = require('../models/Search');
const {api} = require('../helpers/api');


const getImages = async(req, res = response) => {
    const topic = req.query.topic;
    const results = await api(topic);
    
    try {
        const search = await Search.findOne({topic});
        const wasSearchedInThePast = search != null;

        if (wasSearchedInThePast) {
            //Increment the topic's counter
            await Search.updateOne(search, {$inc:{ counter: 1 }});

        } else {
            //Save the search's topic into the database 
            const search = new Search(req.body);
            await search.save();
        }

        return res.status(200).json({
            results: results
        });
    }

    catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'Something gone wrong, please contact the admin'
        });
    }
}

const getFavorites = async() => {

    var favs = db.searches.find({counter:{$all:[!0]}}).toArray();
    return json({
        msg:"Tu no mete cabra",
        topics:favs
    });
}


module.exports = {getImages, getFavorites};