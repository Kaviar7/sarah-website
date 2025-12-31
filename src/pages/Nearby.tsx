import { MapPin, Utensils, Waves, PartyPopper, TreePine, Ship, Palmtree, ShoppingBag, Bike, Church } from 'lucide-react';

const attractions = [
  {
    category: 'Ocean Lakes Amenities (On-Site)',
    icon: Palmtree,
    items: [
      {
        name: 'Sandy Harbor Water Park',
        distance: 'On-site',
        description: 'Exclusive to guests! Features the "Adventure River" (lazy river), "Drop Zone" mat racer slides, "The Tube" slide, and the "Splash Zone" for kids.',
        url: 'https://www.oceanlakes.com/amenities/sandy-harbor-family-fun-center/water-park/'
      },
      {
        name: 'Camptown Center',
        distance: 'On-site',
        description: 'The hub of the campground featuring "Sandy Mart" for groceries/gifts, "Sandy\'s Meet n\' Eat" for dining, and the "Center Stage" for events.',
        url: 'https://www.oceanlakes.com/amenities/camptown-center/'
      },
      {
        name: 'Sandy Harbor Mini Golf & Arcade',
        distance: 'On-site',
        description: '18 holes of mini-golf and the Sandy Harbor Game Center arcade. Perfect for family tournaments right inside the gates.',
        url: 'https://www.oceanlakes.com/amenities/sandy-harbor-family-fun-center/sandy-harbor-game-center/'
      },
      {
        name: 'Nature Center Discovery Lab',
        distance: 'On-site',
        description: 'Explore local marine life, fossils, and history. A hidden educational gem located near the South Gate.',
        url: 'https://www.oceanlakes.com/amenities/nature-center-discovery-lab/'
      },
      {
        name: 'Lakeside Paws n\' Play',
        distance: 'On-site',
        description: 'A spacious, fenced-in dog park where your furry friends can run free. Includes fresh water and shaded areas.',
        url: 'https://www.oceanlakes.com/amenities/lakeside-paws-n-play/'
      },
      {
        name: 'Sandy\'s Down Under Skate Park',
        distance: 'On-site',
        description: 'Concrete oceanfront skate park located directly under the observation deck near the beach access.',
        url: 'https://www.oceanlakes.com/amenities/sandys-down-under-skate-board-park/'
      }
    ]
  },
  {
    category: 'Dining',
    icon: Utensils,
    items: [
      {
        name: 'Sandy\'s Meet n\' Eat',
        distance: 'On-site',
        description: 'Located in Camptown Center. Famous for their breakfast biscuits, burgers, pizza, and huge scoops of ice cream.',
        url: 'https://www.oceanlakes.com/amenities/camptown-center/sandys-meet-n-eat/'
      },
      {
        name: 'The Market Common',
        distance: '2.5 miles',
        description: 'Upscale dining district with favorites like Tupelo Honey, CO Sushi, The Brass Tap, and Nacho Hippo.',
        url: 'https://www.marketcommonmb.com/dining/'
      },
      {
        name: 'Murrells Inlet MarshWalk',
        distance: '7.5 miles',
        description: 'The "Seafood Capital of SC". Waterfront boardwalk with live music and fresh catch restaurants like Wicked Tuna and Dead Dog Saloon.',
        url: 'https://www.murrelsinlet.com/'
      },
      {
        name: 'The Conch Café',
        distance: '1.5 miles',
        description: 'Classic beachfront dining just north of the campground gates. Great salads, seafood, and ocean views.',
        url: null
      }
    ]
  },
  {
    category: 'Local Adventures',
    icon: PartyPopper,
    items: [
      {
        name: 'Wild Water & Wheels',
        distance: '1.5 miles',
        description: 'Massive water park with high-speed slides, wave pool, go-karts, and bumper boats. Very close to the campground.',
        url: 'https://wild-water.com/'
      },
      {
        name: 'Myrtle Beach Boardwalk',
        distance: '4.5 miles',
        description: 'Home to the SkyWheel, the Gay Dolphin Gift Cove, and classic arcade fun along the oceanfront.',
        url: 'https://www.visitmyrtlebeach.com/things-to-do/boardwalk/'
      },
      {
        name: 'Broadway at the Beach',
        distance: '8 miles',
        description: 'The area\'s largest entertainment complex with Ripley\'s Aquarium, WonderWorks, and fireworks displays.',
        url: 'https://www.broadwayatthebeach.com/'
      },
      {
        name: 'Surfside Beach Pier',
        distance: '2.5 miles',
        description: 'The "Family Beach" pier area. Great for a quieter stroll, fishing, or grabbing a bite at local diners.',
        url: 'https://www.surfsidebeach.org/'
      }
    ]
  },
  {
    category: 'Sports & Rentals',
    icon: Bike,
    items: [
      {
        name: 'Ocean Lakes Golf Cars',
        distance: 'On-site',
        description: 'The official source for golf cart rentals inside the campground. Essential for getting around efficiently!',
        url: 'https://www.oceanlakes.com/services/golf-car-sales-rentals/'
      },
      {
        name: 'Prestwick Country Club',
        distance: '1 mile',
        description: 'Award-winning Pete Dye course. As a sister property to Ocean Lakes, guests often receive discounted rates.',
        url: 'https://www.prestwickcountryclub.com/'
      },
      {
        name: 'Myrtle Beach State Park',
        distance: '2 miles',
        description: 'Natural maritime forest trails and fishing pier. A peaceful escape just north of the campground.',
        url: 'https://southcarolinaparks.com/myrtle-beach'
      }
    ]
  },
  {
    category: 'Community & Worship',
    icon: Church,
    items: [
      {
        name: 'Ocean Lakes Church Service',
        distance: 'On-site',
        description: 'One of the largest outdoor church services in the US! Held every Sunday at the Recreation Center. Non-denominational.',
        url: 'https://www.oceanlakes.com/things-to-do/church-services/'
      },
      {
        name: 'Kamp Starfish',
        distance: 'On-site',
        description: 'Summer day camp for kids ages 4-11 held at the Rec Center. Crafts, games, and fun supervised by counselors.',
        url: 'https://www.oceanlakes.com/things-to-do/kamp-starfish/'
      }
    ]
  }
];

export default function Nearby() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-blue-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Explore Ocean Lakes & Beyond
          </h1>
          <p className="text-xl text-gray-600">
            The best amenities are right outside your door at The Blessed Frog
          </p>
        </div>

        {/* Location Card */}
        <div className="mb-12 bg-white rounded-2xl shadow-xl p-8 border-l-8 border-cyan-500">
          <div className="flex items-start space-x-4">
            <MapPin className="h-8 w-8 text-cyan-600 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Prime Location
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The Blessed Frog is located inside the award-winning <strong>Ocean Lakes Family Campground</strong>. 
                We are a golf cart ride away from nearly a mile of private beach access, the Sandy Harbor Water Park, 
                and the Camptown Center. Whether you stay inside the gates or venture out to Myrtle Beach, you are in the center of it all.
              </p>
              <div className="flex flex-col md:flex-row gap-4 text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2 text-cyan-500" />
                  <span>6001 S Kings Hwy, Myrtle Beach, SC 29575</span>
                </div>
                <div className="flex items-center">
                  <Waves className="h-4 w-4 mr-2 text-cyan-500" />
                  <span>Site: Ocean Lakes Family Campground</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Attractions Loop */}
        <div className="space-y-12">
          {attractions.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <div key={categoryIndex}>
                <div className="flex items-center space-x-3 mb-6 border-b pb-2 border-gray-200">
                  <div className="p-2 bg-white rounded-lg shadow-sm">
                    <Icon className="h-6 w-6 text-cyan-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800">
                    {category.category}
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {category.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-bold text-gray-800 pr-2 group-hover:text-cyan-600 transition-colors">
                          {item.name}
                        </h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide whitespace-nowrap ${
                          item.distance === 'On-site' 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-cyan-100 text-cyan-700'
                        }`}>
                          {item.distance}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                        {item.description}
                      </p>
                      {item.url && (
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-cyan-600 hover:text-cyan-800 font-medium transition-colors text-sm"
                        >
                          Visit Website
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 relative overflow-hidden bg-blue-900 rounded-2xl shadow-2xl">
          <div className="absolute inset-0 opacity-20">
             <Waves className="w-full h-full text-white transform scale-150 opacity-10" />
          </div>
          <div className="relative p-12 text-center text-white z-10">
            <h2 className="text-4xl font-bold mb-4">
              Ready for the Perfect Vacation?
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Book your stay at The Blessed Frog and enjoy unlimited access to Sandy Harbor Water Park and Ocean Lakes amenities!
            </p>
            <a
              href="/book"
              className="inline-block px-10 py-4 bg-orange-500 hover:bg-orange-600 text-white text-xl font-bold rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              Check Availability
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}