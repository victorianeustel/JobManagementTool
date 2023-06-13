import axios from 'axios';

export const fetchData = async (input) => {
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