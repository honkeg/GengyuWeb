
import React from 'react';
import { Rocket, ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden hero-gradient">
      {/* Decorative Blur Elements */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-blue-400 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-purple-400 opacity-20 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-1 rounded-full text-sm font-semibold mb-6 border border-blue-100">
              <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
              <span>引领跨境电商AI 2.0时代</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight mb-6">
              智启跨境 <br />
              <span className="gradient-text">羽动全球</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-xl leading-relaxed">
              厦门庚羽科技有限公司致力于将最前沿的生成式 AI 技术注入跨境贸易。从内容生成到智能营销，我们为您的品牌出海加速。
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start">
              <a href="#services" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center shadow-xl hover:shadow-blue-200 transition-all hover:-translate-y-1">
                查看核心业务 <ChevronRight className="ml-2" size={20} />
              </a>
            </div>
            
            <div className="mt-12 flex items-center justify-center md:justify-start space-x-6 text-gray-500">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-gray-900">99%+</span>
                <span className="text-sm">翻译准确率</span>
              </div>
              <div className="w-px h-8 bg-gray-200"></div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-gray-900">10x</span>
                <span className="text-sm">运营效率提升</span>
              </div>
              <div className="w-px h-8 bg-gray-200"></div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-gray-900">24/7</span>
                <span className="text-sm">全天候响应</span>
              </div>
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800" 
                alt="AI Tech Concept" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
