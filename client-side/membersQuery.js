import { chatClient, user_id } from "./client.js";



let sort = {created_at: -1};

const getMembers = async () => {
  const channel = chatClient.channel('messaging', 'Skiing');
  try {
    await channel.queryMembers({}, sort, {})
    .then( r => console.log('GET MEMBERS RESPONSE',r))
  } catch(err) {
    console.error("Error querying members", err);
  }
}

getMembers();
