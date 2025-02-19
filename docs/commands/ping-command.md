---
sidebar_position: 4
---
  
# Ping command
  
Getting the ping of your bot and the ping of the API is really is and can be implemented into a command with only one line of code.

First we have to add a new command, you can use the base we provided in ["Add simple commands"](https://revolt.guide/docs/setup/add-simple-commands).

### Getting the bots ping

Now we have to see how long our bot takes to send a message (it's ping).

We do this by checking the time between when the command was executed (`let now = Date.now();`) and when our bot fully responded to it by editing the message (`Date.now()`).

```js
let now = Date.now();
Date.now() - now
```

### Getting the APIs ping

We can get the APIs ping simply by requesting it like this:

```js
client.websocket.ping
// We advise you to Math.round this number to make it cleaner.
Math.round(client.websocket.ping)
```

### The final command

Now we simply have to combine this into a message and add it to our command.

The end result should look something like this:

```js
client.on('message', async (message) => {
    if (message.content === prefix + 'ping') {
        let now = Date.now();
        message.channel.sendMessage(`Pinging...`).then((msg) => {
            msg.edit({ content: `The bots latency is: ${Date.now() - now}ms\nThe APIs Latency is: ${Math.round(client.websocket.ping)}ms`})
        });
    }
});
```
