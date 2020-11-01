const fetch = require('node-fetch');

const api = async(topic) => {
    try {    

        const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( topic ) }&limit=30&api_key=z4i75OOh3iae532MgfLYUS4vhLn8KOuT`;
        const resp = await fetch( url );
        const { data } = await resp.json();

        return data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url
            }
        })
    } 
    catch (error) { return error; }
};

module.exports = {api};