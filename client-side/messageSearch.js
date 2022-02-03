import { chatClient, user_id } from "./client.js";

// const channel = chatClient.channel

// const channelFilters = { members: {$in: [user_id]} };
const channelFilters = { cid: 'messaging:Skiing' };
const messageFilters = {attachments: {$gte: '1'}};

const searchMessage = async () => {
    return await chatClient.search(channelFilters, messageFilters);
};

searchMessage().then((r) => console.log(r));