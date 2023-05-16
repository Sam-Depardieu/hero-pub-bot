const { Client, Collection } = require('discord.js');
const client = new Client({ intents: 515 });
const dotenv = require('dotenv');
var clc = require("cli-color");
const { red } = require('cli-color');
dotenv.config();

client.commands = new Collection();
client.buttons = new Collection();

['CommandUtil', 'EventUtil', 'ButtonUtil'].forEach(handler => { require(`./utils/handlers/${handler}`)(client) });

process.on('exit', code => { console.log(clc.red(`Le processus s'est arrêté avec le code: ${code}!`)) });

process.on('uncaughtException', (err, origin) => { console.log(clc.red(`UNCAUGHT_EXCEPTION: ${err}`, `Origine: ${origin}`)) });

process.on('unhandledRejection', (reason, promise) =>  { console.log(clc.red(`UNHANDLED_REJECTION: ${reason}\n-----\n`, promise)) });

process.on('warning', (...args) => console.log(clc.red(...args)));


client.login(process.env.TOKEN);