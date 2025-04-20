
import { useTranslation } from 'react-i18next';
import { Zap, Star, Trophy, CreditCard, Flag } from 'lucide-react';

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#1A1F2C] via-[#2C3646] to-[#3D4D5E] py-16 overflow-hidden">
      {/* Éléments de fond élégants et animés */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-screen blur-3xl animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-screen blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-12 border border-white/10 shadow-2xl">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-white drop-shadow-lg tracking-tight leading-tight">
            {t('hero.title_part1')}
            <span className="text-yellow-300 ml-3">{t('hero.title_highlight')}</span>
            {t('hero.title_part2')}
          </h1>
          
          <p className="text-xl mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed">
            {t('hero.subtitle')}
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12">
            {[
              { src: "/instagram.png", alt: "Instagram" },
              { src: "/tiktok.png", alt: "TikTok" },
              { src: "/youtube.png", alt: "YouTube" },
              { src: "/facebook.png", alt: "Facebook" }
            ].map((social) => (
              <div 
                key={social.alt} 
                className="bg-white/10 p-4 rounded-2xl backdrop-blur-md border border-white/20 transition-all duration-300 hover:scale-105 hover:bg-white/20"
              >
                <img src={social.src} alt={social.alt} className="w-16 h-16 mx-auto rounded-xl" />
              </div>
            ))}
          </div>

          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: Zap, text: t('hero.instant_delivery'), color: "text-yellow-300" },
                { icon: Star, text: t('hero.lifetime_guarantee'), color: "text-yellow-300" },
                { icon: Trophy, text: t('hero.best_quality'), color: "text-yellow-300" },
                { icon: CreditCard, text: t('hero.payment_methods'), color: "text-blue-300" },
                { icon: Flag, text: t('hero.french_service'), color: "text-blue-300" }
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl hover:bg-white/10 transition-all duration-300">
                  <feature.icon className={`${feature.color} w-8 h-8`} />
                  <span className="text-white text-lg">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
