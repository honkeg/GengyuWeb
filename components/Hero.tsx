
import React from 'react';
import { ChevronRight, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden hero-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left space-y-8">
            <div className="inline-flex items-center space-x-2 bg-blue-50/50 backdrop-blur-sm text-blue-700 px-4 py-1.5 rounded-full text-sm font-bold border border-blue-100/50 animate-fade-in">
              <Sparkles size={14} className="text-blue-600" />
              <span>庚羽 AI：让跨境贸易更简单</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1]">
              智联全球<br />
              <span className="gradient-text">羽化出海</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              厦门庚羽科技，以生成式 AI 为核心，为跨境企业打造内容生成、营销自动化与智能客服闭环。助力中国品牌高效出海，抢占全球商机。
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a href="#services" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-2xl font-bold text-lg flex items-center justify-center shadow-xl shadow-blue-500/20 transition-all hover:-translate-y-1 active:scale-95">
                探索业务 <ChevronRight className="ml-1" size={20} />
              </a>
              <a href="#ai-consultant" className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-10 py-4 rounded-2xl font-bold text-lg transition-all active:scale-95">
                AI 咨询
              </a>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-8 pt-4">
              <div className="text-center lg:text-left">
                <p className="text-2xl font-bold text-slate-900">99.5%</p>
                <p className="text-xs text-slate-500 uppercase tracking-wider font-bold">语义准确率</p>
              </div>
              <div className="w-px h-10 bg-slate-200"></div>
              <div className="text-center lg:text-left">
                <p className="text-2xl font-bold text-slate-900">10x</p>
                <p className="text-xs text-slate-500 uppercase tracking-wider font-bold">交付提速</p>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block group">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-[3rem] blur-2xl group-hover:blur-3xl transition-all"></div>
            <div className="relative rounded-[2.5rem] overflow-hidden border-8 border-white shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200" 
                alt="庚羽科技 AI 视图" 
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
