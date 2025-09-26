
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

// --- IMPORTANT PRODUCTION NOTE ---
// In a real-world production application, you should NEVER call the Gemini API directly from the client-side.
// Your API key would be exposed to anyone inspecting the website's network traffic.
//
// The secure, production-ready approach is to:
// 1. Create a backend server (e.g., using Node.js, Python, or Go).
// 2. Store your API key securely on this server as an environment variable.
// 3. Create an API endpoint on your backend (e.g., /api/get-feedback).
// 4. Have your frontend application call YOUR backend endpoint.
// 5. Your backend server then securely calls the Gemini API with the key and returns the response to the frontend.
//
// This architecture ensures your API key is never exposed to the public.
// The current implementation is for demonstration and development purposes only.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

/**
 * Calls the Gemini API with a specific prompt.
 * @param prompt The text prompt to send to the model.
 * @returns The text response from the model.
 */
export const getGeminiResponse = async (prompt: string): Promise<string> => {
    try {
        const response: GenerateContentResponse = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
        });
        
        return response.text;
    } catch (error) {
        console.error("Gemini API call failed:", error);
        if (error instanceof Error && error.message.includes('API key not valid')) {
            return "Error: The provided API key is not valid. Please check your environment configuration.";
        }
        return "Sorry, there was an error getting feedback. Please check the console for details and try again later.";
    }
};
