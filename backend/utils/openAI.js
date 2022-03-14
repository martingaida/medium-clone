const { Configuration, OpenAIApi } = require('openai');
const { openAIkey } = require('../config/index');

const configuration = new Configuration({
  apiKey: openAIkey.apiKey,
});
const openai = new OpenAIApi(configuration);

const generateCompletion = async (prompt) => {

    const response = await openai.createCompletion('text-davinci-001', {
        prompt,
        max_tokens: 1000,
        temperature: 1,
        n: 1,
        echo: false,
        stop: 'string'
    });
    console.log(response.data.choices)
    return response.data.choices[0].text;
};

module.exports = { generateCompletion };