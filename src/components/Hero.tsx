import { useTranslation } from 'react-i18next';
import { Card } from './ui/card';
import { cn } from '@/lib/utils';
import { ChevronRight } from 'lucide-react';

export const Hero = () => {
  const { t } = useTranslation();

  const socialNetworks = [
    { 
      icon: "/lovable-uploads/33f3a639-e3bf-4f58-b8f4-52d6b3d89a52.png",
      href: 'https://instagram.com',
    },
    { 
      icon: "/lovable-uploads/1471a88d-c2f1-4898-b567-3fb37833cf7e.png",
      href: 'https://tiktok.com',
    },
    { 
      icon: "/lovable-uploads/6149cbf1-7bd1-4819-bc51-388bc865b2b6.png",
      href: 'https://youtube.com',
    },
    { 
      icon: "/lovable-uploads/79a016fe-1699-4def-bbdd-3d5a0a944fbd.png",
      href: 'https://facebook.com',
    }
  ];

  const services = [
    { 
      icon: "/lovable-uploads/7585a1a3-ed4e-45a6-af69-2b69ed8725b5.png",
      title: t('hero.instagram_followers'),
    },
    { 
      icon: "/lovable-uploads/2e71b6ef-f280-4fcd-bd47-89140bbbfcd2.png",
      title: t('hero.instagram_likes'),
    },
    { 
      icon: "/lovable-uploads/78547af1-2a14-433e-9a29-455baf369888.png",
      title: t('hero.instagram_views'),
    }
  ];

  const features = [
    {
      icon: '⚡',
      title: t('hero.instant_delivery'),
    },
    {
      icon: '⭐',
      title: t('hero.lifetime_guarantee'),
    },
    {
      icon: '🏆',
      title: t('hero.best_quality'),
    },
    {
      icon: '💳',
      title: t('hero.payment_methods'),
    },
    {
      icon: '🇫🇷',
      title: t('hero.french_service'),
    }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-white via-orange-50 to-orange-100">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-orange-200/30 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-orange-300/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-100/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 tracking-tight leading-[1.2] md:leading-[1.1]">
            {t('hero.title_part1')} <img src="/lovable-uploads/3ff93094-3bc0-4421-bf9a-ebc8ec672107.png" alt="heart" className="w-8 h-8 inline mr-1" /> <span>{t('hero.title_part1_5')}</span>
            <span className="bg-[length:200%_100%] animate-shimmer bg-gradient-to-r from-[#F2B33D] via-[#F27830] to-[#F2B33D] bg-clip-text text-transparent">
              {t('hero.title_highlight')}<br />
            </span>
            <span className="mt-2 md:mt-1">
              {t('hero.title_part2')}
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-12">
            {t('hero.subtitle')}
          </p>

          <div className="flex justify-center gap-4 mb-12">
            {socialNetworks.map((network, index) => (
              <a
                key={index}
                href={network.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center p-3 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <img src={network.icon} alt="" className="w-full h-full object-contain" />
              </a>
            ))}
          </div>

          <Card className="max-w-2xl mx-auto bg-gradient-to-br from-orange-50/80 to-orange-100/80 backdrop-blur border-orange-100/30 shadow-xl overflow-hidden">
            <div className="p-6 space-y-4">
              {services.map((service, index) => (
                <button
                  key={index}
                  className="w-full bg-white rounded-xl p-5 flex items-center justify-between hover:shadow-lg hover:scale-[1.02] transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl flex items-center justify-center p-3 group-hover:scale-110 transition-transform duration-300">
                      <img src={service.icon} alt="" className="w-10 h-10" />
                    </div>
                    <span className="text-lg font-semibold text-gray-800">{service.title}</span>
                  </div>
                  <ChevronRight className="w-6 h-6 text-orange-400 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              ))}
            </div>
          </Card>

          <Card className="max-w-4xl mx-auto mt-16 bg-white/90 backdrop-blur shadow-xl border-orange-100/30">
            <div className="p-8 space-y-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 text-left border-b last:border-0 border-orange-100/50 pb-6 last:pb-0"
                >
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-gradient-to-br from-orange-50 to-orange-100 rounded-full">
                    <span className="text-2xl">{feature.icon}</span>
                  </div>
                  <span className="text-lg font-bold text-gray-800">{feature.title}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
