const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "$";

client.on("message", message => {

if (message.content.startsWith(prefix + "dm")) {
if (!message.member.hasPermission("ADMINISTRATOR"))  return;
let args = message.content.split(" ").slice(1);
var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\ ${message.guild.members.filter(m => m.presence.status !== 'online').size} Dms sent`); 
 message.delete(); 
};     
});


client.on('ready',()=>{
    console.log(' Bot is online now!');
    let activities = [ `${client.guilds.size} servers!`, `${client.channels.size} channels!`, `${client.users.size} users!` ], i = 0;
    setInterval(() => client.user.setActivity(`${activities[i++ % activities.length]} || $help `, { type: "WATCHING" }), 15000)



});

client.login("Njk4Nzk3NDI5ODAxMjIyMTU0.XpeKuw.glTvkugyCW-cF7069UJ8XSs-qkg");