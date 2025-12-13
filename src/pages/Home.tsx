import { Link } from 'react-router-dom';
import { Waves, Wifi, Car, Tv, UtensilsCrossed, Bath, Bed, Users, MapPin, Star } from 'lucide-react';

export default function Home() {
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-blue-50">
      <div
        className="relative h-[600px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(https://a0.muscache.com/im/pictures/hosting/Hosting-1552491472148345960/original/44d3a29d-fb5d-4b16-aec5-b3b46a3d4ed4.jpeg?im_w=1200)',
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
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Golf cart ride to the beach from this charming beautifully renovated coastal cottage! Your stay includes a
              <span className="font-semibold text-cyan-700"> FREE Golf Cart</span> to explore Oceanside Village in style.
              Relax on the spacious screened-in porch, rinse off in the outdoor shower, or grill out on the deck.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Perfect for families, featuring a fun bunk room, board games, and a fully stocked kitchen.
              Linens and towels are included for your convenience!
            </p>
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
