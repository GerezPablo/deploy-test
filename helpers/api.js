const fetch = require('node-fetch');

const api = async(topic) => {
    try {    
        const key = '15310263-3c077b8973067ba768708060a';
        const url =  `https://pixabay.com/api/?key=${key}&per_page=${5}&q=${encodeURI(topic)}&image_type=photo&lang=en`;
        
        const res = await fetch(url);
        const {hits} = await res.json();

        return hits.map(it => {
            return {
                url: it.largeImageURL,
                name: it.largeImageURL.split('/')[4],
                id: it.id
            };
        });
        
    } 
    catch (error) { return error; }
};

module.exports = {api};