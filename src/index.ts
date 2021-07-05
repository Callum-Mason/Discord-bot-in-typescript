// import { Discord } from "discord.js";

import * as dotenv from "dotenv";
dotenv.config({ path: __dirname + "/.env" });

const Discord = require("discord.js");
const client = new Discord.Client();
// const channel = new Discord.Channel();
// const User = new Discord.User();

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", async (msg: any) => {
  if (msg.content.toLowerCase().startsWith("clear")) {
    if (msg.member.roles.cache.some((role: any) => role.name === "𝒞𝒶𝓁𝓁𝓊𝓂")) {
      const args = msg.content.split(" ").slice(1); // All arguments behind the command name with the prefix
      const amount = args.join(" "); // Amount of messages which should be deleted

      if (!amount)
        return msg.reply(
          "You haven't given an amount of messages which should be deleted!"
        ); // Checks if the `amount` parameter is given
      if (isNaN(amount))
        return msg.reply("The amount parameter isn`t a number!"); // Checks if the `amount` parameter is a number. If not, the command throws an error

      if (amount > 100)
        return msg.reply("You can`t delete more than 100 messages at once!"); // Checks if the `amount` integer is bigger than 100
      if (amount < 1)
        return msg.reply("You have to delete at least 1 message!"); // Checks if the `amount` integer is smaller than 1
      await msg.channel.messages
        .fetch({ limit: amount })
        .then((messages: any) => {
          msg.channel.bulkDelete(messages);
        })
        .then(() => {
          msg.reply("Deleted " + amount + " messages");
        })
        // .catch(
        //   msg.reply("There was an error!"),
        //   msg.channel.send(
        //     "https://media.giphy.com/media/AmT7Raa4GJQsM/giphy.gif"
        //   )
        //   /*Your Error handling if the Message isn't returned, sent, etc.*/
        // );
    } else {
      msg.reply("Sorry, you do not have access to this command");
    }
  }
});

// Logs all messages that was sent
client.on("message", (msg: any) => {
  if (msg.content != "" && msg.author.id != "861172185686736897") {
    console.log(msg.author.username + ": " + msg.content);
  }
});

client.on("message", async (msg: any) => {
  if (
    msg.content.toLowerCase().startsWith("ping") &&
    msg.author.id != "861172185686736897"
  ) {
    var ping = require("ping");

    var hosts = ["8.8.8.8"];

    for (let host of hosts) {
      let res = await ping.promise.probe(host);

      msg.channel.send("Pinging...").then((m: any) => {
        var embed = new Discord.MessageEmbed()
          .setAuthor(`Your ping is ${res.avg}`)
          .setColor("Red");
        m.edit(embed);
      });
    }
  }
});
client.login(process.env.TOKEN);
