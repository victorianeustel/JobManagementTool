// import { useState } from "react"
// const { Configuration, OpenAIApi } = require("openai");

// // const ChatbotApp = () => {
// //   const configuration = new Configuration({
// //     apiKey: process.env.REACT_APP_OPENAI_API_KEY,
// //   });



//   const fetchData = async (input) => {
//     const response = await axios.post(
//       "https://api.openai.com/v1/completions",
//       {
//         prompt: `Complete this sentence: "${input}"`,
//         model: model,
//         max_tokens: 50,
//         n: 1,
//         stop: ".",
//       },
//       {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
//         },
//       }
//     );
  
//     return response.data.choices[0].text;
//   };


//   function ChattyApp() {
//     const [input, setInput] = useState("");
//     const [completedSentence, setCompletedSentence] = useState("");
    
//     async function handleClick() {
//       try {
//         const completedSentence = await fetchData(input);
//         setCompletedSentence(completedSentence);
//       } catch (error) {
//         console.error(error);
//       }
//     }
  
//     return (
//       <div className="container">
//         <h2>Tell me something, and I'll tell you more</h2>
//         <textarea
//           value={input}
//           onChange={(event) => setInput(event.target.value)}
//           rows={5}
//           placeholder="Type in some words and I'll finish the rest..."
//         />
//         <button className="button" onClick={handleClick}>Complete Sentence</button>
//         {completedSentence && <p>Completed sentence: {completedSentence}</p>}
//       </div>
//     );
//   }


// export default ChatbotApp;