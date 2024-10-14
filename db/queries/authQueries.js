const {authModel} = require('../models/authModel');

const createUser = async (params) => {
    try {
        console.log("Data to be saved inside db", params?.data);
        const createdUser = await authModel.create(params?.data);
        return createdUser;
    } catch (error) {
        console.log("Error inside createUser",error);
        throw error;
    }
};

module.exports = {createUser};