
module.exports = {
  name: "avatar",
  description: "displays avatar information about the user",
  category: "UTILITY",
  botPermissions: ["EmbedLinks"],
  command: {
    enabled: true,
    usage: "[@member|id]",
  },
  slashCommand: {
    enabled: true,
    options: [
      {
        name: "user",
        description: "the user to get the avatar for",
        type: "USER",
        required: false,
      },
    ],
  },
  async messageRun(message, args) {
    const target = args.length ? await message.guild.resolveMember(args[0]) : message.member;
    const response = getAvatar(target);
    await message.reply(response);
  },
  async interactionRun(interaction) {
    const user = interaction.options.getUser("user") || interaction.user;
    const target = await interaction.guild.members.fetch(user.id);
    const response = getAvatar(target);
    await interaction.followUp(response);
  },
};
