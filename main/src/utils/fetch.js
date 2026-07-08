import { GoogleGenAI } from "@google/genai";

const apiKey = import.meta.env.VITE_API_KEY;

const ai = new GoogleGenAI({ apiKey: apiKey });

export async function AIResult (UserMessage) {
    const userInput = UserMessage;
    try {
        const response = await ai.models.generateContent({
            model:"gemini-3.1-flash-lite",
            contents:userInput
        })
        return response.candidates[0].content.parts[0].text;
    } catch (error) {
        console.log( "error : " , error);
    }
}

