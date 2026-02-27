
import React, { useState, useEffect } from 'react';
import { User, Trophy, Briefcase } from 'lucide-react';

// Custom CSS for slow spin animation and stars
const styles = `
  @keyframes slow-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  
  .animate-slow-spin {
    animation: slow-spin 10s linear infinite;
  }
  
  @keyframes twinkle {
    0%, 100% {
      opacity: 0.3;
      transform: scale(0.8);
    }
    50% {
      opacity: 1;
      transform: scale(1.2);
    }
  }
  
  .star {
    position: absolute;
    width: 16px;
    height: 16px;
    background-color: currentColor;
    clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
  }
`;

const About: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = '绮安的世界！';
  
  const [mottoText, setMottoText] = useState('');
  const fullMottoText = '时间总会流逝，去做又没啥损失，要么成功，要么有所收获';
  
  // Get current day of week in English
  const getCurrentDay = () => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[new Date().getDay()];
  };
  
  const currentDay = getCurrentDay();
  
  useEffect(() => {
    let index = 0;
    let direction = 1; // 1 for typing, -1 for deleting
    let waitTime = 0;
    
    const timer = setInterval(() => {
      if (waitTime > 0) {
        waitTime--;
        return;
      }
      
      if (direction === 1) {
        // Typing out
        if (index < fullText.length) {
          setDisplayText(fullText.substring(0, index + 1));
          index++;
        } else {
          // Pause after typing completes
          waitTime = 30; // Wait 3 seconds (30 * 100ms)
          direction = -1;
        }
      } else {
        // Deleting
        if (index > 0) {
          setDisplayText(fullText.substring(0, index - 1));
          index--;
        } else {
          // Pause after deleting completes
          waitTime = 10; // Wait 1 second (10 * 100ms)
          direction = 1;
        }
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  // Typing effect for motto
  useEffect(() => {
    let index = 0;
    let direction = 1; // 1 for typing, -1 for deleting
    let waitTime = 0;
    
    const timer = setInterval(() => {
      if (waitTime > 0) {
        waitTime--;
        return;
      }
      
      if (direction === 1) {
        // Typing out
        if (index < fullMottoText.length) {
          setMottoText(fullMottoText.substring(0, index + 1));
          index++;
        } else {
          // Pause after typing completes
          waitTime = 30; // Wait 3 seconds (30 * 100ms)
          direction = -1;
        }
      } else {
        // Deleting
        if (index > 0) {
          setMottoText(fullMottoText.substring(0, index - 1));
          index--;
        } else {
          // Pause after deleting completes
          waitTime = 10; // Wait 1 second (10 * 100ms)
          direction = 1;
        }
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <style>{styles}</style>
      <section className="flex flex-col md:flex-row items-start gap-8 py-20">
        <div className="flex-1">
          {/* ID Card Component */}
          <div className="bg-[#3D82F6] brutalist-border brutalist-shadow rounded-3xl p-6 max-w-md">
            <div className="bg-white brutalist-border rounded-2xl p-6 h-full relative">
              {/* Green Header */}
              <div className="bg-[#34D399] brutalist-border rounded-t-xl p-4 mb-6">
                <h2 className="text-2xl font-bold text-white">ID CARD</h2>
                <p className="text-white text-sm">ZHEJIANG SCI-TECH UNIVERSITY</p>
              </div>
              
              {/* Main Content */}
              <div className="grid grid-cols-3 gap-4">
                {/* Avatar */}
                <div className="col-span-1">
                  <div className="bg-[#FFD600] rounded-xl overflow-hidden brutalist-border">
                    <img src="/images/avatar.png" alt="绮安" className="w-full h-24 object-cover" />
                  </div>
                  <div className="space-y-2 mt-4">
                    <div className="bg-[#FFD600] brutalist-border rounded-lg p-1 text-xs font-bold text-center">
                      1996.03.16
                    </div>
                    <div className="bg-[#FF5C8D] brutalist-border rounded-lg p-1 text-xs font-bold text-center text-white">
                      安徽
                    </div>
                  </div>
                </div>
                
                {/* Info */}
                <div className="col-span-2 space-y-3">
                  <div className="bg-[#FFD600] brutalist-border rounded-lg p-2">
                    <h3 className="font-bold">NAME</h3>
                    <p className="text-sm">绮安kiana</p>
                  </div>
                  <div className="bg-[#60A5FA] brutalist-border rounded-lg p-2">
                    <h3 className="font-bold">MAJOR</h3>
                    <p className="text-sm">计算机技术</p>
                  </div>
                  <div className="bg-[#FCA5A5] brutalist-border rounded-lg p-2">
                    <h3 className="font-bold">JOB</h3>
                    <p className="text-sm">toB软件产品经理</p>
                  </div>
                </div>
              </div>
              
              {/* ID Number */}
              <div className="mt-6">
                <div className="bg-gray-200 brutalist-border rounded-lg p-2">
                  <h3 className="font-bold text-sm">ID NO.</h3>
                  <p className="text-sm">QIAN-20260210-OVO</p>
                </div>
              </div>
              
              {/* QR Code */}
              <div className="absolute -bottom-3 -right-3 bg-[#FF5C8D] brutalist-border rounded-full p-2">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <span className="text-xl">😊</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Welcome to <br /><span className="bg-[#3D82F6] text-white px-3 py-1 text-4xl md:text-5xl">{displayText}</span>
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            自我介绍还没想好说啥，先占个位置
          </p>
          <p className="text-xl text-gray-700 leading-relaxed">
            我是绮安kiana，1996年3月16日出生于安徽。毕业于浙江理工大学计算机技术专业，现任toB软件产品经理。
            我专注于电商中后台产品设计，最近正在学习AI相关知识。
            练习时长三年啦，对产品设计充满热情，善于思考和解决问题。
          </p>
          <p className="text-xl text-gray-700 leading-relaxed">
            我是绮安kiana，1996年3月16日出生于安徽。毕业于浙江理工大学计算机技术专业，现任toB软件产品经理。
            我专注于电商中后台产品设计，最近正在学习AI相关知识。
            练习时长三年啦，对产品设计充满热情，善于思考和解决问题。
          </p>


        </div>
      </section>
      
      {/* Motto Section */}
      <div className="py-12 space-y-6">
        <div className="bg-[#FFD600] brutalist-border brutalist-shadow rounded-xl p-6 md:p-8 relative">
          <div className="absolute top-0 left-0 bg-black text-white w-12 h-12 rounded-full flex items-center justify-center font-bold animate-slow-spin">
            {currentDay.substring(0, 3)}
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-center">{mottoText}</h3>
        </div>
        <div className="text-center space-y-2">
          <p className="text-lg">保持对这个世界的敏感度，保持好奇，保持开放，保持开心～</p>
        </div>
      </div>
      
      {/* Recent Life Section */}
      <div className="py-12 relative">
        <div className="bg-[#FF5C8D] brutalist-border brutalist-shadow rounded-xl p-4 mb-8 inline-block transform -skew-x-3">
          <h3 className="text-xl md:text-2xl font-bold text-white">近日生活 | RECENT UPDATES</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Reading Card */}
          <div className="bg-white brutalist-border border-[#3D82F6] brutalist-shadow rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-[#3D82F6] text-white p-2 rounded-lg">
                📚
              </div>
              <h4 className="text-lg font-bold">最近在读</h4>
            </div>
            <p className="text-gray-700">《底层逻辑》</p>
            <p className="text-gray-700">《产品思维：从新手到资深产品人》</p>
          </div>
          
          {/* Watching Card */}
          <div className="bg-white brutalist-border border-[#FF5C8D] brutalist-shadow rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-[#FF5C8D] text-white p-2 rounded-lg">
                🎬
              </div>
              <h4 className="text-lg font-bold">最近狂刷</h4>
            </div>
            <p className="text-gray-700">seedance2.0生成的各种打怪兽视频～</p>
          </div>
          
          {/* Interest Card */}
          <div className="bg-white brutalist-border border-[#34D399] brutalist-shadow rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-[#34D399] text-white p-2 rounded-lg">
                🤖
              </div>
              <h4 className="text-lg font-bold">最近感兴趣</h4>
            </div>
            <p className="text-gray-700">AI编程、AI生成视频</p>
          </div>
        </div>
        
        {/* Decorative Stars */}
        {/* Corner stars */}
        <div className="star text-[#FF5C8D]" style={{ top: '0', left: '0', animation: 'twinkle 3s ease-in-out infinite' }}></div>
        <div className="star text-[#3D82F6]" style={{ top: '0', right: '0', animation: 'twinkle 4s ease-in-out infinite' }}></div>
        <div className="star text-[#34D399]" style={{ bottom: '0', left: '0', animation: 'twinkle 5s ease-in-out infinite' }}></div>
        <div className="star text-[#FFD600]" style={{ bottom: '0', right: '0', animation: 'twinkle 6s ease-in-out infinite' }}></div>
        
        {/* Additional stars distributed throughout the area */}
        <div className="star text-[#FF5C8D]" style={{ top: '20%', left: '15%', animation: 'twinkle 2.5s ease-in-out infinite' }}></div>
        <div className="star text-[#3D82F6]" style={{ top: '35%', right: '20%', animation: 'twinkle 4.5s ease-in-out infinite' }}></div>
        <div className="star text-[#34D399]" style={{ top: '60%', left: '25%', animation: 'twinkle 3.5s ease-in-out infinite' }}></div>
        <div className="star text-[#FFD600]" style={{ top: '75%', right: '15%', animation: 'twinkle 5.5s ease-in-out infinite' }}></div>
        <div className="star text-[#FF5C8D]" style={{ top: '40%', left: '50%', transform: 'translateX(-50%)', animation: 'twinkle 2s ease-in-out infinite' }}></div>
        <div className="star text-[#3D82F6]" style={{ top: '80%', left: '40%', animation: 'twinkle 6.5s ease-in-out infinite' }}></div>
        <div className="star text-[#34D399]" style={{ top: '10%', left: '30%', animation: 'twinkle 3.8s ease-in-out infinite' }}></div>
        <div className="star text-[#FFD600]" style={{ top: '50%', right: '30%', animation: 'twinkle 4.2s ease-in-out infinite' }}></div>
      </div>
      
      {/* Life Journey Section */}
      <div className="py-16">
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">地球Online</h2>
          <div className="bg-[#FF5C8D] brutalist-border brutalist-shadow rounded-xl p-3 inline-block transform -skew-x-3">
            <h3 className="text-xl md:text-2xl font-bold text-white">开放游戏进度</h3>
          </div>
        </div>
        
        <div className="bg-white brutalist-border brutalist-shadow rounded-[32px] p-6 md:p-10">
          <div className="relative">
            {/* Timeline */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-500 transform -translate-x-1/2"></div>
            
            {/* Timeline Titles */}
            <div className="hidden md:block absolute left-[25%] -top-20 transform -translate-x-1/2">
              <div className="bg-[#3D82F6] brutalist-border brutalist-shadow rounded-xl p-3 inline-block transform -skew-x-3">
                <h3 className="text-lg font-bold text-white">主线任务</h3>
              </div>
            </div>
            <div className="hidden md:block absolute right-[25%] -top-20 transform translate-x-1/2">
              <div className="bg-[#FF5C8D] brutalist-border brutalist-shadow rounded-xl p-3 inline-block transform -skew-x-3">
                <h3 className="text-lg font-bold text-white">支线任务</h3>
              </div>
            </div>
            
            {/* 主线任务和支线任务按照时间顺序排列 */}
            <div className="space-y-12 pt-12">
              {/* 2026年1月 - 支线任务 */}
              <div className="flex flex-col md:flex-row items-center gap-4">
                <div className="md:w-1/2"></div>
                <div className="hidden md:block w-4 h-4 bg-gray-500 rounded-full z-10"></div>
                <div className="md:w-1/2">
                  <div className="bg-white brutalist-border border-[#FF5C8D] brutalist-shadow rounded-xl p-5">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-bold">2026.01</span>
                      <div className="bg-[#FF5C8D] text-white px-2 py-1 rounded text-xs font-bold">ONGOING</div>
                    </div>
                    <p className="text-gray-700">学习ai coding，个人网页上线啦</p>
                  </div>
                </div>
              </div>
              
              {/* 2025年12月 - 支线任务 */}
              <div className="flex flex-col md:flex-row items-center gap-4">
                <div className="md:w-1/2"></div>
                <div className="hidden md:block w-4 h-4 bg-gray-500 rounded-full z-10"></div>
                <div className="md:w-1/2">
                  <div className="bg-white brutalist-border border-[#FF5C8D] brutalist-shadow rounded-xl p-5">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-bold">2025.12</span>
                      <div className="bg-[#FF5C8D] text-white px-2 py-1 rounded text-xs font-bold">ONGOING</div>
                    </div>
                    <p className="text-gray-700">探索ai生成视频</p>
                  </div>
                </div>
              </div>
              
              {/* 2025年10月 - 支线任务 */}
              <div className="flex flex-col md:flex-row items-center gap-4">
                <div className="md:w-1/2"></div>
                <div className="hidden md:block w-4 h-4 bg-gray-500 rounded-full z-10"></div>
                <div className="md:w-1/2">
                  <div className="bg-white brutalist-border border-[#FF5C8D] brutalist-shadow rounded-xl p-5">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-bold">2025.10</span>
                      <div className="bg-[#FF5C8D] text-white px-2 py-1 rounded text-xs font-bold">ONGOING</div>
                    </div>
                    <p className="text-gray-700">入坑黄金，至今还在坑中</p>
                  </div>
                </div>
              </div>
              
              {/* 2025年8月 - 主线任务 */}
              <div className="flex flex-col md:flex-row items-center gap-4">
                <div className="md:w-1/2">
                  <div className="bg-white brutalist-border border-[#3D82F6] brutalist-shadow rounded-xl p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="bg-[#3D82F6] text-white p-1 rounded">
                        🚪
                      </div>
                      <span className="text-sm font-bold">2025.08</span>
                    </div>
                    <p className="text-gray-700">shein离职啦</p>
                  </div>
                </div>
                <div className="hidden md:block w-4 h-4 bg-gray-300 rounded-full z-10"></div>
                <div className="md:w-1/2"></div>
              </div>
              
              {/* 2025年1月 - 主线任务 */}
              <div className="flex flex-col md:flex-row items-center gap-4">
                <div className="md:w-1/2">
                  <div className="bg-white brutalist-border border-[#3D82F6] brutalist-shadow rounded-xl p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="bg-[#3D82F6] text-white p-1 rounded">
                        🏢
                      </div>
                      <span className="text-sm font-bold">2025.01</span>
                    </div>
                    <p className="text-gray-700">入职南京shein，商品产品经理</p>
                  </div>
                </div>
                <div className="hidden md:block w-4 h-4 bg-gray-300 rounded-full z-10"></div>
                <div className="md:w-1/2"></div>
              </div>
              
              {/* 2022年7月 - 主线任务 */}
              <div className="flex flex-col md:flex-row items-center gap-4">
                <div className="md:w-1/2">
                  <div className="bg-white brutalist-border border-[#3D82F6] brutalist-shadow rounded-xl p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="bg-[#3D82F6] text-white p-1 rounded">
                        🏢
                      </div>
                      <span className="text-sm font-bold">2022.07</span>
                    </div>
                    <p className="text-gray-700">入职政采云有限公司，电商产品经理</p>
                  </div>
                </div>
                <div className="hidden md:block w-4 h-4 bg-gray-300 rounded-full z-10"></div>
                <div className="md:w-1/2"></div>
              </div>
              
              {/* 2022年6月 - 主线任务 */}
              <div className="flex flex-col md:flex-row items-center gap-4">
                <div className="md:w-1/2">
                  <div className="bg-white brutalist-border border-[#3D82F6] brutalist-shadow rounded-xl p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="bg-[#3D82F6] text-white p-1 rounded">
                        🎓
                      </div>
                      <span className="text-sm font-bold">2022.06</span>
                    </div>
                    <p className="text-gray-700">硕士研究生毕业啦🎓～开始打工人生活</p>
                  </div>
                </div>
                <div className="hidden md:block w-4 h-4 bg-gray-300 rounded-full z-10"></div>
                <div className="md:w-1/2"></div>
              </div>
              
              {/* 2021年2月 - 支线任务 */}
              <div className="flex flex-col md:flex-row items-center gap-4">
                <div className="md:w-1/2"></div>
                <div className="hidden md:block w-4 h-4 bg-gray-300 rounded-full z-10"></div>
                <div className="md:w-1/2">
                  <div className="bg-white brutalist-border border-[#FFD600] brutalist-shadow rounded-xl p-5">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-bold">2021.02</span>
                      <div className="bg-[#FF5C8D] text-white px-2 py-1 rounded text-xs font-bold">ONGOING</div>
                    </div>
                    <p className="text-gray-700">入坑股票，至今还未回本</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Hobbies Content Section */}
      <div className="py-12 relative">
        <div className="bg-[#FFD600] brutalist-border brutalist-shadow rounded-xl p-4 mb-8 inline-block transform -skew-x-3">
          <h3 className="text-xl md:text-2xl font-bold text-black">个人爱好 | HOBBIES</h3>
        </div>
        
        <div className="space-y-12">
          <div className="flex flex-wrap gap-6">
            <div className="bg-white brutalist-border brutalist-shadow rounded-xl overflow-hidden max-w-md transition-transform duration-300 hover:scale-105">
              <img src="/images/sports.png" alt="运动" className="w-full h-72 object-cover" />
              <div className="p-4">
                <h4 className="text-lg font-bold">最爱的运动是骑车，距离最远的一次骑行是80km～</h4>
              </div>
            </div>
            <div className="bg-white brutalist-border brutalist-shadow rounded-xl overflow-hidden max-w-md transition-transform duration-300 hover:scale-105">
              <img src="/images/music.png" alt="音乐" className="w-full h-72 object-cover" />
              <div className="p-4">
                <h4 className="text-lg font-bold">热爱音乐，最喜欢的歌手是许嵩，愿望是和嵩哥合影～</h4>
              </div>
            </div>
          </div>
          

        </div>
      </div>
    </div>
  );
};

export default About;
