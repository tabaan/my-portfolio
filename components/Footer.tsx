
import React from 'react';
import { Tab } from '../types';
import { Facebook, Twitter, Instagram, Youtube, Linkedin, Mail } from 'lucide-react';

interface FooterProps {
  onNavigate: (tab: Tab) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-black text-white pt-24 pb-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Newsletter Section */}
        <div className="bg-white brutalist-border brutalist-shadow rounded-[40px] p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
          <div className="w-24 h-24 bg-[#3D82F6] rounded-full brutalist-border flex items-center justify-center flex-shrink-0">
            <Mail size={48} className="text-white" />
          </div>
          <div className="flex-grow text-center md:text-left">
            <h3 className="text-black text-3xl font-bold mb-2">Subscribe to my newsletter</h3>
            <p className="text-gray-500 font-bold">Get the latest design insights directly to your inbox.</p>
          </div>
          <div className="w-full md:w-auto flex flex-col md:flex-row gap-4 brutalist-border rounded-2xl p-2 bg-white">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-grow px-4 py-3 text-black font-bold focus:outline-none bg-transparent"
            />
            <button className="bg-black text-white px-8 py-3 rounded-xl brutalist-border font-bold hover:bg-gray-800 transition-colors">
              Subscribe
            </button>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full border-[3px] border-white flex items-center justify-center">
                <div className="w-4 h-4 rounded-full border-[3px] border-white" />
              </div>
              <span className="text-2xl font-bold">Paperfolio X</span>
            </div>
            <p className="text-gray-400 font-medium">
              Lorem ipsum dolor amet consecte adipiscing elit. Lectus mattis nunc.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Youtube, Linkedin].map((Icon, i) => (
                <button 
                  key={i} 
                  className={`p-3 rounded-full brutalist-border transition-all-200 hover:-translate-y-1 ${
                    i === 0 ? 'bg-blue-600' : i === 1 ? 'bg-sky-400' : i === 2 ? 'bg-pink-500' : i === 3 ? 'bg-red-500' : 'bg-blue-700'
                  }`}
                >
                  <Icon size={20} />
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-xl font-bold">Pages</h4>
            <ul className="space-y-3 text-gray-400 font-bold">
              <li><button onClick={() => onNavigate(Tab.HOME)} className="hover:text-white transition-colors">首页</button></li>
              <li><button onClick={() => onNavigate(Tab.ABOUT)} className="hover:text-white transition-colors">关于我</button></li>
              <li><button onClick={() => onNavigate(Tab.PRODUCTS)} className="hover:text-white transition-colors">我的产品</button></li>
              <li><button className="hover:text-white transition-colors">Contact</button></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-xl font-bold">Utility Pages</h4>
            <ul className="space-y-3 text-gray-400 font-bold">
              <li><button className="hover:text-white transition-colors">Style Guide</button></li>
              <li><button className="hover:text-white transition-colors">Licenses</button></li>
              <li><button className="hover:text-white transition-colors">Changelog</button></li>
              <li><button className="hover:text-white transition-colors">404 Not Found</button></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-xl font-bold">Contact us</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-400 font-bold hover:text-white cursor-pointer">
                <Mail size={18} /> nikhil@helpinggeeks.com
              </li>
              <li className="flex items-center gap-3 text-gray-400 font-bold hover:text-white cursor-pointer">
                <div className="w-5 h-5 flex items-center justify-center">📞</div> +91-9000057810
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-12 text-center text-gray-500 font-bold">
          Made by John Carter - Powered by React & Gemini
        </div>
      </div>
    </footer>
  );
};

export default Footer;
