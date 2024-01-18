const OpenAI = require('openai');
dotenv = require('dotenv').config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

module.exports = async function ({ name, date, location }) {
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: 'user',
        content: `Build a warm and friendly welcome message for Name:${name}, Date:${date}, Location: ${location} `,
      },
    ],
    model: 'gpt-3.5-turbo',
    temperature: 0.2,
    max_tokens: 1000,
  });

  console.log('OpenAI response:', completion.choices[0].message.content);

  return completion.choices[0].message.content;
};
