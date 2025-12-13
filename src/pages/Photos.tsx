import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const propertyPhotos = [
  {
    url: '/0452fd4c-fc19-440b-a862-af9c5c35aa54.jpg',
    category: 'Interior',
    alt: 'Bedroom One'
  },
  {
    url: '/0a67748c-6800-47d9-8193-e4e258fde3e6.jpg',
    category: 'Interior',
    alt: 'Bedroom Two'
  },
  {
    url: '/137cacec-4751-4ef2-a0b5-fd837c612036.jpg',
    category: 'Interior',
    alt: 'Bathroom'
  },
  {
    url: '/2072b2c2-a4c3-4986-be70-4554ad7f75bc.jpg',
    category: 'Interior',
    alt: 'Bedroom One'
  },
  {
    url: '/22155478-38ce-4605-acf9-53c46185feec.jpg',
    category: 'Interior',
    alt: 'Porch'
  },
  {
    url: '/362645d8-131f-44ca-99a1-08427aedc973.jpg',
    category: 'Interior',
    alt: 'Cabinet'
  },
  {
    url: '/3d4e181d-d7c2-400f-b664-f52ce6745fb7.jpg',
    category: 'Amenities',
    alt: 'Grill'
  },
  {
    url: '/435d2a2f-4ca2-41f3-abb7-da3db9a67f18.jpg',
    category: 'Interior',
    alt: 'Dining Room'
  },
  {
    url: '/51b3ee00-cc3b-4e0f-bc26-df1b45bc0741.jpg',
    category: 'Amenities',
    alt: 'Board Games'
  },
  {
    url: '/80ac7c53-7edb-4724-88ea-3b43c3f495f4.jpg',
    category: 'Bedroom',
    alt: 'Bedroom Two'
  },
  {
    url: '/8202f874-f6e0-417d-aa3b-4690a302e2f0.jpg',
    category: 'Bedroom',
    alt: 'Bedroom Two'
  },
  {
    url: '/8295d26a-8d8e-484d-aec3-853012fecafe.jpg',
    category: 'Interior',
    alt: 'Kitchen Counters'
  },
  {
    url: '/859d4c9e-1cc1-4b9c-be48-0a14f5c3c6b7.jpg',
    category: 'Interior',
    alt: 'Patio'
  },
  {
    url: '/8708fcd8-3823-4a99-9d14-0babbb81fd0c.jpg',
    category: 'Amenities',
    alt: 'Golf Cart'
  },
  {
    url: '/915c8d54-9798-47f5-a8aa-2d73e9b8ac70.jpg',
    category: 'Interior',
    alt: 'Living Room'
  },
  {
    url: '/92ecde0a-1cee-439a-8e93-7715f31b1063.jpg',
    category: 'Interior',
    alt: 'Living Room and Patio'
  },
  {
    url: '/96ff4105-7e63-470a-8510-236819704bb5.jpg',
    category: 'Interior',
    alt: 'Internet Setup'
  },
  {
    url: '/9acbfe94-e787-4639-82e5-a19eb363c009.jpg',
    category: 'Bedroom',
    alt: 'Bedroom One'
  },
  {
    url: '/a41f4885-1201-4811-a22b-e713f2afff35.jpg',
    category: 'Interior',
    alt: 'Living Room'
  },
  {
    url: '/a5127d05-8dc4-491f-a8a9-b77a73ab8a0a.jpg',
    category: 'Interior',
    alt: 'Bathroom'
  },
  {
    url: '/a6caf79d-ae62-45e6-b1ae-dce3dc622e56.jpg',
    category: 'Interior',
    alt: 'Dining Room'
  },
  {
    url: '/abb4105f-cbad-466a-b8e1-d48f5a3eed78.jpg',
    category: 'Interior',
    alt: 'Kitchen'
  },
  {
    url: '/bcd904a5-10d8-49f9-ac79-eab3d981f27f.jpg',
    category: 'Bedroom',
    alt: 'Bunk Beds'
  },
  {
    url: '/cb521e60-3809-43b5-b575-bfbdfb1f3278.jpg',
    category: 'Interior',
    alt: 'Kitchen'
  },
  {
    url: '/d23a4619-a050-43b1-b65b-b58e233f7869.jpg',
    category: 'Interior',
    alt: 'Bunk Beds'
  },
  {
    url: '/d6367351-5b0a-459c-bfd7-578ac64c5980.jpg',
    category: 'Amenities',
    alt: 'Golf Cart'
  },
  {
    url: '/f1d2d3f1-d83e-49b5-b1e5-570e3dd59dc3.jpg',
    category: 'Bathroom',
    alt: 'Bathroom with Washer Dryer'
  },
  {
    url: '/137cacec-4751-4ef2-a0b5-fd837c612036.jpg',
    category: 'Bathroom',
    alt: 'Bathroom'
  },
  {
    url: '/2072b2c2-a4c3-4986-be70-4554ad7f75bc.jpg',
    category: 'Bedroom',
    alt: 'Bedroom One'
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
