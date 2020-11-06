const {response} = require('express');
const Search = require('../models/Search');
const {api} = require('../helpers/api');


const getImages = async(req, res = response) => {

    try {

        const topic = req.query.topic;

        const limit = req.query.limit;
        const offset = (req.query.offset -1);



        const page =  limit * offset;


        const search = await Search.findOne({topic, 'page.number': offset});
        
        // const search = await Search
        //     .findOne()
        //     .where('topic').equals(topic)
        //     .where('page.number').equals(offset)
            // .where('likes').in(['vaporizing', 'talking'])
            // .limit(10)
            // .sort('-occupation')
            // .select('name occupation')
            // .exec(callback);





         const wasSearchedInThePast = (search != null);


        if (wasSearchedInThePast) {

            //Increments the counter of the topic.
            await Search.updateOne(search, {$inc:{ counter: 1 }});

            // Get the data from the Database.
            return res.status(200).json({
                results: search
            });
        }   
        


        //Otherwise...

        //Call the API to get the data
        const results = await api(topic,limit, page);


        //Saves the search's topic and results into the database 

        const newSearch = Search({ topic:topic, page:{number:offset, results:results}});
        
        // //Add the new page.
        await search.page.addToSet(results);
        
        // await newSearch.save();

        // return res.status(200).json({
        //     results: results
        // }); 

        return res.status(200).json({
            msg: `No tengo weas de ${topic} de pag ${offset + 1} en la base pa`
        })


    } catch (error) {
        return res.status(500).json({
            msg: 'Something gone wrong, please contact the admin',
            error: error
        });
    }
}



const getFavorites = async(req, res = response) => {
    
    const search = await Search.findOne().sort({counter:-1})
    .then (res => {return res.results});
    
    return res.status(200).json({ results:search });
}

   
module.exports = {getImages, getFavorites};
