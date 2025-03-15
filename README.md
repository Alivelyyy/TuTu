
# TuTu - Advanced Discord Bot

<div align="center">
  <p>A powerful Discord bot built with discord.js v14</p>
</div>

## Features

- 🛡️ **Moderation**: Complete moderation suite with kick, ban, mute commands
- 🎉 **Giveaways**: Create and manage server giveaways
- 📊 **Statistics**: Track server activity and member stats
- 🎨 **Utility**: Useful commands for server management
- 🤖 **Auto-Moderation**: Automatic content filtering and raid protection
- 🌐 **Multi-Language**: Support for multiple languages (coming soon)

## Detailed Setup Guide

1. **Bot Token Setup**
   - Go to [Discord Developer Portal](https://discord.com/developers/applications)
   - Create a new application
   - Go to the Bot section
   - Click "Reset Token" and copy your new token
   - Add token to `config.js`:
   ```javascript
   TOKEN: "your-token-here",
   ```

2. **MongoDB Setup**
   - Create account at [MongoDB Atlas](https://www.mongodb.com/atlas/database)
   - Create a new cluster (free tier works)
   - Click "Connect" and copy your connection string
   - Add to `config.js`:
   ```javascript
   MONGO_CONNECTION: "your-mongodb-url",
   ```

3. **Installation**
   ```bash
   npm install
   ```

4. **Configuration**
   Edit `config.js` to customize:
   - `PREFIX_COMMANDS.DEFAULT_PREFIX`: Set your preferred command prefix
   - `OWNER_IDS`: Add your Discord ID
   - `PRESENCE`: Customize bot status
   - `EMBED_COLORS`: Change embed colors

5. **Starting the Bot**
   - Click the "Run" button in your Replit workspace
   - Bot will show as online in Discord when ready

## Command Categories

- 🛡️ **Moderation**
  - `/ban` - Ban members
  - `/kick` - Kick members
  - `/mute` - Timeout members
  - `/clear` - Delete messages

- 🎉 **Giveaway**
  - `/gstart` - Start a giveaway
  - `/gend` - End a giveaway
  - `/greroll` - Reroll winners

- 🛠️ **Utility**
  - `/help` - Show all commands
  - `/ping` - Check bot latency
  - `/serverinfo` - Server information
  - `/userinfo` - User information

## Support

Need help? Join our [Support Server](https://discord.gg/) for assistance!

## Credits

Created with ❤️ by Alive

---

<div align="center">
  Made with discord.js v14
</div>
