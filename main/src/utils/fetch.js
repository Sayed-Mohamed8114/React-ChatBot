import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
import  {findUpSync}  from "find-up"; 
import fs from "fs";

const envPath = findUpSync(".env");
const envConfig = dotenv.parse(fs.readFileSync(envPath));

const apiKey = envConfig.VITE_API_KEY

const ai = new GoogleGenAI({ apiKey: apiKey });

export async function AIResult () {
    try {
        const response = await ai.models.generateContent({
            model:"gemini-3.5-flash",
            contents:"hello make for me a quick introduce about your self"
        })
        console.log(response.candidates[0].content.parts[0].text);
    } catch (error) {
        console.log( "error : " , error);
    }
}

AIResult();