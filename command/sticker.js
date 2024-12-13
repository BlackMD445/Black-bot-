
const { MessageMedia } = require('whatsapp-web.js');

module.exports = {
    name: "sticker",
    description: "تحويل صورة إلى ملصق",
    async execute(client, message) {
        if (message.hasMedia) {
            const media = await message.downloadMedia();
            if (media.mimetype.startsWith("image")) {
                await client.sendMessage(message.from, media, {
                    sendMediaAsSticker: true,
                });
            } else {
                message.reply("الرجاء إرسال صورة لتحويلها إلى ملصق!");
            }
        } else {
            message.reply("الرجاء إرسال صورة مع كتابة الأمر!");
        }
    },
};
