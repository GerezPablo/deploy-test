const {response} = require('express');
const Search = require('../models/Search');
const {api} = require('../helpers/api');


const getImages = async(req, res = response) => {
    try {
        const topic = req.query.topic;
        const results = await api(topic);

        const search = await Search.findOne({topic});
        const wasSearchedInThePast = (search != null);

        if (wasSearchedInThePast) {
            //Increment the topic's counter
            await Search.updateOne(search, {$inc:{ counter: 1 }})
        } else {
            //Save the search's topic into the database 
            const newSearch = Search({topic});
            await newSearch.save();
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




   
module.exports = {getImages};