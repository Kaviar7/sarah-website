import { useEffect } from 'react';

export default function Book() {
  useEffect(() => {
    const loadGuestyWidget = () => {
      const widgetConfig = {
        siteUrl: "sarahfrodelly.guestybookings.com",
        color: "#206CFF"
      };

      const head = document.getElementsByTagName("head")[0];
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.type = "text/css";
      link.href = "https://s3.amazonaws.com/guesty-frontend-production/search-bar-production.css";
      link.media = "all";
      head.appendChild(link);

      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = "https://s3.amazonaws.com/guesty-frontend-production/search-bar-production.js";
      script.async = true;

      script.onload = () => {
        try {
          if (window.GuestySearchBarWidget) {
            window.GuestySearchBarWidget.create(widgetConfig);
          }
        } catch (error) {
          console.error("[Guesty Embedded Widget]:", error);
        }
      };

      const firstScript = document.getElementsByTagName("script")[0];
      firstScript.parentNode?.insertBefore(script, firstScript);
    };

    loadGuestyWidget();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-blue-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Book Your Stay
          </h1>
          <p className="text-xl text-gray-600">
            Check availability and book at The Blessed Frog
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-5xl mx-auto">
          <div id="search-widget_IO312PWQ"></div>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              What's Included
            </h3>
            <div className="space-y-3 text-gray-700">
              <p>✓ Complimentary golf cart</p>
              <p>✓ Linens and towels provided</p>
              <p>✓ Fully stocked kitchen</p>
              <p>✓ Steps to the beach</p>
              <p>✓ High-speed WiFi</p>
              <p>✓ Outdoor shower and grill</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-600 to-blue-700 rounded-2xl shadow-xl p-6 text-white">
            <h3 className="text-2xl font-bold mb-4">Need Help?</h3>
            <p className="mb-4 text-cyan-100">
              Have questions about your stay? Contact Sarah directly:
            </p>
            <a
              href="tel:908-531-6787"
              className="block w-full bg-white text-cyan-700 hover:bg-cyan-50 font-bold py-3 rounded-lg transition-all text-center mb-4"
            >
              Call 908-531-6787
            </a>
            <div className="text-sm text-cyan-100 space-y-2">
              <p className="font-semibold text-white">Flexible Cancellation</p>
              <p>Details provided with your booking confirmation.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

declare global {
  interface Window {
    GuestySearchBarWidget?: {
      create: (config: { siteUrl: string; color: string }) => void;
    };
  }
}
