import React, { useState } from 'react';
import CookieConsent from './components/CookieConsent';

function App() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Google Analytics event tracking
  const trackEvent = (eventName, parameters = {}) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, parameters);
    }
  };

  const handleRegistrationClick = (location) => {
    trackEvent('registration_click', {
      event_category: 'engagement',
      event_label: location
    });
  };

  const handleContactClick = (type) => {
    trackEvent('contact_click', {
      event_category: 'engagement',
      event_label: type
    });
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
            <a href="#pricing" onClick={() => handleRegistrationClick('navbar')} className="bg-orange-600 text-white px-7 py-3 rounded-lg text-sm font-semibold hover:bg-orange-700 transition-colors shadow-md">
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
                Každý z&nbsp;nás umí komunikovat. Ale málokdo ví, jak z&nbsp;komunikace vytěžit maximum&nbsp;– jak&nbsp;mluvit tak, aby vám lidé rozuměli, důvěřovali vám a&nbsp;<strong>dělali to, co&nbsp;potřebujete.</strong>
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Udělejte si&nbsp;čas 26.&nbsp;listopadu.<br />Pro sebe, pro svůj tým, pro obchodní partnery, pro lepší výsledky.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                <strong>Šest špičkových expertů vám během jednoho dne ukáže, jak z&nbsp;dobré komunikace udělat skvělou.</strong>
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Přijďte si&nbsp;pro tipy, které byste běžně sbírali roky. Žádná ochutnávka&nbsp;– rovnou plná porce know-how.
              </p>
              <a href="#pricing" onClick={() => handleRegistrationClick('hero')} className="bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-700 transition-colors inline-block">
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
          <div className="text-left max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-orange-600 mb-8">
              Komunikace, která šlape na&nbsp;jedničku
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Představte si, že&nbsp;po&nbsp;vašem e-mailu kandidát sám zavolá s&nbsp;tím, že&nbsp;má o&nbsp;pozici zájem.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Že&nbsp;váš tým konečně pochopí, co&nbsp;od&nbsp;něj chcete, a&nbsp;přestane se&nbsp;ptát na&nbsp;detaily.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Že&nbsp;zákazník po&nbsp;nepříjemném rozhovoru napíše:<br />„Díky za&nbsp;upřímnost, takto to&nbsp;vyřešíme."
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Že&nbsp;vaše prezentace na&nbsp;poradě skončí okamžitým souhlasem s&nbsp;rozpočtem.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              <strong>Tohle nejsou náhody. Tohle je&nbsp;nová úroveň komunikace, která&nbsp;funguje.</strong>
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Na&nbsp;naší masterclass získáte konkrétní techniky, díky kterým se&nbsp;z&nbsp;běžných rozhovorů stanou momenty, které&nbsp;posunou vaše obchody i&nbsp;týmy dopředu. Bez zbytečných keců, s&nbsp;praktickými nástroji, které&nbsp;použijete hned zítra.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-orange-600 mb-8 text-center">
            Jeden den. Šest expertů. Stovky skvělých tipů
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mt-16">
            {[
              {
                icon: "🗣️",
                title: "Jak říct klientovi nepříjemné věci, aniž byste ztratili obchod",
                speaker: "Olga Vlachynská, terapeutka a průvodkyně náročnými rozhovory",
                desc: "Umíte mluvit s&nbsp;klienty slušně a&nbsp;profesionálně. Olga vám ukáže, jak mluvit i&nbsp;o&nbsp;problémech tak, aby to&nbsp;vedlo ke&nbsp;spolupráci, ne&nbsp;ke&nbsp;ztrátě zakázky."
              },
              {
                icon: "🎯",
                title: "Jak udělat z každého kontaktu s kandidátem konkurenční výhodu",
                speaker: "Hanka Slačálková, expertka na značku zaměstnavatele",
                desc: "Pravděpodobně píšete kandidátům zdvořilé odpovědi. Hanka vám ukáže, jak z&nbsp;každé odpovědi udělat důvod, proč si&nbsp;vás vybrat před&nbsp;konkurencí."
              },
              {
                icon: "⚙️",
                title: "Jak ušetřit hodiny času při komunikaci s klienty",
                speaker: "Martin Kavka, expert na efektivní komunikaci",
                desc: "Možná jste zruční v&nbsp;e-mailech. Martin vám ukáže, jak postavit systém, díky kterému budete komunikovat rychleji a&nbsp;přitom efektivněji."
              },
              {
                icon: "🤝",
                title: "Jak vyřešit konflikt s partnerem a posílit přitom vztah",
                speaker: "Hana Švábíková, specialistka na nenásilnou komunikaci",
                desc: "Konflikty nejspíš nějak dokážete řešit. Hana vám ukáže, jak k&nbsp;nim přistupovat tak, aby z&nbsp;nich vznikla ještě silnější spolupráce."
              },
              {
                icon: "🎭",
                title: "Jak prezentovat tak, aby si vás klienti pamatovali měsíce",
                speaker: "Václav Strnadel, Business Storytelling & Leadership Trainer",
                desc: "Víme, že&nbsp;prezentovat umíte. Ale Václav vám ukáže, jak z&nbsp;prezentace udělat zážitek, po&nbsp;kterém klient řekne \"ano\", aniž by&nbsp;nad&nbsp;ním musel vůbec přemýšlet."
              },
              {
                icon: "🙌",
                title: "Jak udržet pozornost lidí po celý den",
                speaker: "Michal Boháček, uznávaný expert na teambuildingy",
                desc: "Michal je moderátor celé akce a&nbsp;provede vás celým dnem. Pomůže vám skutečně porozumět očekáváním vašeho publika a&nbsp;předá osvědčené zkušenosti s&nbsp;motivací a&nbsp;vedením od&nbsp;dělníků až&nbsp;po&nbsp;vrcholový management."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="text-3xl flex-shrink-0 mt-1">{feature.icon}</div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">{feature.title}</h3>
                    <p className="text-orange-600 font-semibold mb-4 text-sm">{feature.speaker}</p>
                    <p className="text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: feature.desc }} />
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
              { time: "08:00 - 08:50", title: "Otevření dveří", speaker: "", type: "break" },
              { time: "09:00 - 09:15", title: "Úvod konference a přivítání", speaker: "Michal Boháček", type: "start" },
              { time: "09:15 - 10:15", title: "Jak říct klientovi nepříjemné věci, aniž byste ztratili obchod", speaker: "Olga Vlachynská", type: "talk" },
              { time: "10:15 - 10:35", title: "Pauza - káva a občerstvení", speaker: "", type: "break" },
              { time: "10:35 - 11:35", title: "Jak udělat z každého kontaktu s kandidátem konkurenční výhodu", speaker: "Hana Slačálková", type: "talk" },
              { time: "11:35 - 12:35", title: "Jak ušetřit hodiny času při komunikaci s klienty", speaker: "Martin Kavka", type: "talk" },
              { time: "12:35 - 13:45", title: "Obědová pauza", speaker: "", type: "break" },
              { time: "13:45 - 14:45", title: "Jak vyřešit konflikt s partnerem a posílit přitom vztah", speaker: "Hana Švábíková", type: "talk" },
              { time: "14:45 - 15:05", title: "Pauza - káva a občerstvení", speaker: "", type: "break" },
              { time: "15:05 - 16:05", title: "Jak prezentovat tak, aby si vás klienti pamatovali měsíce", speaker: "Václav Strnadel", type: "talk" },
              { time: "16:05 - 17:15", title: "Public chat s přednášejícími", speaker: "Všichni lektoři", type: "panel" },
              { time: "17:15 - 18:15", title: "Networking a volná zábava - teď už si jen povídejte!", speaker: "", type: "networking" }
            ].map((item, index) => (
              <div
                key={index}
                className={`flex items-center p-6 rounded-lg border-l-4 ${item.type === 'start' ? 'border-green-500' :
                  item.type === 'talk' ? 'border-orange-500' :
                    item.type === 'panel' ? 'border-blue-500' :
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
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${item.type === 'start' ? 'text-green-600 bg-green-50' :
                    item.type === 'talk' ? 'text-orange-600 bg-orange-50' :
                      item.type === 'panel' ? 'text-blue-600 bg-blue-50' :
                        item.type === 'networking' ? 'text-purple-600 bg-purple-50' :
                          'text-gray-500 bg-gray-50'
                    }`}>
                    {item.type === 'start' ? 'Start' :
                      item.type === 'talk' ? 'Přednáška' :
                        item.type === 'panel' ? 'Panelová diskuze' :
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
                bio: "Používá zdravý rozum, silné otázky a&nbsp;schopnost naslouchat – a&nbsp;díky tomu z&nbsp;vás dostane to&nbsp;podstatné. Navíc umí složité věci vysvětlit tak, aby je&nbsp;pochopila i&nbsp;vaše babička.",
                image: "/speakers/Olinka-Vlachynská.jpg"
              },
              {
                name: "Hanka Slačálková",
                title: "Expertka na značku zaměstnavatele",
                bio: "Ukazuje firmám, že značku netvoří jen kampaně, ale každý drobný moment kontaktu. Specializuje se na&nbsp;to, jak z&nbsp;obyčejné reakce na&nbsp;e-mail udělat zážitek, který si&nbsp;lidé zapamatují.",
                image: "/speakers/Hana-Slačálková.jpg"
              },
              {
                name: "Martin Kavka",
                title: "Expert na efektivní komunikaci",
                bio: "Pomáhá firmám, úřadům i&nbsp;nezávislým profíkům psát tak, aby jejich texty lidé četli, rozuměli jim a&nbsp;jednali podle nich. Věří, že&nbsp;dobrá komunikace stojí na&nbsp;systému, ne&nbsp;náhodě.",
                image: "/speakers/Martin-Kavka.jpg"
              },
              {
                name: "Václav Strnadel",
                title: "Business Storytelling & Leadership Trainer",
                bio: "Pomáhá lídrům a&nbsp;expertům měnit složitá data a&nbsp;myšlenky v&nbsp;příběhy, které lidé hned pochopí. Specializuje se na&nbsp;to, jak z&nbsp;obyčejné prezentace udělat zážitek.",
                image: "/speakers/Václav-Strnadel.jpg"
              },
              {
                name: "Hana Švábíková",
                title: "Specialistka na nenásilnou komunikaci",
                bio: "Učí, že i&nbsp;ta nejtěžší zpráva se&nbsp;dá říct tak, aby druhý slyšel, pochopil a&nbsp;chtěl spolupracovat. Nenásilná komunikace pro ni není jen technika, ale způsob myšlení.",
                image: "/speakers/Hana-Švábíková.jpg"
              }
            ].map((speaker, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow flex flex-col h-full">
                <div className="h-64 md:h-96 lg:h-80 relative overflow-hidden bg-gray-100 flex-shrink-0">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-full object-cover"
                    style={{ objectPosition: 'center 40%' }}
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
                  <p className="text-gray-600 text-sm leading-relaxed flex-grow" dangerouslySetInnerHTML={{ __html: speaker.bio }} />
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
            Investice do vaší komunikace
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "Early Bird ONLINE",
                price: "990 Kč",
                originalPrice: "1 990 Kč",
                subtitle: "Časově omezené",
                popular: false,
                features: [
                  "Celá masterclass online",
                  "Živý stream všech přednášek",
                  "Materiály a šablony ke stažení",
                  "Přístup k záznamu na 90 dní"
                ],
                buttonText: "Koupit lístek",
                purchaseUrl: "https://form.simpleshop.cz/GX4oB/buy/"
              },
              {
                name: "Early Bird ŽIVĚ",
                price: "5 500 Kč",
                originalPrice: "7 900 Kč",
                subtitle: "Časově omezené",
                popular: true,
                features: [
                  "Celá masterclass naživo",
                  "Osobní účast v Praze",
                  "Materiály a šablony ke stažení",
                  "Oběd a občerstvení",
                  "Přístup k záznamu na 90 dní",
                  "Networking s účastníky"
                ],
                buttonText: "Koupit lístek",
                purchaseUrl: "https://form.simpleshop.cz/b5M4e/buy/"
              }
            ].map((plan, index) => (
              <div key={index} className={`relative rounded-xl p-8 ${plan.popular ? 'bg-orange-50 border-2 border-orange-200' : 'bg-white border border-gray-200'} shadow-lg hover:shadow-xl transition-all flex flex-col h-full`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-orange-600 text-white px-6 py-2 rounded-full text-sm font-semibold">ALL IN</span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">
                    <span className="text-gray-500">Early Bird</span> <span className="text-gray-900">{plan.name.replace('Early Bird ', '')}</span>
                  </h3>
                  <div className="mb-2">
                    <div className="text-4xl font-bold text-gray-900">{plan.price}</div>
                    {plan.originalPrice && (
                      <div className="text-xl text-gray-400 line-through mt-1">{plan.originalPrice}</div>
                    )}
                  </div>
                  {plan.subtitle && (
                    <p className="text-gray-600 text-sm">{plan.subtitle}</p>
                  )}
                </div>

                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={plan.purchaseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full py-4 px-6 rounded-lg font-semibold text-lg transition-colors text-center ${
                    plan.popular 
                      ? "bg-orange-600 text-white hover:bg-orange-700" 
                      : "bg-gray-900 text-white hover:bg-gray-800"
                  }`}
                >
                  {plan.buttonText}
                </a>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-500 text-sm">
              Všechny ceny jsou konečné. Nejsme plátci DPH.
            </p>
          </div>

          {/* Group Discounts Section */}
          <div className="mt-16 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-10">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Přijďte s&nbsp;celým týmem a&nbsp;ušetřete!
              </h3>
              <p className="text-lg text-gray-700 mb-8">
                <strong>Víc lidí z&nbsp;jedné firmy = lepší efekt konference pro váš tým.</strong><br />
                Sdílené znalosti, společná řeč, okamžitá implementace ve&nbsp;firmě.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-10">
                <div className="bg-white rounded-xl p-6 shadow-md flex flex-col">
                  <div className="text-4xl font-bold text-orange-600 mb-2">10%</div>
                  <div className="text-lg font-semibold text-gray-900 mb-1">sleva</div>
                  <div className="text-gray-600 mb-6 flex-grow">pro 2&nbsp;lidi z&nbsp;jedné firmy</div>
                  <a href="https://form.simpleshop.cz/5QVy8/buy/" className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors text-center">
                    Koupit
                  </a>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md flex flex-col">
                  <div className="text-4xl font-bold text-orange-600 mb-2">15%</div>
                  <div className="text-lg font-semibold text-gray-900 mb-1">sleva</div>
                  <div className="text-gray-600 mb-6 flex-grow">pro 3&nbsp;lidi z&nbsp;jedné firmy</div>
                  <a href="https://form.simpleshop.cz/WrMWa/buy/" className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors text-center">
                    Koupit
                  </a>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md transform scale-105 flex flex-col">
                  <div className="text-4xl font-bold text-orange-600 mb-2">20%</div>
                  <div className="text-lg font-semibold text-gray-900 mb-1">sleva</div>
                  <div className="text-gray-600 mb-6 flex-grow">pro 4&nbsp;a&nbsp;více lidí z&nbsp;jedné firmy</div>
                  <a href="https://form.simpleshop.cz/xKl9q/buy/" className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors text-center">
                    Koupit
                  </a>
                </div>
              </div>
            </div>
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
              { q: "Pro koho je masterclass určena?", a: "Pro manažery, HR specialisty, obchodníky, podnikatele a všechny, kteří každý den komunikují s klienty, kolegy, kandidáty nebo obchodními partnery.<br><br>Čím víc vás přijde, tím lehčí bude protlačit změny ve firmě." },
              { q: "Budou k dispozici materiály?", a: "Ano, všichni účastníci získají přístup k prezentacím, šablonám a praktickým nástrojům." },
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
                    <p className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: faq.a }}></p>
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
                      <p className="text-gray-600">26. listopadu 2025</p>
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
                      <p className="text-gray-600">
                        Kino Přítomnost<br />
                        <a href="https://maps.app.goo.gl/UjVFdp6eMydjJAdt8" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 underline">
                          Siwiecova 1839/1, 130 00 Praha 3-Žižkov
                        </a>
                      </p>
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
                      <a href="mailto:masterclass@rproduction.cz" onClick={() => handleContactClick('email_contact')} className="text-orange-600 hover:text-orange-700 underline">
                        masterclass@rproduction.cz
                      </a>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <a href="https://maps.app.goo.gl/UjVFdp6eMydjJAdt8" target="_blank" rel="noopener noreferrer" className="block hover:opacity-90 transition-opacity">
                <img 
                  src="/map.png" 
                  alt="Mapa - Kino Přítomnost, Praha"
                  width="100%"
                  height="400"
                  className="rounded-lg w-full h-96 object-cover"
                />
              </a>
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
              <a href="/privacy.html" className="text-gray-300 hover:text-white transition-colors">
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

      {/* Cookie Consent Banner */}
      <CookieConsent />
    </div>
  );
}

export default App
