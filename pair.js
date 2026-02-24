const { makeid } = require('./gen-id');
const express = require('express');
const fs = require('fs');
let router = express.Router();
const pino = require("pino");
const { default: makeWASocket, useMultiFileAuthState, delay, Browsers, makeCacheableSignalKeyStore, getAggregateVotesInPollMessage, DisconnectReason, WA_DEFAULT_EPHEMERAL, jidNormalizedUser, proto, getDevice, generateWAMessageFromContent, fetchLatestBaileysVersion, makeInMemoryStore, getContentType, generateForwardMessageContent, downloadContentFromMessage, jidDecode } = require('@whiskeysockets/baileys')

const { upload } = require('./mega');
function removeFile(FilePath) {
    if (!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true });
}
router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
    async function GIFTED_MD_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/' + id);
        try {
var items = ["Safari"];
function selectRandomItem(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}
var randomItem = selectRandomItem(items);
            
            let sock = makeWASocket({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({ level: "fatal" }).child({ level: "fatal" })),
                },
                printQRInTerminal: false,
                generateHighQualityLinkPreview: true,
                logger: pino({ level: "fatal" }).child({ level: "fatal" }),
                syncFullHistory: false,
                browser: Browsers.macOS(randomItem)
            });
            if (!sock.authState.creds.registered) {
                await delay(1500);
                num = num.replace(/[^0-9]/g, '');
                const code = await sock.requestPairingCode(num);
                if (!res.headersSent) {
                    await res.send({ code });
                }
            }
            sock.ev.on('creds.update', saveCreds);
            sock.ev.on("connection.update", async (s) => {

    const {
                    connection,
                    lastDisconnect
                } = s;
                
                if (connection == "open") {
                    await delay(5000);
                    let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                    let rf = __dirname + `/temp/${id}/creds.json`;
                    function generateRandomText() {
                        const prefix = "3EB";
                        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
                        let randomText = prefix;
                        for (let i = prefix.length; i < 22; i++) {
                            const randomIndex = Math.floor(Math.random() * characters.length);
                            randomText += characters.charAt(randomIndex);
                        }
                        return randomText;
                    }
                    const randomText = generateRandomText();
                    try {
                        
                        const { upload } = require('./mega');
                        const mega_url = await upload(fs.createReadStream(rf), `${sock.user.id}.json`);
                        const string_session = mega_url.replace('https://mega.nz/file/', '');
                        let md = "𝕃𝔸ℝ𝔸-𝕄𝔻="+string_session;
                        let code = await sock.sendMessage(sock.user.id, { text: md });
                        let desc = `
✾━┫ *⚬Lααɾα-ꜱᴇꜱꜱɪᴏɴ⚬* ┣━✾
                   *ᴸ  ͣ  ͣ  ͬ  ͣ  ✻  ᴸ  ͣ  ͣ  ͬ  ͣ*

*𝙻𝚊𝚛𝚊 𝙼𝙳 𝚜𝚎𝚜𝚜𝚒𝚘𝚗 𝚒𝚍 𝚜𝚞𝚌𝚌𝚎𝚜𝚜𝚏𝚞𝚕𝚕𝚢 𝚌𝚘𝚗𝚗𝚎𝚌𝚝𝚎𝚍 ✅*

*𝗔𝗧𝗧𝗘𝗡𝗧𝗜𝗢𝗡* ⚠️

_𝚃𝚑𝚒𝚜 𝚒𝚜 𝚢𝚘𝚞𝚛 𝚠𝚑𝚊𝚝𝚜𝚊𝚙𝚙 𝚕𝚘𝚐𝚒𝚗𝚐 𝚌𝚘𝚍𝚎. 𝙳𝚘𝚗'𝚝 𝚜𝚑𝚎𝚊𝚛 𝚊𝚗𝚢𝚘𝚗𝚎 ❌_

𝗢𝗪𝗡𝗘𝗥 🛠️

𝙵𝚊𝚌𝚎𝚋𝚘𝚘𝚔 :
https://www.facebook.com/share/1CWyrVEcK9/

𝙸𝚗𝚜𝚝𝚊𝚐𝚛𝚊𝚖 :
https://www.instagram.com/sadeesha_min?igsh=bWRlem5jMTA5OHo4

𝚈𝚘𝚞𝚃𝚞𝚋𝚎 :
https://www.youtube.com/channel/UC7473CyG_w74rHZl-uQA64g

> *ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀᴅᴇᴇꜱʜᴀ ᴄᴏᴅᴇʀ*
`; 
                        await sock.sendMessage(sock.user.id, {
text: desc,
contextInfo: {
externalAdReply: {
title: "𝙎𝘼𝘿𝙀𝙀𝙎𝙃𝘼 𝘾𝙊𝘿𝙀𝙍 👨🏻‍💻",
thumbnailUrl: "https://raw.githubusercontent.com/tharumin/Alexa_Voice/refs/heads/main/STK-20260116-WA0002.png",
sourceUrl: "https://whatsapp.com/channel/0029VaD5t8S1nozDfDDjRj2J",
mediaType: 1,
renderLargerThumbnail: false
}  
}
},
{quoted:code })
sock.newsletterFollow("120363192254044294@newsletter")
sock.groupAcceptInvite('Ci5mDk9zEVF95NcuqEtzl4')
                    } catch (e) {
                            let ddd = sock.sendMessage(sock.user.id, { text: e });
                            let desc = `
 ✾━┫ *⚬Lααɾα-ꜱᴇꜱꜱɪᴏɴ⚬* ┣━✾
                   *ᴸ  ͣ  ͣ  ͬ  ͣ  ✻  ᴸ  ͣ  ͣ  ͬ  ͣ*

*𝙻𝚊𝚛𝚊 𝙼𝙳 𝚜𝚎𝚜𝚜𝚒𝚘𝚗 𝚒𝚍 𝚜𝚞𝚌𝚌𝚎𝚜𝚜𝚏𝚞𝚕𝚕𝚢 𝚌𝚘𝚗𝚗𝚎𝚌𝚝𝚎𝚍 ✅*

*𝗔𝗧𝗧𝗘𝗡𝗧𝗜𝗢𝗡* ⚠️

_𝚃𝚑𝚒𝚜 𝚒𝚜 𝚢𝚘𝚞𝚛 𝚠𝚑𝚊𝚝𝚜𝚊𝚙𝚙 𝚕𝚘𝚐𝚒𝚗𝚐 𝚌𝚘𝚍𝚎. 𝙳𝚘𝚗'𝚝 𝚜𝚑𝚎𝚊𝚛 𝚊𝚗𝚢𝚘𝚗𝚎 ❌_

𝗢𝗪𝗡𝗘𝗥 🛠️

𝙵𝚊𝚌𝚎𝚋𝚘𝚘𝚔 :
https://www.facebook.com/share/1CWyrVEcK9/

𝙸𝚗𝚜𝚝𝚊𝚐𝚛𝚊𝚖 :
https://www.instagram.com/sadeesha_min?igsh=bWRlem5jMTA5OHo4

𝚈𝚘𝚞𝚃𝚞𝚋𝚎 :
https://www.youtube.com/channel/UC7473CyG_w74rHZl-uQA64g

> *ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀᴅᴇᴇꜱʜᴀ ᴄᴏᴅᴇʀ*`;
                            await sock.sendMessage(sock.user.id, {
text: desc,
contextInfo: {
externalAdReply: {
title: "𝙎𝘼𝘿𝙀𝙀𝙎𝙃𝘼 𝘾𝙊𝘿𝙀𝙍 👨🏻‍💻",
thumbnailUrl: "https://raw.githubusercontent.com/tharumin/Alexa_Voice/refs/heads/main/STK-20260116-WA0002.png",
sourceUrl: "https://whatsapp.com/channel/0029VaD5t8S1nozDfDDjRj2J",
mediaType: 2,
renderLargerThumbnail: false,
showAdAttribution: true
}  
}
},
{quoted:ddd })
sock.newsletterFollow("120363192254044294@newsletter")
sock.groupAcceptInvite('Ci5mDk9zEVF95NcuqEtzl4')
                    }
                    await delay(10);
                    await sock.ws.close();
                    await removeFile('./temp/' + id);
                    console.log(`👤 ${sock.user.id} 𝗖𝗼𝗻𝗻𝗲𝗰𝘁𝗲𝗱 ✅ 𝗥𝗲𝘀𝘁𝗮𝗿𝘁𝗶𝗻𝗴 𝗽𝗿𝗼𝗰𝗲𝘀𝘀...`);
                    await delay(10);
                    process.exit();
                } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10);
                    GIFTED_MD_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./temp/' + id);
            if (!res.headersSent) {
                await res.send({ code: "❗ Service Unavailable" });
            }
        }
    }
   return await GIFTED_MD_PAIR_CODE();
});/*
setInterval(() => {
    console.log("☘️ 𝗥𝗲𝘀𝘁𝗮𝗿𝘁𝗶𝗻𝗴 𝗽𝗿𝗼𝗰𝗲𝘀𝘀...");
    process.exit();
}, 180000); //30min*/
module.exports = router;
