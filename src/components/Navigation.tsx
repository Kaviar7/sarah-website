import { Link, useLocation } from 'react-router-dom';
import { Waves, Home, ImageIcon, MapPin, Mail, Calendar } from 'lucide-react';

export default function Navigation() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/photos', label: 'Photos', icon: ImageIcon },
    { path: '/nearby', label: 'Things Nearby', icon: MapPin },
    { path: '/contact', label: 'Contact', icon: Mail },
  ];

  return (
    <nav className="bg-gradient-to-r from-cyan-600 to-blue-700 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-2 group">
            <Waves className="h-8 w-8 text-cyan-100 group-hover:text-white transition-colors" />
            <div className="flex flex-col">
              <span className="text-white font-bold text-xl">Coastal Corner Cottage</span>
              <span className="text-cyan-100 text-xs">Myrtle Beach, SC</span>
            </div>
          </Link>

          <div className="hidden md:flex space-x-1">
            {navLinks.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                  isActive(path)
                    ? 'bg-white text-cyan-700 shadow-md'
                    : 'text-white hover:bg-cyan-500/30'
                }`}
              >
                <Icon className="h-5 w-5" />
                <span className="font-medium">{label}</span>
              </Link>
            ))}
            <Link
              to="/book"
              className="flex items-center space-x-2 px-6 py-2 bg-coral-500 hover:bg-coral-600 text-white rounded-lg transition-all shadow-md hover:shadow-lg ml-4"
              style={{ backgroundColor: isActive('/book') ? '#f59e0b' : '#f97316' }}
            >
              <Calendar className="h-5 w-5" />
              <span className="font-bold">Book Now</span>
            </Link>
          </div>

          <div className="md:hidden">
            <button className="text-white p-2">
              <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>

        <div className="md:hidden pb-4 space-y-2">
          {navLinks.map(({ path, label, icon: Icon }) => (
            <Link
              key={path}
              to={path}
              className={`flex items-center space-x-2 px-4 py-3 rounded-lg transition-all ${
                isActive(path)
                  ? 'bg-white text-cyan-700'
                  : 'text-white hover:bg-cyan-500/30'
              }`}
            >
              <Icon className="h-5 w-5" />
              <span className="font-medium">{label}</span>
            </Link>
          ))}
          <Link
            to="/book"
            className="flex items-center space-x-2 px-4 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-all"
          >
            <Calendar className="h-5 w-5" />
            <span className="font-bold">Book Now</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
