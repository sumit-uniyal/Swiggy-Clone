const mongoose = require('mongoose');

const connectDb = async()=>{
    try {
       await mongoose.connect(process.env.MONGO_DB_URL)
    } catch (error) {
        console.log('Error in Connecting DB')
    }
}

module.exports = connectDb