---
sidebar_position: 1
---
  
# Creating a ping-pong bot
  
### Creating the basic files
  
Navigate to your bots folder.

Create a file called: `config.json`

Create a file called: `index.js`
  
### Setting up the config.json file
  
Open the `config.json` file.
  
Now paste in the following text:
  
```json
{
	"token": "Your-token-goes-here",
	"prefix": "Your-prefix-goes-here"
}
```
  
For `"prefix"` you can put in anything you like.
  
Now open a Revolt application of your choice or use [the web app on the Revolt website](https://app.revolt.chat/).

Login and go into your [settings](https://app.revolt.chat/settings) (you can find them in the bottom left corner).

Open the ["My Bots"](https://app.revolt.chat/settings/bots) tab.
  
![My Bots tab](https://i.imgur.com/yzWKcfo.png)
  
Click on **"Reveal"** to see the token of your bot.
  
Now copy and paste this code into the `package.json` file.
  
The end result should look something like this:

```json
{
	"token": "1A2B3C4D5G6H7I8J",
	"prefix": "!"
}
``` 

*Your token will look different and will be longer!*
  
Now save the changes you made to the `config.json` file.
  
### Setting up the index.js file
  
Open the `index.js` file in a code editor of your choice.

Now write the following code:
  
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
client.on("message", async (message) => {
    if (message.content === prefix + "ping") {
        message.channel.sendMessage("Pong!");
    }
});

// Log in to Revolt with your client's token
client.loginBot(token);
```
  
Save the changes you made to the `index.js` file.

### Run your bot

Open your terminal and navigate to your bots folder.

Type in the following command and press **Enter** to run your bot.

```
node index.js
```
  
Voilà! Your first bot is up and running!
