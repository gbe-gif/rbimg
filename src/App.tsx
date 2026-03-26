import React from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Home as HomeIcon, Image as ImageIcon, Sparkles, Star, Heart, Crown } from 'lucide-react';

const navItems = [
  { path: '/', label: '홈', icon: HomeIcon },
  { path: '/bg', label: '배경', icon: ImageIcon },
  { path: '/page2', label: '비렉스', icon: Sparkles },
  { path: '/page3', label: '카엘리스', icon: Star },
  { path: '/page4', label: '필레온', icon: Crown },
  { path: '/page5', label: '엘리라', icon: Heart },
];

function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-white pb-20 font-sans text-gray-800">
      <main className="w-full max-w-5xl mx-auto p-4 md:p-6">
        {children}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#f8c2c2] shadow-[0_-4px_20px_rgba(248,194,194,0.2)] z-50">
        <div className="max-w-5xl mx-auto flex justify-around items-center h-16">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex flex-col items-center justify-center w-full h-full transition-colors duration-200 ${
                  isActive ? 'text-[#e4c48a]' : 'text-gray-400 hover:text-[#f8c2c2]'
                }`}
              >
                <item.icon className={`w-6 h-6 mb-1 ${isActive ? 'fill-[#e4c48a]/20' : ''}`} />
                <span className="text-[10px] font-medium">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}

function Home() {
  const characters = [
    { path: '/page2', img: 'https://gbe88.uk/thum/st1.webp', title: '비렉스' },
    { path: '/page3', img: 'https://gbe88.uk/thum/st2.webp', title: '카엘리스' },
    { path: '/page4', img: 'https://gbe88.uk/thum/st3.webp', title: '필레온' },
    { path: '/page5', img: 'https://gbe88.uk/thum/st4.webp', title: '엘리라' },
  ];

  return (
    <div className="flex flex-col items-center animate-in fade-in duration-500">
      <header className="text-center mb-10 mt-6">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 tracking-tight">
          <span className="text-[#e4c48a] block md:inline">&lt;악녀 사냥&gt;</span>
          <span className="block md:inline"> 이미지 모아보기</span>
        </h1>
        <p className="text-[#f8c2c2] font-medium">원하는 캐릭터를 선택해주세요</p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 w-full max-w-4xl">
        {characters.map((char, index) => (
          <Link 
            key={index} 
            to={char.path}
            className="group relative flex flex-col items-center bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#e4c48a]/50"
          >
            <div className="w-full aspect-square overflow-hidden bg-gray-50">
              <img 
                src={char.img} 
                alt={char.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
              <span className="text-white font-medium px-4 py-2 bg-[#e4c48a]/90 rounded-full text-sm shadow-lg backdrop-blur-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                누르면 이미지 모아보기로 이동
              </span>
            </div>
            <div className="p-4 w-full text-center bg-white">
              <p className="text-sm font-medium text-gray-500 group-hover:text-[#f8c2c2] transition-colors">
                클릭하여 이동하기
              </p>
            </div>
          </Link>
        ))}
      </div>

      <div className="w-full max-w-4xl mt-6 md:mt-8">
        <Link 
          to="/bg"
          className="group relative flex flex-col items-center bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#e4c48a]/50"
        >
          <div className="w-full aspect-[21/9] overflow-hidden bg-gray-50">
            <img 
              src="https://gbe88.uk/thum/base.webp" 
              alt="배경 이미지" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
            <span className="text-white font-medium px-4 py-2 bg-[#e4c48a]/90 rounded-full text-sm shadow-lg backdrop-blur-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              누르면 장소 이미지 보기로 이동
            </span>
          </div>
          <div className="p-4 w-full text-center bg-white">
            <p className="text-sm font-medium text-gray-500 group-hover:text-[#f8c2c2] transition-colors">
              장소 이미지 보기
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}

function Gallery({ prefix, count, title, startIdx = 1 }: { prefix: string; count: number; title: string; startIdx?: number }) {
  const images = Array.from({ length: count }, (_, i) => `https://gbe88.uk/rb/${prefix}_${i + startIdx}.webp`);

  return (
    <div className="animate-in slide-in-from-bottom-4 fade-in duration-500">
      <header className="text-center mb-8 mt-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          <span className="text-[#e4c48a]">{title}</span> 갤러리
        </h2>
        <div className="w-16 h-1 bg-[#f8c2c2] mx-auto mt-4 rounded-full"></div>
      </header>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {images.map((src, index) => (
          <div key={index} className="break-inside-avoid rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-gray-50 border border-gray-100">
            <img
              src={src}
              alt={`${title} 이미지 ${index + 1}`}
              className="w-full h-auto object-contain"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bg" element={<Gallery prefix="BG" count={12} startIdx={14} title="배경 이미지" />} />
          <Route path="/page2" element={<Gallery prefix="A" count={9} title="비렉스" />} />
          <Route path="/page3" element={<Gallery prefix="B" count={9} title="카엘리스" />} />
          <Route path="/page4" element={<Gallery prefix="C" count={9} title="필레온" />} />
          <Route path="/page5" element={<Gallery prefix="D" count={13} title="엘리라" />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
