const {connectToDB} = require('./dbConnection');
const {createUser} = require('../db/queries/authQueries');

const main = async (params) => {
    await connectToDB();
    const action = params?.action;
    let response;
    try {
        switch (action) {
            case 'createUser':
                response = await createUser(params);
                break;        
            default:
                break;
        }
        return response;
    } catch (error) {
        console.log("Error inside main",error);
        throw error;
    }
}

module.exports = {main};