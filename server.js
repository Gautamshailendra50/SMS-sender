require('dotenv').config();
const twilio = require('twilio');

// Twilio credentials from environment variables
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

// Send a message function
const sendMessage = async (to, body) => {
  try {
    const message = await client.messages.create({
      from: process.env.TWILIO_PHONE_NUMBER,  // Your Twilio number (must be SMS-enabled)
      to:  +12345678901, //(should be valid and in E.164 format)
      body:10987654321
    });
    console.log('Message sent:', message.sid);
  } catch (error) {
    console.error('Error sending message:', error.message);
  }
};

// Example usage
sendMessage('+916392313446', 'Hello, this is a test message from Twilio!');
