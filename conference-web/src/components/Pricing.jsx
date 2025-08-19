import React from 'react';

const Pricing = () => {
  const plans = [
    {
      name: "Standard Pass",
      price: "$299",
      popular: false,
      features: [
        "All Conference Access",
        "Lunch & Coffee Breaks",
        "Digital Materials",
        "Certificate of Attendance",
        "Networking Sessions"
      ],
      buttonText: "Register Now",
      buttonStyle: "bg-gray-900 text-white hover:bg-gray-800"
    },
    {
      name: "Pro Pass",
      price: "$599",
      popular: true,
      features: [
        "All Standard Pass Benefits",
        "Premium Workshop Access",
        "1-on-1 Speaker Meetings",
        "Priority Seating",
        "Exclusive Pro Materials",
        "Post-Event Resources"
      ],
      buttonText: "Go pro",
      buttonStyle: "bg-orange-600 text-white hover:bg-orange-700"
    },
    {
      name: "VIP Pass",
      price: "$999",
      popular: false,
      features: [
        "All Pro Pass Benefits",
        "VIP Networking Dinner",
        "Backstage Speaker Access",
        "Personal Conference Guide",
        "Premium Gift Package",
        "Future Event Discounts"
      ],
      buttonText: "UNLOCK VIP",
      buttonStyle: "bg-gray-900 text-white hover:bg-gray-800"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="text-4xl lg:text-5xl font-bold text-orange-600 mb-16 text-center">
          Nadpis sekce
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative rounded-xl p-8 ${
                plan.popular 
                  ? 'bg-orange-50 border-2 border-orange-200 transform scale-105' 
                  : 'bg-white border border-gray-200'
              } shadow-lg hover:shadow-xl transition-all`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-orange-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {plan.name}
                </h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                </div>
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
              
              <button className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-colors ${plan.buttonStyle}`}>
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;