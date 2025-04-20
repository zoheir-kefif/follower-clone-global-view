
import { useTranslation } from 'react-i18next';
import { Search } from 'lucide-react';

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
          {t('hero.title')}
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          {t('hero.subtitle')}
        </p>
        <div className="max-w-2xl mx-auto">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder={t('hero.placeholder')}
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
              <Search size={20} />
              {t('hero.button')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
