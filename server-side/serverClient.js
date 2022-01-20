import dotenv from 'dotenv';
import { StreamChat } from 'stream-chat';

dotenv.config({path: '../.env'});

const app_key = process.env["APP_KEY"];
const secret = process.env["API_SECRET"];


//  ZACH'S ----- 
// const app_key = "yp88h35jyq7y"; // react chat playground
// const secret = "6ushxmxvkcf59wvnhf6uy6fvewqbmr56c33k56dsm8jgdbwpp4gawkp44xrxskta";

// For server-side auth the client uses app_key and secret
const serverClient = StreamChat.getInstance(app_key, secret);
 
export default serverClient;
