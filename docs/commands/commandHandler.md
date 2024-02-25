---
sidebar_position: 1
---

# Creating a command Handler

When making bots, it's crucial to have a command handler, since bots tend to
have more than one command available.

The method we were using worked, but it can't scale over time and will prove to
be a pain in the ass to maintain in the future.

To avoid this, we use command handlers. They allow you to have one command per
file and you can group them in a separate folder for each.

## Decoupling commands from the main file

Let's start by using our ping-pong bot example as our base, and we will work on
from there.

```js
// Import the "Client" class from the revolt.js package
const { Client } = require("revolt.js");
// Import the values of "token" and "prefix" declared in your config.json file
const { token, prefix } = require('./config.json');

// Create a new client instance
let client = new Client();

// Once your client is ready, this code will be executed (only once)
client.on("ready", async () => {
    console.info(`Logged in as ${client.user.username}!`); // This returns "Logged in as *Your bot's name*!" in the console
});

// Make the client (bot) send the "Pong!" message after you send a message with the content "!ping" into chat.
client.on("messageCreate", async (message) => {
    if (message.content === prefix + "ping") {
        message.channel.sendMessage("Pong!");
    }
});

// Log in to Revolt with your client's token
client.loginBot(token);
```

Create a new folder called `commands` at the root of your project and make a
new file called `ping.js`.

Open said file and write the following

```js
const ping = {
    name: "ping",
    description: "Ping! Pong!",
    execute(message, args) {
        message.channel.sendMessage("Pong!") 
    }
}

module.exports = ping;
```

Let's go line by line:

First we declare a constant called ping and assign an object with the
following key value pairs:

- `name`, which is the name that the command is going to use
- `description`, which is the command's description that is used in the help command
- `execute()` is our command's code

Then we export the constant using `module.exports`

## Assigning commands

Now that the file in `commands/ping.js` has been created, we can start writting
the logic that handles how commands are executed.

Let's start by writting some code to handle these files.

```js
const fs = require("fs");
const path = require("path");

const commands = new Map()
const commandFiles = fs.readdirSync(path.resolve('./commands.js')).filter(file => file.endsWith('.js'));

for (const file in commandFiles) {
    const command = require(`./commands/${file}`);

    commands.set(command.name, command);
}
```

Here, we import two dependencies, `fs` and `path`. `fs` allows us to access our
system's file system, whilst `path` helps us handle paths, regardless of OS.

Then we declare two constants, `commands` is where we will store our commands and 
`commandFiles` is an array that holds all of our files inside the previously
created folder, `./commands/`.

We loop through the files and assign the command to their respective name.

## Rewriting our handler

Currently, our command handler consists of a simple `if/else` block, so let
rewrite it.

We need to ignore commands that:

1. Do not come from a bot
2. Does not start with our prefix

We can do this by using an `if` statement

```js
client.on("messageCreate", (message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return
})
```

Then let's split our message's content into two categories, the command's name
and it's arguments.

```js
//...
const args = message.content?.slice(prefix.length).trim().split(/ +/)
const command = args.shift().toLowerCase()
//...
```

Now, let's check if the command exists

```js
if (!commands.has(command)) return
// This will stop anything below this line from running
```


