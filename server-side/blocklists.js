// import { chatClient, user_id } from "./client.js";
import serverClient from './serverClient.js';


const getBlockLists = async () => {
  return await serverClient.listBlockLists();
}


// getBlockLists().then( r => console.log(r));
