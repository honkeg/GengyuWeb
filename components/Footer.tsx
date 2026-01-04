
import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-12 md:space-y-0 pb-12 border-b border-gray-800">
          <div className="max-w-md">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">庚</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">庚羽科技</span>
            </div>
            <p className="text-gray-400 leading-relaxed text-lg">
              厦门庚羽科技有限公司致力于用 AI 技术重塑跨境贸易，助力中国品牌走向世界。
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="flex items-start space-x-4">
              <MapPin className="text-blue-500 mt-1 flex-shrink-0" size={20} />
              <div className="text-gray-300">
                <p className="font-semibold text-white">办公地址</p>
                <p>厦门市思明区西林社62号502室</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Phone className="text-blue-500 mt-1 flex-shrink-0" size={20} />
              <div className="text-gray-300">
                <p className="font-semibold text-white">咨询热线</p>
                <p>13023831486</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Mail className="text-blue-500 mt-1 flex-shrink-0" size={20} />
              <div className="text-gray-300">
                <p className="font-semibold text-white">电子邮箱</p>
                <p>hongke1486@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} 厦门庚羽科技有限公司 版权所有. 闽ICP备XXXXXXXX号-1</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
