
import React from 'react';
import { Mail, MapPin, Phone, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-950 text-white pt-24 pb-12 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16 mb-20">
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/40">
                <span className="text-white font-bold text-2xl">庚</span>
              </div>
              <span className="text-2xl font-bold tracking-tight">庚羽科技</span>
            </div>
            <p className="text-slate-400 leading-relaxed text-lg max-w-md">
              厦门庚羽科技有限公司致力于用 AI 技术重塑跨境贸易流程。我们不仅仅提供工具，更是您出海征程中的智慧大脑。
            </p>
            <div className="flex items-center space-x-6 text-slate-500">
               <div className="flex items-center space-x-2">
                 <Globe size={16} />
                 <span className="text-sm font-bold">厦门 · 思明</span>
               </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h4 className="text-lg font-bold text-white border-l-4 border-blue-600 pl-4">联系方式</h4>
              <ul className="space-y-6">
                <li className="group flex items-start space-x-4">
                  <div className="p-3 bg-slate-900 rounded-xl group-hover:bg-blue-600/10 group-hover:text-blue-400 transition-all">
                    <MapPin size={20} className="text-blue-500" />
                  </div>
                  <div className="text-slate-400">
                    <p className="font-bold text-slate-200">办公地址</p>
                    <p className="text-sm">厦门市思明区西林社62号502室</p>
                  </div>
                </li>
                <li className="group flex items-start space-x-4">
                  <div className="p-3 bg-slate-900 rounded-xl group-hover:bg-blue-600/10 group-hover:text-blue-400 transition-all">
                    <Phone size={20} className="text-blue-500" />
                  </div>
                  <div className="text-slate-400">
                    <p className="font-bold text-slate-200">咨询热线</p>
                    <p className="text-sm text-blue-400 font-bold">13023831486</p>
                  </div>
                </li>
                <li className="group flex items-start space-x-4">
                  <div className="p-3 bg-slate-900 rounded-xl group-hover:bg-blue-600/10 group-hover:text-blue-400 transition-all">
                    <Mail size={20} className="text-blue-500" />
                  </div>
                  <div className="text-slate-400">
                    <p className="font-bold text-slate-200">电子邮箱</p>
                    <p className="text-sm">hongke1486@gmail.com</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-lg font-bold text-white border-l-4 border-purple-600 pl-4">关于我们</h4>
              <p className="text-sm text-slate-400 leading-loose">
                我们由一群深耕跨境贸易与 AI 算法的专家组成。在这里，我们不断探索大语言模型在多语言电商环境下的最佳实践，为中国品牌走向世界保驾护航。
              </p>
              <div className="pt-4">
                <a href="#ai-consultant" className="inline-block text-blue-400 font-bold border-b-2 border-blue-400/20 hover:border-blue-400 transition-all">
                  获取定制化出海方案 &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-slate-500 text-sm font-medium">© {new Date().getFullYear()} 厦门庚羽科技有限公司. 版权所有.</p>
          <div className="flex items-center space-x-6 text-slate-500 text-sm font-medium">
            <span className="hover:text-blue-400 cursor-pointer transition-colors">隐私政策</span>
            <span className="hover:text-blue-400 cursor-pointer transition-colors">服务协议</span>
            <span className="text-slate-700">闽ICP备2023000000号-1</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
