/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zahirr-web.herokuapp.com',
}

// Apikey Website Api
global.APIKeys = {
	''https://zahirr-web.herokuapp.com': 'zahirgans',
}

// Other
global.owner = ['6283167714830','6281382420312','6288292024190']
global.premium = ['6288292024190']
global.packname = 'Hisoka Morrow'
global.author = 'WhatsApp Bot'
global.sessionName = 'hisoka'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '✓ Success',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',

}

global.wm = '                「 ZERO BOT あ⁩ 」' //Main Watermark

global.wm2 = '꒷︶꒷꒥꒷ ‧₊˚ ꒰ฅ˘օառɛʀ - OSHADA˘ฅ ꒱ ‧₊˚꒷︶꒷꒥꒷'

global.wm3 = '⫹⫺ ZERO 𝗕𝗢𝗧'

global.botdate = `⫹⫺ Date :  ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}`

global.bottime = `𝗧 𝗜 𝗠 𝗘 : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}`

global.titlebot = `⫹⫺ Time Sever : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}\n⫹⫺ Date Server :  ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}
`

global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./lib/hisoka.jpg')
global.visoka = { url: 'https://telegra.ph/file/15209657f9d4f59c7ca1e.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
