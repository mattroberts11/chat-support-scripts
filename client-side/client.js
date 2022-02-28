import { StreamChat } from 'stream-chat';
import dotenv from 'dotenv';
import createToken from '../server-side/createToken.js';

dotenv.config({path: '../.env'});

// const app_key = process.env["APP_KEY"];
// const app_key = 'g8c9bfgptufx';  // customer app key
const app_key = process.env["APP_KEY"];  // customer app key


const secret = process.env["API_SECRET"];

// For client-side auth the client uses only the app_key
const chatClient = StreamChat.getInstance(app_key);

const user_id = 'matt';
// const user_id = '667A2C0345ABA163992015A9@AdobeID'; // customer user Id

const extraData = {
  type: 'skier',
  status: 'skiing pow'
}

const token = createToken(user_id);

console.log('TOKEN', token)

const connect = chatClient.connectUser({ id: user_id, extraData }, token).then( r => console.log(r));

export {chatClient, user_id};
