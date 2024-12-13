
const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const config = require('./config');
const fs = require('fs');

// إنشاء البوت
const client = new Client();

// تحميل الأوامر
const commands = new Map();
fs.readdirSync('./commands').forEach(file => {
    const command = require(`./commands/${file}`);
    commands.set(command.name, command);
});

// QR Code
client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});

// جاهزية البوت
client.on('ready', () => {
    console.log('البوت جاهز للعمل!');
});

// التعامل مع الرسائل
client.on('message', async message => {
    if (!message.body.startsWith(config.prefix)) return;

    const args = message.body.slice(config.prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();

    if (commands.has(commandName)) {
        try {
            await commands.get(commandName).execute(client, message, args);
        } catch (error) {
            console.error(error);
            message.reply("حدث خطأ أثناء تنفيذ الأمر.");
        }
    }
});

client.initialize();
￼Enter
