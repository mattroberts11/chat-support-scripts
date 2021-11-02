import serverClient from './serverClient.js';

const createToken = (userID) => serverClient.createToken(userID);

export default createToken;
