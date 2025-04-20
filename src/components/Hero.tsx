
import { useTranslation } from 'react-i18next';
import { Zap, Star, Trophy, CreditCard, Flag } from 'lucide-react';

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-500 via-pink-400 to-orange-300 py-16 overflow-hidden">
      {/* Elegant animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-white drop-shadow-lg tracking-tight leading-tight">
          {t('hero.title_part1')}
          <span className="text-yellow-300"> {t('hero.title_highlight')} </span>
          {t('hero.title_part2')}
          <span className="inline-block ml-2 text-white/80 text-2xl">FR</span>
        </h1>
        
        <p className="text-lg mb-12 text-white/90 drop-shadow max-w-2xl mx-auto leading-relaxed">
          {t('hero.subtitle')}
        </p>
        
        <div className="flex justify-center gap-8 mb-12">
          {[
            { src: "/instagram.png", alt: "Instagram" },
            { src: "/tiktok.png", alt: "TikTok" },
            { src: "/youtube.png", alt: "YouTube" },
            { src: "/facebook.png", alt: "Facebook" }
          ].map((social) => (
            <div key={social.alt} className="group transform hover:scale-105 transition-all duration-300">
              <div className="bg-white/10 p-3 rounded-2xl backdrop-blur-md border border-white/20 shadow-xl hover:bg-white/20 transition-all duration-300">
                <img src={social.src} alt={social.alt} className="w-14 h-14 rounded-xl" />
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white/5 backdrop-blur-md rounded-3xl p-6 mb-12 shadow-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
          <div className="space-y-4">
            {[
              { emoji: "👤", text: t('hero.youtube_subscribers') },
              { emoji: "👁️", text: t('hero.youtube_views') },
              { emoji: "❤️", text: t('hero.youtube_likes') }
            ].map((item, index) => (
              <button
                key={index}
                className="w-full flex items-center gap-4 p-5 bg-white/5 hover:bg-white/15 rounded-2xl text-left transition-all duration-300 group"
              >
                <div className="bg-gradient-to-br from-red-500/80 to-pink-500/80 backdrop-blur-sm rounded-full p-3 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-2xl">{item.emoji}</div>
                </div>
                <span className="flex-1 text-white text-lg font-medium">{item.text}</span>
                <span className="text-white/60 group-hover:translate-x-1 transition-transform duration-300">›</span>
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { icon: Zap, text: t('hero.instant_delivery'), color: "text-yellow-300" },
              { icon: Star, text: t('hero.lifetime_guarantee'), color: "text-yellow-300" },
              { icon: Trophy, text: t('hero.best_quality'), color: "text-yellow-300" },
              { icon: CreditCard, text: t('hero.payment_methods'), color: "text-blue-300" },
              { icon: Flag, text: t('hero.french_service'), color: "text-blue-300" }
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-3 group">
                <feature.icon className={`${feature.color} w-6 h-6 group-hover:scale-110 transition-transform duration-300`} />
                <span className="text-white text-lg">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex justify-center items-center gap-3">
          <span className="text-3xl font-bold text-white">4.9</span>
          <div className="flex">
            {Array(5).fill('★').map((star, i) => (
              <span key={i} className="text-yellow-300 text-2xl animate-pulse">
                {star}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
