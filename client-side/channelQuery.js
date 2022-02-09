import { chatClient, user_id } from "./client.js";

const messagingMembers = async () => {
  // a standard and recommended filter
  // const filter = { type: "messaging", members: { $in: [user_id] } };
  const filter = { type: "messaging", name: "invite_only"};

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
      // type: 'messaging',
      // cid: 'messaging:invite_only',
      invite: 'pending',
      // members: {$in: ['katy']},
      // topic:  {$in: ['topic2']},
    };

    // const sort = [{ last_message_at: -1 }];
    const sort = {};

    const channels = await chatClient.queryChannels(filter, sort, {
      // watch: false, // this is the default 
      // state: true,
      // message_limit: 10,
      // user_id: 'matty'
    });

    return channels;

  } catch (error) {
    console.log(error);
  }
}

  // const pending = await chatClient.channel.queryChannels(
  //   { invite: 'pending', 

  // },{},{'user_id': user_uuid });

// onlyMeAndMyFriend("george").then((r) => console.log(r));
getChannel().then((r) => console.log(r));

// getChannel().then((r) => {
//   if(r){
//     r.forEach(channel => {
//       console.log('CHANNEL ==', channel.state.members);
//     });
//   }
// });
