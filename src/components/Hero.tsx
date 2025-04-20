
import { useTranslation } from 'react-i18next';
import { Zap, Star, Trophy, CreditCard, Flag } from 'lucide-react';

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-500 via-pink-400 to-orange-300 py-16 overflow-hidden">
      {/* Glassmorphism decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-white drop-shadow-lg">
          {t('hero.title_part1')}
          <span className="text-yellow-300"> {t('hero.title_highlight')} </span>
          {t('hero.title_part2')}
          <span className="inline-block ml-2 text-white/80 text-2xl">FR</span>
        </h1>
        <p className="text-lg mb-8 text-white/90 drop-shadow">
          {t('hero.subtitle')}
        </p>
        
        <div className="flex justify-center gap-6 mb-8">
          <div className="bg-white/10 p-2 rounded-xl backdrop-blur-md">
            <img src="/instagram.png" alt="Instagram" className="w-16 h-16 rounded-xl" />
          </div>
          <div className="bg-white/10 p-2 rounded-xl backdrop-blur-md">
            <img src="/tiktok.png" alt="TikTok" className="w-16 h-16 rounded-xl" />
          </div>
          <div className="bg-white/10 p-2 rounded-xl backdrop-blur-md">
            <img src="/youtube.png" alt="YouTube" className="w-16 h-16 rounded-xl" />
          </div>
          <div className="bg-white/10 p-2 rounded-xl backdrop-blur-md">
            <img src="/facebook.png" alt="Facebook" className="w-16 h-16 rounded-xl" />
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 mb-8 shadow-xl">
          <div className="space-y-3">
            <button className="w-full flex items-center gap-3 p-4 bg-white/5 hover:bg-white/20 rounded-xl text-left transition-colors backdrop-blur-sm">
              <div className="bg-red-500/80 backdrop-blur-sm rounded-full p-2">
                <div className="text-white">👤</div>
              </div>
              <span className="flex-1 text-white">{t('hero.youtube_subscribers')}</span>
              <span className="text-white/60">›</span>
            </button>
            
            <button className="w-full flex items-center gap-3 p-4 bg-white/5 hover:bg-white/20 rounded-xl text-left transition-colors backdrop-blur-sm">
              <div className="bg-red-500/80 backdrop-blur-sm rounded-full p-2">
                <div className="text-white">👁️</div>
              </div>
              <span className="flex-1 text-white">{t('hero.youtube_views')}</span>
              <span className="text-white/60">›</span>
            </button>
            
            <button className="w-full flex items-center gap-3 p-4 bg-white/5 hover:bg-white/20 rounded-xl text-left transition-colors backdrop-blur-sm">
              <div className="bg-red-500/80 backdrop-blur-sm rounded-full p-2">
                <div className="text-white">❤️</div>
              </div>
              <span className="flex-1 text-white">{t('hero.youtube_likes')}</span>
              <span className="text-white/60">›</span>
            </button>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <Zap className="text-yellow-300" />
              <span className="text-white">{t('hero.instant_delivery')}</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="text-yellow-300" />
              <span className="text-white">{t('hero.lifetime_guarantee')}</span>
            </div>
            <div className="flex items-center gap-2">
              <Trophy className="text-yellow-300" />
              <span className="text-white">{t('hero.best_quality')}</span>
            </div>
            <div className="flex items-center gap-2">
              <CreditCard className="text-blue-300" />
              <span className="text-white">{t('hero.payment_methods')}</span>
            </div>
            <div className="flex items-center gap-2">
              <Flag className="text-blue-300" />
              <span className="text-white">{t('hero.french_service')}</span>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center items-center gap-2">
          <span className="text-2xl font-bold text-white">4.9</span>
          <div className="flex">
            {'★★★★★'.split('').map((star, i) => (
              <span key={i} className="text-yellow-300 text-xl">
                {star}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
