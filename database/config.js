const mongoose = require('mongoose');


const dbConnection = async() => {
    try {
        await mongoose.connect (
            process.env.DB_CNN, {
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log('Connection to database successful');
    } 
    catch (error) {
        throw new Error('Failing trying to connect to the database');
    }
}   

module.exports = {dbConnection};