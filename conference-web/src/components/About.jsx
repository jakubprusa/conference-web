import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-orange-600 mb-8">
              Nadpis sekce
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              This helps your team communicate with internal staff, external vendors, suppliers, and distributors. With advanced distribution and authentication, they check that enables organizations have feedback from all parts of the organization.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              They check that enables organizations have feedback from all parts of the organization to enable a collaborative approach to solving customer problems.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Text lorem your service through complete account and billing management with staff, external vendors, suppliers, and distributors. Helpful for clients and effective.
            </p>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg p-8 h-80 flex items-center justify-center">
              <div className="text-white text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Conference Preview</h3>
                <p className="text-blue-100">Interactive presentation content</p>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-orange-200 rounded-lg opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;