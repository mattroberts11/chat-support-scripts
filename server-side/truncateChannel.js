import serverClient from './serverClient.js';

// import { StreamChat } from "stream-chat";

//  ZACH'S ----- 
// const app_key = "yp88h35jyq7y"; // react chat playground
// const secret = "6ushxmxvkcf59wvnhf6uy6fvewqbmr56c33k56dsm8jgdbwpp4gawkp44xrxskta";

// For server-side auth the client uses app_key and secret
// const serverClient = StreamChat.getInstance(app_key, secret);

const sendMessageServer = async () => {
  // const client = new StreamChat(
  //   "yp88h35jyq7y",
  //   "6ushxmxvkcf59wvnhf6uy6fvewqbmr56c33k56dsm8jgdbwpp4gawkp44xrxskta"
  // );

  const user = {
    id: "Zachery",
    name: "Zachery",
  };

  const channel = serverClient.channel("messaging", "test-03", {
    name: "test-03",
    members: ["anna-baldy", "g-money", "Zachery"],
    created_by_id: "Zachery",
  });

  // await channel.watch();
  // await channel.create();
  // return await channel.delete();
  // await channel.create({ data: { created_by_id: user.id } });
  // await client.updateAppSettings({
  //   auto_translation_enabled: true,
  //   // auto_translation_language: "en",
  // });

  // return await channel.sendMessage({
  //   text: "Morning",
  //   user,
  // });

  // return await channel.addMembers(["petyo"], {
  //   text: "Petyo joined the channel.",
  //   user_id: "Zachery",
  // });

  return await channel.truncate({
    message: {
      text: "Dear yous. The channel has been truncated.",
      user_id: "Zachery",
    },
  });
};

sendMessageServer().then(console.log);
