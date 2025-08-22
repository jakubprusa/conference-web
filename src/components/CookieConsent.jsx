import React, { useState, useEffect } from 'react';

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user already gave consent
    const consent = localStorage.getItem('ga-consent');
    if (!consent) {
      setShowBanner(true);
    } else if (consent === 'accepted') {
      // Enable GA4 if already accepted
      enableGA4();
    }
  }, []);

  const enableGA4 = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'granted'
      });
    }
  };

  const handleAccept = () => {
    localStorage.setItem('ga-consent', 'accepted');
    enableGA4();
    setShowBanner(false);
  };

  const handleReject = () => {
    localStorage.setItem('ga-consent', 'rejected');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-2xl border-t border-gray-200 p-4 md:p-6 z-50">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-gray-700 text-sm md:text-base">
            Tento web používá Google Analytics pro měření návštěvnosti a vylepšení uživatelského zážitku. 
            Sbíráme anonymizovaná data o tom, jak web používáte.
          </p>
        </div>
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={handleReject}
            className="px-6 py-2 text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium transition-colors"
          >
            Odmítnout
          </button>
          <button
            onClick={handleAccept}
            className="px-6 py-2 bg-orange-600 text-white hover:bg-orange-700 rounded-lg font-medium transition-colors"
          >
            Přijmout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;