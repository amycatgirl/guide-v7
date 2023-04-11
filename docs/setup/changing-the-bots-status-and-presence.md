---
sidebar_position: 2
---
  
#  Changing the bots status and presence

Open the `index.js` file of your bot in a code editor of your choice.

Now search your code for the following code:

```js
client.on("ready", async () =>
    console.info(`Logged in as ${client.user.username}!`);
);
```

Now write the following code in a new line below the `console.info` line:

```js
client.api.patch("/users/@me", { status: { text: "Status-text-here", presence: "Online" } });
```

This code changes the status text and presence of your bot from the default to your own custom settings.

When setting `text:` you can use anything you like, when setting `presence:` you have to decide between:

`"Online" | "Idle" | "Focus" | "Busy" | "Invisible" | null | undefined`

*Using `null` and `undefined` will leave your status presence unmodified.*

After filling in both fields your code should look something like this:

```js
client.on("ready", async () => {
    console.info(`Logged in as ${client.user.username}!`);
    client.api.patch("/users/@me", { status: { text: `Hello World!`, presence: "Online" } });
});
```

Your finished code should look something like this:

```js
const { Client } = require("revolt.js");
const { token, prefix } = require('./config.json');

let client = new Client();

client.on("ready", async () =>
    console.info(`Logged in as ${client.user.username}!`);
    client.api.patch("/users/@me", { status: { text: `Hello World!`, presence: "Online" } });
);

client.on("message", async (message) => {
    if (message.content === prefix + "ping") {
        message.channel.sendMessage("Pong!");
    }
});

client.loginBot(token);
```

Now just [run your bot](https://revolt.guide/docs/setup/creating-a-ping-pong-bot#run-your-bot) to apply these changes.
