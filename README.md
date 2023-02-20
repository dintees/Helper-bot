# Helper-bot

Helper-bot is a bot created for the Discord platform written using NodeJS (DiscordJS module). It provides many functionalities such as: creating polls, voting, reporting bugs and suggestions on the server channel on Discord.

## Setup

In the root directory type the command

```bash
npm install
```

In addition, you need to create an `.env` file in a root directory, where the token for discord will be stored. The token can be downloaded from the Discord API during bot creation.
Contents of the `.env` file
```bash
TOKEN = "YOURDISCORDTOKEN"
```

Channel names can be configured in the `config.json` file.

An example `config.json` file is shown below.
```json
{
    "channelNames": {
        "proposalsChannel": "proposalsAdmin",
        "suggestionsChannel": "suggestionsAdmin",

        "userSuggestionsChannel": "suggestions",
        "registerChannel": "register",
        "announcementsChannel": "announcements"
    }
}
```

