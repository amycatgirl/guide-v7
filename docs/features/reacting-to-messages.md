---
sidebar_position: 2
---
  
# Reacting to messages

Making your bot react to a message is a bit more complicated than replying but that will be no problem for us.

Simply add a new command, you can use the base we provided in ["Add simple commands"](https://revolt.guide/docs/setup/add-simple-commands).

Now change `message.channel.sendMessage` to `message.react`.

There are two kinds of emojis that you can use to react, custom emojis and standard emojis.

If you want to react with a custom emoji simply fill in the ID of your emoji like this:

```js
message.react("01G7J9RTHKEPJM8DM19TX35M8N");   
```

To get the ID of a custom emoji just select it in the emoji picker and before sending it and copy the ID between the `:`'s.

If you want to react with a standard emoji you will have to encode it first using the `encodeURIComponent()` function:

```js
message.react(encodeURIComponent("❤️"));    
```

The finished code should look something like this:

```js
client.on("message", async (message) => {
    if (message.content === prefix + "react") {
        message.react(encodeURIComponent("❤️"));    
    }
});
```

Now just add this command to your bot like we did in ["Add simple commands"](https://revolt.guide/docs/setup/add-simple-commands).
