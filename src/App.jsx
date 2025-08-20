import React, { useState } from 'react';

function App() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-orange-50 to-orange-100 overflow-hidden">
        {/* Navigation with white background */}
        <nav className="bg-white shadow-sm relative z-10">
          <div className="max-w-screen-xl mx-auto px-6 lg:px-12 py-4 flex justify-between items-center">
            <div className="flex space-x-8 text-sm">
              <a href="#home" className="text-gray-700 hover:text-orange-600">Home</a>
              <a href="#about" className="text-gray-700 hover:text-orange-600">About</a>
              <a href="#program" className="text-gray-700 hover:text-orange-600">Program</a>
              <a href="#speakers" className="text-gray-700 hover:text-orange-600">Speakers</a>
              <a href="#pricing" className="text-gray-700 hover:text-orange-600">Pricing</a>
              <a href="#contact" className="text-gray-700 hover:text-orange-600">Contact</a>
            </div>
            <a href="#pricing" className="bg-black text-white px-6 py-2 rounded-full text-sm hover:bg-gray-800 transition-colors">
              Register now
            </a>
          </div>
        </nav>

        {/* Hero content with container and reduced height */}
        <div className="max-w-screen-xl mx-auto px-6 lg:px-12 py-20 lg:py-32">
          <div className="flex items-center justify-between">
            <div className="max-w-lg">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Naučte se moderně komunikovat!
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a href="#pricing" className="bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-700 transition-colors inline-block">
                Secure your spot
              </a>
            </div>

            <div className="hidden lg:block relative">
              <div className="w-80 h-80 bg-green-800 rounded-full flex items-center justify-center">
                <span className="text-white text-5xl font-bold">fotka</span>
              </div>
              <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-orange-200 rounded-full opacity-80"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-orange-600 mb-8">
                Nadpis sekce
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                This helps your team communicate with internal staff, external vendors, suppliers, and distributors.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                With advanced distribution and authentication, they check that enables organizations have feedback from all parts.
              </p>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg p-8 h-80 flex items-center justify-center">
                <div className="text-white text-center">
                  <h3 className="text-xl font-semibold mb-2">Conference Preview</h3>
                  <p className="text-blue-100">Interactive presentation content</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-orange-600 mb-16 text-center">
            Nadpis sekce
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "📈", title: "Advanced AI Applications", desc: "Learn about cutting-edge AI applications and their real-world implementations." },
              { icon: "🤖", title: "Automation & Robotics", desc: "Discover how automation and robotics are transforming industries." },
              { icon: "🏆", title: "Competitive Advantage", desc: "Gain insights into leveraging technology for competitive advantage." },
              { icon: "💼", title: "Future of Work", desc: "Explore how the workplace is evolving and what skills will be essential." },
              { icon: "📊", title: "Data-Driven Decisions", desc: "Master the art of making informed decisions based on data analytics." },
              { icon: "🌐", title: "Ethical AI & Governance", desc: "Understand the importance of ethical AI development and governance." }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-6">
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Section */}
      <section id="program" className="py-20 bg-white">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-orange-600 mb-16 text-center">
            Program konference
          </h2>
          
          <div className="space-y-4">
            {[
              { time: "09:00", title: "Kávíčka na bílém, úsměv na všech", speaker: "", type: "start" },
              { time: "09:00 - 10:00", title: "Terapie a průvodkyně náročnými rozhovory", speaker: "Olinka Vlachynská", type: "talk" },
              { time: "10:00 - 10:15", title: "Pauza na proklepání poznatků", speaker: "", type: "break" },
              { time: "10:15 - 11:15", title: "Expertka na značku zaměstnavatele", speaker: "Hana Slačálková", type: "talk" },
              { time: "11:20 - 12:20", title: "Expert na efektivní komunikaci", speaker: "Martin Kavka", type: "talk" },
              { time: "12:20 - 13:30", title: "Pauza na oběd a síťování", speaker: "", type: "break" },
              { time: "13:30 - 14:30", title: "Specialistka na nenásilnou komunikaci", speaker: "Hana Švábíková", type: "talk" },
              { time: "14:30 - 14:45", title: "Kafíčko a třeba něco sladkého", speaker: "", type: "break" },
              { time: "14:45 - 15:45", title: "Business Storytelling & Leadership Trainer", speaker: "Václav Strnadel", type: "talk" },
              { time: "16:00", title: "Networking a volná zábava - teď už si jen povídejte!", speaker: "", type: "networking" }
            ].map((item, index) => (
              <div 
                key={index} 
                className={`flex items-center p-6 rounded-lg border-l-4 ${
                  item.type === 'start' ? 'border-green-500' :
                  item.type === 'talk' ? 'border-orange-500' :
                  item.type === 'networking' ? 'border-purple-500' :
                  'border-gray-300'
                } bg-white shadow-sm hover:shadow-md transition-shadow`}
              >
                <div className="flex-shrink-0 w-32">
                  <span className="text-lg font-semibold text-gray-900">
                    {item.time}
                  </span>
                </div>
                
                <div className="flex-grow ml-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {item.title}
                  </h3>
                  {item.speaker && (
                    <p className="text-gray-600">
                      {item.speaker}
                    </p>
                  )}
                </div>
                
                <div className="flex-shrink-0">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    item.type === 'start' ? 'text-green-600 bg-green-50' :
                    item.type === 'talk' ? 'text-orange-600 bg-orange-50' :
                    item.type === 'networking' ? 'text-purple-600 bg-purple-50' :
                    'text-gray-500 bg-gray-50'
                  }`}>
                    {item.type === 'start' ? 'Start' :
                     item.type === 'talk' ? 'Přednáška' :
                     item.type === 'networking' ? 'Networking' :
                     item.type === 'break' ? 'Pauza' :
                     'Event'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      <section id="speakers" className="py-20 bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-orange-600 mb-16 text-center">
            Naši řečníci
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {[
              {
                name: "Martin Kavka",
                title: "Expert na efektivní komunikaci",
                bio: "Martin pomáhá profesionálům a značkám psát tak, aby jejich texty lidé četli, rozuměli jim a jednali podle nich. Věří, že v době informačního přetížení jsou jasnost a srozumitelnost našimi superschopnostmi.",
                image: "/speakers/Martin-Kavka.jpg"
              },
              {
                name: "Hanka Slačálková",
                title: "Expertka na značku zaměstnavatele",
                bio: "Hanka ukazuje firmám, že značku netvoří jen kampaně, ale každý drobný moment kontaktu. Specializuje se na to, jak z obyčejné reakce udělat zážitek, který si lidé zapamatují.",
                image: "/speakers/Hana-Slačálková.jpg"
              },
              {
                name: "Hana Švábíková",
                title: "Specialistka na nenásilnou komunikaci",
                bio: "Hana učí, že i ta nejtěžší zpráva se dá říct tak, aby druhý slyšel, chápal a chtěl spolupracovat. Pomáhá týmům zklidnit konfliktní situace a hledat porozumění místo sporu.",
                image: "/speakers/Hana-Švábíková.jpg"
              },
              {
                name: "Olinka Vlachynská",
                title: "Terapeutka a průvodkyně náročnými rozhovory",
                bio: "Olinka používá zdravý rozum, silné otázky a schopnost naslouchat. Umí složité věci vysvětlit jednoduše a provede vás nepříjemnými rozhovory s respektem a jistotou.",
                image: "/speakers/Olinka-Vlachynská.jpg"
              },
              {
                name: "Václav Strnadel",
                title: "Business Storytelling & Leadership Trainer",
                bio: "Vašek pomáhá lídrům měnit složitá data v příběhy, které lidé chápou a pamatují si je. Specializuje se na to, jak z obyčejné prezentace udělat nezapomenutelný zážitek.",
                image: "/speakers/Václav-Strnadel.jpg"
              }
            ].map((speaker, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <div className="h-64 relative overflow-hidden bg-gray-100">
                  <img 
                    src={speaker.image} 
                    alt={speaker.name}
                    className="w-full h-full object-cover object-center"
                    style={{ objectPosition: 'center 20%' }}
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {speaker.name}
                  </h3>
                  <p className="text-orange-600 font-semibold mb-4 text-sm">
                    {speaker.title}
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

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-orange-600 mb-16 text-center">
            Nadpis sekce
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Standard Pass", price: "$299", popular: false, features: ["All Conference Access", "Lunch & Coffee Breaks", "Digital Materials", "Certificate of Attendance"] },
              { name: "Pro Pass", price: "$599", popular: true, features: ["All Standard Pass Benefits", "Premium Workshop Access", "1-on-1 Speaker Meetings", "Priority Seating", "Exclusive Pro Materials"] },
              { name: "VIP Pass", price: "$999", popular: false, features: ["All Pro Pass Benefits", "VIP Networking Dinner", "Backstage Speaker Access", "Personal Conference Guide", "Premium Gift Package"] }
            ].map((plan, index) => (
              <div key={index} className={`relative rounded-xl p-8 ${plan.popular ? 'bg-orange-50 border-2 border-orange-200 transform scale-105' : 'bg-white border border-gray-200'} shadow-lg hover:shadow-xl transition-all`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-orange-600 text-white px-6 py-2 rounded-full text-sm font-semibold">Most Popular</span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className="w-full py-4 px-6 rounded-lg font-semibold text-lg transition-colors bg-gray-900 text-white hover:bg-gray-800">
                  {index === 1 ? "Go pro" : index === 2 ? "UNLOCK VIP" : "Register Now"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-orange-600 mb-16 text-center">
            Nadpis sekce
          </h2>
          
          <div className="space-y-4">
            {[
              { q: "When and where is the Tech Way Conference taking place?", a: "The conference will be held on March 15, 2024, at the Convention Center in downtown Prague." },
              { q: "What topics will be covered at the conference?", a: "We'll cover modern communication strategies, AI applications, digital transformation, automation, and the future of work." },
              { q: "How can I register for the conference?", a: "You can register directly on our website by selecting your preferred ticket type and completing the payment process." }
            ].map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 focus:outline-none transition-colors flex justify-between items-center"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="text-lg font-semibold text-gray-900">{faq.q}</span>
                  <svg className={`w-6 h-6 text-gray-500 transform transition-transform ${openFaq === index ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4 bg-gray-50">
                    <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-orange-600 mb-16 text-center">
            Kontakt
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Visit Our Conference Location
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                    <p className="text-gray-600">
                      Prague Convention Center<br />
                      5. května 65, 140 21 Praha 4<br />
                      Czech Republic
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                    <p className="text-gray-600">+420 123 456 789</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600">info@techconference.com</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-semibold text-gray-900 mb-4">Transportation</h4>
                <div className="space-y-2 text-gray-600">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-orange-600 rounded-full"></span>
                    <span>Metro: Line C, Budějovická Station (5 min walk)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-orange-600 rounded-full"></span>
                    <span>Parking: On-site parking available</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-orange-600 rounded-full"></span>
                    <span>Airport: 25 minutes from Václav Havel Airport</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="h-80 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
                <div className="text-center text-blue-800">
                  <svg className="w-16 h-16 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <h3 className="text-xl font-semibold mb-2">Interactive Map</h3>
                  <p className="text-blue-600">Conference Location Marker</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Hack Your Way Into</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Subscribe to our newsletter for the latest updates about upcoming conferences.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-grow px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-orange-600"
                />
                <button className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-400 text-sm text-center">
              © 2024 Tech Conference. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App
