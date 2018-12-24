const Discord = require("discord.js");
const client = new Discord.Client();
const discord_token = process.env.TOKEN;
const prefix = process.env.PREFIX;
const logs = "521873059204825172";
const modlogs = "521885446876299265";
const version = process.env.VERSION;

app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://nricbottest.herokuapp.com/`);
}, 280000);

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
  if (!file.endsWith(".js")) return;
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
    delete require.cache[require.resolve(`./events/${file}`)];
  });
});
 
client.on("ready", () => {
  console.log("I am ready!");
});
 
client.on("message", (message) => {
  if (message.content.startsWith("ping")) {
    message.channel.send("pong!");
  }
});
 

client.login(discord_token);