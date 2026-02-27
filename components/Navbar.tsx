
import React from 'react';
import { Tab } from '../types';
import { Mail } from 'lucide-react';

interface NavbarProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: Tab.HOME, label: '首页' },
    { id: Tab.ABOUT, label: '关于我' },
    { id: Tab.PRODUCTS, label: '我的产品' },
  ];

  return (
    <nav className="fixed top-8 left-0 right-0 z-50 flex justify-center px-4">
      <div className="bg-white brutalist-border brutalist-shadow rounded-full px-6 py-3 flex items-center gap-8 md:gap-12">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full border-[3px] border-black flex items-center justify-center">
            <div className="w-4 h-4 rounded-full border-[3px] border-black" />
          </div>
        </div>
        
        <div className="flex gap-4 md:gap-8 font-bold text-lg">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`hover:text-pink-500 transition-colors ${
                activeTab === tab.id ? 'text-black underline underline-offset-4' : 'text-gray-600'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <button className="bg-yellow-400 text-black p-2 rounded-lg brutalist-border brutalist-shadow transition-all-200 brutalist-shadow-hover">
          <Mail size={20} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
