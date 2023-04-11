---
sidebar_position: 2
---
  
# Kick command
  
In this guide we will show you how to add a kick command to your bot and what you need to do before doing so.

*Command example in chat:*

```
User1: aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
User2 (Mod): !kick 01FQT99TE7G09HEJZA3EBYV96S Spam
ExampleBot: @User1 has been kicked by @User2 for "Spam".
```

### Setting up the command

For the kick command you can simply use the [ban command](https://revolt.guide/docs/commands/ban-command) from this guide and just change a few aspects of it.

Simply copy and paste the code.

Now follow this simple list to modify the ban command into a kick command:

Change the command name from ban to kick.

Change the permissions check from "BanMembers" to "KickMembers" and change the text of the error message:

```js
if (message.member.hasPermission(message.channel.server, "KickMembers") === false) {
   return message.channel.sendMessage("You don't have the permission to kick.");
}
```

Change the bannable check to kickable:

```js
if ((await target).kickable !== true) {
}
if ((await target).kickable === true) {
}
```

Now add the kick function and edit the error message and the successful message:

```js
if ((await target).kickable !== true) {
   message.channel.sendMessage("I can't kick this user.");
}
if ((await target).kickable === true) {
   (await target).kick();
   message.channel.sendMessage(`<@${target_id}> has been kicked by <@${message.author_id}> for "${kick_reason}"`);
}
```

### The complete kick command

After changing all these aspects our kick command is good to go!

The complete kick command should look something like this:

```js
client.on("message", async (message) => {
    if (typeof message.content != "string") return;
    if (message.content.startsWith(prefix + "kick")) {
        if (message.member.hasPermission(message.channel.server, "KickMembers") === false) {
            return message.channel.sendMessage("You don't have the permission to kick.");
        }
        let target_id = message.content.split(' ')[1];
        let reason = message.content.split(' ')[2];
        let target = message.channel.server.fetchMember(target_id);
        if ((await target).kickable !== true) {
            message.channel.sendMessage("I can't kick this user.");
        }
        if ((await target).kickable === true) {
            (await target).kick();
            message.channel.sendMessage(`<@${target_id}> has been kicked by <@${message.author_id}> for "${reason}"`);
        }
    }
});
```
