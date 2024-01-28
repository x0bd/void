---
title: "slack"
publishedAt: 2023-06-29
description: "Possibly the my favorite application of LLMs"
slug: "slack"
isPublish: true
---

![Bot](https://i.ibb.co/JKkZ40g/1-ibstdbkjnfmxqnqtmwdxkq.png)

Creating a SlackBot that reacts to every message sent by a specific user.

## Creating a New Slack App

The first thing we have to do is create a new slack app. We do this by navigating to [api.slack.com](https://api.slack.com/) and navigating to Your Apps -> `Create New App`.

We’ll call our app reacting-bot. Next up, we have to set up event subscriptions, a bot user, and permissions.

### Socket Mode

The first thing we have to do is enable Socket Mode. Turning on Socket Mode will route your app’s interactions and events over a WebSockets connection instead of sending these payloads to different Request URLs.

To enable Socket Mode, navigate to `Settings -> Socket Mode` and hit _Enable Socket Mode_. You will be prompted to add scopes and generate an app-level token. Give the token a name, e.g., “token”, and add the following scopes:

`connections:write & authorizations:read`

As the names suggest, these will give our app permission to read and write messages.

### Event Subscriptions

Next up, we need to enable Event Subscriptions, which can be found beneath Features in the left-side menu. After enabling Event Subscriptions, you will need to add the following Event Subscriptions.

-   **Subscribe to bot events:** `message.groups`
-   **Subscribe to event on behalf of users:** `message.channels`

### Bot user

If a Bot User has not yet been created, it can be set up on the App Home tab. Here we can set a display name and its username.

### Permissions

Lastly, we need to ensure that the SlackBot has all the correct permissions needed. Head over to `OAuth & Permissions` and add the reactions.write permission to the **Bot Token Scopes**.

We have now set up the SlackBot, and we are ready to start coding!

## Writing The Bot

We will be using the `bolt-js` library as an interface to the Slack API. It comes with many useful features that make creating SlackBots a breeze.

While in a new directory reacting-bot, we can initialize the project using `npm init -y`. This will create a `package.json` file that looks like the following:

```json
{
	"name": "reacting-bot",
	"version": "1.0.0",
	"description": "",
	"main": "index.js",
	"scripts": {
		"test": "echo \"Error: no test specified\" && exit 1"
	},
	"author": "",
	"license": "ISC"
}
```

For this project, we are going to need two packages. _@slack/bolt_ and _dotenv_. _Bolt_ is an interface that we use to communicate with the Slack API, and _dotenv_ is used to access environment variables. We can install the packages with the following command:

```bash
npm install @slack/bolt dotenv
```

Next up, we need to create the file `.env` which should store our environment variables for when we are running this project locally. The file should contain the following:

```js
SIGNING_SECRET=5c24e...
TOKEN=xoxb-...
APP_TOKEN=xapp-...
USER_ID=UCF8...
```

-   `SIGNING_SECRET` can be found on the **Basic Information** page
-   `TOKEN`(xoxb) can be found on the **OAuth & Permissions** page
-   `APP_TOKEN` (xapp) can be found on the **Basic Information** page under **App-level tokens**
-   `USER_ID` can be found when viewing a slack profile under **More**.

In `index.js`, we start by importing `@slack/bolt` and `dotenv`, and we initialize a bolt application in socket mode in the constant app:

```js
const { App } = require("@slack/bolt");
require("dotenv").config();

const app = new App({
	signingSecret: process.env.SIGNING_SECRET,
	token: process.env.TOKEN,
	socketMode: true,
	appToken: process.env.APP_TOKEN,
});
```

We then write the logic that uses the `message()` method to attach a listener for messages.

```js
app.message(async ({ message, context }) => {
	if (message.user === process.env.USER_ID) {
		try {
			const result = await app.client.reactions.add({
				token: context.botToken,
				name: "heavy_plus_sign",
				channel: message.channel,
				timestamp: message.ts,
			});
		} catch (error) {
			console.error(error);
		}
	}
});
```

We check any given message is sent by the user with the `ID USER_ID`. If we find a match, we use the `app.client.reactions.add()` function to add a reaction to the message.

Lastly, we add a function that runs when the application starts. This function will start up the Slack App:

```js
(async () => {
	const port = process.env.PORT || 3000;
	await app.start(port);
	console.log(`⚡️ reacting-bot is running on port ${port}`);
})();
```

And that’s it! You can now run the app using the `npm start` command, and the bot will start reacting to messages once it has been added to the correct channels.

This is what the final code looks like:

```js
const { App } = require("@slack/bolt");
require("dotenv").config();

const app = new App({
	signingSecret: process.env.SIGNING_SECRET,
	token: process.env.TOKEN,
	socketMode: true,
	appToken: process.env.APP_TOKEN,
});

app.message(async ({ message, context }) => {
	if (message.user === process.env.USER_ID) {
		try {
			const result = await app.client.reactions.add({
				token: context.botToken,
				name: "heavy_plus_sign",
				channel: message.channel,
				timestamp: message.ts,
			});
		} catch (error) {
			console.error(error);
		}
	}
});

(async () => {
	const port = process.env.PORT || 3000;

	await app.start(port);

	console.log(`⚡️ reacting-app is running on port ${port}`);
})();
```

Hope you had a lot of fun building this bot and Thanks for checking out this guide!
