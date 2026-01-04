
import React, { useState, useRef, useEffect } from 'react';
import { Send, User, Bot, Loader2, Sparkles, RefreshCcw } from 'lucide-react';
import { getAIConsultancy } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIConsultant: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: '您好！我是庚羽科技的 AI 顾问。很高兴为您服务。我们可以为您提供多语言翻译、智能选品建议及 AI 代运营方案。请问您有什么需求？' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    const chatHistory = messages.map(m => ({
      role: m.role,
      parts: [{ text: m.text }]
    }));

    const response = await getAIConsultancy(userMessage, chatHistory);
    
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setIsLoading(false);
  };

  const resetChat = () => {
    setMessages([{ role: 'model', text: '已重置会话。请问有什么我可以帮您的？' }]);
  };

  return (
    <section id="ai-consultant" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-purple-50 text-purple-600 px-4 py-1 rounded-full text-sm font-bold mb-4">
            <Sparkles size={16} />
            <span>实时 AI 专家</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">庚羽智能咨询中心</h2>
          <p className="text-slate-600 text-lg">全天候为您解答跨境出海难题</p>
        </div>

        <div className="bg-slate-50 rounded-[2rem] shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden flex flex-col h-[650px]">
          {/* Header */}
          <div className="px-6 py-4 bg-white border-b border-slate-100 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <Bot className="text-white" size={24} />
              </div>
              <div>
                <p className="font-bold text-slate-900">庚羽科技 AI 专家</p>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">实时在线</span>
                </div>
              </div>
            </div>
            <button 
              onClick={resetChat}
              className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
              title="清除记录"
            >
              <RefreshCcw size={18} />
            </button>
          </div>

          {/* Messages */}
          <div 
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-6 space-y-6 no-scrollbar"
          >
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse space-x-reverse' : 'flex-row'} items-start space-x-3`}>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center ${
                    msg.role === 'user' ? 'bg-blue-600 text-white' : 'bg-white text-slate-400 shadow-sm border border-slate-100'
                  }`}>
                    {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
                  </div>
                  <div className={`p-4 rounded-2xl text-sm leading-relaxed shadow-sm ${
                    msg.role === 'user' 
                      ? 'bg-blue-600 text-white rounded-tr-none' 
                      : 'bg-white text-slate-700 rounded-tl-none border border-slate-100'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-white border border-slate-100 flex items-center justify-center">
                    <Bot size={16} className="text-slate-400" />
                  </div>
                  <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                    <div className="flex space-x-1">
                      <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce"></div>
                      <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                      <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t border-slate-100">
            <div className="relative flex items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="询问关于业务、选品或报价..."
                className="w-full bg-slate-50 px-6 py-4 pr-16 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-slate-700"
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className={`absolute right-2 p-3 rounded-xl transition-all ${
                  input.trim() && !isLoading 
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20 hover:scale-105 active:scale-95' 
                    : 'bg-slate-200 text-slate-400'
                }`}
              >
                <Send size={18} />
              </button>
            </div>
            <p className="mt-2 text-[10px] text-center text-slate-400 font-medium">由 庚羽科技 自主研发的跨境大模型驱动</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIConsultant;
