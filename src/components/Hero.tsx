
import { useTranslation } from 'react-i18next';

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-gradient-to-b from-purple-600 to-pink-500 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
          <span>{t('hero.main_title')} </span>
          <span className="text-yellow-400">français actifs</span>
          <span> en quelques secondes !</span>
        </h1>
        <p className="text-lg mb-12">
          {t('hero.subtitle_pack')}
        </p>
        
        <div className="flex justify-center gap-4 mb-12">
          <div className="w-16 h-16"><img src="/instagram.png" alt="Instagram" className="w-full" /></div>
          <div className="w-16 h-16"><img src="/tiktok.png" alt="TikTok" className="w-full" /></div>
          <div className="w-16 h-16"><img src="/youtube.png" alt="YouTube" className="w-full" /></div>
          <div className="w-16 h-16"><img src="/facebook.png" alt="Facebook" className="w-full" /></div>
        </div>

        <div className="bg-white rounded-lg p-4 max-w-2xl mx-auto">
          <div className="grid grid-cols-1 gap-4">
            <div className="flex items-center gap-2 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
              <div className="w-8 h-8 bg-[#F85757] rounded-full flex items-center justify-center text-white">1</div>
              <span className="flex-1 text-left text-gray-900">{t('hero.instagram_pack')}</span>
              <span className="text-gray-400">›</span>
            </div>
            <div className="flex items-center gap-2 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
              <div className="w-8 h-8 bg-[#F85757] rounded-full flex items-center justify-center text-white">2</div>
              <span className="flex-1 text-left text-gray-900">{t('hero.likes_pack')}</span>
              <span className="text-gray-400">›</span>
            </div>
            <div className="flex items-center gap-2 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
              <div className="w-8 h-8 bg-[#F85757] rounded-full flex items-center justify-center text-white">3</div>
              <span className="flex-1 text-left text-gray-900">{t('hero.views_pack')}</span>
              <span className="text-gray-400">›</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
