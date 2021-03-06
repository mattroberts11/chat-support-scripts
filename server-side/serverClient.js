import dotenv from 'dotenv';
import { StreamChat } from 'stream-chat';

dotenv.config({path: '../.env'});

const app_key = process.env["APP_KEY"];
const secret = process.env["API_SECRET"];
const appName = process.env["APP_NAME"];

console.log("YOU ARE RUNNING APP => ", appName);
// For server-side auth the client uses app_key and secret
const serverClient = StreamChat.getInstance(app_key, secret);
 
export default serverClient;
