
import { useTranslation } from 'react-i18next';
import { Lightning, Star, Trophy, CreditCard, Fr } from 'lucide-react';

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-gradient-to-br from-white to-gray-100 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900">
          {t('hero.title_part1')}
          <span className="text-orange-400"> {t('hero.title_highlight')} </span>
          {t('hero.title_part2')}
          <span className="inline-block ml-2 text-gray-600 text-2xl">FR</span>
        </h1>
        <p className="text-lg mb-8 text-gray-600">
          {t('hero.subtitle')}
        </p>
        
        <div className="flex justify-center gap-6 mb-8">
          <img src="/instagram.png" alt="Instagram" className="w-16 h-16 rounded-xl shadow-md" />
          <img src="/tiktok.png" alt="TikTok" className="w-16 h-16 rounded-xl shadow-md" />
          <img src="/youtube.png" alt="YouTube" className="w-16 h-16 rounded-xl shadow-md" />
          <img src="/facebook.png" alt="Facebook" className="w-16 h-16 rounded-xl shadow-md" />
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-4 mb-8">
          <div className="space-y-3">
            <button className="w-full flex items-center gap-3 p-4 bg-red-50 rounded-xl text-left hover:bg-red-100 transition-colors">
              <div className="bg-red-500 rounded-full p-2">
                <div className="text-white">👤</div>
              </div>
              <span className="flex-1 text-gray-900">{t('hero.youtube_subscribers')}</span>
              <span className="text-gray-400">›</span>
            </button>
            
            <button className="w-full flex items-center gap-3 p-4 bg-red-50 rounded-xl text-left hover:bg-red-100 transition-colors">
              <div className="bg-red-500 rounded-full p-2">
                <div className="text-white">👁️</div>
              </div>
              <span className="flex-1 text-gray-900">{t('hero.youtube_views')}</span>
              <span className="text-gray-400">›</span>
            </button>
            
            <button className="w-full flex items-center gap-3 p-4 bg-red-50 rounded-xl text-left hover:bg-red-100 transition-colors">
              <div className="bg-red-500 rounded-full p-2">
                <div className="text-white">❤️</div>
              </div>
              <span className="flex-1 text-gray-900">{t('hero.youtube_likes')}</span>
              <span className="text-gray-400">›</span>
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="grid grid-cols-1 gap-4">
            <div className="flex items-center gap-2">
              <Lightning className="text-yellow-500" />
              <span className="text-gray-700">{t('hero.instant_delivery')}</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="text-yellow-500" />
              <span className="text-gray-700">{t('hero.lifetime_guarantee')}</span>
            </div>
            <div className="flex items-center gap-2">
              <Trophy className="text-yellow-500" />
              <span className="text-gray-700">{t('hero.best_quality')}</span>
            </div>
            <div className="flex items-center gap-2">
              <CreditCard className="text-blue-500" />
              <span className="text-gray-700">{t('hero.payment_methods')}</span>
            </div>
            <div className="flex items-center gap-2">
              <Fr className="text-blue-500" />
              <span className="text-gray-700">{t('hero.french_service')}</span>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center items-center gap-2">
          <span className="text-2xl font-bold">4.9</span>
          <div className="flex">
            {'★★★★★'.split('').map((star, i) => (
              <span key={i} className="text-green-500 text-xl">
                {star}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
