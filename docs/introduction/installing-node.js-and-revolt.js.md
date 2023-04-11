---
sidebar_position: 1
---
  
#  Installing Node.js and revolt.js
  
### Installing Node.js

* Installing Node.js on Windows:

Go to [the Node.js website](https://nodejs.org/), download the newest version of Node.js open the downloaded file, and follow the steps from the installer.
  
* Installing Node.js on Linux:

Check out the ["Installing Node.js via package manager"](https://nodejs.org/en/download/package-manager/) page by Node.js and find a way of installing that works for you.
  
* Installing Node.js on macOS:

Go to [the Node.js website](https://nodejs.org/), download the newest version of Node.js, open your package installer, and follow the shown steps.
  
### Initiating a folder for your bot
Find a good place on your PC and create a new folder, you can name it whatever you want.

Then open the terminal and navigate to that folder.

Now you have to initiate the folder by typing this text into your terminal and pressing **Enter**.
  
```
npm init
```
This creates a `package.json` file which stores all essential data like dependencies, version, author etc. for you.

You will be asked fill out all the basic info required for this file in your terminal, but you can also just press **Enter** until it's finished to not fill in any information.
  
*Keep your terminal open for the next point!*
  
The filled in information can later be changed by editing the `package.json` file.

If you want to shorten this process you can instead type in: `npm init -y`
  
### Installing revolt.js
Finally you have set everything up, now it is time for you to install revolt.js.

Open your terminal, type in the following text and press **Enter.**
```
npm install revolt.js
```
Boom! You are done! Turn to the next page to see how to create a bot application on Revolt.
