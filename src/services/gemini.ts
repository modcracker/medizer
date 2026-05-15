import { GoogleGenAI } from "@google/genai";

const apiKey = (process as any).env?.GEMINI_API_KEY || '';
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export async function getHealthInsights(prompt: string) {
  if (!ai) {
    return "The clinical intelligence network is currently operating in local-only mode. AI insights are temporarily unavailable.";
  }
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        systemInstruction: `You are Medizer AI, a high-end medical intelligence assistant. 
        Your goal is to provide accurate, professional, and actionable health insights. 
        Always include a medical disclaimer. 
        Stay in character as a futuristic, highly advanced health optimizer.
        Format your responses with clear headings and bullet points for readability.`,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm having trouble connecting to the health intelligence network. Please try again shortly.";
  }
}
