const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const MONGODB_URI = process.env.MONGO_URL;

let cachedDB = null;
const connectToDB = async () => {
    try {
        if(cachedDB){
            console.log("DB is already connected to : ", cachedDB);
        }
        const dbConnection = await mongoose.connect(MONGODB_URI,{ useNewUrlParser: true});
        console.log("Connected to db",dbConnection);
    } catch (error) {
        console.log("Error inside connectDB", error);
        throw error;
    }
}

module.exports = { connectToDB };
