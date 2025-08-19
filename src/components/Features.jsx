import React from 'react';

const Features = () => {
  const features = [
    {
      icon: "📈",
      title: "Advanced AI Applications",
      description: "Learn about cutting-edge AI applications and their real-world implementations in business scenarios."
    },
    {
      icon: "🤖",
      title: "Automation & Robotics",
      description: "Discover how automation and robotics are transforming industries and improving efficiency."
    },
    {
      icon: "🏆",
      title: "Competitive Advantage",
      description: "Gain insights into leveraging technology for competitive advantage in your industry."
    },
    {
      icon: "💼",
      title: "Future of Work",
      description: "Explore how the workplace is evolving and what skills will be essential in the future."
    },
    {
      icon: "📊",
      title: "Data-Driven Decisions",
      description: "Master the art of making informed decisions based on data analytics and insights."
    },
    {
      icon: "🌐",
      title: "Ethical AI & Governance",
      description: "Understand the importance of ethical AI development and governance frameworks."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="text-4xl lg:text-5xl font-bold text-orange-600 mb-16 text-center">
          Nadpis sekce
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">{feature.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;