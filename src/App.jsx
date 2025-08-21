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
              <a href="#home" className="text-gray-700 hover:text-orange-600">Úvod</a>
              <a href="#about" className="text-gray-700 hover:text-orange-600">O konferenci</a>
              <a href="#program" className="text-gray-700 hover:text-orange-600">Program</a>
              <a href="#speakers" className="text-gray-700 hover:text-orange-600">Řečníci</a>
              <a href="#pricing" className="text-gray-700 hover:text-orange-600">Vstupenky</a>
              <a href="#contact" className="text-gray-700 hover:text-orange-600">Kontakt</a>
            </div>
            <a href="#pricing" className="bg-black text-white px-6 py-2 rounded-full text-sm hover:bg-gray-800 transition-colors">
              Chci se přihlásit
            </a>
          </div>
        </nav>

        {/* Hero content with container and reduced height */}
        <div className="max-w-screen-xl mx-auto px-6 lg:px-12 py-20 lg:py-32">
          <div className="flex items-center justify-between">
            <div className="max-w-2xl">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Mluvíte. Ale slyší vás?
              </h1>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Každý z nás umí komunikovat. Ale málokdo ví, jak z komunikace vytěžit maximum – jak mluvit tak, aby vám lidé rozuměli, důvěřovali vám a dělali to, co potřebujete.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Udělejte si čas 26. listopadu. Pro sebe, pro svůj tým, pro obchodní partnery, pro lepší výsledky.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Pět špičkových expertů vám během jednoho dne ukáže, jak z dobré komunikace udělat skvělou.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Přijďte si pro tipy, které byste běžně sbírali roky. Žádná ochutnávka – rovnou plná porce know-how.
              </p>
              <a href="#pricing" className="bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-700 transition-colors inline-block">
                Chci se přihlásit
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
                Komunikace, která šlape na jedničku
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Představte si, že po vašem e-mailu kandidát sám zavolá s tím, že má o pozici zájem.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Že váš tým konečně pochopí, co od něj chcete, a přestane se ptát na detaily.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Že zákazník po nepříjemném rozhovoru napíše: „Díky za upřímnost, takto to vyřešíme."
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Že vaše prezentace na poradě skončí okamžitým souhlasem s rozpočtem.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Tohle nejsou náhody. Tohle je nová úroveň komunikace, která funguje.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Na naší masterclass získáte konkrétní techniky, díky kterým se z běžných rozhovorů stanou momenty, které posunou vaše obchody i týmy dopředu. Bez zbytečných keců, s praktickými nástroji, které použijete hned zítra.
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
          <h2 className="text-4xl lg:text-5xl font-bold text-orange-600 mb-8 text-center">
            Jeden den. Pět expertů. Stovky skvělých tipů
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            {[
              { 
                icon: "🗣️", 
                title: "Jak říct klientovi nepříjemné věci, aniž byste ztratili obchod",
                speaker: "Olga Vlachynská, terapeutka a průvodkyně náročnými rozhovory",
                desc: "Umíte mluvit s klienty slušně a profesionálně. Olga vám ukáže, jak mluvit i o problémech tak, aby to vedlo ke spolupráci, ne ke ztrátě zakázky."
              },
              { 
                icon: "🎯", 
                title: "Jak udělat z každého kontaktu s kandidátem konkurenční výhodu",
                speaker: "Hanka Slačálková, expertka na značku zaměstnavatele",
                desc: "Pravděpodobně píšete kandidátům zdvořilé odpovědi. Hanka vám ukáže, jak z každé odpovědi udělat důvod, proč si vás vybrat před konkurencí."
              },
              { 
                icon: "⚙️", 
                title: "Jak ušetřit hodiny času při komunikaci s klienty",
                speaker: "Martin Kavka, expert na efektivní komunikaci",
                desc: "Možná jste zruční v e-mailech. Martin vám ukáže, jak postavit systém, díky kterému budete komunikovat rychleji a přitom efektivněji."
              },
              { 
                icon: "🤝", 
                title: "Jak vyřešit konflikt s partnerem a posílit přitom vztah",
                speaker: "Hana Švábíková, specialistka na nenásilnou komunikaci",
                desc: "Konflikty nejspíš nějak dokážete řešit. Hana vám ukáže, jak k nim přistupovat tak, aby z nich vznikla ještě silnější spolupráce."
              },
              { 
                icon: "🎭", 
                title: "Jak prezentovat tak, aby si vás klienti pamatovali měsíce",
                speaker: "Václav Strnadel, Business Storytelling & Leadership Trainer",
                desc: "Víme, že prezentovat umíte. Ale Václav vám ukáže, jak z prezentace udělat zážitek, po kterém klient řekne \"ano\", aniž by nad ním musel vůbec přemýšlet."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="text-3xl flex-shrink-0 mt-1">{feature.icon}</div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">{feature.title}</h3>
                    <p className="text-orange-600 font-semibold mb-4 text-sm">{feature.speaker}</p>
                    <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
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
              { time: "09:00", title: "Úvod konference a přivítání", speaker: "", type: "start" },
              { time: "09:00 - 10:00", title: "Jak říct klientovi nepříjemné věci, aniž byste ztratili obchod", speaker: "Olga Vlachynská", type: "talk" },
              { time: "10:00 - 10:15", title: "Pauza - káva a občerstvení", speaker: "", type: "break" },
              { time: "10:15 - 11:15", title: "Jak udělat z každého kontaktu s kandidátem konkurenční výhodu", speaker: "Hana Slačálková", type: "talk" },
              { time: "11:20 - 12:20", title: "Jak ušetřit hodiny času při komunikaci s klienty", speaker: "Martin Kavka", type: "talk" },
              { time: "12:20 - 13:30", title: "Obědová pauza", speaker: "", type: "break" },
              { time: "13:30 - 14:30", title: "Jak vyřešit konflikt s partnerem a posílit přitom vztah", speaker: "Hana Švábíková", type: "talk" },
              { time: "14:30 - 14:45", title: "Pauza - káva a občerstvení", speaker: "", type: "break" },
              { time: "14:45 - 15:45", title: "Jak prezentovat tak, aby si vás klienti pamatovali měsíce", speaker: "Václav Strnadel", type: "talk" },
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
            Lektoři, kteří mají výsledky
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {[
              {
                name: "Olga Vlachynská",
                title: "Terapeutka a průvodkyně náročnými rozhovory",
                bio: "Používá zdravý rozum, silné otázky a schopnost naslouchat – a díky tomu z vás dostane to podstatné. Navíc umí složité věci vysvětlit tak, aby je pochopila i vaše babička.",
                image: "/speakers/Olinka-Vlachynská.jpg"
              },
              {
                name: "Hanka Slačálková",
                title: "Expertka na značku zaměstnavatele",
                bio: "Ukazuje firmám, že značku netvoří jen kampaně, ale každý drobný moment kontaktu. Specializuje se na to, jak z obyčejné reakce na e-mail udělat zážitek, který si lidé zapamatují.",
                image: "/speakers/Hana-Slačálková.jpg"
              },
              {
                name: "Martin Kavka",
                title: "Expert na efektivní komunikaci",
                bio: "Pomáhá firmám, úřadům i nezávislým profíkům psát tak, aby jejich texty lidé četli, rozuměli jim a jednali podle nich. Věří, že dobrá komunikace stojí na systému, ne náhodě.",
                image: "/speakers/Martin-Kavka.jpg"
              },
              {
                name: "Václav Strnadel",
                title: "Business Storytelling & Leadership Trainer",
                bio: "Pomáhá lídrům a expertům měnit složitá data a myšlenky v příběhy, které lidé hned pochopí. Specializuje se na to, jak z obyčejné prezentace udělat zážitek.",
                image: "/speakers/Václav-Strnadel.jpg"
              },
              {
                name: "Hana Švábíková",
                title: "Specialistka na nenásilnou komunikaci",
                bio: "Učí, že i ta nejtěžší zpráva se dá říct tak, aby druhý slyšel, pochopil a chtěl spolupracovat. Nenásilná komunikace pro ni není jen technika, ale způsob myšlení.",
                image: "/speakers/Hana-Švábíková.jpg"
              }
            ].map((speaker, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow flex flex-col h-full">
                <div className="h-64 relative overflow-hidden bg-gray-100 flex-shrink-0">
                  <img 
                    src={speaker.image} 
                    alt={speaker.name}
                    className="w-full h-full object-cover object-center"
                    style={{ objectPosition: 'center 20%' }}
                  />
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">
                    {speaker.name.split(' ').map((part, i) => (
                      <span key={i}>
                        {part}
                        {i < speaker.name.split(' ').length - 1 && <br />}
                      </span>
                    ))}
                  </h3>
                  <p className="text-orange-600 font-semibold mb-4 text-sm">
                    {speaker.title}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed flex-grow">
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
            Často kladené otázky
          </h2>
          
          <div className="space-y-4">
            {[
              { q: "Pro koho je masterclass určena?", a: "Pro manažery, HR specialisty, obchodníky, podnikatele a všechny, kteří každý den komunikují s klienty, kolegy, kandidáty nebo obchodními partnery." },
              { q: "Budou k dispozici materiály?", a: "Ano, všichni účastníci získají přístup k prezentacím, šablonám a praktickým nástrojům." },
              { q: "Mohu získat certifikát?", a: "Ano, každý účastník obdrží certifikát o absolvování masterclass." },
              { q: "Co když se nebudu moct zúčastnit?", a: "Pokud máte standardní lístek, získáte přístup k záznamu celé akce." }
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
            Kontakt a místo konání
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-12">
              {/* Kde a kdy se potkáme */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Kde a kdy se potkáme
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Datum</h4>
                      <p className="text-gray-600">26. listopadu 2024</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Místo</h4>
                      <p className="text-gray-600">Kino Přítomnost, Praha</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Čas</h4>
                      <p className="text-gray-600">09:30 – 17:00</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Kontakt */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Kontakt
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">E-mail</h4>
                      <p className="text-gray-600">masterclass@rproduction.cz</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Telefon</h4>
                      <p className="text-gray-600">+420 xxx xxx xxx</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1280.2758455901289!2d14.449765!3d50.082329!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b94f4a0a239d7%3A0x6cf2058a3213d0c7!2sKino%20P%C5%99%C3%ADtomnost!5e0!3m2!1scs!2scz!4v1702889912345!5m2!1scs!2scz"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                OP video a stream
              </a>
            </div>
            <div>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                ZOOÚ video a stream
              </a>
            </div>
            <div>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Obchodní podmínky
              </a>
            </div>
            <div>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Zásady ochrany osobních údajů
              </a>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8">
            <div className="text-center">
              <h4 className="text-white font-semibold mb-2">Pořadatel</h4>
              <p className="text-gray-400 text-sm mb-1">Rproduction s.r.o.</p>
              <p className="text-gray-400 text-sm mb-4">
                Pomáháme značkám a firmám růst díky obsahu, komunitě a chytré komunikaci.
              </p>
              <p className="text-gray-400 text-sm">
                © 2025 Rproduction. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App
