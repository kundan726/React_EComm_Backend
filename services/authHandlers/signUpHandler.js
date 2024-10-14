const {main} = require('../../db/index');

const signUpHandler = async (event, context) => {
  try {
    console.log("Hello", typeof event, event);
    const parsedBody =
      typeof event?.body === "string" ? JSON.parse(event?.body) : event.body;
    const { email, name, password, role } = parsedBody;
    const actionParams = {
        action : 'createUser',
        data : {
            email, name, password, role
        }
    };
    const response = await main(actionParams);
    return {
        statusCode : 201,
        body: JSON.stringify(response)
    }
  } catch (error) {
    console.log("Error inside signuphandler", error);
    return {
        statusCode: 500,
        body: JSON.stringify({ message: error }),
      };
  }
};

module.exports = { signUpHandler };
//   module.exports.signUpHandler = signUpHandler; we can use this also, this is also a commonjs syntax
