
import React from 'react';
import { ExternalLink, Github, Layers } from 'lucide-react';

const Products: React.FC = () => {
  const projects = [
    {
      id: '1',
      title: 'B2B电商中后台管理系统',
      category: '产品设计 • 2022～2024',
      description: '为政府采购、企业采购搭建的电商平台，核心负责商品管理、订单管理等产品功能。',
      image: '/images/ecommerce-system.png',
      color: 'bg-blue-400'
    },
    {
      id: '2',
      title: 'AI辅助设计工具',
      category: 'AI应用 • 2026',
      description: 'coze平台上自己搭建的工作流，可根据用户输入的心理学主题一键生成相关视频。',
      image: '/images/ai-tool.png',
      color: 'bg-green-400'
    },
    {
      id: '3',
      title: 'B2C电商商品中后台管理系统',
      category: '产品设计 • 2025',
      description: '服务于欧美、东南亚等区域的电商平台，核心负责商品审核、商品标题、搭配购等产品模块。',
      image: '/images/b2c-system.png',
      color: 'bg-pink-400'
    },
    {
      id: '4',
      title: 'AI智能内容生成工具',
      category: 'AI应用 • 2026',
      description: 'vibe coding出的用于帮助产品经理提升产品思维，每日生成一道题的产品工具。',
      image: '/images/vibe-ai-tool.png',
      color: 'bg-purple-400'
    }
  ];

  return (
    <div className="space-y-16">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="group flex flex-col bg-white brutalist-border brutalist-shadow rounded-[32px] overflow-hidden transition-all-200 hover:-translate-y-2">
            <div className="h-64 overflow-hidden brutalist-border-b relative">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110 cursor-pointer"
                onClick={() => {
                  if (project.id === '1') {
                    window.open('https://www.zcygov.cn/?utm=a0004.3d54c815.ct001.1.dc27a800069b11f1971071f8e5f2dfcb', '_blank');
                  } else if (project.id === '2') {
                    window.open('https://v.douyin.com/ESBZqABJGVI/', '_blank');
                  } else if (project.id === '3') {
                    window.open('https://us.shein.com/', '_blank');
                  }
                }}
              />
              <div className="absolute top-4 right-4 bg-white p-2 rounded-lg brutalist-border opacity-0 group-hover:opacity-100 transition-opacity">
                <ExternalLink size={20} />
              </div>
            </div>
            <div className="p-8 flex flex-col flex-grow gap-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-black uppercase tracking-wider text-gray-500">{project.category}</span>
                <div className={`w-4 h-4 rounded-full ${project.color} brutalist-border`} />
              </div>
              <h3 className={`text-2xl font-bold ${project.id === '1' ? 'text-blue-600' : project.id === '2' ? 'text-green-600' : project.id === '3' ? 'text-pink-400' : project.id === '4' ? 'text-purple-600' : 'text-gray-800'}`}>{project.title}</h3>
              <p className="text-gray-600 flex-grow">{project.description}</p>
              <div className="flex gap-3 pt-4">
                <button 
                  className={`flex-grow bg-white font-bold p-3 rounded-xl brutalist-border brutalist-shadow transition-all duration-200 hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2 ${project.id === '1' ? 'text-blue-600' : project.id === '2' ? 'text-green-600' : project.id === '3' ? 'text-pink-400' : project.id === '4' ? 'text-purple-600' : 'text-gray-800'}`}
                  onClick={() => {
                    if (project.id === '1') {
                      window.open('https://www.zcygov.cn/?utm=a0004.3d54c815.ct001.1.dc27a800069b11f1971071f8e5f2dfcb', '_blank');
                    } else if (project.id === '2') {
                      window.open('https://v.douyin.com/ESBZqABJGVI/', '_blank');
                    } else if (project.id === '3') {
                      window.open('https://us.shein.com/', '_blank');
                    }
                  }}
                >
                  <Layers size={18} /> View Product
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
