const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('ready', async() => {
var server = "476818755574562816"; // ايدي السررفر
var channel = "483324110277967873";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('**كسم يارا و ليسجكسم يارا و ليسجكسم يارا و ليسجكسم يارا و ليسكسم كسم يارا كسم يارا كسم يارا كسم يارا كسم يارا كسم يارا **')
    },305);
})



client.on('ready', async() => {
var server = "476818755574562816"; // ايدي السررفر
var channel = "483324110277967873";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('#daily')
    },86400);
})




client.login(process.env.BOT_TOKEN); 

