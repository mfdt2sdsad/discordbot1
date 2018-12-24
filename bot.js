const Discord = require("discord.js");
const client = new Discord.Client();
const discord_token = process.env.TOKEN;
const prefix = process.env.PREFIX;

app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://nricbottest.herokuapp.com/`);
}, 280000);

client.on("ready", () => {
  console.log("I am ready!");
});
 
client.on("message", (message) => {
  if (message.content.startsWith("ping")) {
    message.channel.send("pong!");
  }
});
 

client.login(discord_token);