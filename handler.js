// Config
var config = {
    botName: 'NACOWON',
    operator: ['+34605735266'].map(id => id.replace(/[^\d]/g, '') + '@c.us'),
    prefix: process.env.prefix ? new RegExp('^' + process.env.prefix) : /^[°•π÷×¶∆£¢€¥®™✓_=|~!?@#$%^&.\/\\©^]/,
    downloadStatus: false, // Curi Status Orang :|
    devMode: false, // true,
    msg: {
        notAdmin: '🔰 Lo siento, no eres un administrador de grupo',
        notGroup: '👨‍👩‍👧‍👦 Esta función solo se puede usar en grupo',
        notBotAdmin: '🔰 Bot aún no es un administrador de grupo',
        notURL: '🌐 Sin URL',
        noMedia: '📷 No Media',
        noArgs: '❓ Sin argumentos',
        noJid: '❓ No se ha llamado a @user',
        notAllowed: `❌ No puede usar esta función`,
        agregar: '➕ Agregar: \ n',
        eliminar: '➖ Eliminar: \ n',
        promover: '🔰 Agregar: \ n',
        degradar: '🙍‍♂️ Disminuir: \ n',
        self: '¿Cómo es que yo?',
        dev: '👨‍💻 Características aún en desarrollo 🔧',
        devOff: '🔧 Función deshabilitada por el desarrollador',
        groupOff: '❌ Funciones deshabilitadas para este grupo',
        éxito: '✅ Éxito',
        éxito: '❌ Falló',
        list: value => `- ${value}`,
        listUser: user => `- @${user.replace(/^@?|@c.us$/, '')}`,
        promoteEach: user => `- @${user} conviértete en administrador 🔰`,
        demoteEach: user => `- @${user} convertirse en miembro 🙍♂️`,
        promoteFail: user => `- @${user} ya un administrador 🔰`,
        demoteFail: user => `- @${user} Ya eres usuario 🙍♂️`,
        promoteFormat: (success, failed) => config.msg.promote + success.map(config.msg.promoteEach).join('\n') + '\n' + failed.length > 0 ? failed.map(config.msg.promoteFail).join('\n') : '',
        DemoteFormat: (success, failed) => config.msg.demote + success.map(config.msg.demoteEach).join('\n') + '\n' + failed.length > 0 ? failed.map(config.msg.demoteFail).join('\n') : '',
        yt: (título, tamaño de archivo) => `*${title}**n\Nn💾 Filesize: ${filesize}`,
        recomendar: (prefijo, comando) => `También recomendado *${prefijo + comando}*`,
        sizeExceed: size => `❌ Ukuran file melebihi batas yang ditentukan\n💾 Filesize: *${size}*n📈 Límite: *${config.sizeLimit} MB*`,
        esperaConvertir: (a, b, desc) => `⏱ Tunggu beberapa detik!\nSedang melakukan proses konversi *${a}* → *${b}*${desc ? ``N${desc.split('\n').map(v => `_${v}_`).join('\n')}` : ''}`,
        ...y la transmisión: (remitente, msg) => `📢 *BROADCAST* 📢\n_From: @${sender.id}_\n${msg}`,
        error: e => `⚠ *ERROR* ⚠\n\n${e}`,
        ytsearch: item => {
            switch (item.type) {
                caso 'video':
                    volver `
*${item.type}*
├> Judul: ${item.title}
├> Durasi: ${item.duration[0]} (${item.duración[1]})
├> Canal: ${item.author.name} ${item.author.verified ? item.author.verified == 'artista' ? '🎶' : '✅' : ''}
├> Link: ${item.link}
├> Deskripsi: ${item.description}
`.slice(1, -1)
                caso "canal":
                    volver `
*${item.type}*
├> Nama: ${item.title} ${item.verified ? item.verified == 'artista' ? '🎶' : '✅' : ''}
├> Jumlah Video: ${item.videoCount}
├> Suscriptor: ${item.subscriberCount}
├> Link: ${item.link}
├> Deskripsi: ${item.description}
`.slice(1, -1)
            }
        }
    },
    Iklan: [
        ¿Anda butuh API? Sini aja:v https://st4rz.herokuapp.com (Iklan por https://wa.me/6285221100126)',
        // 'Grup: https://chat.whatsapp.com/EN08hYxatxgJXdxo9dsART',
        'Github: https://github.com/Nurutomo/nbot-wa',
        "API: https://repl.it/@Nurutomo/MhankBarBar-Api",
    ],
    stickerGIF: {
        fps: 30, // Lumayan
        calidad: 1, // ¿Buriq?
        objetivo: '1M',
        duración: 15 // Detik (Durasi Maksimal)
    },
    sizeLimit: -Infinito, // Megabytes
    API: {
        mhankbarbar: {
            url: 'https://mhankbarbar-api--nurutomo.repl.co',
            "/api/ig",
        }
    },
    características: {
        ytv: falso,
        yta: falso
    }
}


/* Lista de módulos */

// Módulos incorporados
const fs = require('fs')
const os = require('os')
const path = require('path')
const util = require('util')
const {Leíble, escribible } = require('stream')

// Módulos locales
borrar require.cache[require.resolve('./src/database')]]
delete require.cache[require.resolve('./src/event')]
const { GroupData } = require('./src/database')
const _event = require('./src/event')
grupo const = nuevo GroupData()
const cmd = new _event()
cmd.prefix = config.prefix

// Módulos externos
const sharp = require('sharp')
const chalk = require('chalk')
const { JSDOM } = require('jsdom')
const fetch = require('node-fetch')
const FormData = require('form-data')
const tree = require('árbol-nodo-cli')
const puppeteer = require('puppeteer')
const ffmpeg = require('fluent-ffmpeg')
const text2image = require('text2image')
momento const = require('moment-timezone')
const { fromBuffer } = require('file-type')
const { sizeFormatter } = require('human-readable')
const translate = require('google-translate-open-api')
const { decryptMedia, Client } = require('@open-wa/wa-automate')
// const = require('')

moment.tz.setDefault('Asia/Jakarta').locale('id')
formato const = tamañoFormato({
    std: 'JEDEC', // 'SI' (por defecto) | 'IEC' | 'JEDEC'
    decimal: 2,
    keepTrailingZeroes: falso,
    rendir: (literal, símbolo) => `${literal} ${símbolo}B`,
})

// Módulos internos
const AsyncFunction = Object.getPrototypeOf(async function () { }).constructor

// Variables
Const ytIdRegex = /(?:http(?:s|):\N-(?:www.\N-)youtube(?:\N-nocookie|)\N-(?:watch\N-.*(?:||||velocidades)([-_0-9A-Za-z]{11})/
const chromeText = bgColor(color(`[${color('Ch', '#1DA462') + color('ro', '#DD5144') + color('me', '#FFCD46')}]`, '#4C8BF5'), '#112')

module.exports = async function (client = new Client(), message) {
    Inténtalo.
        let { body, type, id, from, to, t, sender, isGroupMsg, chat, caption, isMedia, mimetype, quotedMsg, quotedMsgObj, mentionedJidList, author } = message
        si (remitente && remitente.isMe) de = a

        if (config.downloadStatus && from.startsWith('status')) { // Curi status orang:v
            let dir = path.join('./base de datos/estado/', (espera cliente.getHostNumber()))
            si (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursivo: verdadero })
            let filename = t + (sender ? `_${(sender.formattedName ||| sender.verifiedName ||| sender.pushname)}` : '') + '_' + author.replace('@c.us', '') + (sender && sender.pushname ? `_${sender.pushname}` : '')
            Filename = filename.replace(/[\\/\N:\N-[\N-]<[\N-]/g, '_')
            si (mimetipo) { // Foto/Video?
                fs.writeFile(path.join(dir, nombre de archivo + mimetype.replace(/.*\//, '.')), (wait wait decryptMedia(message)).toString('binary'), { encoding: 'binario' }, err => {
                    si (err) consola.error(err)
                })
                si (subtítulo) { // Cek Subtítulo
                    fs.writeFile(path.join(dir, nombre de archivo + '.txt'), caption, err => {
                        si (err) consola.error(err)
                    })
                }
            } más { // Teks Biasa
                let { textColor, backgroundColor, font } = mensaje
                textColor = textColor.toString(16)
                backgroundColor = backgroundColor.toString(16)
                 #${textColor} {\i1}{\b1}Fondo.{\b}{\b} #${color de fondo} {\a6} {\a6}Font: ${\a6}`, err => {\a6}
                    si (err) consola.error(err)
                })
            }
        }

        const { nombre, formato Título } = chat
        deja { pushname, verifiedName, formattedName } = remitente || { pushname: null, verificadoNombre: null, formateadoNombre: null }
        pushname = pushname || verifiedName || formattedName // verifiedName es el nombre de alguien que usa una cuenta de negocios
        const botNumber = await client.getHostNumber() + '@c.us'
        const groupId = isGroupMsg ? chat.id : ''
        const groupAdmins = isGroupMsg && groupId ? espera cliente.getGroupAdmins(groupId) : ''
        const groupMembers = isGroupMsg && groupId ? espera client.getGroupMembersId(groupId) : ''
        const esGroupAdmins = groupAdmins.includes(sender ? sender.id : '') || false
        const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
        const isOperador = (sender ? config.operator.includes(sender.id) ||| remitente.isMe : false) || falso
        if (isGroupMsg) group.update(groupId, chat.groupMetadata)

        cuerpo = (tipo === 'chat' && cmd.prefix.test(cuerpo)) ?
            cuerpo :
            (((type === 'image' || type === 'video') && caption) && cmd.prefix.test(caption)) ?
                caption :
                ''

        const isImage = tipo === 'imagen'
        const isVideo = type === 'video'
        const isQuotedImage = quotedMsg && quotedMsg.type === 'imagen'
        const isQuotedVideo = quotedMsg && quotedMsg.type === 'video'
        const isQuotedAudio = quotedMsg && (quotedMsg.type === 'audio' || quotedMsg.type === 'ptt')
        const isQuotedFile = quotedMsg && quotedMsg.type === 'document'
        const isQuotedSticker = quotedMsg && quotedMsg.type === "sticker
        let rawText = type === 'chat' ?
            mensaje.cuerpo :
            (type === 'image' || type === 'video') && caption ?
                message.caption : ''
        si (rawText.startsWith('> ') /* && sender.id == ownerNumber*/) {
            console.log(sender.id, 'está intentando usar el comando de ejecución')
            let type = Función
            si (/await/.test(rawText)) type = AsyncFunction
            let func = new type('print', 'client', 'message', 'config', 'group', 'fetch', 'fs', 'cmd', 'require', 'ti', rawText.slice(2))
            dejar salir
            Inténtalo.
                salida = func((...args) => {
                    console.log(...args)
                    client.reply(from, util.format(...args), id)
                }, client, message, config, group, fs, cmd, require, text2image)
                console.log(output)
                client.reply(from, '*Salida de la consola*\n\n' + util.format(output), id)
            } atrapar (e) {
                client.reply(from, '*Error de consola*\n\n' + util.format(e), id)
            }
        }

        if (isGroupMsg) group.update(chat.id, chat.groupMetadata)

        // cmd.middleware = (siguiente, nombre) => {
        // si (group.permission(groupId, sender.id, name)) next()
        // else client.reply(from, config.msg.notAllowed)
        // }
        cmd.middleware = next => {
            si (config.devMode && isOperator) next()
            si no, si (!config.devMode) next()
        }


        cmd.check(cuerpo, verdad, cliente, {
            ...mensaje,
            pushname,
            botNumber,
            groupId,
            groupAdmins,
            miembros del grupo,
            es el Grupo Admins,
            esBotGroupAdmins,
            isOperador,
            isImagen,
            es un video,
            isQuotedImage,
            is QuotedVideo,
            isQuotedAudio,
            is QuotedFile,
            isQuotedSticker,
            rawText,
            cuerpo,
            mensaje,
            de,
            a
        }).entonces(datos => {
            let tipe = bgColor(color(type.replace(/^./, (str) => str.toUpperCase()) + (from.startsWith('status') ? ' Status' : ''), 'negro'), 'amarillo')
            si (datos.conocidos) {
                si (data.pass) {
                    si (!isGroupMsg && remitente && remitente.isMe) console.log(color('[EXEC]'), color(momento(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${cmd.command} [${cmd.args.length}]`), 'from', color(pushname), 'in', color(name || formattedTitle))
                    si no, si (!isGroupMsg) console.log(color('[EXEC]'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${cmd.command} [${cmd.args.length}]`), 'from', color(pushname))
                    si no, si (isGroupMsg) console.log(color('[EXEC]'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${cmd.command} [${cmd.args.length}]`), 'from', color(pushname), 'in', color(name || formattedTitle))
                } más {
                    si (!isGroupMsg && remitente && remitente.isMe) console.log(color('[????]'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${cmd.command} [${cmd.args.length}]`, 'red'), 'from', color(pushname), 'in', color(name || formattedTitle))
                    si no, si (!isGroupMsg) console.log(color('[????]'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${cmd.command} [${cmd.args.length}]`, 'red'), 'from', color(pushname))
                    si no (esGroupMsg) console.log(color('[????]'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${cmd.command} [${cmd.args.length}]`, 'red'), 'from', color(pushname), 'in', color(name || formattedTitle))
                }
            } más {
                si (!isGroupMsg && remitente && remitente.isMe && mensaje.ack > 0) console.log('[RECV]', color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), `${tipe} from`, color(pushname)), 'in', color(name || formattedTitle)
                else if (!isGroupMsg && message.ack < 0) console.log('[RECV]', color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), `${tipe} from`, color(pushname))
                else if (isGroupMsg && message.ack < 0) console.log('[RECV]', color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), `${tipe} from`, color(pushname), 'in', color(name || formattedTitle))
            }
        }).catch(e => {
            ...y la de los demás...
            if (e.usedPrefix) client.sendText(message.from, config.msg.error(util.format(e))
         })
    } catch (e) {
        _err(e)
    }
}

cmd.on('ayuda', ['menu', 'ayuda', '?', 'tolong'], función async (client = new Client(), { from, id, pushname }) {
    Inténtalo.
        client.reply(from, showHelp(this.usedPrefix, pushname, this.args[0]), id)
    } atrapar (e) {
        client.sendText(from, showHelp(this.usedPrefix, pushname, this.args[0]))
        ...y la de los demás...
    }
})

cmd.on('sticker', /^sti(c|)ker$/i, función async (client = new Client(), { from, id, isImage, isQuotedImage, isQuotedFile, quotedMsg, message }) {
    si (isImage || isQuotedImage || isQuotedFile) {
        const encryptMedia = isQuotedImage || isQuotedFile ? quotedMsg : mensaje
        const _mimetype = encryptMedia.mimetype
        const mediaData = await decryptMedia(encryptMedia)
        si (_mimetype === 'imagen/webp') cliente.sendRawWebpAsSticker(from, mediaData.toString('base64'), false)

        pegatina de la const = espera el procesoPegatina (mediaData, 'contiene')
        espera cliente.sendRawWebpAsSticker(from, sticker.toString('base64'), false)
    } else client.reply(from, config.msg.noMedia, id)
})

cmd.on('meme', 'meme', función async (client = new Client(), { from, id, isImage, isQuotedImage, quotedMsg, message }) {
    si (isImage || isQuotedImage) {
        let top = ''
        let bottom = this.text
        si (/\|/.prueba(este.texto)) {
            [arriba, abajo] = this.text.split('|')
        }
        const encryptMedia = isQuotedImage ? quotedMsg : mensaje
        const mediaData = await decryptMedia(encryptMedia)
        const getUrl = await uploadImages(mediaData, false)
        const ImageBase64 = esperar CustomText(getUrl, top, bottom)
        cliente.sendFile(from, ImageBase64, 'image.png', '', null, true)
            .then((serialized) => console.log(`Sukses Mengirim File dengan id: ${serialized}`))
    } else client.reply(from, config.msg.noMedia, id)
})

cmd.on('memesticker', /^(memesti(c|)ker|sti(c|)kermeme)$/i, función async (client = new Client(), { from, id, isImage, isQuotedImage, quotedMsg, message }) {
    si (isImage || isQuotedImage) {
        let top = ''
        let bottom = this.text
        si (/\|/.prueba(este.texto)) {
            [arriba, abajo] = this.text.split('|')
        }
        const encryptMedia = isQuotedImage ? quotedMsg : mensaje
        const mediaData = await decryptMedia(encryptMedia)
        const getUrl = await uploadImages(mediaData, false)
        const ImageBase64 = esperar CustomText(getUrl, top, bottom)
        const stiker = await processSticker(ImageBase64, 'contiene')
        client.sendRawWebpAsSticker(from, stiker.toString('base64'), false)
    } else client.reply(from, config.msg.noMedia, id)
})

cmd.on('sgif', /^(sti(c|)kergif|gifsti(c|)ker|sgif)$/i, función async (client = new Client(), { from, id, isMedia, isQuotedVideo, isQuotedFile, quotedMsg, message }) {
    si ((isMedia || isQuotedVideo ||| isQuotedFile) && esto.args.length === 0) {
        const encryptMedia = isQuotedVideo || isQuotedFile ? quotedMsg : mensaje
        const _mimetype = encryptMedia.mimetype
        client.reply(from, config.msg.waitConvert(_mimetype.replace(/.+\//, ''), 'webp', 'Stiker itu pakai format *webp*'), id)
        if (/image/.test(_mimetype)) client.reply(from, config.msg.recommend(this.usedPrefix, 'stiker'), id)
        console.log(color('[WAPI]'), 'Descargar y desencriptar medios...')
        const mediaData = await decryptMedia(encryptMedia)
        si (_mimetype === 'imagen/webp') cliente.sendRawWebpAsSticker(from, baseURI(mediaData.toString('base64')), true)
        pegatina const = await stream2Buffer(write => {
            ffmpeg(buffer2Stream(mediaData))
                .inputOpciones([
                    '-t', config.stickerGIF.duration
                ])
                .complexFilter([
                    (config.stickerGIF.fps >= 1 ? 'fps=' + config.stickerGIF.fps + ',' : '') + 'scale=512:512:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=512:512:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1'
                ])
                .outputOpciones([
                    '-qscale', config.stickerGIF.quality,
                    '-fs', config.stickerGIF.target || '1M',
                    "-vcodec", "libwebp",
                    // '-lossless', '1',
                    '-preset', 'default',
                    '-loop', '0',
                    "-an",
                    '-vsync', '0'
                ])
                .format('webp')
                .on('start', commandLine => console.log(color('[FFmpeg]'), commandLine))
                .on('progreso', progreso => consola.log(color('[FFmpeg]'), progreso))
                .on('end', () => console.log(color('[FFmpeg]'), 'Processing finished!'))
                .stream(escribir)
        })
        client.sendRawWebpAsSticker(from, sticker.toString('base64'), true)
    }
})

cmd.on('add', ['add', '+'], función async (client = new Client(), { from, id, isGroupMsg, isBotGroupAdmins, botNumber, groupId }) {
    args = this.args.join(' ').split(',').map(number => number.trim())
    fallido = permiso([
        [!isGrupoMsg, config.msg.noGrupo],
        // [!isGroupAdmins, config.msg.notAdmin],
        [!isBotGroupAdmins, config.msg.notBotAdmin],
        [this.args.length === 0, config.msg.noArgs],
        [este.args.incluye(botNumber.replace('@c.us', '')), config.msg.self],
    ])
    si (falló[0]) devuelve client.reply(from, failed[1], id)
    wait wait client.sendTextWithMentions(from, config.msg.add + args.map(config.msg.listUser).join('\n'))
    para (que i = 0; i < args.length; i++) {
        client.addParticipant(groupId, args[i] + '@c.us')
    }
})

cmd.on('kick', ['kick', '-'], función async (client = new Client(), { from, id, isGroupMsg, isGroupAdmins, isBotGroupAdmins, botNumber, groupId }) {
    fallido = permiso([
        [!isGrupoMsg, config.msg.noGrupo],
        [!isGroupAdmins, config.msg.notAdmin],
        [!isBotGroupAdmins, config.msg.notBotAdmin],
        [this.args.length === 0, config.msg.noArgs],
        [este.args.incluye(botNumber), config.msg.self],
    ])
    si (falló[0]) devuelve client.reply(from, failed[1], id)
    wait wait client.sendTextWithMentions(from, config.msg.remove + this.args.map(config.msg.listUser).join('\n'))
    para (dejemos i = 0; i < esta.args.longitud; i++) {
        client.removeParticipant(groupId, this.args[i] + '@c.us')
    }
})

cmd.on('promote', ['promote', '^'], función async (client = new Client(), { from, id, isGroupMsg, isGroupAdmins, isBotGroupAdmins, mentionedJidList, groupMembers, groupAdmins, groupId, botNumber }) {
    fallido = permiso([
        [!isGrupoMsg, config.msg.noGrupo],
        [!isGroupAdmins, config.msg.notAdmin],
        [!isBotGroupAdmins, config.msg.notBotAdmin],
    ])
    si (falló[0]) devuelve client.reply(from, failed[1], id)
    si (this.args.length > 0 && this.args[0] == '@a') mentionedJidList = groupMembers
    else if (this.args.length > 0 && this.args[0] == '@r') mentionedJidList = pickRandom(groupMembers.filter(id => !groupAdmins.includes(id))
    fallido = permiso([
        [mentionedJidList.length < 1, config.msg.noJid]
    ])
    si (falló[0]) devuelve client.reply(from, failed[1], id)
    let successList = []
    let failedList = []
    para (dejen de mencionar la mencionada lista de JidList) {
        si (groupAdmins.includes(mentionid) || mentionid === botNumber) {
            failedList.push(mentionid)
            Continúa
        }
        client.promoteParticipant(groupId, mentionid)
        successList.push(mentionid)
        // que el éxito = esperar cliente.promoverParticipante(groupId, mentionid)
        // si (éxito) éxitoLista.push(mentionid)
        // más fallidoList.push('Maaf, Error')
    }
    client.sendTextWithMentions(from, config.msg.promoteFormat(successList, failedList))
})

cmd.on('degradar', ['degradar', 'v'], función async (client = new Client(), { from, id, isGroupMsg, isGroupAdmins, isBotGroupAdmins, mentionedJidList, groupMembers, groupAdmins, groupId, botNumber }) {
    fallido = permiso([
        [!isGrupoMsg, config.msg.noGrupo],
        [!isGroupAdmins, config.msg.notAdmin],
        [!isBotGroupAdmins, config.msg.notBotAdmin],
    ])
    si (falló[0]) devuelve client.reply(from, failed[1], id)
    si (this.args.length > 0 && this.args[0] == '@a') mentionedJidList = groupAdmins
    más si (this.args.length > 0 && this.args[0] == '@r') mentionedJidList = pickRandom(groupAdmins)
    fallido = permiso([
        [mentionedJidList.length < 1, config.msg.noJid]
    ])
    si (falló[0]) devuelve client.reply(from, failed[1], id)
    que el éxito de la lista = [],
        failedList = []
    para (dejen de mencionar la mencionada lista de JidList) {
        si (!groupAdmins.includes(mentionid) || mentionid === botNumber) {
            failedList.push(mentionid)
            Continúa
        }
        cliente.degradanteParticipante(groupId, mentionid)
        successList.push(mentionid)
        // que el éxito = esperar cliente.promoverParticipante(groupId, mentionid)
        // si (éxito) éxitoLista.push(mentionid)
        // más fallidoList.push('Maaf, Error')
    }
    client.sendTextWithMentions(from, config.msg.demoteFormat(successList, failedList))
})

cmd.on('reenviar', /^(re(send|post)|a(img|image))$/i, función async (client = new Client(), { from, id, quotedMsgObj }) {
    si (citado por MsgObj) {
        dejar que encryptMedia
        Const replyOnReply = await client.getMessageById(quotedMsgObj.id)
        const obj = replyOnReply.quotedMsgObj
        si (/ptt|audio|video|imagen|documento|pegatina/.test(quotedMsgObj.type)) encryptMedia = quotedMsgObj
        más si (obj && /ptt|audio|video|imagen/.test(obj.type)) encryptMedia = obj
        si no, regresa
        const _mimetype = encryptMedia.mimetype
        console.log(color('[WAPI]', 'verde'), 'Descargar y desencriptar medios...')
        const mediaData = await decryptMedia(encryptMedia)

        si (encryptMedia.animado) {
            client.reply(from, config.msg.waitConvert('webp', 'mp4', 'Kebalikan dari gifstiker'), id)
            pegatina const = await stream2Buffer(write => {
                ffmpeg(buffer2Stream(mediaData))
                    .format('mp4')
                    .on('start', commandLine => console.log(color('[FFmpeg]'), commandLine))
                    .on('progreso', progreso => consola.log(color('[FFmpeg]'), progreso))
                    .on('end', () => console.log(color('[FFmpeg]'), 'Processing finished!'))
                    .stream(escribir)
            })
            client.sendRawWebpAsSticker(from, sticker.toString('base64'), true)
        } else client.sendFile(from, baseURI(mediaData, _mimetype), `file.${_mimetype.replace(/.+\//, '')}`, ':)', encryptMedia.id)
    } else client.reply(from, config.msg.noMedia, id)
})

cmd.on('ytv', /^yt((dl|)mp4|v)$/i, función async (client = new Client(), { from, id }) {
    fallido = permiso([
        [!this.url, config.msg.notURL]
    ])
    si (falló[0]) devuelve client.reply(from, failed[1], id)
    let res = await ytv(this.url)
    si (res.filesize > config.sizeLimit * 1000) devuelve client.sendImage(from, res.thumb, 'thumbs.jpg', config.msg.yt(res.title, res.filesizeF) + '\n\nUse Link: ' + res.dl_link + '\n' + config.msg.sizeExceed(res.filesizeF), id)
    client.sendImage(from, res.thumb, 'thumbs.jpg', config.msg.yt(res.title, res.filesizeF) + '\n' + res.dl_link, id)
    client.sendFileFromUrl(from, res.dl_link, `media.${res.ext}`, config.msg.yt(res.title, res.filesizeF), id)

})

cmd.on('yta', /^yt((dl|)mp3|a)$/i, función async (client = new Client(), { from, id }) {
    fallido = permiso([
        [!this.url, config.msg.notURL]
    ])
    si (falló[0]) devuelve client.reply(from, failed[1], id)
    let res = await yta(this.url)
    si (res.filesize > config.sizeLimit * 1000) devuelve client.sendImage(from, res.thumb, 'thumbs.jpg', config.msg.yt(res.title, res.filesizeF) + '\n\nUse Link: ' + res.dl_link + '\n' + config.msg.sizeExceed(res.filesizeF), id)
    client.sendImage(from, res.thumb, 'thumbs.jpg', config.msg.yt(res.title, res.filesizeF) + '\n' + res.dl_link, id)
    client.sendFileFromUrl(from, res.dl_link, `media.${res.ext}`, config.msg.yt(res.title, res.filesizeF), id)
})

cmd.on('ping', /^((bot|)stat(s|)|botinfo|infobot|ping|speed)$/i, función async (client = new Client(), { from, botNumber, t }) {
    const loadedMsg = await client.getAmountOfLoadedMessages()
    Const ChatIds = await client.getAllChatIds()
    Const Groups = await client.getAllGroups()
    const groupsIn = groups.filter(x => x.groupMetadata.participants.map(x => [botNumber, '6281515860089@c.us'].includes(x.id._serialized)).includes(true))
    const me = espera cliente.getMe()
    const battery = espera cliente.getBatteryLevel()
    const isCharging = await client.getIsPlugged()
    const used = process.memoryUsage()
    const cpus = os.cpus().map(cpu => {
        cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
        volver cpu
    })
    const cpu = cpus.reduce((last, cpu, _, { length }) => {
        last.total += cpu.total
        last.speed += cpu.speed / length
        last.times.user += cpu.times.user
        last.times.nice += cpu.times.nice
        last.times.sys += cpu.times.sys
        last.times.idle += cpu.times.idle
        last.times.irq += cpu.times.irq
        volver último
    }, {
        velocidad: 0,
        total: 0,
        veces: {
            usuario: 0,
            Bien: 0,
            sys: 0,
            inactivo: 0,
            irq: 0
        }
    })
    velocidad constante = momento() / 1000 - t
    client.sendText(from, `
Merespon dalam ${speed} detik

💬 Estado :
- *${loadedMsg}* Mensajes cargados
- *${groups.length}* Charlas grupales
- *${groupsIn.length}* Grupos unidos
- *${groups.length - groupsIn.length}* Grupos de la izquierda
- *${chatIds.longitud - grupos.longitud}* Chats personales
- *${chatIds.longitud - grupos.longitud - gruposIn.longitud}* Chats personales activos
- *${chatIds.length}* Total de chats
- *${chatIds.length - groupsIn.length}* Total de chats activos

📱 *Información del teléfono* :
*Monospace*
🔋 Batería : ${batería}% ${estáCargando? '🔌 Cargando...' : '⚡ Descargando'}
${Object.keys(me.phone).map(key => `${key} : ${me.phone[key]}`).join('\n')}
`.trim())}

💻 *Información del servidor* :
RAM: ${format(os.totalmem() - os.freemem())} / ${format(os.totalmem())}

Uso de la memoria de JS.
${monospace(Object.keys(used).map(key => `${key} : ${format(used[key])}`).join('\n'))}

Uso total de la CPU
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}

Uso del núcleo de la CPU (${cpus.length} CPU del núcleo)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n')}
`.trim())
})

cmd.on('nulis', /^(mager|)[nt]ulis$/i, función async (client = new Client(), { from, id }) {
    let text = this.text || (quotedMsgObj ? quotedMsgObj.body : '')
    fallido = permiso([
        [!text, config.msg.noArgs]
    ])
    si (falló[0]) devuelve client.reply(from, failed[1], id)
    let font = text2image.loadFont('./src/IndieFlower')
    // client.reply(from, config.msg.waitConvert('jpeg', 'png', '...'), id)
    let pages = await nulis(font, text, 1)
    console.log(páginas)
    cliente.sendFile(from, 'data:image/jpg;base64,' + pages.toString('base64'), 'nulis.png', ':v', id)
    // para (dejemos i = 0; i < páginas.longitud; i++) {
    // cliente.sendFile(from, 'data:image/jpg;base64,' + pages[i].toString('base64'), 'nulis.png', ':v', id)
    // }
})

cmd.on('ig', /^ig(dl|)$/i, función async (client = new Client(), { from, id }) {
    fallido = permiso([
        [!this.url, config.msg.notURL]
    ])
    si (falló[0]) devuelve client.reply(from, failed[1], id)
    let res = await mhankbarbar('ig', '?url=' + encodeURIComponent(this.url))
    let json = await res.json()
    cliente.sendFile(from, json.result, 'ig', '', id)
})

cmd.on('fuente', 'fuente', función async (cliente = nuevo cliente(), { from, id }) {
    client.sendLinkWithAutoPreview(from, 'https://github.com/Nurutomo/nbot-wa', 'Repository:\nhttps://github.com/Nurutomo/nbot-wa')
})

cmd.on('mp3', ['mp3', 'audio'], función async (client = new Client(), { from, id, isQuotedVideo, quotedMsg, message }) {
    si (isQuotedVideo) {
        client.reply(from, config.msg.waitConvert('mp4', 'mp3', 'Meng-ekstrak audio dari video'), id)
        const encryptMedia = isQuotedVideo ? quotedMsg : mensaje
        const _mimetype = isQuotedVideo ? quotedMsg.mimetype : mimetype
        console.log(color('[WAPI]', 'verde'), 'Descargar y desencriptar medios...')
        const mediaData = await decryptMedia(encryptMedia)
        const audio = stream2Buffer(write => {
            ffmpeg(buffer2Stream(mediaData))
                .formato('mp3')
                .on('start', commandLine => console.log(color('[FFmpeg]'), commandLine))
                .on('progreso', progreso => consola.log(color('[FFmpeg]'), progreso))
                .on('end', () => console.log(color('[FFmpeg]'), 'Processing finished!'))
                .stream(escribir)
        })
        cliente.sendFile(from, baseURI(audio, 'audio/mp3'), 'bass_boosted.mp3', '', id)
    Si no, si (este.texto) {
        let search = await ytsr(this.text)
        let ss = espera ssPage(search.link, 1000)
        client.sendFile(from, ss, 'yt.png', `Menampilkan hasil untuk ${search.correctQuery ? `*${search.correctQuery}* atau telusuri _${search.query}_` : `*${search.query}**n${search.items.map(config.msg.ytsearch).join('\n\n')}, id)
    }
})

cmd.on('ss', /^ss(s|)$/i, función async (client = new Client(), { from, id }) {
    si (/\d/.test(this.args[0]) {
        let page = await client.getPage()
        let index = parseInt(this.args[0], 10)
        await page.evaluate(index => new Store.OpenChat().openChat(Store.Chat._models.filter(t=>!t.__x_isGroup)[index].__x_id._serialized), index)
    }
    let ss = await client.getSnapshot()
    let pic = await client.sendImage(from, ss, 'screenshot.png', '', id, true)
    setTimeout(() => {
        client.deleteMessage(from, pic, false)
    }, 20000)
})

cmd.on('fs', 'fs', función async (client = new Client(), { from, id }) {
    cliente.sendText(from, monospace(tree(__dirname, {
        Excluir: [/nodo_módulos/, /estado/],
        profundidad: 5
    }).replace(/── (.+)/g, (_, grupo) => `── ${/\..+/.test(group) ? '📄' : '📁'} ${grupo}`))
})

cmd.on('distord', ['distord', 'distorsi', 'earrape'], función async (client = new Client(), { from, id, isQuotedAudio, isQuotedVideo, quotedMsg, message }) {
    si (isQuotedAudio || isQuotedVideo) {
        const encryptMedia = isQuotedAudio || isQuotedVideo ? quotedMsg : mensaje
        const _mimetype = encryptMedia.mimetype
        client.reply(from, config.msg.waitConvert(_mimetype.replace(/.+\//, ''), 'mp3', '⚠ WARNING ⚠\n🔇 Tau lah :v'), id)
        console.log(color('[WAPI]', 'verde'), 'Descargar y desencriptar medios...')
        const mediaData = await decryptMedia(encryptMedia)
        const distord = await stream2Buffer(write => {
            ffmpeg(buffer2Stream(mediaData))
                .audioFiltro('aeval=sgn(val(ch))')
                .formato('mp3')
                .on('start', commandLine => console.log(color('[FFmpeg]'), commandLine))
                .on('progreso', progreso => consola.log(color('[FFmpeg]'), progreso))
                .on('end', () => console.log(color('[FFmpeg]'), 'Processing finished!'))
                .stream(escribir)
        })
        cliente.sendFile(from, baseURI(distord, 'audio/mp3'), 'distorsionado.mp3', '', id)
    } más si (isQuotedVideo) {
        // // Bantuin ffmpeg nya :')
        // // biar bisa video filter sama audio filter
        client.reply(from, config.msg.waitConvert('mp4', 'mp4', '⚠ WARNING ⚠\n🔇 Tau lah :v'), id)
        const encryptMedia = isQuotedVideo ? quotedMsg : mensaje
        console.log(color('[WAPI]', 'verde'), 'Descargar y desencriptar medios...')
        const mediaData = await decryptMedia(encryptMedia)
        const distord = await stream2Buffer(write => {
            ffmpeg(buffer2Stream(mediaData))
                .complexFilter('scale=iw/2:ih/2,eq=saturación=100:contraste=10:brillo=0.3:gamma=10,ruido=todos=100:allf=t,unsharp=5:5:1. 25:5:5:1,eq=gamma_r=100:gamma=50,scale=iw/5:ih/5,scale=iw*4:ih*4,eq=brightness=-.1,unsharp=5:5:1.25:5:5:1')
                .audioFiltro('aeval=sgn(val(ch))')
                .outputOpciones(
                    "-codec:v", "libx264",
                    '-crf', '32',
                    "-preestablecido", "muy rápido
                )
                .format('mp4')
                .on('start', commandLine => console.log(color('[FFmpeg]'), commandLine))
                .on('progreso', progreso => consola.log(color('[FFmpeg]'), progreso))
                .on('end', () => console.log(color('[FFmpeg]'), 'Processing finished!'))
                .stream(escribir)
        })
        cliente.sendFile(from, baseURI(distord, 'video/mp4'), 'distorsionado.mp4', '', id)
    }
})

cmd.on('ssweb', 'ssweb', función async (client = new Client(), { from, id }) {
    si (esta.url) {
        Inténtalo.
            si (!/^file|^http(s|):\/\//.test(this.url)) url = 'https://' + this.url
            else url = this.url
            let ss = espera ssPage(url, this.args[1])
            client.sendImage(from, ss, 'screenshot.png', url, id)
        } atrapar (e) {
            client.reply(from, config.msg.error(e), id)
        }
    }
})

cmd.on('sswebf', 'sswebf', función async (client = new Client(), { from, id }) {
    si (esta.url) {
        Inténtalo.
            si (!/^file|^http(s|):\/\//.test(this.url)) url = 'https://' + this.url
            else url = this.url
            let [ss] = await Promise.all([
                ssPage(url, this.args[1], true),
                // ssPage(url, this.args[1], true, true)
            ])
            client.sendImage(from, ss, 'screenshot.png', url, id)
            // cliente.sendFile(from, ssPDF, 'screenshot.pdf', url, id)
        } atrapar (e) {
            client.reply(from, config.msg.error(e), id)
        }
    }
})

cmd.on('google', 'google', función async (client = new Client(), { from, id }) {
    si (esta.url) {
        Inténtalo.
            let url = 'https://google.com/search?q=' + encodeURIComponent(this.text)
            let ss = espera ssPage(url, 1000, false)
            espera cliente.sendImage(from, ss, 'screenshot.png', url, id)
            // espera cliente.sendImage(from, ssFull, 'screenshot.png', url, id)
            // cliente.sendFile(from, ssPDF, 'screenshot.pdf', url, id)
        } atrapar (e) {
            client.reply(from, config.msg.error(e), id)
        }
    }
})

cmd.on('googlef', 'googlef', función async (client = new Client(), { from, id }) {
    si (esta.url) {
        Inténtalo.
            let url = 'https://google.com/search?q=' + encodeURIComponent(this.text) + '&tbm=isch'
            let ss = espera ssPage(url, 1000, false)
            espera cliente.sendImage(from, ss, 'screenshot.png', url, id)
            // espera cliente.sendImage(from, ssFull, 'screenshot.png', url, id)
            // cliente.sendFile(from, ssPDF, 'screenshot.pdf', url, id)
        } atrapar (e) {
            client.reply(from, config.msg.error(e), id)
        }
    }
})

cmd.on('estilo', /^estilo|gaya$/i, función async (client = new Client(), { from, id, quotedMsgObj }) {
    que el texto = ''
    switch (use Quoted(this.text, quotedMsgObj)) {
        caso !0:
            text = await stylizeText(quotedMsgObj.body)
            client.reply(from, Object.keys(text).map(name => `*${name}*\n${text[name]}`).join('\n\n'), id)
            break
        caso !1:
            text = await stylizeText(this.text)
            client.sendText(from, Object.keys(text).map(name => `*${name}*\n${text[name]}`).join('\n\n'))
            break
        por defecto:
            client.reply(from, config.msg.noArgs, id)
    }
})

cmd.on('bass', /^(bass(boost|)|fullbass)$/i, función async (client = new Client(), { from, id, quotedMsg }) {
    si (isQuotedAudio) {
        dejemos que los dB = 20
        dejemos que freq = 60
        si (this.args[0]) dB = clamp(parseInt(this.args[0]) || 20, 0, 50)
        si (this.args[1]) freq = clamp(parseInt(this.args[1]) || 20, 20, 500)
        console.log(color('[WAPI]', 'verde'), 'Descargar y desencriptar medios...')
        const mediaData = await decryptMedia(quotedMsg)
        const bass = await stream2Buffer(write => {
            ffmpeg(buffer2Stream(mediaData))
                .audioFiltro('ecualizador=f=' + freq + ':tipo_ancho=o:ancho=2:g=' + dB)
                .formato('mp3')
                .on('start', commandLine => console.log(color('[FFmpeg]'), commandLine))
                .on('progreso', progreso => consola.log(color('[FFmpeg]'), progreso))
                .on('end', () => console.log(color('[FFmpeg]'), 'Processing finished!'))
                .stream(escribir)
        })
        client.sendFile(from, baseURI(bass, 'audio/mp3'), 'bass_boosted.mp3', '', id)
    }
})

cmd.on('setuserrole', 'setuserrole', función async (client = new Client(), { from, id, isGroupMsg, mentionedJidList }) {
    fallido = permiso([
        [!isGrupoMsg, config.msg.noGrupo],
        [mentionedJidList.length < 1, config.msg.noJid]
    ])
    si (falló[0]) devuelve client.reply(from, failed[1], id)

    let successList = []
    let failedList = []
    let users = /@(\d{5,15}) (\d+)/g.exec(this.text)
    para (dejar [, usuario, función] de los usuarios) {
        if (group.setMemberRole(groupId, user + '@c.us', role)) successList.push(user + '@c.us')
        else failedList.push(user + '@c.us')
    }
    client.sendTextWithMentions(from, `Done:\n${successList.map(config.msg.listUser)}} {\nFailed:\n${failedList.map(config.msg.listUser)}})
})

cmd.on('getuserrole', 'getuserrole', función async (client = new Client(), { from, id, isGroupMsg, mentionedJidList, groupId }) {
    fallido = permiso([
        [!isGrupoMsg, config.msg.noGrupo],
        [mentionedJidList.length < 1, config.msg.noJid]
    ])
    si (falló[0]) devuelve client.reply(from, failed[1], id)


    client.sendTextWithMentions(from, mentionedJidList.map(user => `@${user.replace('@c.us', '')} ${group.getRoleById(groupId, user)}`))
})

cmd.on('setrole', 'setrole', función async (client = new Client(), { from, id, isGroupMsg }) {
    fallido = permiso([
        [!isGrupoMsg, config.msg.noGrupo],
        [this.args.length < 3, config.msg.noArgs]
    ])
    si (falló[0]) devuelve client.reply(from, failed[1], id)

    si (this.args[1] === 'nombre') this.args[2] = this.args[2]
    más si (this.args[1] === 'id') this.args[2] = parseInt(this.args[2])
    si no this.args[2] = !!this.args[2]
    if (group.setRole(groupId, this.args[0], this.args[1], this.args.slice(2).join(' '))) client.reply(from, config.msg.success, id)
    else client.reply(from, config.msg.failed, id)
})

cmd.on('rolelist', 'rolelist', función async (client = new Client(), { from, id, isGroupMsg, groupId }) {
    fallido = permiso([
        [!isGrupoMsg, config.msg.noGrupo]
    ])
    si (falló[0]) devuelve client.reply(from, failed[1], id)

    client.sendText(from, group.data[groupId].roles.map(role => {
        devuelve `*${role.name}*n${monospace(JSON.stringify(role.name, null, 1))}`
    }).join('\n'))
})

cmd.on('broadcast', ['broadcast', 'bc'], función async (client = new Client(), { from, id, isOperator, sender }) {
    fallido = permiso([
        [!isOperador, config.msg.no Permitido]
    ])
    si (falló[0]) devuelve client.reply(from, failed[1], id)
    if (Object.keys(group.data).filter(chatId => group.data[chatId].broadcast).length > 0) client.reply(from, `Mengirim broadcast ke ${Object.keys(group.data).filter(chatId => group.data[chatId].broadcast).length} grup...`, id)
    else client.reply(from, 'Tidak ada penerima', id)
    broadcast(cliente, remitente, este.texto)
})

cmd.on('allowbroadcast', 'allowbroadcast', función async (client = new Client(), { from, id, isGroupMsg, isGroupAdmins, isOperator }) {
    si (!isOperador) {
        fallido = permiso([
            [!isGrupoMsg, config.msg.noGrupo],
            [!isGroupAdmins, config.msg.notAdmin]
        ])
        si (falló[0]) devuelve client.reply(from, failed[1], id)
    }
    bool = /^(y|ya|yes|enable|activate|true|1)$/i.test(this.args[0])
    group.setAllowBroadcast(groupId, bool)
    client.reply(from, `Permitir la emisión de un bot a este grupo está ahora configurado a *${bool ? 'en' : 'dis'}abled*`, id)
})

cmd.on('ttsticker', ['ttsticker', 'ttstiker', 't2s'], función async (client = new Client(), { from, id, quotedMsgObj }) {
    let text = this.text || (quotedMsgObj ? quotedMsgObj.body : '')
    fallido = permiso([
        [!text, config.msg.noArgs]
    ])
    si (falló[0]) devuelve client.reply(from, failed[1], id)
    let font = text2image.loadFont('Futura Bold Italic font')
    let imgText = await text2image.convert(font, text.slice(0, 50), 0, 0, 512, {
        attr: 'fill="#fff"',
        alinear: "centro
    })
    let sticker = await processSticker(imgText)
    client.sendRawWebpAsSticker(from, baseURI(sticker.toString('base64'), 'image/webp'))
})

cmd.on('lista de teclas', 'lista de teclas', función async (cliente = nuevo cliente(), { de, id }) {
    cliente.reply(from, `List:\n${Object.keys(this._events).join('\n')}`, id)
})

cmd.on('prueba', 'prueba', función (_, o) {
    // client.sendText('6281515860089@c.us', util.format(_, o))
    console.log(this)
})

cmd.on('ytsr', /^((yt|youtube)(search|sr)|lagu|musik|nyanyi|sing|song|play)$/, async function (client = new Client(), { from, id }) {
    busqueda const = espera ytsr(this.text)
    const ss = espera ssPage(search.link, 1000)
    client.sendFile(from, ss, 'yt.png', `Menampilkan hasil untuk ${search.correctQuery ? `*${search.correctQuery}* atau telusuri _${search.query}_` : `*${search.query}**n${search.items.map(config.msg.ytsearch).join('\n\n')}, id)
})

cmd.on('deepfry', ['deepfry', 'goreng'], función async (client = new Client(), { from, id, isImage, isQuotedImage, isQuotedSticker, quotedMsg, message }) {
    si (isImage || isQuotedImage || isQuotedSticker) {
        if (isQuotedSticker) client.reply(from, config.msg.waitConvert('webp (jpg 3x)', 'webp (jpg 3x)', 'Sedang menggoreng stiker:v (4 kali)'), id)
        else client.reply(from, config.msg.waitConvert('jpg', 'jpg', 'Sedang menggoreng:v (4 kali)'), id)
        const encryptMedia = !isImage && (isQuotedImage || isQuotedSticker) ? quotedMsg : message
        console.log(color('[WAPI]', 'verde'), 'Descargar y desencriptar medios...')
        const mediaData = await decryptMedia(encryptMedia)
        // .complexFilter('eq=saturación=100:contraste=10:brillo=0.1:gamma=10,ruido=todos=60:allf=t,unsharp=5:5:1.25:5:5:1,eq=gamma_r=100')
        filtro const = 'eq=saturación=100,unsharp=5:5:1.25:5:5:1.0,noise=alls=40:allf=t'
        calidad const = "20
        let fry = await stream2Buffer(write => {
            ffmpeg(buffer2Stream(mediaData))
                .complexFilter(filtro + ',scale=iw/2:ih/2')
                .outputOpciones('-q:v', calidad)
                .format('mjpeg')
                .on('start', commandLine => console.log(color('[FFmpeg]'), commandLine))
                .on('progreso', progreso => consola.log(color('[FFmpeg]'), progreso))
                .on('end', () => console.log(color('[FFmpeg]'), 'Processing finished!'))
                .stream(escribir)
        })
        fry = espera stream2Buffer(write => {
            ffmpeg(buffer2Stream(fry))
                .complexFilter(filtro + ',scale=iw/2:ih/2')
                .outputOpciones('-q:v', calidad)
                .format('mjpeg')
                .on('start', commandLine => console.log(color('[FFmpeg]'), commandLine))
                .on('progreso', progreso => consola.log(color('[FFmpeg]'), progreso))
                .on('end', () => console.log(color('[FFmpeg]'), 'Processing finished!'))
                .stream(escribir)
        })
        fry = espera stream2Buffer(write => {
            ffmpeg(buffer2Stream(fry))
                .complexFilter(filtro)
                .outputOpciones('-q:v', calidad)
                .format('mjpeg')
                .on('start', commandLine => console.log(color('[FFmpeg]'), commandLine))
                .on('progreso', progreso => consola.log(color('[FFmpeg]'), progreso))
                .on('end', () => console.log(color('[FFmpeg]'), 'Processing finished!'))
                .stream(escribir)
        })
        fry = espera stream2Buffer(write => {
            ffmpeg(buffer2Stream(fry))
                .complexFilter(filtro)
                .outputOpciones('-q:v', calidad)
                .format('mjpeg')
                .on('start', commandLine => console.log(color('[FFmpeg]'), commandLine))
                .on('progreso', progreso => consola.log(color('[FFmpeg]'), progreso))
                .on('end', () => console.log(color('[FFmpeg]'), 'Processing finished!'))
                .stream(escribir)
        })
        si (isQuotedSticker) {
            fry = espera el procesoSticker(fry, 'contiene')
            client.sendRawWebpAsSticker(from, fry.toString('base64'))
        }
        else client.sendFile(from, baseURI(fry, 'image/jpg'), 'deepfry.jpg', 'Nih gorengannya (deepfry)', id)
    } else client.reply(from, config.msg.noMedia, id)
})

cmd.on('aleatorio', ['random', 'rng', 'dice', 'acak'], función async (client = new Client(), { from, id }) {
    let min = this.args.length > 1 ? parseFloat(this.args[0]) : 1
    let max = this.args.length > 1 ? parseFloat(this.args[1]) : 12
    si (min > max) [min, max] = [max, min]

    let rng = Math.floor(Math.random() * (max - min + 1))
    client.reply(from, `🎲 ${rng}\nRange: ${min} - ${max}`, id)
})

cmd.on('freeup', ['freeup', 'cutcache', 'cutmsgcache'], función async (client = new Client(), { from, id, isOperator }) {
    fallido = permiso([
        [!isOperador, config.msg.no Permitido]
    ])
    si (falló[0]) devuelve client.reply(from, failed[1], id)
    let before = await client.getAmountOfLoadedMessages()
    espera cliente.cutMsgCache()
    let after = await client.getAmountOfLoadedMessages()
    client.reply(from, `*Message Cache Cutted*\n_RAM Free Up_nBefore: ${before} Mensajes después: ${after} Mensajes`, id)
})

cmd.on('title', ['title', 'settitle', 'judul', 'ubahjudul'], función async (client = new Client(), { from, id, isGroupMsg, isGroupAdmins, isBotGroupAdmins, groupId }) {
    fallido = permiso([
        [!isGrupoMsg, config.msg.noGrupo],
        [!isGroupAdmins, config.msg.notAdmin],
        [!isBotGroupAdmins, config.msg.notBotAdmin],
        [!cmd.text, config.msg.noArgs],
    ])
    si (falló[0]) devuelve client.reply(from, failed[1], id)
    client.setGroupTitle(groupId, cmd.text)
})

cmd.on('desc', /^((set|)desc(ription|)|(ubah|)deskripsi)/i, función async (client = new Client(), { from, id, isGroupMsg, isGroupAdmins, isBotGroupAdmins, groupId }) {
    fallido = permiso([
        [!isGrupoMsg, config.msg.noGrupo],
        [!isGroupAdmins, config.msg.notAdmin],
        [!isBotGroupAdmins, config.msg.notBotAdmin],
        [!cmd.text, config.msg.noArgs],
    ])
    si (falló[0]) devuelve client.reply(from, failed[1], id)
    client.setGroupDescription(groupId, cmd.text)
})

cmd.on('lock', ['lock', 'kunci', 'tutup'], función async (client = new Client(), { from, id, isGroupMsg, isGroupAdmins, isBotGroupAdmins, groupId }) {
    fallido = permiso([
        [!isGrupoMsg, config.msg.noGrupo],
        [!isGroupAdmins, config.msg.notAdmin],
        [!isBotGroupAdmins, config.msg.notBotAdmin],
    ])
    si (falló[0]) devuelve client.reply(from, failed[1], id)
    client.setGroupEditToAdminsOnly(groupId, true)
})

cmd.on('desbloquear', ['desbloquear', 'buka'], función async (client = new Client(), { from, id, isGroupMsg, isGroupAdmins, isBotGroupAdmins, groupId }) {
    fallido = permiso([
        [!isGrupoMsg, config.msg.noGrupo],
        [!isGroupAdmins, config.msg.notAdmin],
        [!isBotGroupAdmins, config.msg.notBotAdmin],
    ])
    si (falló[0]) devuelve client.reply(from, failed[1], id)
    client.setGroupEditToAdminsOnly(groupId, false)
})

cmd.on('adminlist', ['adminlist', 'listadmin', 'admins'], función async (client = new Client(), { from, id, isGroupMsg, groupAdmins }) {
    fallido = permiso([
        [!isGrupoMsg, config.msg.noGrupo]
    ])
    si (falló[0]) devuelve client.reply(from, failed[1], id)
    client.sendTextWithMentions(from, `List Admin:\n${groupAdmins.map(config.msg.listUser)}`)
})

/*
Plantilla de Comando Baru

cmd.on('nama', ['command'], async function (client = new Client(), { from, id }) {
    fallido = permiso([
        [!cmd.text, config.msg.noArgs]
    ])
    si (falló[0]) devuelve client.reply(from, failed[1], id)
    cliente.respuesta(de, 'pesan', id)
})

*/
función _err(e) {
    console.log(console.log(color('[ERR]', 'rojo'), e))
}

(async () => {
    si (global.browser) volver
    const chromePath = {
        win32: 'C:\N-Archivos de Programa\N-GoogleChrome.exe', // Windows 32 bit
        win64: 'C:\N-Archivos de programa (x86)\N-Google\N-Cromo.exe', // Windows 64 bit
        linuxChrome: '/usr/bin/google-chrome-stable', // Linux - Chrome
        linuxChromium: '/usr/bin/chromium-browser', // Linux - Chromium
        darwin: '/Aplicaciones/Google Chrome.app/Contenidos/MacOS/Google Chrome' // MacOS
    }

    si (fs.existsSync(chromePath.win32)) {
        execPath = chromePath.win32
    } si no (fs.existsSync(chromePath.win64)) {
        execPath = chromePath.win64
    Si no, si (fs.existsSync(chromePath.linuxChrome)) {
        execPath = chromePath.linuxChrome
    } si no (fs.existsSync(chromePath.linuxChromium)) {
        execPath = chromePath.linuxChromium
    } más si (process.platform === 'darwin') {
        execPath = chromePath.darwin
    } más {
        console.error(new Error('Google Chrome Is Not Installed'))
        process.exit(1)
    }
    console.log(chromeText, 'Launching Browser')
    global.browser = espera titiritero.lanzamiento({
        executablePath: execPath,
        defaultViewport: {
            ancho: 1920,
            altura: 1080
        },
        tiempo de espera: 120000,
        sin cabeza: falso
    });
    console.log(chromeText, 'Navegador Lanzado')
})()

permiso de función (reglas) {
    para (dejemos que la regla de las reglas)
        si (regla[0]) regla de retorno
    volver [falso, '']
}

función showHelp(prefijo, nombre = '', comando) {
    que la referencia = comando ? ({
        ayuda: `Contoh: *${prefix}help stiker*`,
        Stiker: `Kirim foto dengan caption: *${prefix}stiker*`,
        "Kirim video/gif dengan caption. *${prefix}gifstiker*`,
        meme: `Kirim foto dengan caption: *${prefix}meme teks atas|teks bawah*`,
        "Kirim foto dengan caption. *${prefijo}memestiker teks atas|teks bawah*`,
        reenviar: "La etiqueta de la empresa es un medio de comunicación para la gente de la isla. *${prefix}resend*`,
        mp3: `Tag video untuk mengekstrak audio nya: *${prefijo}mp3*`,
        "Tag audio dengan desibel 10dB dan frekuensi 100hz. *${prefijo}bajo 10 100*`,
        botstat: `Cek keadaan bot: *${prefijo}botstat*`,
        "Tag audio untuk mendistorsi audionya. *${prefix}distord*`,
        ssweb: "Captura de pantalla del sitio web google.com. *${prefijo}ssweb google.com*`,
        sswebf: "Captura de pantalla del sitio web google.com (Página completa)": *${prefijo}sswebf google.com*`,
        google: "Captura de pantalla de Hasil Pencarian 'Google': *${prefijo} google google*`,
        googlef: `Screenshot hasil pencarian gambar 'google': *${prefijo}sswebf google*`,
        ytmp4: `Descargar YouTube Mp4: *${prefijo}ytmp4 https://youtu.be/WTHfrkhG44k*`,
        ytmp3: `Descargar Mp3 de YouTube: *${prefijo}ytmp3 https://youtu.be/WTHfrkhG44k*`,
        "Descargue el programa Instagram. *${prefix}ig https://instagram.com/trapy_tomojado?igshid=19fs3la60b0z3*`,
        "Nulis teks": *${prefijo} nulis tulisan*`,
    })[comando] || 'Tidak ditemukan [404 No encontrado]' : ''
    ...regresar...
- *${config.botName}* -
👋 Hai, ${nombre}!

- *Info Tanda di Argumen* -
Tanda *<>* = itu harus diisi
Tanda *[]* = tidak harus diisi
Tanda *...* = dan seterusnya
Tanda *|* = atau
Tanda *@user* = di mention atau disebut

- Info Fitur -
*${prefix}help* [comando]${command? `\\Nn║\Nn║ *Info Fitur*:\Nn║ ${referencia}` : ''}
${readMore}
- *Menú Admin* -
➕ *${prefix}add* <62XXXXXXXXXX1> [<62XXXXXXXXXXX> ...]
➖ *${prefix}kick* <62XXXXXXXXXX1> [<62XXXXXXXXXXX> ...]
🔼 *${prefix}promote* <@user>
🔽 *${prefix}demote* <@user>

- *Menú Utama* -
🖼 *${prefix}stiker*
📽 *${prefix}gifstiker*
#️⃣ *${prefix}meme* <[atas|]bawah>
#️⃣ *${prefijo}memestiker* <[atas|]bawah>
➡ *${prefix}resend*
🎵 *${prefix}mp3* [pentágono]
🔊 *${prefix}bass* [<desibel> <freqkuensi>]
ℹ *${prefix}botstat*
😂 *${prefix}distord*
😂 *${prefix}deepfry*
🌐 *${prefix}ssweb* <url>
🌐 *${prefix}sswebf* <url>
🔎 *${prefix}google* <penceros>
🔎 *${prefix}googlef* <penceros>
📄 *${prefix}nulis* <teks>
📄 *${prefix}ttstiker* <teks>
🔎 *${prefix}ytsr* <penceros>
- *Descargador* -
❌ No funciona
✔ Con API
✅ Sin API

✅ *${prefix}ytmp3* <url>
✅ *${prefix}ytmp4* <url>
✔ *${prefix}ig* <url>
❌ *${prefix}fb* <url>
❌ *${prefix}tiktok* <url>

- *Butuh API* -
- ${config.API.mhankbarbar.url}
Cuma IG :|

- *Avanzado* -
📢 *${prefix}allowBroadcast* <enable|disable>
🔰 *${prefix}setUserRole* <@usuario> <index>
🔰 *${prefix}getUserRole* <@user>
🔰 *${prefix}setRole* <index> <key> <valor>
🗝 *${prefix}keyList*
🔰 ${prefix}roleList*

- *Sólo el operador* -
📢 *${prefix}broadcast* <text>

- *Iklan* -
${(config.iklan || []).map((iklan, i) => `${i + 1}. ${iklan}`).join('\n') || '_Tidak ada iklan_'}

- *Autor del robot* -
𖽡𖽖𖽝𖽙𖽮𖽙𖽡𖤍 (NACOWON)
https://github.com/nacowon15/
Repo: https://github.com/nacowon15/whatsapp-bot
${readMore}wa.me/34605735266
`.slice(1, -1)
}

función procesoPegatina(entrada) {
    devuelva la nueva Promesa((resolver, rechazar) => {
        if (typeof input == 'string' && /^data/.test(input)) input = Buffer.from(input.replace(/^data:.+;base64,/, ''))
        sharp(input)
            .toFormat('webp')
            .resize(512, 512, {
                encajar: "contener",
                de fondo: {
                    r: 0,
                    g: 0,
                    b: 0,
                    alfa: 0
                }
            })
            .toBuffer()
            ...entonces...
            ...atrapar (rechazar)...
    })
}

función color(texto, color) {
    volver !color ? tiza.verde(texto) : color.empiezaCon('#') ? tiza.hex(color)(texto) : tiza.palabra clave(color)(texto)
}

función bgColor(texto, color) {
    volver !color ? tiza.bgVerde(texto) : color.empiezaCon('#') ? tiza.bgHex(color)(texto) : tiza.bgPalabra clave(color)(texto)
}

/**
 * Escoge un conjunto aleatorio
 * @param {Array} arr Array de entrada 
 * @param {Número} cuenta Cuenta de salida
 * @Regresa {Array} Array seleccionado al azar
 */
función pickRandom(arr, conteo = 1) {
    dejemos que el resultado sea = []
    para (dejemos que i = 0; i < Math.max(cuenta, 1); i++) {
        result.push(arr[Math.floor(arr.length * Math.random())])
    }
    resultado de la devolución
}

function mhankbarbar(apiName, query) {
    return fetch(config.API.mhankbarbar.url + config.API.mhankbarbar[apiName] + query)
}

/**
 * Formato monoespacial
 * @param {Cadena} entrada de cadena
 */
función monoespacio(cadena) {
    que _3 = '`'.repeat(3)
    retorno _3 + cadena + _3
}

/**
 * crear meme personalizado
 * @param {Correa} imageUrl
 * @param {Cuerda} topText
 * @param {Cuerda} bottomText
 */
Función de sincronización customText(imageUrl, top, bottom) {
    devuelva la nueva Promesa((resolver, rechazar) => {
        let fix = str => str.trim().replace(/\s/g, '_').replace(/\?/g, '~q').replace(/\%/g, '~p').replace(/\#/g, '~h').replace(/\//g, '~s')
        fetchBase64(`https://api.memegen.link/images/custom/${fix(top)}/${fix(bottom)}.png?background=${imageUrl}`, 'image/png')
            .then(result => resolve(result))
            .catch(err => {
                console.error(err)
                rechazar(err)
            })
    })
}

función uploadImages(buffData, tipo) {
    // eslint-deshabilitar-la-siguiente-línea no-así-que-promete-ejecutar
    devuelve la nueva función de Promise(async) (resolver, rechazar) {
        const {
            ext
        } = esperar deBuffer(buffData)
        que la temperatura = './temp'.
        let name = new Date() * 1
        let filePath = path.join(temp, 'image', `${name}.${ext}`)
        const _buffData = type ? await resizeImage(buffData, false) : buffData
        fs.writeFile(filePath, _buffData, {
            codificando: "base64
        }, (err) => {
            si (err) devolver rechazar (err)
            console.log('Subir imagen al servidor telegra.ph...')
            const fileData = fs.readFileSync(filePath)
            forma de la const = nueva FormData()
            form.append('file', fileData, 'tmp.' + ext)
            fetch('https://telegra.ph/upload', {
                método: "POST",
                cuerpo: forma
            })
                .then(res => res.json())
                .entonces(res => {
                    si (res.error) devolver rechazar (res.error)
                    resolver('https://telegra.ph' + res[0].src)
                })
                .then(() => fs.unlinkSync(filePath))
                .catch(err => reject(err))
        })
    })
}

function resizeImage(buff, encode) {
    devuelve la nueva función de Promise(async) (resolver, rechazar) {
        console.log('Redimensionamiento de la imagen...')
        const {
            mimo
        } = espera de Buffer(buff)
        afilado(buff, {
            failOnError: falso
        })
            .toFormat('png')
            .resize(512, 512, {
                encajar: "contener",
                de fondo: {
                    r: 0,
                    g: 0,
                    b: 0,
                    alfa: 0
                }
            })
            .toBuffer()
            ...entonces(resizedImageBuffer => {
                si (!codificar) devolver resolver(resizedImageBuffer)
                console.log('Crear base64 a partir de un búfer de imagen redimensionado...')
                const resizedImageData = resizedImageBuffer.toString('base64')
                const resizedBase64 = `data:${mime};base64,${resizedImageData}`
                resolve(resizedBase64)
            })
            .catch(error => reject(error))
    })
}

/**
 * Trae la base64 de la url
 * @param {Cuerda} url
 */

const fetchBase64 = (url, mimetype) => {
    devuelva la nueva Promesa((resolver, rechazar) => {
        console.log('Obtener base64 de:', url)
        return fetch(url)
            .then((res) => {
                const _mimetype = mimetype || res.headers.get('tipo de contenido')
                res.buffer()
                    .then((result) => resolve(`data:${_mimetype};base64,` + result.toString('base64')))
            })
            .catch((err) => {
                console.error(err)
                rechazar(err)
            })
    })
}

función de sincronización ssPage(url = 'about:blank', delay = 0, isFull = false, isPDF = false) {
    devuelve la nueva función de Promise(async) (resolver, rechazar) {
        Inténtalo.
            console.log(chromeText, 'Opening New Tab')
            const page = espera browser.newPage()

            console.log(chromeText, `Abrir '${url}'`)
            espera página.goto(url, {
                Espera... hasta..: "cargar",
                tiempo de espera: 300000
            })

            si (retraso > 0) {
                console.log(chromeText, 'Wait', delay, 'ms')
                esperar el sueño (retraso)
            }

            console.log(chromeText, 'Taking Screenshot...')

            dejar captura de pantalla
            si (isPDF) {
                //espera página.emulateMedia('pantalla');
                captura de pantalla = esperar página.pdf();
            } más {
                Captura de pantalla = esperar página.Captura de pantalla({
                    tipo: 'png',
                    codificando: 'base64',
                    fullPage: isFull
                })
            }

            console.log(chromeText, 'Done Screenshot', screenshot.length / 1024, 'kB')

            si (isPDF) resuelve('data:application/pdf;base64,' + captura de pantalla)
            else resolve('data:image/png;base64,' + screenshot)

            espera page.close()
        } atrapar (e) {
            console.log(chromeText, color(e, 'rojo'))
            rechazo(e)
        }
    })
}

función dormir(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

función estilizarTexto(texto) {
    devuelva la nueva Promesa((resolver, rechazar) => {
        fetch('http://qaz.wtf/u/convert.cgi?text=' + encodeURIComponente(texto))
            .then(res => res.text())
            .entonces(html => {
                let dom = new JSDOM(html)
                let table = dom.window.document.querySelector('table').children[0].children
                que obj = {}
                para (dejar tr de la mesa) {
                    let name = tr.querySelector('.aname').innerHTML
                    let content = tr.children[1].textContent.replace(/^\n/, '').replace(/\n$/, '')
                    obj[nombre + (obj[nombre] ? ' ' Invertido' : '')] = contenido
                }
                resolver(obj)
            })
            ...atrapar (rechazar)...
    })
}

uso de la función Quoted(text, quotedMsgObj) {
    si (texto && citadoMsgObj) devuelve falso
    si no, si (!text && quotedMsgObj) devuelve verdadero
    si no, si (texto && !citadoMsgObj) devuelve falso
    si no, regresa...
}

función clamp(valor, min, max) {
    retorno Math.min(Math.max(min, valor), max)
}

/**
 * Nulis teks
 * @param {Font} font 
 * @param {Cadena} de texto 
 * @param {Número} páginasLímite 
 * @Regresa {Array<Promesa>}
 */
función nulis(font, text, pagesLimit = 38) {
    devuelve la nueva función de Promise(async) (resolver, rechazar) {
        Inténtalo.
            texto = texto.reemplazar(/\r\n/g, '\n')
            let kata = ''
            dejemos que el tamaño = 20

            si (!Array.isArray(texto)) {
                que tempkata = ''
                para (dejen i de [...texto]) {
                    si (i != '\n' && font.getAdvanceWidth(tempkata + i, size) < 734) tempkata += i
                    más {
                        kata += tempkata + '\n'
                        tempkata = i
                    }
                }
                si (tempkata) kata += tempkata
            } else kata = text.join('\n')

            let fixText = kata.split('\n').slice(0, 25).join('\n')
            let textImage = await text2image.convert(font, fixText, 170, 200, size, {
                lineHeight: 19.5
            })
            sharp('./src/buku.jpg').composite([
                {
                    entrada: textImage,
                    gravedad: "noroeste
                }
            ]).toBuffer((err, buf) => {
                si (err) rechazar (err)
                resolver(buf)
            })
        } atrapar (e) {
            rechazo(e)
        }
    })
}
// function nulis(font, text, pagesLimit = 38) {
//     return new Promise(async function (resolve, reject) {
//         try {
//             text = text.replace(/\r\n/g, '\n')
//             let spliter = []
//             let size = 20

//             if (!Array.isArray(text)) {
//                 let tempkata = ''
//                 let kata = ''
//                 for (let i of [...text]) {
//                     if (i != '\n' && font.getAdvanceWidth(tempkata + i, size) < 734) tempkata += i
//                     else {
//                         kata += tempkata + '\n'
//                         tempkata = i
//                     }
//                 }
//                 if (tempkata) kata += tempkata
//                 spliter = kata.split('\n')
//             } else spliter = text

//             let line = 200
//             let lines = []
//             for (let i of spliter) {
//                 lines.push(text2image.convert(font, i, 170, line, size))
//                 line += 19.5 // 39.5
//             }
//             lines = await Promise.all(lines)
//             sharp('./src/buku.jpg').composite(lines.map(a => {
//                 return {
//                     input: a,
//                     gravity: 'northwest'
//                 }
//             })).toBuffer((err, buf) => {
//                 if (err) reject(err)
//                 resolve(buf)
//             })
//         } catch (e) {
//             reject(e)
//         }
//     })
// }

función ytv(url) {
    devuelva la nueva Promesa((resolver, rechazar) => {
        si (ytIdRegex.test(url)) {
            let ytId = ytIdRegex.exec(url)
            url = 'https://youtu.be/' + ytId[1]
            post('https://www.y2mate.com/mates/en60/analyze/ajax', {
                url,
                q_auto: 0,
                ajax: 1
            })
                .then(res => res.json())
                .entonces(res => {
                    console.log('Raspado...')
                    document = (new JSDOM(res.result)).window.document
                    yaha = document.querySelectorAll('td')
                    tamaño del archivo = yaha[yaha.length - 23].innerHTML
                    id = /var k__id = "(.*?)"/.exec(document.body.innerHTML) ||| ['', '']
                    thumb = document.querySelector('img').src
                    title = document.querySelector('b').innerHTML

                    post('https://www.y2mate.com/mates/en60/convert', {
                        escriba: 'youtube',
                        ...y la identificación..,
                        v_id: ytId[1],
                        Ajax: '1',
                        ...y la de los demás..,
                        ftype: 'mp4',
                        calidad: 360
                    })
                        .then(res => res.json())
                        .entonces(res => {
                            let KB = parseFloat(filesize) * (1000 * /MB$/.test(filesize))
                            resolver({
                                DLLINK: /<a.+?href="(.+?)"/.exec(res.result)[1],
                                el pulgar,
                                título,
                                filesizeF: tamaño de archivo,
                                de tamaño de archivo: KB
                            })
                        }).coger(rechazar)
                }).coger(rechazar)
        } más rechazar('URL INVÁLIDA')
    })
}

función yta(url) {
    devuelva la nueva Promesa((resolver, rechazar) => {
        si (ytIdRegex.test(url)) {
            let ytId = ytIdRegex.exec(url)
            url = 'https://youtu.be/' + ytId[1]
            post('https://www.y2mate.com/mates/en60/analyze/ajax', {
                url,
                q_auto: 0,
                ajax: 1
            })
                .then(res => res.json())
                .entonces(res => {
                    let document = (new JSDOM(res.result)).window.document
                    let type = document.querySelectorAll('td')
                    let filesize = type[type.length - 10].innerHTML
                    let id = /var k__id = "(.*?)"/.exec(document.body.innerHTML) || ['', '']
                    let thumb = document.querySelector('img').src
                    let title = document.querySelector('b').innerHTML

                    post('https://www.y2mate.com/mates/en60/convert', {
                        escriba: 'youtube',
                        ...y la identificación..,
                        v_id: ytId[1],
                        Ajax: '1',
                        ...y la de los demás..,
                        ftype: 'mp3',
                        calidad: 128
                    })
                        .then(res => res.json())
                        .entonces(res => {
                            let KB = parseFloat(filesize) * (1000 * /MB$/.test(filesize))
                            resolver({
                                DLLINK: /<a.+?href="(.+?)"/.exec(res.result)[1],
                                el pulgar,
                                título,
                                filesizeF: tamaño de archivo,
                                de tamaño de archivo: KB
                            })
                        }).coger(rechazar)
                }).coger(rechazar)
        } más rechazar('URL INVÁLIDA')
    })
}

función post(url, formdata) {
    console.log(Objeto.teclas(formdata).map(key => `${key}=${encodeURIComponente(formdata[key])}`).join('&'))
    return fetch(url, {
        método: "POST",
        cabeceras: {
            aceptar: "*/*",
            "aceptar-lenguaje": "en-US,en;q=0.9",
            "tipo de contenido": "application/x-www-form-urlencoded; charset=UTF-8"
        },
        cuerpo: Objeto.claves(formdata).map(key => `${key}=${encodeURIComponente(formdata[key])}`).join('&')
    })
}

función broadcast(cliente = nuevo cliente(), remitente, texto) {
    que las promesas = []
    para (dejar chatId en group.data) {
        if (group.isAllowBroadcast(chatId)) promises.push(client.sendTextWithMentions(chatId, config.msg.broadcast(sender, text))
    }
    Devuelva la promesa.
}

function formattedName(client = new Client(), message) {
    body.match(/@(\d*)/g).filter(x => x.length > 5).map(x => Store.Contact.get(x.replace("@", "") + "@c.us"))

    mensaje.pushname || mensaje.verificadoNombre || mensaje.formateadoNombre
}

/**
 * Devolución de la llamada de la corriente escrita
 * @callback WritableStreamCallback
 * @param {WritableStream} stream 
 */

/**
 * Convertir el flujo de escritura en un búfer
 * @param {WritableStreamCallback} cb Callback con streaming
 * @regresa {Promesa<Buffer>}
 */
función stream2Buffer(cb = noop) {
    devolver nueva Promesa(resolución => {
        let write = new Writable()
        write.data = []
        write.write = function (chunk) {
            este.datos.empuja(chunk)
        }
        write.on('finish', function () {
            resolver(Buffer.concat(this.data))
        })

        cb(escribir)
    })
}

/**
 * Convertir el buffer en un flujo legible
 * @param {Buffer} buffer
 * @Regresa {ReadableStream}
 */
función buffer2Stream(buffer) {
    volver nuevo Readable({
        read() {
            este.push(buffer)
            esto... empuja (nulo)
        }
    })
}

función baseURI(buffer = Buffer.from([]), metatype = 'text/plain') {
    devuelve `data:${metatype};base64,${buffer.toString('base64')}`
}

función de sincronización ytsr(query) {
    let link = /youtube\.com/results\?search_query=/.test(query) ? query : ('https://youtube.com/results?search_query=' + encodeURIComponent(query))
    let res = await fetch(link)
    let html = await res.text()
    let data = new Function('return ' + /var ytInitialData = (.+)/.exec(html)[1])()
    let lists = data.contents.twoColumnSearchResultsRenderer.primaryContents.sectionListRenderer.contents[0].itemSectionRenderer.contents
    let formatList = {
        consulta,
        enlace,
        artículos: []
    }
    para (que lista de listas) {
        deja que el tipo = {
            videoRenderer: 'video',
            shelfRenderer: 'lista de reproducción',
            radioRenderer: 'en vivo',
            channelRenderer: 'canal',
            mostrandoResultadosParaRenderizador: "error tipográfico",
            horizontalCardListRenderer: "suggestionCard",
        }[Objeto.teclas(lista)[0]] || ''
        let content = list[Object.keys(list)[0]] || {}
        si (contenido) {
            interruptor (tipo) {
                caso "error tipográfico":
                    formatList.correctQuery = content.correctedQuery.runs[0].text
                    break
                caso 'video':
                    formatList.items.push({
                        tipo,
                        título: content.title.runs[0].text.replace('-'', '-'),
                        vistas: content.viewCountText.simpleText,
                        descripción: content.descriptionSnippet ? content.descriptionSnippet.runs[0].text.replace('Â ...', ' ...') : '',
                        duración: contenido.longitudTexto ? [contenido.longitudTexto.simpleTexto, contenido.longitudTexto.accesibilidad.accesibilidadEtiqueta.de.datos] : ['', ''],
                        miniatura: contenido.miniatura.miniaturas,
                        enlace: 'https://youtu.be/' + content.videoId,
                        videoId: content.videoId,
                        autor: {
                            nombre: content.ownerText.runs[0].text,
                            link: content.ownerText.runs[0].navigationEndpoint.commandMetadata.webCommandMetadata.url,
                            miniatura: content.channelThumbnailWithLinkRenderer ? content.channelThumbnailWithLinkRenderer.thumbnail.thumbnail.thumbnails : [],
                            verificado: content.ownerBadges && /BADGE_STYLE_TYPE_VERIFIED/.test(content.ownerBadges[0].metadataBadgeRenderer.style) ? /BADGE_STYLE_TYPE_VERIFIED_ARTIST/.test(content.ownerBadges[0].metadataBadgeRenderer.style) ? 'artista' : verdadero : falso
                        }
                    })
                    break
                caso "canal":
                    formatList.items.push({
                        tipo,
                        título: content.title ? content.title.simpleText.replace('-'', '-') : '',
                        descripción: content.descriptionSnippet ? content.descriptionSnippet.runs[0].text.replace('Â ...', ' ...') : '',
                        videoCount: content.videoCountText ? content.videoCountText.runs[0].text : '',
                        miniatura: contenido.miniatura.miniaturas,
                        subscriberCount: content.subscriberCountText ? content.subscriberCountText.simpleText.replace('Â ', ' ') : '',
                        enlace: 'https://youtube.com' + content.navigationEndpoint.commandMetadata.webCommandMetadata.url,
                        verificado: content.ownerBadges && /BADGE_STYLE_TYPE_VERIFIED/.test(content.ownerBadges[0].metadataBadgeRenderer.style) ? /BADGE_STYLE_TYPE_VERIFIED_ARTIST/.test(content.ownerBadges[0].metadataBadgeRenderer.style) ? 'artista' : verdadero : falso
                    })
                    break
                caso "lista de reproducción":
                    formatList.items.push({
                        tipo,
                        título: content.title.simpleText.replace('-'', '-'),
                    })
                    break
            }
        }
    }
    formato de retornoLista
}

/**
 * No hay operación
 */
función noop() { }

/******************************************************************************************************************************************************************************************
 * WhatsApp Readmore Text
 */
Const readMore 

global.handlerUpdate = function (client = new Client(), last, now) {
    // if (now - last > 10000) broadcast(client, {
    //     id: 'System (Owner)'
    // }, `'./handler.js' Updated on ${now}`)
}
