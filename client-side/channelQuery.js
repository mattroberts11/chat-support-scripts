import { chatClient, user_id } from "./client.js";

const messagingMembers = async () => {
  // a standard and recommended filter
  const filter = { type: "messaging", members: { $in: [user_id] } };
  const sort = { last_message_at: -1 };
  const result = await chatClient.queryChannels(filter, sort);
  return result;
};

const onlyMeAndMyFriend = async (friend) => {
  // filter for channels with only me and a friend
  const filter = {
    // $and: [
    //   {
    //     members: {
    //       $in: ["katie"],
    //     },
    //   },
    //   {
    //     members: {
    //       $in: ["george"],
    //     },
    //   },
    // ],
  };
  const sort = { last_message_at: -1 };
  const result = await chatClient.queryChannels(filter, sort);
  return result;
};

const getChannel = async () => {
  try {

    const filter = { 

      type: 'messaging',
      // cid: 'messaging:Skiing',
      members: {$in: ['katy']}
    };

    const sort = [{ last_message_at: -1 }];

    const channels = await chatClient.queryChannels(filter, sort, {
      watch: false, // this is the default 
      state: true,
      message_limit: 10,
    });

    return channels;
    // channels.forEach( channel => {
      
    // });

  } catch (error) {

    console.log(error);

  }
}

// onlyMeAndMyFriend("george").then((r) => console.log(r));
// getChannel().then((r) => console.log(r));
getChannel().then((r) => {
  if(r){
    r.forEach(channel => {
      console.log('CHANNEL ==', channel.state.messages.length);
    });
  }
});
