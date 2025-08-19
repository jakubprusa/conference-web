import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 overflow-hidden">
      <nav className="flex justify-between items-center p-6 relative z-10">
        <div className="flex space-x-8 text-sm">
          <a href="#home" className="text-gray-700 hover:text-orange-600">Home</a>
          <a href="#program" className="text-gray-700 hover:text-orange-600">Program</a>
          <a href="#speakers" className="text-gray-700 hover:text-orange-600">Speakers</a>
          <a href="#pricing" className="text-gray-700 hover:text-orange-600">Pricing</a>
          <a href="#contact" className="text-gray-700 hover:text-orange-600">Contact</a>
          <a href="#faq" className="text-gray-700 hover:text-orange-600">FAQ</a>
        </div>
        <button className="bg-black text-white px-6 py-2 rounded-full text-sm hover:bg-gray-800 transition-colors">
          Register now
        </button>
      </nav>

      <div className="flex items-center justify-between px-6 lg:px-12 pt-20 pb-32 relative z-10">
        <div className="max-w-lg">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Naučte se moderně komunikovat!
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
          </p>
          <button className="bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-700 transition-colors">
            Secure your spot
          </button>
        </div>

        <div className="hidden lg:block relative">
          <div className="w-96 h-96 bg-green-800 rounded-full flex items-center justify-center">
            <span className="text-white text-6xl font-bold">fotka</span>
          </div>
          <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-orange-200 rounded-full opacity-80"></div>
          <div className="absolute -top-8 -left-8 w-32 h-32 bg-orange-300 rounded-full opacity-60"></div>
        </div>
      </div>

      <div className="absolute top-0 right-0 w-full h-full">
        <svg className="absolute top-20 right-20 opacity-10" width="200" height="300" viewBox="0 0 200 300" fill="none">
          <path d="M50 20 Q 150 50 100 150 T 150 250" stroke="#F97316" strokeWidth="3" fill="none"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;