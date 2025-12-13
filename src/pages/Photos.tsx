import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const propertyPhotos = [
  // --- NEW MAIN IMAGE ADDED HERE ---
  {
    url: '/Aerial View.jpg', // **ASSUMING THIS IS YOUR MAIN IMAGE FILENAME**
    category: 'Area', 
    alt: 'Property Aerial View'
  },
  // ------------------------------------
  {
    url: '/Bedroom 1.jpg',
    category: 'Bedroom',
    alt: 'Bedroom One'
  },
  {
    url: '/Bedroom 2.jpg',
    category: 'Bedroom',
    alt: 'Bedroom Two'
  },
  {
    url: '/Bedroom Two.jpg',
    category: 'Bedroom',
    alt: 'Bedroom Two Alternate'
  },
  {
    url: '/Bedroom One Sideview.jpg',
    category: 'Bedroom',
    alt: 'Bedroom One Side View'
  },
  {
    url: '/Bedroom One view.jpg',
    category: 'Bedroom',
    alt: 'Bedroom One View'
  },
  {
    url: '/Bedroom Two Bookshelf.jpg',
    category: 'Bedroom',
    alt: 'Bedroom Two Bookshelf'
  },
  {
    url: '/Bunk Beds.jpg',
    category: 'Bedroom',
    alt: 'Bunk Beds'
  },
  {
    url: '/Bunk Bed Room.jpg',
    category: 'Bedroom',
    alt: 'Bunk Bed Room'
  },
  {
    url: '/Kitchen.jpg',
    category: 'Kitchen',
    alt: 'Kitchen'
  },
  {
    url: '/Kitchen Cabinet.jpg',
    category: 'Kitchen',
    alt: 'Kitchen Cabinet'
  },
  {
    url: '/Kitchen-View.jpg',
    category: 'Kitchen',
    alt: 'Kitchen View'
  },
  {
    url: '/Kitchen-main-view.jpg',
    category: 'Kitchen',
    alt: 'Kitchen Main View'
  },
  {
    url: '/Dining Room.jpg',
    category: 'Interior',
    alt: 'Dining Room'
  },
  {
    url: '/Dining Room 1.jpg',
    category: 'Interior',
    alt: 'Dining Room View'
  },
  {
    url: '/Living Room.jpg',
    category: 'Living Room',
    alt: 'Living Room'
  },
  {
    url: '/Living-Room-2.jpg',
    category: 'Living Room',
    alt: 'Living Room View 2'
  },
  {
    url: '/Living Room 3.jpg',
    category: 'Living Room',
    alt: 'Living Room View 3'
  },
  {
    url: '/Bathroom.jpg',
    category: 'Interior',
    alt: 'Bathroom'
  },
  {
    url: '/Bathroom-2.jpg',
    category: 'Interior',
    alt: 'Bathroom View 2'
  },
  {
    url: '/Bathroom Laundry.jpg',
    category: 'Interior',
    alt: 'Bathroom Laundry'
  },
  {
    url: '/Screened-porch.jpg',
    category: 'Interior',
    alt: 'Screened Porch'
  },
  {
    url: '/porch close up.jpg',
    category: 'Interior', 
    alt: 'Porch Close Up'
  },
  {
    url: '/outdoor porch.jpg',
    category: 'Interior', 
    alt: 'Outdoor Porch'
  },
  {
    url: '/outdoor porch 2.jpg',
    category: 'Interior', 
    alt: 'Outdoor Porch View 2'
  },
  {
    url: '/Internet Cabinet.jpg',
    category: 'Amenities',
    alt: 'Internet Cabinet'
  },
  {
    url: '/Golf Cart.jpg',
    category: 'Amenities',
    alt: 'Golf Cart'
  },
  {
    url: '/Golf Cart 2.jpg',
    category: 'Amenities',
    alt: 'Golf Cart View 2'
  },
  {
    url: '/Golf Cart 3.jpg',
    category: 'Amenities',
    alt: 'Golf Cart View 3'
  },
  {
    url: '/Golf Cart 4.jpg',
    category: 'Amenities',
    alt: 'Golf Cart View 4'
  },
  {
    url: '/Grill.jpg',
    category: 'Amenities',
    alt: 'Grill'
  },
  {
    url: '/Board Games.jpg',
    category: 'Amenities',
    alt: 'Board Games'
  },
  {
    url: '/Board Games 2.jpg',
    category: 'Amenities',
    alt: 'Board Games View 2'
  },
  {
    url: '/Outdoor Shower.jpg',
    category: 'Amenities',
    alt: 'Outdoor Shower'
  },
  {
    url: '/patio.jpg',
    category: 'Amenities',
    alt: 'Patio'
  },
  {
    url: '/Myrtle.png',
    category: 'Amenities',
    alt: 'Myrtle Beach'
  },
  {
    url: '/Ocean View.jpeg',
    category: 'Area',
    alt: 'Ocean View'
  }
];

export default function Photos() {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(propertyPhotos.map(p => p.category)))];

  const filteredPhotos = selectedCategory === 'All'
    ? propertyPhotos
    : propertyPhotos.filter(p => p.category === selectedCategory);

  const openLightbox = (index: number) => {
    const actualIndex = propertyPhotos.indexOf(filteredPhotos[index]);
    setSelectedPhoto(actualIndex);
  };

  const closeLightbox = () => setSelectedPhoto(null);

  const navigatePhoto = (direction: 'prev' | 'next') => {
    if (selectedPhoto === null) return;

    if (direction === 'prev') {
      setSelectedPhoto(selectedPhoto === 0 ? propertyPhotos.length - 1 : selectedPhoto - 1);
    } else {
      setSelectedPhoto(selectedPhoto === propertyPhotos.length - 1 ? 0 : selectedPhoto + 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-blue-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Property Photos
          </h1>
          <p className="text-xl text-gray-600">
            Explore every corner of your coastal getaway
          </p>
        </div>

        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-cyan-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-cyan-50 shadow'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all cursor-pointer bg-white"
              onClick={() => openLightbox(index)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={photo.url}
                  alt={photo.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                <div className="p-4 text-white">
                  <p className="font-semibold text-lg">{photo.alt}</p>
                  <p className="text-sm text-cyan-200">{photo.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedPhoto !== null && (
          <div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-cyan-300 transition-colors z-10"
            >
              <X className="h-10 w-10" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                navigatePhoto('prev');
              }}
              className="absolute left-4 text-white hover:text-cyan-300 transition-colors z-10"
            >
              <ChevronLeft className="h-12 w-12" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                navigatePhoto('next');
              }}
              className="absolute right-4 text-white hover:text-cyan-300 transition-colors z-10"
            >
              <ChevronRight className="h-12 w-12" />
            </button>

            <div className="max-w-6xl max-h-[90vh] flex flex-col items-center" onClick={e => e.stopPropagation()}>
              <img
                src={propertyPhotos[selectedPhoto].url}
                alt={propertyPhotos[selectedPhoto].alt}
                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
              />
              <div className="mt-4 text-center">
                <p className="text-white text-xl font-semibold">
                  {propertyPhotos[selectedPhoto].alt}
                </p>
                <p className="text-cyan-300 text-sm">
                  {propertyPhotos[selectedPhoto].category} • Photo {selectedPhoto + 1} of {propertyPhotos.length}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}