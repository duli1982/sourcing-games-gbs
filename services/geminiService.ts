
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

// Ensure process.env.API_KEY is available. It's set in index.html for this demo.
const apiKey = (process.env as any).API_KEY;
if (!apiKey) {
    console.error("API_KEY is not set. Please check your environment configuration.");
}

const ai = new GoogleGenAI({ apiKey: apiKey });

/**
 * Calls the Gemini API with a specific prompt.
 * @param prompt The text prompt to send to the model.
 * @returns The text response from the model.
 */
export const getGeminiResponse = async (prompt: string): Promise<string> => {
    if (!apiKey) {
        return "Error: API key is not configured. Please check the setup.";
    }
    try {
        const response: GenerateContentResponse = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
        });
        
        return response.text;
    } catch (error) {
        console.error("Gemini API call failed:", error);
        return "Sorry, there was an error getting feedback. Please check the console for details and try again later.";
    }
};
