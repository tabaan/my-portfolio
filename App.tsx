
import React, { useState } from 'react';
import { Tab } from './types';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.HOME);

  const renderContent = () => {
    switch (activeTab) {
      case Tab.HOME:
        return <Home onNavigate={setActiveTab} />;
      case Tab.ABOUT:
        return <About />;
      case Tab.PRODUCTS:
        return <Products />;
      default:
        return <Home onNavigate={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="flex-grow pt-24 pb-16 px-4 md:px-8 max-w-7xl mx-auto w-full">
        {activeTab === Tab.PRODUCTS && (
          /* Vibe Workshop Section */
          <div className="mt-12 mb-16">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  我的 <span className="bg-[#FFD600] px-4 py-1 border border-black transform -skew-x-6">Workshop</span>
                </h1>
                <p className="text-lg text-gray-600 mb-6">
                  工作成果、以及和ai大聪明聊出来的一些代码边角料～
                </p>
              </div>
              <div className="w-full md:w-auto">
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="搜索产品..." 
                    className="brutalist-border rounded-lg px-4 py-2 pl-10 w-full md:w-64"
                  />
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                    🔍
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {renderContent()}
      </main>
    </div>
  );
};

export default App;
