
const { ApplicationCommandOptionType } = require("discord.js");

module.exports = {
  name: "timerstore",
  description: "store timer configuration",
  category: "UTILITY",
  command: {
    enabled: true,
  },
  slashCommand: {
    enabled: true,
    options: [
      {
        name: "duration",
        description: "Timer duration in minutes",
        type: ApplicationCommandOptionType.Integer,
        required: true
      },
      {
        name: "label",
        description: "Label for the timer",
        type: ApplicationCommandOptionType.String,
        required: false
      }
    ]
  },
  async messageRun(message, args) {
    const duration = args[0];
    await message.reply(`Timer stored for ${duration} minutes`);
  },
  async interactionRun(interaction) {
    const duration = interaction.options.getInteger("duration");
    const label = interaction.options.getString("label");
    await interaction.followUp(`Timer stored for ${duration} minutes${label ? ` with label: ${label}` : ''}`);
  }
};
