import { chatClient, user_id } from "./client.js";


const getActiveChannels = () => {
  // console.log('CHAT CLIENT', chatClient);
  return chatClient.activeChannels;
}

getActiveChannels().then( r => console.log(r));
