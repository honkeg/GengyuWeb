
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import AIConsultant from './components/AIConsultant';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        
        {/* Features Highlights */}
        <section className="py-20 bg-blue-600 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="grid md:grid-cols-3 gap-12">
              <div className="flex flex-col items-center">
                <div className="text-4xl font-bold mb-2">99%</div>
                <div className="text-blue-100 uppercase tracking-widest text-sm">跨境内容适配率</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-4xl font-bold mb-2">30+</div>
                <div className="text-blue-100 uppercase tracking-widest text-sm">覆盖全球语种</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-4xl font-bold mb-2">500强</div>
                <div className="text-blue-100 uppercase tracking-widest text-sm">核心技术背景团队</div>
              </div>
            </div>
          </div>
        </section>

        <Services />
        <AIConsultant />
        
        {/* About Section Briefly */}
        <section id="about" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <img 
                  src="https://picsum.photos/seed/team-office/800/800" 
                  alt="Our Team" 
                  className="rounded-3xl shadow-xl"
                />
              </div>
              <div>
                <h3 className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-3">ABOUT GENGYU</h3>
                <h4 className="text-4xl font-bold text-gray-900 mb-6">源自技术基因，深耕跨境赛道</h4>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  庚羽科技坐落于美丽的海滨城市厦门。在这个跨境电商高地，我们发现传统运营模式正面临效率瓶颈。
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  我们整合了多模态大模型、智能推荐算法与全球化供应链数据，旨在打造更懂跨境商家的 AI 工具集。我们的愿景是让每一家中国工厂都能轻松转型成为具有国际竞争力的全球化品牌。
                </p>
                <div className="space-y-4">
                  {[
                    "专业算法团队提供技术支持",
                    "定制化出海战略咨询服务",
                    "灵活的一站式API集成方案"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="font-medium text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
