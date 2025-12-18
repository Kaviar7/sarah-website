import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              {/* UPDATED: Using The Blessed Frog Logo instead of Waves icon */}
              <img 
                src="/the%20blessed%20frog.png" 
                alt="The Blessed Frog Logo" 
                className="w-auto h-12" // Slightly smaller for footer balance
              />
              <div>
                <h3 className="font-bold text-lg leading-tight">The Blessed Frog</h3>
                <p className="text-xs text-gray-400">Myrtle Beach, SC</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Your perfect beach getaway with complimentary golf cart, just steps from the ocean.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/photos" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Photos
                </Link>
              </li>
              <li>
                <Link to="/nearby" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Things Nearby
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/book" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Book Now
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Property Features</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>• Free Golf Cart</li>
              <li>• Screened Porch</li>
              <li>• Outdoor Shower</li>
              <li>• Full Kitchen</li>
              <li>• Bunk Room</li>
              <li>• Steps to Beach</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-cyan-400" />
                <a href="tel:908-531-6787" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  908-531-6787
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <div className="text-gray-400 text-sm">
                  <p>Ocean Lakes</p>
                  <p>Myrtle Beach, SC</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} The Blessed Frog. <a href="http://www.proaimarketers.com/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">Built by Pro AI Marketers</a>
          </p>
          <p className="text-gray-500 text-xs mt-2">
            <a
              href="https://www.airbnb.com/rooms/1552491472148345960"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors"
            >
              View on Airbnb
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}