import { chatClient, user_id } from "./client.js";

const channel = chatClient.channel

const createMessage = (type, id, data) => {
    const channel = chatClient.channel(type, id, data);
        return channel.sendMessage({    // user: 'matt',
        text: "Test message 1005...!!!"
    })
};

createMessage("messaging", "Skiing").then((r) => console.log(r));
