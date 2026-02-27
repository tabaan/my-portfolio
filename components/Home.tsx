
import React, { useEffect, useRef } from 'react';
import { Tab } from '../types';
import { ArrowRight, User } from 'lucide-react';

interface HomeProps {
  onNavigate: (tab: Tab) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const animateImage = () => {
      if (imgRef.current) {
        // 添加动画效果
        imgRef.current.style.transform = 'scale(1.1) rotate(3deg)';
        
        // 2秒后恢复原状
        setTimeout(() => {
          if (imgRef.current) {
            imgRef.current.style.transform = 'scale(1) rotate(0deg)';
          }
        }, 1000);
      }
    };

    // 初始动画
    animateImage();
    
    // 每2秒执行一次动画
    const interval = setInterval(animateImage, 2000);

    // 清理函数
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center gap-12 py-32">
        <div className="flex-1 space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            我是 <span className="bg-[#FF5C8D] text-black px-4 py-1 inline-block transform -skew-x-12 border-2 border-black transition-all duration-300 hover:bg-[#FF85A2] hover:scale-105 hover:shadow-lg">绮安kiana</span>，<br />
            <span className="whitespace-nowrap">a product manager</span>，<br />
            练习时长 <span className="bg-[#3D82F6] text-white px-4 py-1 inline-block transform skew-x-12 transition-all duration-300 hover:bg-[#60A5FA] hover:scale-105 hover:shadow-lg border-2 border-transparent hover:border-black">三年啦</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-lg">
            E-commerce back-end product, recently learning AI~
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <button 
              onClick={() => onNavigate(Tab.ABOUT)}
              className="bg-black text-white px-8 py-4 rounded-xl brutalist-border brutalist-shadow brutalist-shadow-hover transition-all-200 font-bold flex items-center gap-2"
            >
              <User size={20} /> More about me
            </button>

          </div>
        </div>
        <div className="relative">
          <div className="w-72 h-72 md:w-[450px] md:h-[450px] bg-[#FFD600] rounded-3xl brutalist-border brutalist-shadow overflow-hidden">
            <img 
              ref={imgRef}
              src="/images/avatar.png" 
              alt="Avatar" 
              className="w-full h-full object-cover transition-all duration-500 hover:scale-110 hover:rotate-3"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;