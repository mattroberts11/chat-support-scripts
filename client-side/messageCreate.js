import { chatClient, user_id } from "./client.js";

const channel = chatClient.channel

const createMessage = (type, id, data) => {
    const channel = chatClient.channel(type, id, data);
        return channel.sendMessage({    // user: 'matt',
        text: "444 Filter on topic",
        topic: 
          [
            
            'topic2'
            
          ]
    })
};

createMessage("messaging", "Skiing").then((r) => console.log(r));
