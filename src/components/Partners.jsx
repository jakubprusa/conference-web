import React from 'react';

const Partners = () => {
  const partners = [
    { name: "TechCorp", logo: "🏢" },
    { name: "InnovateLab", logo: "🔬" },
    { name: "DataFlow", logo: "📊" },
    { name: "CloudTech", logo: "☁️" },
    { name: "DevTools", logo: "⚡" },
    { name: "FutureTech", logo: "🚀" },
    { name: "AILabs", logo: "🤖" },
    { name: "SmartSoft", logo: "💡" },
    { name: "CodeMaster", logo: "💻" },
    { name: "DigitalWave", logo: "🌊" },
    { name: "NextGen", logo: "🎯" },
    { name: "TechFlow", logo: "⚙️" }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="text-4xl lg:text-5xl font-bold text-orange-600 mb-16 text-center">
          Nadpis sekce
        </h2>
        
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mb-4 group-hover:bg-orange-600 transition-colors">
                <span className="text-2xl text-white">{partner.logo}</span>
              </div>
              <span className="text-sm text-gray-600 text-center font-medium">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;