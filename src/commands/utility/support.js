const Discord = require("discord.js");
const { Message } = require("discord.js");
const Client = require("../../classes/Unicron");
const BaseCommand = require("../../classes/BaseCommand");

module.exports = class extends BaseCommand {
  constructor() {
    super({
      config: {
        name: "support",
        description: "Shows Support Server, Invite link.",
        permission: "User"
      },
      options: {
        aliases: ["invite"],
        clientPermissions: ["EMBED_LINKS"],
        cooldown: 3,
        nsfwCommand: false,
        args: false,
        usage: "",
        donatorOnly: false
      }
    });
  }
  /**
   * @returns {Promise<Message|boolean>}
   * @param {Client} client
   * @param {Message} message
   * @param {Array<string>} args
   */
  async run(client, message, args) {
    const OWNER = await client.users.fetch(c);
    return message.channel.send() 
                         
                         
                               
        .setColor(0x00ffff)
        .setTitle("0_0 Fun & Moderation bot")
        .setDescription("Made by SeSetItOnZygotetItOnZygote#6969"
          `
[Support Server](${client.unicron.serverInviteURL})
[Invite to your server](https://discord.com/oauth2/authorize?client_id=634908645896880128&scope=bot&permissions=285599830)`
        )
        .setFooter(`Made by ${OWNER.tag}`)
    );
  }
};
