import React, { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail('');
    alert('Thank you for subscribing to our newsletter!');
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Hack Your Way Into</h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Subscribe to our newsletter for the latest updates about upcoming conferences, 
              exclusive content, and early bird ticket access. Stay connected with the tech community.
            </p>
            
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-grow px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-orange-600"
                required
              />
              <button
                type="submit"
                className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-300 hover:text-orange-600 transition-colors">Home</a></li>
                <li><a href="#about" className="text-gray-300 hover:text-orange-600 transition-colors">About</a></li>
                <li><a href="#program" className="text-gray-300 hover:text-orange-600 transition-colors">Program</a></li>
                <li><a href="#speakers" className="text-gray-300 hover:text-orange-600 transition-colors">Speakers</a></li>
                <li><a href="#pricing" className="text-gray-300 hover:text-orange-600 transition-colors">Pricing</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="#faq" className="text-gray-300 hover:text-orange-600 transition-colors">FAQ</a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-orange-600 transition-colors">Contact</a></li>
                <li><a href="/privacy.html" className="text-gray-300 hover:text-orange-600 transition-colors">Privacy Policy</a></li>
                <li><a href="/terms.html" className="text-gray-300 hover:text-orange-600 transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Masterclass komunikace. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;