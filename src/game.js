async function handleUsername(bot, chatId, userId, username) {
  const buttons = [
    [{ text: 'Play', web_app: { url: 'https://go-tma.vercel.app/' } }],
    [{ text: 'Go to Go! AI-RPG', url: 'https://ton.app/social/go!-app?id=1349' }],
    [{ text: 'X(Twitter)', url: 'https://x.com/gorwachain' }],
    [{ text: 'Telegram', url: 'https://t.me/gorwachain' }],
    [{ text: 'Discord', url: 'https://discord.com/gorwachain' }],
    [{ text: 'Website', url: 'https://www.goplatform.io/' }],
  ];

  const text = `Welcome to our TON tapping game, ${username}\n
Here you can tap on the coin and earn $GoXP.\n
These $GoXP are automatically synced with your AI-RPG game, and you can use them to improve your gaming experience.\n
Tap every day to earn even more coins!`

  bot.sendMessage(chatId, text, {
    parse_mode: 'HTML',
    reply_markup: {
      inline_keyboard: buttons,
    }
  }
  )
}

module.exports = {
  handleUsername,
};