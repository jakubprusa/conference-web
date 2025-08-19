import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "When and where is the Tech Way Conference taking place?",
      answer: "The conference will be held on March 15, 2024, at the Convention Center in downtown Prague. The event runs from 9:00 AM to 6:00 PM."
    },
    {
      question: "What topics will be covered at the conference?",
      answer: "We'll cover modern communication strategies, AI applications, digital transformation, automation, and the future of work. Each session is designed to provide practical insights you can implement immediately."
    },
    {
      question: "How can I register for the conference?",
      answer: "You can register directly on our website by selecting your preferred ticket type and completing the payment process. Early bird discounts are available until February 1st."
    },
    {
      question: "Are there discounts available for students or groups?",
      answer: "Yes! We offer 50% student discounts with valid student ID and 15% group discounts for teams of 5 or more. Contact our team for custom pricing for larger organizations."
    },
    {
      question: "Will conference sessions be recorded?",
      answer: "All main sessions and keynotes will be recorded and made available to attendees within 48 hours after the event. Workshop recordings may be limited based on the speaker's preference."
    },
    {
      question: "What is the cancellation policy for tickets?",
      answer: "Full refunds are available until 30 days before the event. Cancellations within 30 days receive a 50% refund. In case of emergency circumstances, please contact our support team."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <h2 className="text-4xl lg:text-5xl font-bold text-orange-600 mb-16 text-center">
          Nadpis sekce
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition-colors flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <svg 
                  className={`w-6 h-6 text-gray-500 transform transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 bg-gray-50">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;