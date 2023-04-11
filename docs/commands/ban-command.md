---
sidebar_position: 1
---
  
# Ban command

In this guide we will show you how to add a ban command to your bot and what you need to do before doing so.

*Command example in chat:*

```
User1: aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
User2 (Mod): !ban 01FQT99TE7G09HEJZA3EBYV96S Spam
ExampleBot: @User1 has been banned by @User2 for "Spam".
```

### Adding a command with arguments

First you have to write a new command. Instead of checking if the message content is equal to the ban command we check if the message content starts with the ban command since the user has to add  arguments behind the command.

We do this by using the `.startsWith()` function.

```js
client.on("message", async (message) => {
    if (message.content.startsWith(prefix + "ban")) {
    }
});
```

### Adding checks

A common problem we have to avoid is system messages, which return a undefined `message.content`. Since we use the `.startsWith()` function the code will break if we feed it with something that is not a string. That is why we have to check if the `message.content` type is `string` and if that is the case we have to "stop" the command.

We do this by including a check for the variable type before we check if the message starts with the ban command:

```js
if (typeof message.content != "string") return; // Checks if message.content type is string
```

Now we have to check if the user that sent the command has the permission to ban members.

We do this by checking the permission of the message author.

```js
if (message.member.hasPermission(message.channel.server, "BanMembers") === false) {
   return message.channel.sendMessage("You don't have the permission to ban.");
}
```

The last check we have to add is if the user we want to ban is actually bannable, we do this by first fetching the user and then checking the bannable attribute.

The way the user provides and the bot gets the "target" (the user we want to ban) is relying on the arguments we mentioned above.

The user has to write the command and then after a space add the "target"'s ID. (For an example see the beginning of this page.)

We get this ID argument by using the `.split()` function to select the the text behind the first space.

```js
let target = message.channel.server.fetchMember(message.content.split(' ')[1]);
```

Now that we have fetched the user we will check the bannable attribute and see if it's true or not true.

```js
if ((await target).bannable !== true) {
   message.channel.sendMessage("I can't ban this user.");
}
if ((await target).bannable === true) {
}
```

The command with all checks should look something like this.

```js
client.on("message", async (message) => {
    if (typeof message.content != "string") return;
    if (message.content.startsWith(prefix + "ban")) {
       if (message.member.hasPermission(message.channel.server, "BanMembers") === false) {
          return message.channel.sendMessage("You don't have the permission to ban.");
       }
       let target = message.channel.server.fetchMember(message.content.split(' ')[1]);
       if ((await target).bannable !== true) {
          message.channel.sendMessage("I can't ban this user.");
       }
       if ((await target).bannable === true) {
       }
    }
});
```

### Adding the ban function and correlating message

Lastly we simply have to add the actual ban function and add the second argument (the text behind the second space) as reason.

And we add a message to show the ban was successful.

```js
await message.channel.server.banUser(message.content.split(' ')[1], { reason: message.content.split(' ')[2]})
message.channel.sendMessage(`<@${message.content.split(' ')[1]}> has been banned by <@${message.author_id}> for "${message.content.split(' ')[2]}"`);
```

### The complete ban command and clean version

The complete ban command should look something like this:

```js
client.on("message", async (message) => {
    if (typeof message.content != "string") return;
    if (message.content.startsWith(prefix + "ban")) {
        if (message.member.hasPermission(message.channel.server, "BanMembers") === false) {
            return message.channel.sendMessage("You don't have the permission to ban.");
        }
        let target = message.channel.server.fetchMember(message.content.split(' ')[1]);
        if ((await target).bannable !== true) {
            message.channel.sendMessage("I can't ban this user.");
        }
        if ((await target).bannable === true) {
            await message.channel.server.banUser(message.content.split(' ')[1], { reason: message.content.split(' ')[2] })
            message.channel.sendMessage(`<@${message.content.split(' ')[1]}> has been banned by <@${message.author_id}> for "${message.content.split(' ')[2]}"`);
        }
    }
});
```

The version with the clean code should look something like this:

```js
client.on("message", async (message) => {
    if (typeof message.content != "string") return;
    if (message.content.startsWith(prefix + "ban")) {
        if (message.member.hasPermission(message.channel.server, "BanMembers") === false) {
            return message.channel.sendMessage("You don't have the permission to ban.");
        }
        let target_id = message.content.split(' ')[1];
        let reason = message.content.split(' ')[2];
        let target = message.channel.server.fetchMember(target_id);
        if ((await target).bannable !== true) {
            message.channel.sendMessage("I can't ban this user.");
        }
        if ((await target).bannable === true) {
            await message.channel.server.banUser(target_id, { reason: reason })
            message.channel.sendMessage(`<@${target_id}> has been banned by <@${message.author_id}> for "${reason}"`);
        }
    }
});
```
