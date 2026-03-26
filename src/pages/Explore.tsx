import React from 'react';
import { useTranslation } from 'react-i18next';
import seePlaces from '../data/see.json';
import PlaceCard from '../components/PlaceCard';

const Explore = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language.startsWith('pt') ? 'pt' : 'en';

  const filteredPlaces = seePlaces.filter(place => place.location === 'lisbon');

  return (
    <div className="pt-32 pb-24 px-4 max-w-7xl mx-auto">
      <div className="mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
          {t('explore.title')}
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl font-light">
          {t('explore.subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPlaces.map((place) => (
          <PlaceCard
            key={place.id}
            id={place.id}
            title={place.title[currentLang as keyof typeof place.title]}
            shortDescription={place.shortDescription[currentLang as keyof typeof place.shortDescription]}
            image={place.image}
            category={place.category[currentLang as keyof typeof place.category]}
          />
        ))}
      </div>
    </div>
  );
};

export default Explore;
