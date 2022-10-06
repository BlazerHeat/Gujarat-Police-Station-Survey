const OTP_LIFE = 120;
const { createClient } = require('redis');

const REDIS_URI = process.env.REDIS_URI || null;

if (!REDIS_URI) {
    throw new Error('Define `REDIS_URI` in Enviroment Variables.');
}

const client = createClient({
    url: REDIS_URI
});

client.connect();

client.on('ready', () => {
    console.log('Successfully connected to redis server');
});

client.on('error', (err) => {
    throw err;
});


const addOtp = async (phone, otp) => {
    await client.SETEX(phone, OTP_LIFE, otp);
    // await client.set(phone, otp, { EX: OTP_LIFE });
}

const getOtp = async (phone) => {
    return await client.get(phone);
}

const removeOtp = async (phone) => {
    await client.del(phone);
}

module.exports = { removeOtp, addOtp, getOtp }