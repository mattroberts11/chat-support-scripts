import { chatClient, user_id } from "./client.js";

const channel = chatClient.channel;

const getOneMessage = async () => {
  await chatClient.getMessage('7d7df0d6-cf8e-4cc9-9041-70fe10f53295')
  .then( r => console.log('GET MESSAGE RESPONSE',r))
}

getOneMessage();
