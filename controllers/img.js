const {response} = require('express');
const Search = require('../models/Search');
const {api} = require('../helpers/api');


const getImages = async(req, res = response) => {

    try {

        const topic = req.query.topic;
        const search = await Search.findOne({topic});
        const wasSearchedInThePast = (search != null);

        if (wasSearchedInThePast) {

            //Increments the counter of the topic.
            await Search.updateOne(search, {$inc:{ counter: 1 }});
            
            // Get the data from the Database.
            return res.status(200).json({
                results: search.results
            });
        }   
        
        //Otherwise...

        //Call the API to get the data
        const results = await api(topic);

        //Saves the search's topic and results into the database 
        const newSearch = Search({ topic, results });
        await newSearch.save();

        return res.status(200).json({
            results: results
        }); 

    } catch (error) {
        return res.status(500).json({
            msg: 'Something gone wrong, please contact the admin'
        });
    }
}



const getFavorites = async(req, res = response) => {
    
    const search = await Search.findOne().sort({counter:-1})
    .then (res => {return res.results});
    
    return res.status(200).json({ results:search });
}

   
module.exports = {getImages, getFavorites};
