import tmi from 'tmi.js';
import Fuse from 'fuse.js';
import { items } from "./constants.js"
import 'dotenv/config'

async function refreshToken(refresh, clientID, clientSecret) {
    let options = {
        'client_id': clientID,
        'client_secret': clientSecret,
        'refresh_token': refresh,
        'grant_type': 'refresh_token',
    };

    let compiled_options = new URLSearchParams();

    for (let key in options)
        compiled_options.append(key, options[key]);

    let res = await fetch('https://id.twitch.tv/oauth2/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: compiled_options
    })
        .then((res) => {
            return res.json()
        })
        .then((res) => {
            console.log(res)
            return res
        })

    return res.access_token
}

let access = await refreshToken(process.env.TWITCH_REFRESH, process.env.TWITCH_CLIENT, process.env.TWITCH_SECRET)

// Define configuration options
const opts = {
    connection: {
        reconnect: true
    },
    identity: {
        username: 'backpackhelpbot',
        password: 'oauth:' + access
        // password: 'oauth:wzltm42y54ihcu3m90to5qdr6pqbuy'
    },
    channels: [
        'backpackhelpbot',
        'howdy2yall',
        'reharded'
    ]
};

// Create a client with our options
const client = new tmi.client(opts);

// Register our event handlers (defined below)
client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler);
client.on("disconnected", (reason) => {
    console.error(`Disconnected for ${reason}`);
    refreshToken(process.env.TWITCH_REFRESH, process.env.TWITCH_CLIENT, process.env.TWITCH_SECRET)
        .catch(error => {
            console.error(error);
        });
});

// Connect to Twitch:
client.connect();

//Initialize search object
const searchOptions = {
    includeScore: true,
    keys: ['display_name']
}

const fuse = new Fuse(items, searchOptions)

// Called every time a message comes in
function onMessageHandler(target, context, msg, self) {
    if (msg[0] != '!') { return; } // Ignore messages that do not begin with exclamation point

    // Remove whitespace from chat message
    const commandName = msg.trim().split(' ')[0]
    const bodyArr = msg.trim().split(' ')
    bodyArr.shift()
    const body = bodyArr.join(' ')

    // If the command is known, let's execute it
    if (commandName == '!bpb') {
        let searchObject = lookup(body)
        client.say(target, searchObject.result);
        console.log('search: ' + body + ', result: ' + searchObject.item + ', user: ' + context.username + ', channel: ' + target)
    } else if (commandName == '!join') {
        if (target == '#backpackhelpbot') {
            joinChannel(context.username)
            console.log(context.username + ' joined.')
        }
    } else if (commandName == '!leave') {
        if (target == '#backpackhelpbot') {
            leaveChannel(context.username)
            console.log(context.username + ' left.')
        }
    }
}

function lookup(body) {
    let final = {
        item: 'None',
        result: 'No item found.'
    }

    const result = fuse.search(body, { limit: 1 })
    if (result.length) {
        const item = result[0].item
        final.item = item.display_name
        if (item.damage) {
            final.result = item.display_name + ' | Damage: ' + item.damage + ' | Stamina: ' + item.stamina + ' | Accuracy: ' + item.accuracy + ' | Cooldown: ' + item.cooldown + ' | ' + item.description
        } else {
            final.result = item.display_name + ' | ' + item.description
        }
        if (item.recipe) {
            final.result = final.result + ' | Recipe: ' + item.recipe
        }
        if (item.cost) {
            final.result = final.result + ' | Cost: ' + item.cost
        }
    }
    return final
}

async function joinChannel(username) {
    try {
        const res = await client.join(username)
        client.say('backpackhelpbot', 'Successfully joined ' + res[0].substring(1) + '!')
    } catch (err) {
        client.say('backpackhelpbot', 'Error joining channel. Please try again later.')
    }
}

async function leaveChannel(username) {
    try {
        const res = await client.part(username)
        client.say('backpackhelpbot', 'Successfully left ' + res[0].substring(1) + '!')
    } catch (err) {
        client.say('backpackhelpbot', 'Error occurred.')
    }
}


// Called every time the bot connects to Twitch chat
function onConnectedHandler(addr, port) {
    console.log(`* Connected to ${addr}:${port}`);
}