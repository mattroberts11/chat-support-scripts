import { chatClient, user_id } from "./client.js";

const channel = chatClient.channel

const createMessage = (type, id, data) => {
    const channel = chatClient.channel(type, id, data);
        return channel.sendMessage({   
        text: "Attachement search test",
        attachments: [ 
          { 
              type: 'image', 
              asset_url: 'https://bit.ly/2K74TaG', 
              thumb_url: 'https://bit.ly/2Uumxti', 
              myCustomField: 123 
          } 
      ], 
    })
};

createMessage("messaging", "Skiing").then((r) => console.log(r));