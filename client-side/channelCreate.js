import { chatClient, user_id } from "./client.js";

const createChannel = async () => {
  return await chatClient.channel('messaging', 'invite_only', {
    name: 'You have to be invited to be in this channel'
  })
}


createChannel().then( r => console.log(r))