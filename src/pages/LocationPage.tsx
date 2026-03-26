import React from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import seePlaces from '../data/see.json';
import eatPlaces from '../data/eat.json';
import PlaceCard from '../components/PlaceCard';
import { motion } from 'motion/react';

const LocationPage = () => {
  const { location, type } = useParams<{ location: string; type: string }>();
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language.startsWith('pt') ? 'pt' : 'en';

  const isEat = type === 'eat';
  const dataSource = isEat ? eatPlaces : seePlaces;
  
  const filteredPlaces = dataSource.filter(
    (place) => place.location === location
  );

  const titleKey = `around.${location}_title`;
  const subtitleKey = `around.${location}_subtitle`;
  const typeLabel = isEat ? t('around.eat') : t('around.monuments');

  return (
    <div className="pt-32 pb-24 px-4 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16"
      >
        <div className="flex items-center space-x-2 mb-4">
          <span className="px-3 py-1 bg-orange-100 text-orange-600 text-[10px] font-bold uppercase tracking-widest rounded-full">
            {t(`nav.${location}`)}
          </span>
          <span className="text-gray-300">/</span>
          <span className="text-sm font-medium text-gray-500 uppercase tracking-widest">
            {typeLabel}
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
          {t(titleKey)}
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl font-light italic">
          {t(subtitleKey)}
        </p>
      </motion.div>

      {filteredPlaces.length > 0 ? (
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
      ) : (
        <div className="text-center py-20 bg-gray-50 rounded-3xl border border-dashed border-gray-200">
          <p className="text-gray-500 italic">{t('around.no_items')}</p>
        </div>
      )}
    </div>
  );
};

export default LocationPage;
