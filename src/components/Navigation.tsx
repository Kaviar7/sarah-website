import { useState } from 'react'; 
import { Link, useLocation } from 'react-router-dom';
import { Home, ImageIcon, MapPin, Mail, Calendar, Menu } from 'lucide-react'; // Removed Waves, added Menu

export default function Navigation() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false); 

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/photos', label: 'Photos', icon: ImageIcon },
    { path: '/nearby', label: 'Things Nearby', icon: MapPin },
    { path: '/contact', label: 'Contact', icon: Mail },
  ];

  const toggleMenu = () => { 
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-cyan-600 to-blue-700 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-2 group">
            {/* LOGO FIX: Increased size to 72px (using inline style for precision) */}
            <img 
              src="/the%20blessed%20frog.png" 
              alt="The Blessed Frog Logo" 
              className="w-auto"
              style={{ height: '72px' }} 
            />
            
            <div className="flex flex-col">
              <span className="text-white font-bold text-xl">The Blessed Frog</span>
              <span className="text-cyan-100 text-xs">Myrtle Beach, SC</span>
            </div>
          </Link>

          {/* Desktop Navigation (Hidden on Mobile) */}
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
              className="flex items-center space-x-2 px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-all shadow-md hover:shadow-lg ml-4" 
            >
              <Calendar className="h-5 w-5" />
              <span className="font-bold">Book Now</span>
            </Link>
          </div>

          {/* Mobile Menu Button (Visible on Mobile) */}
          <div className="md:hidden">
            <button 
              className="text-white p-2" 
              onClick={toggleMenu} 
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              <Menu className="h-6 w-6" /> 
            </button>
          </div>
        </div>

        {/* Mobile Menu Content (Hidden by default, shown by 'isOpen' state) */}
        <div 
          id="mobile-menu"
          className={`${isOpen ? 'block' : 'hidden'} md:hidden pb-4 space-y-2`} 
        >
          {navLinks.map(({ path, label, icon: Icon }) => (
            <Link
              key={path}
              to={path}
              onClick={toggleMenu} 
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
            onClick={toggleMenu} 
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