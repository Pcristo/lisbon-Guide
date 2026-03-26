import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <span className="text-xl font-bold text-orange-600 tracking-tighter">
              LISBON<span className="text-gray-900 font-light italic">guide</span>
            </span>
            <p className="text-gray-400 text-xs mt-2 uppercase tracking-widest">
              © {year} Lisbonguide. {t('footer.rights')}
            </p>
          </div>
          
          <div className="flex space-x-8">
            <a href="#" className="text-gray-400 hover:text-orange-600 transition-colors">Instagram</a>
            <a href="#" className="text-gray-400 hover:text-orange-600 transition-colors">Twitter</a>
            <a href="#" className="text-gray-400 hover:text-orange-600 transition-colors">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
