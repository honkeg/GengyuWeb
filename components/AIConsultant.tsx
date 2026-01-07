
import React, { useState, useRef, useEffect } from 'react';
import { Send, User, Bot, RefreshCcw, ShieldCheck } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { callAI } from '../services/aiService';
import { ChatMessage } from '../types';

const AIConsultant: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: '您好！我是**庚羽科技**的官方 AI 顾问。很高兴为您服务！\n\n您可以咨询关于：\n1. **跨境选品分析**\n2. **AI 多语言翻译**\n3. **海外营销自动化**\n\n请问有什么我可以帮您的？' }
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

    try {
      const response = await callAI(userMessage, messages);
      setMessages(prev => [...prev, { role: 'model', text: response }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'model', text: "系统繁忙，请稍后再试。" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="ai-consultant" className="py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-600 px-4 py-1 rounded-full text-sm font-bold mb-4">
            <ShieldCheck size={16} />
            <span>庚羽官方 AI 顾问</span>
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-2">获取出海灵感</h2>
          <p className="text-slate-500 max-w-lg mx-auto">
            立即与我们的 AI 专家对话，解锁跨境业务增长新航道。
          </p>
        </div>

        <div className="bg-slate-50 rounded-[2.5rem] shadow-2xl border border-slate-100 overflow-hidden flex flex-col h-[650px] relative">
          {/* Header */}
          <div className="px-6 py-4 bg-white border-b border-slate-100 flex items-center justify-between sticky top-0 z-10">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                <Bot className="text-white" size={22} />
              </div>
              <div>
                <p className="font-bold text-slate-900 text-sm md:text-base">庚羽 AI 专家</p>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">实时在线</p>
                </div>
              </div>
            </div>
            <button 
              onClick={() => setMessages([{ role: 'model', text: '会话已重置。我是庚羽 AI 顾问，随时为您效劳。' }])} 
              className="p-2 text-slate-300 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
            >
              <RefreshCcw size={18} />
            </button>
          </div>

          {/* Chat area */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 no-scrollbar bg-white/50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex max-w-[90%] md:max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse space-x-reverse' : 'flex-row'} items-start space-x-3`}>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center shadow-sm ${
                    msg.role === 'user' ? 'bg-blue-600 text-white' : 'bg-white text-slate-400 border border-slate-100'
                  }`}>
                    {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
                  </div>
                  <div className={`p-4 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-blue-600 text-white rounded-tr-none shadow-md shadow-blue-500/10' 
                      : 'bg-white text-slate-700 rounded-tl-none border border-slate-100 shadow-sm'
                  }`}>
                    {msg.role === 'user' ? (
                      msg.text
                    ) : (
                      <div className="prose-ai">
                        <ReactMarkdown>{msg.text}</ReactMarkdown>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
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
                placeholder="在此输入您的疑问..."
                className="w-full bg-slate-50 px-6 py-4 pr-16 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm"
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="absolute right-2 p-3 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-700 disabled:bg-slate-200 transition-all active:scale-95"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIConsultant;
