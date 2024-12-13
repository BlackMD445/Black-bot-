
module.exports = {
    name: "guess",
    description: "لعبة تخمين الرقم",
    async execute(client, message) {
        const number = Math.floor(Math.random() * 10) + 1;
        message.reply(`لقد اخترت رقمًا بين 1 و 10. حاول تخمينه!`);
        client.on('message', guess => {
            if (guess.body === number.toString()) {
                guess.reply("أحسنت! لقد خمنت الرقم الصحيح.");
            } else {
                guess.reply("خطأ! حاول مرة أخرى.");
            }
        });
    },
};
