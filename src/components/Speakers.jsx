import React from 'react';

const Speakers = () => {
  const speakers = [
    {
      name: "Dr. Ana Kovačić",
      title: "Chief Technology Officer",
      company: "TechFlow Solutions",
      bio: "Passionate technology expert with 15+ years of experience in digital transformation and AI implementation.",
      image: "👩‍💼"
    },
    {
      name: "Marko Novak Petrov",
      title: "Innovation Director",
      company: "Digital Dynamics",
      bio: "Expert in Digital Marketing with a focus on data-driven customer acquisition and retention strategies.",
      image: "👨‍💻"
    },
    {
      name: "Sandra Svoboda",
      title: "Product Strategy Lead",
      company: "InnovateCorp",
      bio: "Senior Product Strategist specializing in market analysis and product development for emerging technologies.",
      image: "👩‍💼"
    },
    {
      name: "David Černý",
      title: "AI Research Scientist",
      company: "Future Labs",
      bio: "Leading AI researcher focused on machine learning applications in business communication and automation.",
      image: "👨‍🔬"
    }
  ];

  return (
    <section id="speakers" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="text-4xl lg:text-5xl font-bold text-orange-600 mb-16 text-center">
          Nadpis sekce
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {speakers.map((speaker, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <div className="h-64 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <span className="text-6xl">{speaker.image}</span>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {speaker.name}
                </h3>
                <p className="text-orange-600 font-semibold mb-1">
                  {speaker.title}
                </p>
                <p className="text-gray-600 text-sm mb-4">
                  {speaker.company}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {speaker.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;