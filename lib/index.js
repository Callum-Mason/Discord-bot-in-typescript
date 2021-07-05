"use strict";
// import { Discord } from "discord.js";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv = require("dotenv");
dotenv.config({ path: __dirname + "/.env" });
var Discord = require("discord.js");
var client = new Discord.Client();
// const channel = new Discord.Channel();
// const User = new Discord.User();
client.on("ready", function () {
    console.log("Logged in as " + client.user.tag + "!");
});
client.on("message", function (msg) { return __awaiter(void 0, void 0, void 0, function () {
    var args, amount_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!msg.content.toLowerCase().startsWith("clear")) return [3 /*break*/, 3];
                if (!msg.member.roles.cache.some(function (role) { return role.name === "𝒞𝒶𝓁𝓁𝓊𝓂"; })) return [3 /*break*/, 2];
                args = msg.content.split(" ").slice(1);
                amount_1 = args.join(" ");
                if (!amount_1)
                    return [2 /*return*/, msg.reply("You haven't given an amount of messages which should be deleted!")]; // Checks if the `amount` parameter is given
                if (isNaN(amount_1))
                    return [2 /*return*/, msg.reply("The amount parameter isn`t a number!")]; // Checks if the `amount` parameter is a number. If not, the command throws an error
                if (amount_1 > 100)
                    return [2 /*return*/, msg.reply("You can`t delete more than 100 messages at once!")]; // Checks if the `amount` integer is bigger than 100
                if (amount_1 < 1)
                    return [2 /*return*/, msg.reply("You have to delete at least 1 message!")]; // Checks if the `amount` integer is smaller than 1
                return [4 /*yield*/, msg.channel.messages
                        .fetch({ limit: amount_1 })
                        .then(function (messages) {
                        msg.channel.bulkDelete(messages);
                    })
                        .then(function () {
                        msg.reply("Deleted " + amount_1 + " messages");
                    })
                    // .catch(
                    //   msg.reply("There was an error!"),
                    //   msg.channel.send(
                    //     "https://media.giphy.com/media/AmT7Raa4GJQsM/giphy.gif"
                    //   )
                    //   /*Your Error handling if the Message isn't returned, sent, etc.*/
                    // );
                ];
            case 1:
                _a.sent();
                return [3 /*break*/, 3];
            case 2:
                msg.reply("Sorry, you do not have access to this command");
                _a.label = 3;
            case 3: return [2 /*return*/];
        }
    });
}); });
// Logs all messages that was sent
client.on("message", function (msg) {
    if (msg.content != "" && msg.author.id != "861172185686736897") {
        console.log(msg.author.username + ": " + msg.content);
    }
});
client.on("message", function (msg) { return __awaiter(void 0, void 0, void 0, function () {
    var ping, hosts, _loop_1, hosts_1, hosts_1_1, host, e_1_1;
    var e_1, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                if (!(msg.content.toLowerCase().startsWith("ping") &&
                    msg.author.id != "861172185686736897")) return [3 /*break*/, 8];
                ping = require("ping");
                hosts = ["8.8.8.8"];
                _loop_1 = function (host) {
                    var res;
                    return __generator(this, function (_c) {
                        switch (_c.label) {
                            case 0: return [4 /*yield*/, ping.promise.probe(host)];
                            case 1:
                                res = _c.sent();
                                msg.channel.send("Pinging...").then(function (m) {
                                    var embed = new Discord.MessageEmbed()
                                        .setAuthor("Your ping is " + res.avg)
                                        .setColor("Red");
                                    m.edit(embed);
                                });
                                return [2 /*return*/];
                        }
                    });
                };
                _b.label = 1;
            case 1:
                _b.trys.push([1, 6, 7, 8]);
                hosts_1 = __values(hosts), hosts_1_1 = hosts_1.next();
                _b.label = 2;
            case 2:
                if (!!hosts_1_1.done) return [3 /*break*/, 5];
                host = hosts_1_1.value;
                return [5 /*yield**/, _loop_1(host)];
            case 3:
                _b.sent();
                _b.label = 4;
            case 4:
                hosts_1_1 = hosts_1.next();
                return [3 /*break*/, 2];
            case 5: return [3 /*break*/, 8];
            case 6:
                e_1_1 = _b.sent();
                e_1 = { error: e_1_1 };
                return [3 /*break*/, 8];
            case 7:
                try {
                    if (hosts_1_1 && !hosts_1_1.done && (_a = hosts_1.return)) _a.call(hosts_1);
                }
                finally { if (e_1) throw e_1.error; }
                return [7 /*endfinally*/];
            case 8: return [2 /*return*/];
        }
    });
}); });
console.log(process.env.TOKEN);
client.login(process.env.TOKEN);
