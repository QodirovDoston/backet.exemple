const axios = require("axios");
const { Telegraf } = require("telegraf");
const TOKEN ="6008373431:AAGK8gbVVR6ot6echddiP59CsghhA8bG4_g"
const bot = new Telegraf(TOKEN);
const Url =
  'http://api.weatherstack.com/current?access_key=a4526f4e34340020b34865e2cc70d5d9&query="';
const fetchData = async (cityName) => {
  const res = await axios.get(`${Url + cityName}`);
  return res;
};
bot.start((ctx) => {
  ctx.reply("Hello im a bot");
});
bot.on("text", async (ctx) => {
  const { message } = ctx;
  const { data } = await fetchData(message.text);
  if (data.success === false) {
    ctx.reply("Enter a valid city name:");
  } else {
    const { current, location } = data;
    const weatherStatus = current.weather_descriptions[0];

    ctx.reply(
      ` š City:${location.name}\n-\n š” Temperature ${
        current.temperature
      }Ā°\n-\nā Weather status: ${
        (weatherStatus.toLowerCase().includes("clear") === true && "āļø") ||
        (weatherStatus.toLowerCase().includes("sunny") === true && "āļø") ||
        (weatherStatus.toLowerCase().includes("cloud") === true && "āļø") ||
        (weatherStatus.toLowerCase().includes("overcast") === true && "āļø") ||
        (weatherStatus.toLowerCase().includes("rain") === true && "š§") ||
        (weatherStatus.toLowerCase().includes("snow") === true && "āļø") 
      } ${current.weather_descriptions[0]}`
    
    );
  }
});

bot.launch();
