import { chatClient, user_id } from "./client.js";

// const channel = chatClient.channel

// const channelFilters = { members: {$in: [user_id]} };
const channelFilters = { cid: 'messaging:Skiing' };
const messageFilters = {attachments: {$exists: true}};

const searchMessage = async () => {
    const search = await chatClient.search(channelFilters, messageFilters);
    return search;
};

searchMessage().then((r) => console.log(r));