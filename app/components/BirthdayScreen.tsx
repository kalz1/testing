"use client";

import { useEffect, useState } from 'react';

export default function BirthdayScreen() {
  const [animateIn, setAnimateIn] = useState<boolean>(false);
  const [activeSlide, setActiveSlide] = useState<number>(0);

  useEffect(() => {
    setAnimateIn(true);
  }, []);

  const nextSlide = () => {
    if (activeSlide < 2) setActiveSlide(activeSlide + 1);
  };

  const prevSlide = () => {
    if (activeSlide > 0) setActiveSlide(activeSlide - 1);
  };

  return (
    <div 
      className={`min-h-screen flex flex-col items-center justify-center p-6 transition-opacity duration-1000 ease-out relative overflow-hidden bg-[url('/testing2.png')] bg-cover bg-center bg-no-repeat ${
        animateIn ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Background Ornaments */}
      <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full opacity-30 blur-2xl animate-pulse" style={{ backgroundColor: '#FFA5D6' }}></div>
      <div className="absolute -bottom-10 -right-10 w-52 h-52 rounded-full opacity-30 blur-2xl animate-bounce" style={{ backgroundColor: '#CED1F8', animationDuration: '6s' }}></div>

      {/* Main Card Container */}
      <div className="max-w-xl w-full relative z-10 group">
        
        {/* Tombol Navigasi Kiri (Hanya muncul jika bukan slide pertama) */}
        <button 
          onClick={prevSlide}
          className={`absolute left-0 top-1/2 -translate-y-1/2 -ml-4 md:-ml-12 w-10 h-10 bg-white/80 rounded-full shadow-md flex items-center justify-center text-[#FFA5D6] hover:bg-[#FFA5D6] hover:text-white transition-all z-20 ${activeSlide === 0 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        >
          ❮
        </button>

        {/* Sliding Frame */}
        <div className="overflow-hidden rounded-2xl shadow-xl bg-white/75 border backdrop-blur-sm" style={{ borderColor: '#ECD2E0' }}>
          
          {/* Track yang bergeser ke kiri/kanan */}
          <div 
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${activeSlide * 100}%)` }}
          >
            
            {/* SLIDE 1: Halaman Pembuka */}
            <div className="w-full flex-shrink-0 p-8 md:p-12 text-center space-y-6">
              <div style={{ backgroundColor: '#FFD6EE' }} className="w-20 h-20 rounded-full mx-auto flex items-center justify-center shadow-inner">
                <span className="text-4xl animate-heartbeat">💝</span>
              </div>
              <h1 style={{ color: '#FFA5D6' }} className="text-3xl md:text-4xl font-black tracking-tight font-serif drop-shadow-sm">
                Selamat Ulang Tahun!
              </h1>
              <div style={{ borderColor: '#ECD2E0' }} className="text-slate-700 text-sm md:text-base leading-relaxed space-y-4 font-light text-left border-t border-b py-6">
                <p>
                  HALOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO SEENGGG
                </p>
                <p>
                  Dikarenakan hari ini kamu ulang tahun aku mau ngasih surprise web ini tapi telat..., maaf banget ya jujur da agak lupa dikit cara bikinnya jujur...
                </p>
              </div>
              <div className="pt-2 text-sm font-medium text-[#A7ABDE] animate-pulse">
                Geser ke kanan ya... ❯
              </div>
            </div>

            {/* SLIDE 2: Halaman Surat / Curhat */}
            <div className="w-full flex-shrink-0 p-8 md:p-12 text-center space-y-6">
              <div style={{ backgroundColor: '#CED1F8' }} className="w-16 h-16 rounded-full mx-auto flex items-center justify-center shadow-inner mb-2">
                <span className="text-3xl">💌</span>
              </div>
              <h2 style={{ color: '#A7ABDE' }} className="text-2xl font-bold tracking-tight font-serif">
                hehe
              </h2>
              <div className="text-slate-700 text-sm md:text-base leading-relaxed space-y-4 font-light text-left bg-white/50 p-6 rounded-xl border border-dashed" style={{ borderColor: '#CED1F8' }}>
                <p>
                  Ada banyak banget hal yang pengen aku sampein sih sebenernya. tapi kapan-kapan aja deh hohoho, 
                </p>
                <p>
                  Sebelumnya mau ngomong makasi ke kamu yang udah nemenin aku terus walaupun aku nyebelin dan sering nyusahin kamu tapi aku bener bener sayang banget sama kamu, makasi da bertahan terus walaupun banyak hal yang udah kita laluin akhir-akhir ini. jujur gatau mau ngomong apa gapernah ngasi long text. Tapi di kemudian hari nanti semoga kamu bisa ngelakuin apa yang kamu mau, dapet semua yang kamu mau, dan segala hal yang kamu cita-citakan. sama makasi ya da ada terus dikehidupan aku. jangan mara mara terus ya dan jangan cuek ke aku, aku sedi hehe
                </p>
                <p>
                  Jangan bosen bosen ya kyl... 
                </p>
              </div>
            </div>

            {/* SLIDE 3: Harapan & Tombol Hadiah */}
            <div className="w-full flex-shrink-0 p-8 md:p-12 text-center space-y-6 flex flex-col justify-center items-center">
              <div style={{ backgroundColor: '#ECD2E0' }} className="w-16 h-16 rounded-full mx-auto flex items-center justify-center shadow-inner mb-2">
                <span className="text-3xl">✨</span>
              </div>
              <h2 style={{ color: '#FFA5D6' }} className="text-2xl font-bold tracking-tight font-serif">
                ngok
              </h2>
              <div className="text-slate-700 text-sm md:text-base leading-relaxed font-light mb-6">
                <p>
                  Semoga di umur yang bertambah sekarang dan tahun tahun kedepannya, bisa raih semua cita" kamu, makin cantik, , gak mara", dilancarin semuanya dan semoga ndak stress" lagi jalanin ini semua 
                  
                </p>
                <p className="font-semibold italic mt-6" style={{ color: '#A7ABDE' }}>
                  loveuusoomuch seng, maaf pendek aja gatau mau ngomong apa jujur, pokoknya all the best yh seng.
                </p>
              </div>
              
              <button
                style={{ backgroundColor: '#FFA5D6' }}
                className="mt-4 text-white font-bold py-3 px-8 rounded-full shadow-lg shadow-[#FFA5D6]/40 hover:brightness-105 active:scale-95 transition duration-300 text-xs uppercase tracking-widest"
                onClick={() => alert('Happy birthday seng! I love you! 💖✨ hadiahnya pas ketemu yh')}
              >
                Buka Hadiah Kecil 🎁
              </button>
            </div>

          </div>
        </div>

        {/* Tombol Navigasi Kanan (Hanya muncul jika bukan slide terakhir) */}
        <button 
          onClick={nextSlide}
          className={`absolute right-0 top-1/2 -translate-y-1/2 -mr-4 md:-mr-12 w-10 h-10 bg-white/80 rounded-full shadow-md flex items-center justify-center text-[#FFA5D6] hover:bg-[#FFA5D6] hover:text-white transition-all z-20 ${activeSlide === 2 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        >
          ❯
        </button>
      </div>

      {/* Indikator Navigasi Bawah (Dots) */}
      <div className="mt-8 flex space-x-3 relative z-10">
        {[0, 1, 2].map((index) => (
          <button
            key={index}
            onClick={() => setActiveSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeSlide === index 
                ? 'bg-[#FFA5D6] scale-125 w-6' 
                : 'bg-[#ECD2E0] hover:bg-[#FFD6EE]'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}