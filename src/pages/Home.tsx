import React from 'react';
import { Link } from 'react-router-dom';
import { Waves, Wifi, Car, Tv, UtensilsCrossed, Bath, Bed, Users, MapPin, Star } from 'lucide-react';

export default function App() {
  const amenities = [
    { icon: Car, label: 'Free Golf Cart' },
    { icon: Wifi, label: 'High-Speed WiFi' },
    { icon: Tv, label: 'Smart TV' },
    { icon: UtensilsCrossed, label: 'Full Kitchen' },
    { icon: Bath, label: 'Outdoor Shower' },
    { icon: Bed, label: 'Bunk Room' },
  ];

  const highlights = [
    {
      title: 'Steps to the Beach',
      description: 'Walk to the beautiful Myrtle Beach oceanfront in minutes',
      image: '/Myrtle-Beach-Beachline.jpeg'
    },
    {
      title: 'Complimentary Golf Cart',
      description: 'Explore Oceanside Village in style with your free golf cart',
      image: '/Golf Cart.jpg'
    },
    {
      title: 'Spacious Coastal Living Room', // Title remains Living Room
      description: 'Relax and unwind in the beautifully renovated living area with a queen sleeper sofa and Roku TV.', // Description remains Living Room
      image: '/Screened-porch.jpg' // RESTORED ORIGINAL IMAGE PATH
    }
  ];

  // The full, formatted description content - INCREASED BY ~33%
  const aboutYourStayContent = (
    <div className="text-gray-700 leading-relaxed space-y-4">
      <p className="text-lg">
        <span className="font-bold text-gray-900">Welcome to The Blessed Frog!</span> This beautifully renovated 3-bedroom beach cottage is located on a <span className="font-bold">PRIME CORNER LOT</span> at Mermaid Drive/Sand Dollar Dr in the award-winning Ocean Lakes Family Campground. Enjoy extra privacy, tranquil Pond Views right across the street, and the simple, minutes-long access to the beach. **The corner location ensures a quieter, more peaceful stay compared to crowded inner lots.**
      </p>

      <div className="space-y-3">
        <h3 className="text-xl font-semibold text-gray-900 border-b pb-1">KEY FEATURES & COMFORT</h3>
        <ul className="list-disc list-inside space-y-2 pl-4">
          <li><span className="font-semibold text-cyan-700">FREE GOLF CART:</span> Included with your stay to explore the camp resort in style. (Drivers 18+ w/ valid license).</li>
          <li><span className="font-bold">Sleeps 9:</span> Features 2 Queen bedrooms, Twin Bunk Beds, Queen Sleeper Sofa, and a Twin Daybed.</li>
          <li><span className="font-bold">Renovated Interior:</span> Modern finishes, a full Chef-Ready Kitchen (Dual Coffee Maker, Dishwasher), and granite vanity bathroom. **The bright, coastal decor and new luxury vinyl plank flooring throughout provide a clean and refreshing atmosphere for your entire family.**</li>
          <li><span className="font-bold">Outdoor Living:</span> Spacious L-shaped deck for grilling (electric grill provided), plus an essential Outdoor Shower and a Bug-Free Sun Lounge. **The L-shaped deck is perfect for evening cocktails and family cookouts.**</li>
          <li><span className="font-bold">Convenience:</span> Linens and towels are INCLUDED for all beds. High-speed WiFi and 4 Smart Roku TVs for entertainment.</li>
        </ul>
      </div>

      <div className="space-y-3">
        <h3 className="text-xl font-semibold text-gray-900 border-b pb-1">RESORT ACCESS & RULES</h3>
        <p>Your booking includes full access to all Ocean Lakes amenities: the 4-acre Water Park (slides, lazy river), indoor heated pool, mini-golf, and a mile-long sandy beach. **Ocean Lakes is consistently rated one of America's top family campgrounds, ensuring endless activities for kids of all ages.**</p>
        <ul className="list-disc list-inside space-y-2 pl-4">
          <li><span className="font-bold">Parking:</span> Max 2 vehicles. Passes are $12-$15/day/vehicle (paid directly to Ocean Lakes).</li>
          <li><span className="font-bold">House Rules:</span> Families only (primary renter must be 25+). No pets, no smoking/vaping, and no parties.</li>
        </ul>
      </div>

      <div className="mt-8 pt-4 border-t border-gray-200">
        <p className="font-bold text-lg text-cyan-800">
          Book the comfort, value, and privacy of Unit 1459 today for your ultimate beach getaway!
        </p>
      </div>
    </div>
  );


  // The main rendering block from the original code
  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-blue-50">
      <div
        className="relative h-[600px] bg-cover bg-center flex items-center justify-center"
        style={{
          // *** UPDATED OVERLAY: Increased black opacity from 0.4 to 0.6 ***
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/Front Of House.jpeg')",
        }}
      >
        <div className="text-center text-white px-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
            Steps to Beach!
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-cyan-100">
            Coastal Corner Cottage with Golf Cart
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-gray-100">
            Your perfect beach getaway in Myrtle Beach, South Carolina
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/book"
              className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white text-xl font-bold rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              Book Your Stay
            </Link>
            <Link
              to="/photos"
              className="px-8 py-4 bg-white hover:bg-gray-100 text-cyan-700 text-xl font-bold rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              View Photos
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Users className="h-12 w-12 text-cyan-600 mb-3" />
              <h3 className="text-2xl font-bold text-gray-800">Sleeps 9</h3>
              <p className="text-gray-600">Perfect for families</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="h-12 w-12 text-cyan-600 mb-3" />
              <h3 className="text-2xl font-bold text-gray-800">Oceanside Village</h3>
              <p className="text-gray-600">Prime location</p>
            </div>
            <div className="flex flex-col items-center">
              <Star className="h-12 w-12 text-cyan-600 mb-3" />
              <h3 className="text-2xl font-bold text-gray-800">Premium Stay</h3>
              <p className="text-gray-600">Beautifully renovated</p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            About Your Stay
          </h2>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            {/* INJECTED NEW, FULL CONTENT HERE */}
            {aboutYourStayContent}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Property Highlights
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
                <img
                  src={highlight.image}
                  alt={highlight.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-600">
                    {highlight.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Amenities
          </h2>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {amenities.map(({ icon: Icon, label }, index) => (
                <div key={index} className="flex flex-col items-center text-center p-4 rounded-lg hover:bg-cyan-50 transition-colors">
                  <Icon className="h-10 w-10 text-cyan-600 mb-3" />
                  <span className="text-sm font-medium text-gray-700">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-cyan-600 to-blue-700 rounded-2xl shadow-xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Ready for Your Beach Vacation?</h2>
          <p className="text-xl mb-8 text-cyan-100">
            Book your stay at Coastal Corner Cottage today and create unforgettable memories!
          </p>
          <Link
            to="/book"
            className="inline-block px-10 py-4 bg-orange-500 hover:bg-orange-600 text-white text-xl font-bold rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
          >
            Check Availability
          </Link>
        </div>
      </div>
    </div>
  );
}