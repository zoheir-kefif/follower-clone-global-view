import { useTranslation } from 'react-i18next';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { ChevronRight, CreditCard, Zap, Instagram, Youtube, Facebook } from 'lucide-react';
import { cn } from '@/lib/utils';

export const Hero = () => {
  const { t } = useTranslation();

  const socialNetworks = [
    { icon: Instagram, color: 'from-pink-500 via-red-500 to-yellow-500', name: 'Instagram' },
    { icon: Youtube, color: 'from-red-600 to-red-500', name: 'YouTube' },
    { icon: Youtube, color: 'from-neutral-600 to-neutral-500', name: 'TikTok' },
    { icon: Facebook, color: 'from-blue-600 to-blue-500', name: 'Facebook' }
  ];

  const services = [
    { 
      icon: '👥',
      title: t('hero.instagram_followers'),
      color: 'bg-gradient-to-r from-orange-100 to-orange-50'
    },
    { 
      icon: '❤️',
      title: t('hero.instagram_likes'),
      color: 'bg-gradient-to-r from-red-50 to-red-100'
    },
    { 
      icon: '👁️',
      title: t('hero.instagram_views'),
      color: 'bg-gradient-to-r from-blue-50 to-blue-100'
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
        <div className="text-center mb-12">
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

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {socialNetworks.map((network, index) => (
              <Button
                key={index}
                size="lg"
                className={cn(
                  "bg-gradient-to-r hover:opacity-90 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl px-6 py-8",
                  network.color
                )}
              >
                <network.icon className="w-6 h-6 mr-2" />
                {network.name}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            {services.map((service, index) => (
              <Card
                key={index}
                className={cn(
                  "group hover:shadow-lg transition-all duration-300 cursor-pointer",
                  service.color
                )}
              >
                <div className="p-6 flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">{service.icon}</span>
                    <span className="text-lg font-medium text-gray-800">{service.title}</span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
                </div>
              </Card>
            ))}
          </div>

          <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-orange-100/30">
            <div className="p-6 space-y-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-left border-b last:border-0 border-orange-100/50 pb-4 last:pb-0"
                >
                  <span className="text-xl">{feature.icon}</span>
                  <span className="text-gray-700">{feature.title}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
