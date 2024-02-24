---
sidebar_position: 2
---
  
# Reacting to messages

Reacting to messages is as simple as using the `message.react()` function.

The function takes one parameter, which is the emoji to react the message with.

## Reacting with a custom emoji

To react with a custom emoji, you pass in the emoji's id as a string like in the example below:

```js
client.on("messageCreate", (message) => {
    // ...
    message.react("01HAJG8E9A1B7TQ7XQD0FMG49S")
    // ...
}
```

To get an emoji's id, you copy the [ULID](https://github.com/ulid/spec) between the colons (`:`). Alternatively, you can search emojis using the [`server.fetchEmoji()`](https://revolt.js.org/classes/Server.html#fetchEmojis) asynchronous function.

## Reacting with a built-in emoji

Unlike custom emojis, built-in emojis use their unicode representation as a URI encoded string, for example, a heart (❤️) is representated as `"%E2%9D%A4%EF%B8%8F"`.

To do so, use the `EncodeURIComponent()` function:

```js
client.on("messageCreate", (message) => {
    // ...
    message.react(EncodeURIComponent('❤️'))
    // ...
}
```

This will react the message with a heart emoji without the need of making a separate emoji.
