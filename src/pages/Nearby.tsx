import { MapPin, Utensils, Waves, PartyPopper, TreePine, Ship, Palmtree, GlassWater } from 'lucide-react';

const attractions = [
  {
    category: 'Ocean Lakes Amenities',
    icon: Palmtree,
    items: [
      {
        name: 'Private Beach Access',
        distance: 'Golf cart ride',
        description: 'Gated oceanfront parking lot with direct beach access, outdoor showers, and restrooms exclusively for Ocean Lakes residents.',
        url: null
      },
      {
        name: 'The Conch Café',
        distance: 'Across the street',
        description: 'Beachfront dining with ocean views, extensive menu, and moderately priced. Opens at 11 AM daily (seasonal).',
        url: null
      },
      {
        name: 'Hickory Grove Pool',
        distance: 'On-site',
        description: 'Large outdoor pool with kiddie pool and grills available. Open 10 AM-10 PM.',
        url: null
      },
      {
        name: 'Oasis Pool',
        distance: 'On-site',
        description: 'Indoor year-round swimming facility with kiddie pool. Perfect for all seasons! Open 10 AM-10 PM.',
        url: null
      },
      {
        name: 'Tupelo Bay Golf Center',
        distance: 'On-site',
        description: 'Lighted 18-hole executive course, 9-hole pitch-and-putt, driving range, and club rentals available. Open 7 AM-11 PM.',
        url: null
      },
      {
        name: 'Runaway Bay Mini Golf',
        distance: 'On-site',
        description: '36 holes of Jamaican-themed miniature golf with an ice cream parlor.',
        url: null
      }
    ]
  },
  {
    category: 'Beach & Water',
    icon: Waves,
    items: [
      {
        name: 'Myrtle Beach Boardwalk',
        distance: '2 miles',
        description: 'A 1.2-mile oceanfront boardwalk featuring the famous SkyWheel, arcades, ice cream shops, and stunning ocean views.',
        url: 'https://www.visitmyrtlebeach.com/things-to-do/boardwalk/'
      },
      {
        name: 'Myrtle Beach State Park',
        distance: '5 miles',
        description: 'Beautiful natural shoreline with hiking trails, fishing pier, and pristine beach access.',
        url: 'https://southcarolinaparks.com/myrtle-beach'
      },
      {
        name: 'Huntington Beach State Park',
        distance: '8 miles',
        description: 'Scenic marshland trails, birdwatching, and the historic Atalaya Castle.',
        url: 'https://southcarolinaparks.com/huntington-beach'
      },
      {
        name: 'Water Sports & Boat Rentals',
        distance: '2-5 miles',
        description: 'Explore the Intracoastal Waterway with personal watercraft, pontoon boats, and kayak rentals.',
        url: null
      }
    ]
  },
  {
    category: 'Family Entertainment',
    icon: PartyPopper,
    items: [
      {
        name: 'Broadway at the Beach',
        distance: '6 miles',
        description: 'Major entertainment complex featuring Ripley\'s Aquarium, WonderWorks, shopping, dining, and nightlife.',
        url: 'https://www.broadwayatthebeach.com/'
      },
      {
        name: 'Alabama Theatre',
        distance: '8 miles',
        description: '2,000-seat venue featuring music, dance, comedy shows, and celebrity concerts.',
        url: null
      },
      {
        name: 'Medieval Times & Pirates Voyage',
        distance: '8 miles',
        description: 'Interactive dinner shows with jousting knights or swashbuckling pirates.',
        url: null
      },
      {
        name: 'Family Kingdom Amusement Park',
        distance: '3 miles',
        description: 'Classic seaside amusement park with over 26 rides including roller coasters, log flume, and kiddie rides.',
        url: 'https://www.familykingdomfun.com/'
      },
      {
        name: 'Ripley\'s Aquarium',
        distance: '6 miles',
        description: 'World-class aquarium featuring an underwater tunnel, stingray touch tank, and exotic sea creatures.',
        url: 'https://www.ripleyaquariums.com/myrtlebeach/'
      }
    ]
  },
  {
    category: 'Nature & Parks',
    icon: TreePine,
    items: [
      {
        name: 'Brookgreen Gardens',
        distance: '12 miles',
        description: 'Stunning botanical gardens and sculpture park with a small zoo featuring otters and alligators.',
        url: 'https://www.brookgreen.org/'
      }
    ]
  },
  {
    category: 'Dining & Nightlife',
    icon: Utensils,
    items: [
      {
        name: 'Murrells Inlet MarshWalk',
        distance: '10 miles',
        description: 'Scenic waterfront boardwalk with fresh seafood restaurants, live music, and beautiful sunset views.',
        url: 'https://www.murrelsinlet.com/'
      },
      {
        name: 'Grand Strand Restaurants',
        distance: '2-10 miles',
        description: 'Over 1,700 full-service restaurants specializing in fresh seafood and coastal cuisine.',
        url: null
      },
      {
        name: 'The Wicked Tuna',
        distance: '10 miles',
        description: 'Premium waterfront dining in Murrells Inlet with fresh catches and craft cocktails.',
        url: null
      },
      {
        name: 'Beach Clubs & Nightlife',
        distance: '2-8 miles',
        description: 'Nightclubs, sports bars, beach clubs, and live music venues throughout the Grand Strand.',
        url: null
      }
    ]
  },
  {
    category: 'Sports & Recreation',
    icon: Ship,
    items: [
      {
        name: 'Myrtle Beach Golf Courses',
        distance: '3-10 miles',
        description: 'Over 100 championship golf courses in the area, known as the "Golf Capital of the World".',
        url: 'https://www.visitmyrtlebeach.com/golf/'
      },
      {
        name: 'Dolphin Tours & Water Sports',
        distance: '2-5 miles',
        description: 'Jet skiing, parasailing, paddleboarding, banana boat rides, kayaking, and dolphin watching tours.',
        url: null
      },
      {
        name: 'Tennis & Basketball Courts',
        distance: 'On-site',
        description: 'Two lighted tennis courts, basketball, volleyball, and baseball fields available within Ocean Lakes.',
        url: null
      },
      {
        name: 'Myrtle Beach Pelicans',
        distance: '7 miles',
        description: 'Minor league baseball at TicketReturn.com Field with family-friendly atmosphere and Friday night fireworks.',
        url: 'https://www.milb.com/myrtle-beach'
      }
    ]
  }
];

export default function Nearby() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-blue-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Cool Things Nearby
          </h1>
          <p className="text-xl text-gray-600">
            Discover the best of Myrtle Beach from The Blessed Frog
          </p>
        </div>

        <div className="mb-12 bg-white rounded-2xl shadow-xl p-8">
          <div className="flex items-start space-x-4 mb-6">
            <MapPin className="h-8 w-8 text-cyan-600 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Prime Location in Ocean Lakes
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The Blessed Frog is perfectly situated in Ocean Lakes, a 180-acre oceanfront golf cart community in Surfside Beach. Just a few minutes by golf cart to the beautiful Atlantic Ocean, with private beach access and year-round resort amenities. Explore the community and venture out to nearby Myrtle Beach attractions.
              </p>
              <div className="text-sm text-gray-600">
                <p className="font-semibold mb-1">Ocean Lakes</p>
                <p>1711 Highway 17 South, Surfside Beach, SC 29575</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-12">
          {attractions.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <div key={categoryIndex}>
                <div className="flex items-center space-x-3 mb-6">
                  <Icon className="h-8 w-8 text-cyan-600" />
                  <h2 className="text-3xl font-bold text-gray-800">
                    {category.category}
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {category.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-bold text-gray-800">
                          {item.name}
                        </h3>
                        <span className="bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap ml-2">
                          {item.distance}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {item.description}
                      </p>
                      {item.url && (
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-cyan-600 hover:text-cyan-700 font-medium transition-colors"
                        >
                          Learn More
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

        <div className="mt-16 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-2xl shadow-xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Explore?
          </h2>
          <p className="text-xl mb-8 text-cyan-100">
            Book your stay and start planning your Myrtle Beach adventure!
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
  );
}