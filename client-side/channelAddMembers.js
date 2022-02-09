import { chatClient, user_id } from "./client.js";

const channel = chatClient.channel('messaging', 'invite_only');

const addUsersToChannel = async () => {
  return await channel.addMembers(['katy'])

}

addUsersToChannel().then( r => console.log(r))