import { useState } from 'react'; // <--- NEW: Import useState
import { Link, useLocation } from 'react-router-dom';
import { Waves, Home, ImageIcon, MapPin, Mail, Calendar, Menu } from 'lucide-react'; // <--- UPDATED: Imported Menu icon

export default function Navigation() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false); // <--- NEW: State for mobile menu

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/photos', label: 'Photos', icon: ImageIcon },
    { path: '/nearby', label: 'Things Nearby', icon: MapPin },
    { path: '/contact', label: 'Contact', icon: Mail },
  ];

  const toggleMenu = () => { // <--- NEW: Function to toggle menu state
    setIsOpen(!isOpen);
  };

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
              className="flex items-center space-x-2 px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-all shadow-md hover:shadow-lg ml-4" // Removed the inline style for color to use Tailwind classes consistently
            >
              <Calendar className="h-5 w-5" />
              <span className="font-bold">Book Now</span>
            </Link>
          </div>

          {/* Mobile Menu Button (Visible on Mobile) */}
          <div className="md:hidden">
            <button 
              className="text-white p-2" 
              onClick={toggleMenu} // <--- NEW: Toggle menu on click
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {/* Using lucide-react Menu icon instead of raw SVG for consistency */}
              <Menu className="h-6 w-6" /> 
            </button>
          </div>
        </div>

        {/* Mobile Menu Content (Hidden by default, shown by 'isOpen' state) */}
        <div 
          id="mobile-menu"
          className={`${isOpen ? 'block' : 'hidden'} md:hidden pb-4 space-y-2`} // <--- NEW: Conditional class
        >
          {navLinks.map(({ path, label, icon: Icon }) => (
            <Link
              key={path}
              to={path}
              onClick={toggleMenu} // <--- NEW: Close menu after clicking link
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
            onClick={toggleMenu} // <--- NEW: Close menu after clicking link
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