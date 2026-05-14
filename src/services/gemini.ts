import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function getHealthInsights(prompt: string) {
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
