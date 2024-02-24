---
sidebar_position: 1
---
  
#  Installing Node.js and revolt.js

To start creating Revolt Bots, you will need to install NodeJS, which is a [JavaScript engine](https://nodejs.org/en/learn/getting-started/the-v8-javascript-engine). It's main purpose is to interpret and run javascript code locally.

### Installing Node.js

Let's quickly go over on how to install Node on your prefered platform of choise

#### Installing Node.js on Windows:

Go to [the Node.js website](https://nodejs.org/), download the newest version of Node.js open the downloaded file, and follow the steps from the installer. You might need to restart your computer after installing the program.
  
#### Installing Node.js on Linux:

When using linux, you have multiple ways to install Node. NodeJS recommends users to install Node through [`nvm`](https://github.com/nvm-sh/nvm), which is a version manager for node that works in shells like `bash` and `zsh`.

If you prefer using your system's package manager though, you can check out [Installing Node.js via package manager](https://nodejs.org/en/download/package-manager/) 

#### Installing Node.js on macOS:

Go to [the Node.js website](https://nodejs.org/), download the newest version of Node.js, open your package installer, and follow the shown steps.
  
### Initiating a folder for your bot

Find a good place on your PC and create a new folder, you can name it whatever you want.

Then open the terminal and navigate to that folder by using the `cd` command.

```bash
cd $DIR
```

Where `$DIR` is replaced by the relative/absolute path to that folder. For example, if I am in my home directory (which in my case is `/home/amy/`), I run `cd ./bot` and my current working directory will change to `/home/amy/bot/`. Depending on which OS you use, your path might be `C:\Users\<username>\` or `/home/<username>`.

Now that you have changed directories, let's initialize a new NodeJS project by running `npm init`. For this guide, we will be using the `npm` package manager to manage dependencies such as RevoltJS.

```bash
# Initialize a new package.json
npm init
```
This command creates a `package.json` file. It stores essential information such as your project's name, description, dependencies, *et cetera*.

You will be asked fill out things like the package's name and author in your terminal; You can also press **Enter** to skip these steps or instead of running `npm init`, you can pass the `-y` flag to automatically skip these steps and create the `package.json` file with dummy information.
  
This information can be filled out later by editing the file.

### Installing revolt.js

Now that you have a `package.json` file, it's time for you to add RevoltJS to your list of dependencies.

To do that, run the following command

```
npm install revolt.js
```

This command will do three things:

1. Add RevoltJS to your list of dependencies
2. Download RevoltJS' dependencies into the `node_modules` folder
3. Download RevoltJS to the `node_modules folder`

After downloading, you should see the line added by `npm`, it should say the following: `"revolt.js": "^7.0.0-beta.11"`

Congratulations, you've installed all dependencies needed to write your own bot! Go to the next page to learn how to create your bot's account.
