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
      title: 'Screened Porch & Deck',
      description: 'Relax on the spacious screened porch or grill on the outdoor deck',
      image: '/Screened-porch.jpg'
    }
  ];

  // The full, formatted description content
  const aboutYourStayContent = (
    <div className="text-gray-700 leading-relaxed space-y-6">
      <p className="text-lg">
        <span className="font-bold text-gray-900">Welcome to your happy place by the sea!</span> Relax, unwind, and make lasting memories in this beautifully renovated 3-bedroom beach cottage located in the award-winning Ocean Lakes Family Campground.
      </p>

      <div className="space-y-4">
        <h3 className="font-bold text-xl text-gray-900">PRIME CORNER LOT AT MERMAID DRIVE/SAND DOLLAR DR</h3>
        <p>
          Situated on a prime corner lot at Mermaid Drive and Sand Dollar Dr, you are in the perfect spot for relaxation. Enjoy tranquil Pond Views right across the street and the extra privacy that comes with a corner location (no being squeezed between two other houses!). Best of all, you are just a short walk or minutes from the beach on the golf cart!
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl">
          <span className="font-semibold text-cyan-700">FREE GOLF CART INCLUDED</span>
        </h3>
        <p>Explore Ocean Lakes in style with our Electric EZ-GO Golf Cart.</p>
        <ul className="list-disc list-inside space-y-1 pl-4">
          <li><span className="font-bold">Included Free:</span> We waive the rental fee so you save money!</li>
          <li><span className="font-bold">Convenience:</span> Zip to the beach, the water park, or the camp store with ease.</li>
          <li className="italic text-sm text-gray-600">(Note: Drivers must be 18+ with a valid license)</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h3 className="font-bold text-xl text-gray-900">OUTDOOR LIVING AT ITS BEST</h3>
        <p>We have designed the outdoor space to be just as comfortable as the inside!</p>
        <ul className="list-disc list-inside space-y-1 pl-4">
          <li><span className="font-bold">Spacious Deck:</span> A large L-shaped deck for grilling and soaking up the sun.</li>
          <li><span className="font-bold">Outdoor Shower:</span> The ultimate beach convenience for rinsing off sand and salt.</li>
          <li><span className="font-bold">Grilling:</span> An electric grill is provided for family cookouts.</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h3 className="font-bold text-xl text-gray-900">SLEEPING ARRANGEMENTS (Sleeps 9 Guests)</h3>
        <p>This home is perfect for large families, with flexible sleeping options:</p>
        <ul className="list-disc list-inside space-y-1 pl-4">
          <li><span className="font-bold">Bedroom 1:</span> Queen Bed + Roku TV</li>
          <li><span className="font-bold">Bedroom 2:</span> Queen Bed + Roku TV</li>
          <li><span className="font-bold">Bedroom 3:</span> Twin Bunk Beds (Kids love this!) + Roku TV</li>
          <li><span className="font-bold">Living Room:</span> Queen Sleeper Sofa</li>
          <li><span className="font-bold">Sunroom:</span> Twin Daybed (Perfect for reading or a quiet nap)</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h3 className="font-bold text-xl text-gray-900">COMFORT & CONVENIENCE</h3>
        <ul className="list-disc list-inside space-y-1 pl-4">
          <li><span className="font-bold">Renovated Interior:</span> Enjoy modern finishes, new flooring, and a fresh coastal vibe.</li>
          <li><span className="font-bold">Pack Light:</span> Linens and towels are INCLUDED for all beds! (Just bring your own beach towels and paper products).</li>
          <li><span className="font-bold">Chef-Ready Kitchen:</span> Fully stocked with cookware, glass-top stove, dishwasher, and a Dual Coffee Maker (Keurig + Drip) because we know caffeine is essential!</li>
          <li><span className="font-bold">Bathroom:</span> Full bath featuring a modern subway-tiled shower and granite vanity.</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h3 className="font-bold text-xl text-gray-900">ENTERTAINMENT & WIFI</h3>
        <ul className="list-disc list-inside space-y-1 pl-4">
          <li>High-speed WiFi (Network: SeaYourBliss)</li>
          <li>4 Smart TVs (Roku TV) for your streaming needs.</li>
          <li>Board games and books provided for cozy family nights.</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h3 className="font-bold text-xl text-gray-900">RESORT AMENITIES (Ocean Lakes)</h3>
        <p>Your booking gives you access to America's favorite family campground!</p>
        <ul className="list-disc list-inside space-y-1 pl-4">
          <li><span className="font-bold">Water Park:</span> 4 acres of fun with slides, a lazy river, and splash zones (Free for guests!).</li>
          <li><span className="font-bold">Activities:</span> Indoor heated pool, mini-golf, arcade, basketball courts, and a mile-long stretch of soft sandy beach.</li>
          <li><span className="font-bold">Food & Shopping:</span> On-site grocery store, snack bars, and pizza delivery.</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h3 className="font-bold text-xl text-gray-900">IMPORTANT NOTES</h3>
        <ul className="list-disc list-inside space-y-1 pl-4">
          <li><span className="font-bold">Parking:</span> Space for 2 vehicles max at the house. Parking passes are $12-$15/day/vehicle (paid directly to Ocean Lakes via Express Check-In). Overflow parking is available nearby.</li>
          <li><span className="font-bold">House Rules:</span> Families only (primary renter must be 25+ and present). No pets, no smoking/vaping, and no parties.</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h3 className="font-bold text-xl text-gray-900">WHY GUESTS LOVE UNIT 1459</h3>
        <p>
          It is the combination of the Pond Views, the Value (Free Cart + Linens included), and the Renovated Comfort. Whether you are rinsing off in the outdoor shower after a beach day or relaxing on the deck, this is the perfect home base for your ultimate beach getaway.
        </p>
      </div>

      <div className="mt-8 pt-6 border-t border-gray-200">
        <p className="font-bold text-xl text-cyan-800">
          Book your stay at Mermaid Drive/Sand Dollar Dr today!
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