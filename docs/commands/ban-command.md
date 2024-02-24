---
sidebar_position: 1
---
  
# Ban command

This page will guide you on making a basic ban command. Here is how it will look like after you finish the tutorial:

```
User1: aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
User2 (Mod): !ban 01FQT99TE7G09HEJZA3EBYV96S Spam
ExampleBot: @User1 has been banned by @User2 for "Spam".
```

### Adding a command with arguments
[//]: # (TODO: Create command handler page because this is atrocious)

First you have to make a new command. Instead of checking if the message content is equal to the ban command we check if the message content starts with the ban command since the user has to add arguments such as the ID of the user and the reason behind the ban.

We do this by using the [`String.startsWith()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith) function.

```js
client.on("message", async (message) => {
    if (message.content.startsWith(prefix + "ban")) {
    }
});
```

### Adding checks

A common problem is that we have to avoid system messages, as they do not contain a proper message content. Since we use the `String.startsWith()` function, the code will break if we feed it with something that is not a string, the code will throw and exception and halt execution. That is why we have to check if `message.content` is a `string` before it tries to access the `String.startsWith()` function.

We do this by checking whether `message.content` is neither `null` or `undefined`, using a [optional chaining operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)

```js
//...
    if (message.content?.startsWith(prefix + "ban")) {
    }
//...
```

Now we have to check if the user that sent the command has the permission to ban members. As we don't want any malicious users misusing the ban command.

We do this by checking the `BanMembers` permission against the message's author.

```js
if (!message.member.hasPermission(message.channel.server, "BanMembers")) {
   return message.channel.sendMessage("You don't have the permission to ban members.");
}
```

Then we need to check if the bot has the permission to ban members as well.

```js
if (!message.server.havePermission("BanMembers")) {
    return message.channel.sendMessage("I don't have the permission to perform this action");
}
```

Now, we need to check if the bot can ban the user. The first argument we've provided to the command is the ID. So we'll use that as our target.

To get the user in the form of a server member, we use the `server.fetchMember()` function, which takes one parameter, a user id. We use `String.split()` to split our message's contents into an array by a separator, in this case, we use a space as our separator.

We get the member by `await`ing this function, since it returns a `Promise`. Read [this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises) article from MDN to learn more about `async`, `await` and Promises.

```js
const target = await message.channel.server.fetchMember(message.content.split(' ')[1]);
```

Now that we have fetched the member, we will check if we can actually ban this user, since roles that have a superior ranking to our bot can't be banned. We'll compare our ranking with the one from our bot.

```js
if (
    !message.server.havePermission("BanMembers") ||
    (target.ranking < message.server.member.ranking)
) {
    return message.channel.sendMessage("I don't have the permission to perform this action");
}
```

The command with all checks should look something like this.

```js
client.on("message", async (message) => {
    if (message.content?.startsWith(prefix + "ban")) {
        if (!message.member.hasPermission(message.channel.server, "BanMembers")) {
            return message.channel.sendMessage("You don't have the permission to ban.");
        }
        const target = await message.channel.server.fetchMember(message.content.split(' ')[1]);
        if (
            !message.server.havePermission("BanMembers") ||
            (target.ranking < message.server.member.ranking)
        ) {
            return message.channel.sendMessage("I don't have the permission to perform this action");
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
