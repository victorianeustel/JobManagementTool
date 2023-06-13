import axios from 'axios';

export const fetchQuestions = async (input) => {
    const model = "text-davinci-003";
    const response = await axios.post(
        "https://api.openai.com/v1/completions",
        {
            prompt: `"${input}" \n Create a list of five interview questions from the job description.
        Do not include any explanations, only provide a  RFC8259 compliant JSON response  following this format without deviation.
        [
            "first interview questions", 
            "second interview question",
            "third interview question",
            "fourth interview question",
            "fifth interview question"
        ]
        The JSON response:`,
            model: model,
            temperature: 0.5,
            max_tokens: 150,
            top_p: 1.0,
            frequency_penalty: 0.8,
            presence_penalty: 0.0,
        },
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
            },
        }
    );
    return response.data.choices[0].text;
};

export const fetchKeywords = async (input) => {
    const model = "text-davinci-003";
    const response = await axios.post(
        "https://api.openai.com/v1/completions",
        {
            prompt: `"${input}" \n Create a list of ten keywords from the job description.
        Do not include any explanations, only provide a  RFC8259 compliant JSON response  following this format without deviation.
        {
          "1":"first keyword", 
          "2":"second keyword", 
          "3":"third keyword", 
          "4":"fourth keyword", 
          "5":"fifth keyword", 
          "6":"sixth keyword", 
          "7":"seventh keyword", 
          "8":"eighth keyword", 
          "9":"ninth keyword", 
          "10":"tenth keyword"
        }
        The JSON response:`,
            model: model,
            temperature: 0.5,
            max_tokens: 150,
            top_p: 1.0,
            frequency_penalty: 0.8,
            presence_penalty: 0.0,
        },
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
            },
        }
    );
    return response.data.choices[0].text;
};