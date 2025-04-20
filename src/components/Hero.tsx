
import { useTranslation } from 'react-i18next';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Instagram, Youtube, Facebook, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';

export const Hero = () => {
  const { t } = useTranslation();

  const socialNetworks = [
    { 
      icon: Instagram,
      gradient: 'from-pink-500 via-red-500 to-yellow-500',
      href: 'https://instagram.com'
    },
    { 
      icon: Youtube,
      gradient: 'from-red-600 to-red-500',
      href: 'https://youtube.com'
    },
    { 
      icon: Youtube,
      gradient: 'from-neutral-600 to-neutral-500',
      href: 'https://tiktok.com'
    },
    { 
      icon: Facebook,
      gradient: 'from-blue-600 to-blue-500',
      href: 'https://facebook.com'
    }
  ];

  const services = [
    { 
      icon: '👥',
      title: t('hero.instagram_followers'),
      color: 'bg-gradient-to-br from-pink-50 to-pink-100'
    },
    { 
      icon: '❤️',
      title: t('hero.instagram_likes'),
      color: 'bg-gradient-to-br from-red-50 to-red-100'
    },
    { 
      icon: '👁️',
      title: t('hero.instagram_views'),
      color: 'bg-gradient-to-br from-blue-50 to-blue-100'
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

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 max-w-4xl mx-auto">
            {socialNetworks.map((network, index) => (
              <a
                key={index}
                href={network.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "flex items-center justify-center p-8 rounded-2xl bg-gradient-to-br shadow-lg hover:shadow-xl transition-all duration-300 text-white",
                  network.gradient
                )}
              >
                <network.icon className="w-12 h-12" />
              </a>
            ))}
          </div>

          <Card className="max-w-4xl mx-auto bg-white/80 backdrop-blur mb-12 shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={cn(
                    "group p-8 hover:scale-105 transition-transform duration-300",
                    service.color,
                    index !== services.length - 1 && "border-b md:border-b-0 md:border-r border-gray-100"
                  )}
                >
                  <div className="flex flex-col items-center gap-4">
                    <span className="text-4xl">{service.icon}</span>
                    <span className="text-xl font-semibold text-gray-800">{service.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="max-w-4xl mx-auto bg-white/90 backdrop-blur shadow-xl border-orange-100/30">
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
