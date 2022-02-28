// import { chatClient, user_id } from "./client.js";
import serverClient from './serverClient.js';


const getBlockLists = async () => {
  return await serverClient.listBlockLists();
}

const addBlockList = async () => {
  return await serverClient.updateChannelType('messaging', {
    blocklist: 'profanity_en_2020_v1',
    blocklist_behavior: 'block'
  })
}


// getBlockLists().then( r => console.log(r));
addBlockList().then( r => console.log(r));
