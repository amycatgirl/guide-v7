---
sidebar_position: 3
---
  
#  Add simple commands

Since we already created a basic command when creating the ping-pong bot we can just reuse that code.

Open the `index.js` file of your bot in a code editor of your choice.

Now just search for the following code:

```js
client.on("message", async (message) => {
    if (message.content === prefix + "ping") {
        message.channel.sendMessage("Pong!");
    }
});
```

Once you have found the code of the ping command just copy it and paste it under the already existing ping command.

Now just change the command name and the content of the response.

```js
client.on("message", async (message) => {
    if (message.content === prefix + "Your-command-name-here") { // This defines the command you need to send in the chat in order to make the bot respond.
        message.channel.sendMessage("Your-response-text-here"); // This defines the response the bot sends into chat once the command has been sent.
    }
});
```

A simple example would look like this:

```js
client.on("message", async (message) => {
    if (message.content === prefix + "foo") {
        message.channel.sendMessage("bar");
    }
});
```

Your finished code should look something like this:

```js
const { Client } = require("revolt.js");
const { token, prefix } = require('./config.json');

let client = new Client();

client.on("ready", async () =>
    console.info(`Logged in as ${client.user.username}!`);
);

client.on("message", async (message) => {
    if (message.content === prefix + "ping") {
        message.channel.sendMessage("Pong!");
    }
});

client.on("message", async (message) => {
    if (message.content === prefix + "foo") {
        message.channel.sendMessage("bar");
    }
});

client.loginBot(token);
```

Now just save your changes and [run your bot](https://revolt.guide/docs/setup/creating-a-ping-pong-bot#run-your-bot) to add the new command to your bot.
