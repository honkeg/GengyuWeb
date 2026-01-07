
import { GoogleGenAI } from "@google/genai";

export const callAI = async (userInput: string, chatHistory: {role: 'user' | 'model', text: string}[]) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

  const systemInstruction = `你是"厦门庚羽科技有限公司" (Gengyu Tech) 的官方资深跨境AI技术顾问。

你的核心任务：
1. 向客户介绍公司的跨境AI技术服务：AI多语言翻译、智能选品分析、海外社媒代运营、24/7多语种智能客服。
2. 展现专业、务实、热情的品牌形象。

输出格式规范（非常重要）：
- 请务必使用标准的 Markdown 语法进行排版。
- 使用 **加粗** 来强调关键词。
- 介绍多项服务时请使用 1. 2. 3. 数字列表。
- 确保段落之间有清晰的换行。
- 联系信息部分请使用 --- 分割线单独列出。
- 严禁输出一大段没有换行的文字。

公司信息：
- 地址：福建省厦门市思明区西林社62号502室
- 咨询电话：13023831486
- 官方邮箱：hongke1486@gmail.com`;

  try {
    const formattedHistory = chatHistory.map(m => ({
      role: m.role === 'model' ? 'model' : 'user',
      parts: [{ text: m.text }]
    }));

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...formattedHistory,
        { role: 'user', parts: [{ text: userInput }] }
      ],
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
        topP: 0.95,
        maxOutputTokens: 1024,
      },
    });

    const text = response.text;
    if (!text) throw new Error("Empty response");

    return text;
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    return "抱歉，由于网络波动，我暂时无法回应。您可以直接拨打我们的咨询电话：**13023831486**。";
  }
};
