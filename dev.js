
const config = require('../config');

module.exports = {
    name: "devinfo",
    description: "عرض معلومات المطور",
    async execute(client, message) {
        message.reply(`رقم المطور: ${config.developer}`);
    },
};
