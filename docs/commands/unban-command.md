---
sidebar_position: 4
---
  
# Unban command
  
Since we added a ban command to our bot we also need an unban command.

For this we need our base command that uses arguments you can find the base in our [ban command](https://revolt.guide/docs/commands/ban-command) guide.

Now we need to add checks.

We will add the variable type check and the permission check we used for the ban command:

```js
client.on("message", async (message) => {
    if (typeof message.content != "string") return;
    if (message.content.startsWith(prefix + "unban")) {
        if (message.member.hasPermission(message.channel.server, "BanMembers") === false) {
            return message.channel.sendMessage("You don't have the permission to unban.");
        }
    }
});
```

We will also add the `target_id` variable used in the ban command:

```js
let target_id = message.content.split(' ')[1];
```

Now we have to check if the target is banned.

We do this by fetching all the server bans and checking if the target is/is not in that list.

```js
if (!await (await message.channel.server.fetchBans()).bans.find(b => b._id.user === target_id)) {
}
if (await (await message.channel.server.fetchBans()).bans.find(b => b._id.user === target_id)) {
}
```

Now we add messages that show if the target is banned or not and add the unban function to the successful if statement:

```js
if (!await (await message.channel.server.fetchBans()).bans.find(b => b._id.user === target_id)) {
    message.channel.sendMessage(`<@${target_id}> is not banned.`);
}
if (await (await message.channel.server.fetchBans()).bans.find(b => b._id.user === target_id)) {
    message.channel.server.unbanUser(target_id);
    message.channel.sendMessage(`<@${target_id}> has been unbanned.`);
}
```

### The complete command

The complete unban command should look something like this:

```js
client.on("message", async (message) => {
    if (typeof message.content != "string") return;
    if (message.content.startsWith(prefix + "unban")) {
        if (message.member.hasPermission(message.channel.server, "BanMembers") === false) {
            return message.channel.sendMessage("You don't have the permission to unban.");
        }
    }
    if (!await (await message.channel.server.fetchBans()).bans.find(b => b._id.user === target_id)) {
        message.channel.sendMessage(`<@${target_id}> is not banned.`);
    }
    if (await (await message.channel.server.fetchBans()).bans.find(b => b._id.user === target_id)) {
        message.channel.server.unbanUser(target_id);
        message.channel.sendMessage(`<@${target_id}> has been unbanned by <@${message.author_id}>.`);
    }
});
```
