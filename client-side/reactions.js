import { chatClient, user_id } from "./client.js";

const channelId = 'Skiing'
const channel = chatClient.channel('messaging', channelId);

const messageId = '7d7df0d6-cf8e-4cc9-9041-70fe10f53295'

const addReaction = async () => {
  await channel.sendReaction(
    messageId,
    {
      type: 'like',
      myCustomField: false
    }
  ).then ( r => console.log(r))
}
addReaction();
