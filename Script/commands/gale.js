module.exports.config = {
    name: "gale",
    version: "1.1.0",
    hasPermssion: 2,
    credits: "SaGor",
    description: "Reply someone and send a random text with their name in capital letters",
    commandCategory: "other",
    usages: "",
    cooldowns: 5,
};

module.exports.run = async function({ api, event, Users }) {
    if (!event.messageReply) 
        return api.sendMessage("Please reply to someone's message.", event.threadID, event.messageID);

    const userID = event.messageReply.senderID;
    let userName = await Users.getNameUser(userID);
    userName = userName.toUpperCase();

    const texts = [
        "হাই মাদারচোদ তর তর ব্যাশা জাতের আম্মু টা রে আদর করে করে চুদি 🫦",
        "কান্দে ফালাইয়া তর মায়েরে চুদি💉।",
        "বাতিজা শুন তর আম্মু রে চুদলে রাগ করবি না তো আচ্ছা জা রাগ করিস না তর আম্মুর কালা ভুদায় আর চুদলাম না তো বোন এর জামা টা খুলে দে  ✋",
        "উফফফ খাদ্দামা মাগির পোলা তর আম্মুর কালা ভুদায় আমার মাল আউট তর কচি বোন রে উপ্তা করে এবার চুদবো  💉।",
        "বান্দি মাগির পোলা তর আম্মু রে চুদি তর দুলা ভাই এর কান্দে ফেলে  Power OF SaGor BoT🤝",
        "তর আম্মু রে আচার এর লোভ দেখি চুদি মাগির পোলা🤬",
        "হাই খানকির মাগির চুদলিং পোলা 🫥",
        "তর মায়রে ভোদার ভিতরে ঢুকাই দিমু খানকির পোলা 😘",
        "আব্বু ক মাদার চোদ 🤡",
        "আকে বাঁকে চলে নদী তর মায়রে আমি কান্দে নিয়া চুদি 🌚"
    ];

    const randomText = texts[Math.floor(Math.random() * texts.length)];
    const message = `${randomText} ${userName}`;

    api.sendMessage(message, event.threadID, event.messageID);
};
