import { chatClient, user_id } from "./client.js";

const channel = chatClient.channel('messaging', 'invite_only');


const inviteUsers = async () => {
  return await  channel.inviteMembers(['matty', 'zach', 'Will'])
}

inviteUsers().then( r => console.log(r))
