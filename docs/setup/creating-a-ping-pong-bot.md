---
sidebar_position: 1
---
  
# Creating a ping-pong bot
  
### Creating the basic files
  
1. Navigate to your bots folder.

2. Create a file called: `config.json`, that is where the bot's configuration will live. You can add and remove values as needed.

3. Create a file called: `index.js`, here is where the bot's code lives.

### Setting up the config.json file
  
With the `config.json` file open, paste the following:
  
```json
{
	"token": "Your-token-goes-here",
	"prefix": "!"
}
```
  
You can put any value in `"prefix"`, for this example, we will use `"!"` as our prefix.

### Obtaining your bot's token

If you haven't already, create a bot account by following the
[Creating a Bot application](/docs/introduction/creating-a-bot-application) page.

After the bot is created, click the "Token" button below your bot's username; This will copy your bot's token to
your clipboard.

Finally, go to your `package.json` file and paste your token in the quotes after `"token"`.

The end result should look something like this:

```json
{
	"token": "1A2B3C4D5G6H7I8J",
	"prefix": "!"
}
``` 

:::note

Your token will look different and will be longer!

:::

Now save the changes you made to the `config.json` file.
  
### Setting up the index.js file
  
Open the `index.js` file in a code editor of your choice. If you don't know what to use, we recommend using
Microsoft's [Visual Studio Code](https://code.visualstudio.com).

Now write the following code:
[//]: # (TODO: Tell user to switch from CommonJS to ES6)

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
  
Save the changes you made to the `index.js` file.

### Run your bot

Open your terminal and navigate to your bot's folder.

Type in the following command and press **Enter** to run your bot.

```
node index.js
```
  
Voilà! Your first bot is up and running!
