
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getAIConsultancy = async (userInput: string, chatHistory: {role: 'user' | 'model', parts: {text: string}[]}[]) => {
  try {
    const model = 'gemini-3-flash-preview';
    const response = await ai.models.generateContent({
      model,
      contents: [
        ...chatHistory,
        { role: 'user', parts: [{ text: userInput }] }
      ],
      config: {
        systemInstruction: `你是"厦门庚羽科技有限公司"的资深跨境AI技术顾问。
你的职责是向潜在客户介绍公司的业务。
公司信息：
- 名称：厦门庚羽科技有限公司 (Gengyu Tech)
- 地点：福建省厦门市思明区西林社62号502室
- 联系电话：13023831486
- 电子邮箱：hongke1486@gmail.com
- 业务领域：跨境AI技术服务，包含AI多语言翻译、智能选品、海外社交媒体AI代运营、智能客服系统。
- 目标：助力中国制造和中国品牌更高效地走向全球。
请保持专业、热情的态度，使用简洁明了的中文回答。`,
        temperature: 0.7,
      }
    });

    return response.text || "抱歉，我目前无法处理您的请求。请稍后再试或直接联系我们的客服。";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "连接失败，请检查网络设置或稍后重试。";
  }
};
