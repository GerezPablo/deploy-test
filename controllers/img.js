const {response} = require('express');
const Search = require('../models/Search');
const {api} = require('../helpers/api');


const getImages = async(req, res = response) => {

    try {

        //Queries
        const topic = req.query.topic;
        const limit = req.query.limit;
        const offset = (req.query.offset -1);

        
        const page =  limit * offset;

        const search = await Search.findOne({topic});

        if (search != null) {

            //Increments the counter of the topic.
            await Search.updateOne(search, {$inc:{ counter: 1 }});

            //Verifying if the page what is looking for is already charged in the Database then
            if (search.page.some(p => p.number == offset)) {

                //Return the data from Database
                return res.status(200).json({
                    results: search.page[offset].results
                })
            }

            //If the topic was already searched but the page don't call the API and update the value in database.
            const results = await api(topic,limit, page);

            const newPage = {number:offset, results:results};

            search.page.push(newPage);
            search.save();

            return res.status(200).json({
                results: results
            })
        }

        //Otherwise...

        //Call the API to get the data
        const results = await api(topic,limit, page);


        //Saves the search's topic and results into the database 
        const newSearch = Search({ topic:topic, page:{number:offset, results:results}});
        
        await newSearch.save();

        return res.status(200).json({
            results: results
        }); 

    } catch (error) {
        return res.status(500).json({
            msg: 'Something gone wrong, please contact the admin',
            error: error
        });
    }
}



const getFavorites = async(req, res = response) => {
    
    const topic = await Search.findOne().sort({counter:-1})
    .then (res => {return res.topic});
    
    return res.status(200).json({ topic:topic });
}

   
module.exports = {getImages, getFavorites};
