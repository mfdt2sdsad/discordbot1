const prefix = process.env.PREFIX;
module.exports = (client) => {
    client.user.setPresence({ game: { name: `${prefix}help`, type: 0} });
}