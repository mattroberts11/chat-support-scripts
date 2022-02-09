import { chatClient, user_id } from "./client.js";

const searchChannel = async () => {
  let result;
  try {
    const searchChannelFilter = { cid: 'messaging:Skiing' };
    const searchMessageFilter = { topic:  {$in: ['topic2']} }

    result = await chatClient.search(searchChannelFilter, searchMessageFilter);
    
    console.log("RESULT", result.results);

  } catch (error) {
    console.log(error);
  }

  return result;
}