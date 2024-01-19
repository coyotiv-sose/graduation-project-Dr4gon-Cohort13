const OpenAI = require('openai');
const dotenv = require('dotenv').config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

module.exports = async function ({ name, date, location }) {
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: 'user',
        content: `Write a welcome message for
      ${name} who's newly coming into
      ${location} on
      ${date}`,
      },
    ],
    model: 'gpt-3.5-turbo',
  });

  console.log(completion.choices[0].message);

  return completion.choices[0].message;
};
