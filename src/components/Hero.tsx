
import { useTranslation } from 'react-i18next';
import { Zap, Star, Trophy, CreditCard, Flag } from 'lucide-react';

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* Éléments de fond orangés élégants */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-orange-100 to-orange-200 opacity-30 rounded-bl-[50%] blur-3xl z-0"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-orange-100 to-orange-200 opacity-20 rounded-tr-[50%] blur-3xl z-0"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="pt-16 pb-12">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-gray-900 tracking-tight leading-tight">
            {t('hero.title_part1')} {t('hero.title_part_5')}
            <span className="text-orange-500 ml-3">{t('hero.title_highlight')}</span>
            {t('hero.title_part2')}
          </h1>
          
          <p className="text-xl mb-12 text-gray-700 max-w-3xl mx-auto leading-relaxed">
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
                className="bg-white shadow-md p-4 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <img src={social.src} alt={social.alt} className="w-16 h-16 mx-auto rounded-xl" />
              </div>
            ))}
          </div>

          <div className="bg-white shadow-xl rounded-3xl p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: Zap, text: t('hero.instant_delivery'), color: "text-orange-500" },
                { icon: Star, text: t('hero.lifetime_guarantee'), color: "text-orange-500" },
                { icon: Trophy, text: t('hero.best_quality'), color: "text-orange-500" },
                { icon: CreditCard, text: t('hero.payment_methods'), color: "text-orange-600" },
                { icon: Flag, text: t('hero.french_service'), color: "text-orange-600" }
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-4 bg-orange-50/50 p-4 rounded-2xl hover:bg-orange-100/50 transition-all duration-300">
                  <feature.icon className={`${feature.color} w-8 h-8`} />
                  <span className="text-gray-800 text-lg">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
