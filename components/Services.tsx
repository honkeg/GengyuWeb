
import React from 'react';
import { SERVICES, getIcon } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-3">核心业务</h2>
          <h3 className="text-4xl font-bold text-gray-900 mb-4">全场景跨境 AI 赋能</h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            我们为您提供覆盖跨境全链路的一站式 AI 解决方案，助力业务高效增长。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="p-8 rounded-2xl bg-gray-50 border border-gray-100 shadow-sm transition-all duration-300"
            >
              <div className="w-14 h-14 bg-blue-600 text-white rounded-xl flex items-center justify-center mb-6 shadow-md">
                {getIcon(service.icon, "w-8 h-8")}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h4>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
