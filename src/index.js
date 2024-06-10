const TelegramBot = require('node-telegram-bot-api');
const { TOKEN } = require('./config.js');
const { handleUsername } = require('./game.js');

const bot = new TelegramBot(TOKEN, { polling: true });

bot.on('message', async msg => {
  try {
    const chatId = msg.chat.id;
    const userId = msg.from.id;
    
    const { text } = msg;
    const COMMANDS = text.toUpperCase();
    
    if (!text) return;

    switch (COMMANDS) {
      case '/START':
        bot.sendMessage(
          chatId,
          `Let's get started!\n\nWhat is your GO! AI-RPG username?`,
          {
            parse_mode: 'HTML',
          }
        );
        break;
      default:
        handleUsername(bot, chatId, userId, text);
    }
  } catch (err) {
    console.error(err);
  }
})
