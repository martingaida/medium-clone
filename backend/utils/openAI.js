const { Configuration, OpenAIApi } = require('openai');

const API_KEY = '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';

// const text = 'Sally sells jewelry.';

const configuration = new Configuration({
  apiKey: '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',
});
const openai = new OpenAIApi(configuration);

const generateCompletion = async (prompt) => {

    const response = await openai.createCompletion('text-davinci-001', {
        prompt,
        max_tokens: 1000,
        temperature: 0.5,
        n: 1,
        echo: true,
        stop: 'string'
    });
    console.log(response.data.choices)
    return response.data.choices[0].text;
};

module.exports = { generateCompletion };