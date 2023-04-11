---
sidebar_position: 1
---
  
# Replying to messages

Making your bot reply to a message is fairly easy.

Simply add a new command, you can use the base we provided in ["Add simple commands"](https://revolt.guide/docs/setup/add-simple-commands).

Now change `message.channel.sendMessage` to `message.reply`.

The finished code should look something like this:

```js
client.on("message", async (message) => {
    if (message.content === prefix + "reply") {
        message.reply("I replied!");
    }
});
```

Now just add this command to your bot like we did in ["Add simple commands"](https://revolt.guide/docs/setup/add-simple-commands).
