
import React from 'react';
import { 
  Globe, 
  Zap, 
  Bot, 
  BarChart3, 
  Languages, 
  Users, 
  ShieldCheck, 
  Rocket 
} from 'lucide-react';
import { NavItem, ServiceItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: '首页', href: '#home' },
  { label: '核心服务', href: '#services' },
  { label: 'AI 咨询', href: '#ai-consultant' },
  { label: '关于我们', href: '#about' },
  { label: '联系我们', href: '#contact' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'ai-content',
    title: 'AI 多语言内容生成',
    description: '通过 LLM 技术，为跨境电商自动生成高转化率的多语言详情页、广告文案及社交媒体内容。',
    icon: 'Languages'
  },
  {
    id: 'ai-marketing',
    title: '智能海外营销',
    description: '基于大数据分析全球市场趋势，精准投放海外广告，提升海外流量获取效率与精准度。',
  icon: 'Zap'
  },
  {
    id: 'ai-service',
    title: '24/7 智能多语种客服',
    description: '无缝集成全球主流社交平台，AI 客服机器人提供即时响应，解决时差与语言障碍。',
    icon: 'Bot'
  },
  {
    id: 'ai-data',
    title: '跨境数据决策支持',
    description: '深度分析竞品及选品趋势，为品牌出海提供科学的数据驱动决策，降低出海风险。',
    icon: 'BarChart3'
  }
];

export const getIcon = (name: string, className?: string) => {
  switch (name) {
    case 'Languages': return <Languages className={className} />;
    case 'Zap': return <Zap className={className} />;
    case 'Bot': return <Bot className={className} />;
    case 'BarChart3': return <BarChart3 className={className} />;
    case 'Globe': return <Globe className={className} />;
    case 'Users': return <Users className={className} />;
    case 'ShieldCheck': return <ShieldCheck className={className} />;
    case 'Rocket': return <Rocket className={className} />;
    default: return <Globe className={className} />;
  }
};
