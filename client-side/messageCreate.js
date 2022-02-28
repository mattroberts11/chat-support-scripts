import { chatClient, user_id } from "./client.js";

const channel = chatClient.channel

const createMessage = (type, id, data) => {
    const channel = chatClient.channel(type, id, data);
        return channel.sendMessage({   
        text: "Blocklist test shit",
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

createMessage("messaging", "testing-playground-05").then((r) => console.log(r));