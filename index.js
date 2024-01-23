const { Telegraf } = require("telegraf");
require("dotenv").config();
const bot = new Telegraf(process.env.BOT_TOKEN);

const binarySearchString = `
const binarySearch = function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            // Target value found
            return mid;
        } else if (arr[mid] < target) {
            // Continue search in the right half
            left = mid + 1;
        } else {
            // Continue search in the left half
            right = mid - 1;
        }
    }

    // Target value not found in the array
    return -1;
}
`;

const Adnan = `"I love you a lot, Adnan ❤️";`;

bot.start((ctx) => ctx.reply("Welcome to Anika's Algo Bot"));
bot.command("binarySearchString", (ctx) => ctx.reply(binarySearchString));
bot.command("Adnan", (ctx) => ctx.reply(Adnan));
bot.launch();
