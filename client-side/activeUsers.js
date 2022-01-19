import { chatClient, user_id } from "./client.js";


const getActiveUsers = async () => {
  return await chatClient.activeChannels()
}

getActiveUsers().then( r => console.log(r));