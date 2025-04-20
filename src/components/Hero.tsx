
import { useTranslation } from 'react-i18next';
import { Card } from './ui/card';
import { cn } from '@/lib/utils';
import { User, Heart, Play, Instagram, Youtube, Facebook } from 'lucide-react';
import { useState } from 'react';

export const Hero = () => {
  const { t } = useTranslation();
  const [selectedNetwork, setSelectedNetwork] = useState('instagram');

  const socialNetworks = [
    { 
      icon: "/lovable-uploads/9946ac27-7509-4639-b273-31d6f888c6a1.png", // TikTok logo
      href: 'https://tiktok.com',
      name: 'tiktok',
      color: 'bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600'
    },
    { 
      icon: "/lovable-uploads/9218da51-6de2-4495-b7b0-6b9bad43d2dc.png", // Instagram logo
      href: 'https://instagram.com',
      name: 'instagram',
      color: 'bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400'
    },
    { 
      icon: "/lovable-uploads/6149cbf1-7bd1-4819-bc51-388bc865b2b6.png", // YouTube logo
      href: 'https://youtube.com',
      name: 'youtube',
      color: 'bg-gradient-to-r from-red-500 to-red-600'
    },
    { 
      icon: "/lovable-uploads/79a016fe-1699-4def-bbdd-3d5a0a944fbd.png", // Facebook logo
      href: 'https://facebook.com',
      name: 'facebook',
      color: 'bg-gradient-to-r from-blue-600 to-blue-500'
    }
  ];

  const getNetworkColors = (network) => {
    switch(network) {
      case 'instagram':
        return {
          primary: 'text-fuchsia-600',
          secondary: 'from-purple-100 to-pink-100',
          icon: 'text-gradient-to-r from-purple-600 via-pink-600 to-orange-500',
          border: 'border-pink-300',
          cardBg: 'from-purple-50 to-pink-50',
          indicator: 'bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400'
        };
      case 'tiktok':
        return {
          primary: 'text-pink-600',
          secondary: 'from-gray-100 to-pink-100',
          icon: 'text-pink-600',
          border: 'border-pink-300',
          cardBg: 'from-gray-50 to-pink-50',
          indicator: 'bg-gradient-to-r from-black to-pink-500'
        };
      case 'youtube':
        return {
          primary: 'text-red-600',
          secondary: 'from-red-100 to-gray-100',
          icon: 'text-red-600',
          border: 'border-red-300',
          cardBg: 'from-red-50 to-white',
          indicator: 'bg-gradient-to-r from-red-500 to-red-600'
        };
      case 'facebook':
        return {
          primary: 'text-blue-600',
          secondary: 'from-blue-100 to-blue-50',
          icon: 'text-blue-600',
          border: 'border-blue-300',
          cardBg: 'from-blue-50 to-white',
          indicator: 'bg-gradient-to-r from-blue-600 to-blue-500'
        };
      default:
        return {
          primary: 'text-fuchsia-600',
          secondary: 'from-purple-100 to-pink-100',
          icon: 'text-gradient-to-r from-purple-600 via-pink-600 to-orange-500',
          border: 'border-pink-300',
          cardBg: 'from-purple-50 to-pink-50',
          indicator: 'bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400'
        };
    }
  };

  const networkServices = {
    instagram: [
      { 
        icon: <Instagram className="w-7 h-7 md:w-8 md:h-8" />,
        title: t('hero.instagram_followers'),
        href: '/instagram-followers'
      },
      { 
        icon: <Heart className="w-7 h-7 md:w-8 md:h-8" />,
        title: t('hero.instagram_likes'),
        href: '/instagram-likes'
      },
      { 
        icon: <Play className="w-7 h-7 md:w-8 md:h-8" />,
        title: t('hero.instagram_views'),
        href: '/instagram-views'
      }
    ],
    tiktok: [
      {
        icon: <User className="w-7 h-7 md:w-8 md:h-8" />,
        title: 'Abonnés Tiktok',
        href: '/tiktok-followers'
      },
      {
        icon: <Heart className="w-7 h-7 md:w-8 md:h-8" />,
        title: 'Likes Tiktok',
        href: '/tiktok-likes'
      },
      {
        icon: <Play className="w-7 h-7 md:w-8 md:h-8" />,
        title: 'Vues Tiktok',
        href: '/tiktok-views'
      }
    ],
    youtube: [
      {
        icon: <Youtube className="w-7 h-7 md:w-8 md:h-8" />,
        title: 'Abonnés Youtube',
        href: '/youtube-followers'
      },
      {
        icon: <Heart className="w-7 h-7 md:w-8 md:h-8" />,
        title: 'Likes Youtube',
        href: '/youtube-likes'
      },
      {
        icon: <Play className="w-7 h-7 md:w-8 md:h-8" />,
        title: 'Vues Youtube',
        href: '/youtube-views'
      }
    ],
    facebook: [
      {
        icon: <Facebook className="w-7 h-7 md:w-8 md:h-8" />,
        title: 'Abonnés Facebook',
        href: '/facebook-followers'
      },
      {
        icon: <Heart className="w-7 h-7 md:w-8 md:h-8" />,
        title: 'Likes Facebook',
        href: '/facebook-likes'
      },
      {
        icon: <Play className="w-7 h-7 md:w-8 md:h-8" />,
        title: 'Vues Facebook',
        href: '/facebook-views'
      }
    ]
  };

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

  const currentServices = networkServices[selectedNetwork as keyof typeof networkServices] || networkServices.instagram;
  const networkTheme = getNetworkColors(selectedNetwork);

  const handleNetworkSelection = (network: string) => {
    const networkName = network.split('.com')[0].replace('https://', '');
    
    if (networkServices[networkName as keyof typeof networkServices]) {
      setSelectedNetwork(networkName);
    } else {
      setSelectedNetwork('instagram');
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-gray-200/30 to-gray-300/20 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-gradient-to-br from-gray-200/30 to-gray-300/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-gray-100/20 to-gray-200/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
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
          
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
            {t('hero.subtitle')}
          </p>

          <div className="flex flex-row justify-center gap-2 mb-0 w-full max-w-3xl mx-auto px-4">
            {socialNetworks.map((network, index) => {
              const isSelected = selectedNetwork === network.name;
              
              return (
                <button
                  key={index}
                  onClick={() => handleNetworkSelection(network.href)}
                  className={cn(
                    "relative flex-1 aspect-square rounded-2xl flex items-center justify-center transition-all duration-300",
                    isSelected 
                      ? `bg-gradient-to-b ${networkTheme.secondary} shadow-lg scale-105 z-10` 
                      : "bg-white hover:bg-gray-50 shadow-md hover:shadow-lg hover:scale-102"
                  )}
                >
                  <div 
                    className={cn(
                      "w-14 h-14 md:w-16 md:h-16 flex items-center justify-center transition-transform duration-300",
                      isSelected ? "scale-110" : "hover:scale-105"
                    )}
                  >
                    {typeof network.icon === 'string' ? (
                      <img 
                        src={network.icon} 
                        alt={network.name} 
                        className="w-full h-full object-contain p-1.5" 
                      />
                    ) : (
                      network.icon
                    )}
                  </div>
                  
                  {isSelected && (
                    <>
                      <div className={cn(
                        "absolute inset-0 rounded-2xl border-2 animate-pulse",
                        networkTheme.border
                      )} />
                      
                      <div className={cn(
                        "absolute -bottom-4 left-0 right-0 mx-auto w-0.5 h-4",
                        networkTheme.indicator
                      )}>
                        <div className={cn(
                          "absolute -bottom-0.5 -left-1 w-2.5 h-2.5 rounded-full animate-pulse",
                          networkTheme.indicator
                        )} />
                      </div>
                    </>
                  )}
                </button>
              );
            })}
          </div>

          <div className="relative mt-0">
            <Card className="max-w-3xl mx-auto mt-4 overflow-hidden rounded-2xl shadow-xl border-0">
              <div className={cn(
                "h-0.5 w-full",
                networkTheme.indicator
              )} />
              
              <div className={cn(
                "p-4 space-y-2.5",
                `bg-gradient-to-br ${networkTheme.cardBg}`
              )}>
                {currentServices.map((service, index) => (
                  <a
                    key={index}
                    href={service.href}
                    className={cn(
                      "block w-full rounded-lg p-3 md:p-3.5 flex items-center justify-between shadow-md hover:shadow-lg transition-all duration-200 group bg-white bg-opacity-70 backdrop-blur-sm hover:bg-opacity-90"
                    )}
                  >
                    <div className="flex items-center gap-3 md:gap-4">
                      <div className={cn(
                        "w-11 h-11 md:w-12 md:h-12 rounded-xl flex items-center justify-center p-2 group-hover:scale-105 transition-transform duration-300 bg-gradient-to-br",
                        networkTheme.secondary
                      )}>
                        <div className={networkTheme.primary}>
                          {service.icon}
                        </div>
                      </div>
                      <span className={cn(
                        "text-base md:text-lg font-semibold text-gray-800"
                      )}>
                        {service.title}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </Card>
          </div>

          <Card className="max-w-4xl mx-auto mt-16 bg-white/90 backdrop-blur shadow-xl border-gray-100/30">
            <div className="p-8 space-y-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 text-left border-b last:border-0 border-gray-100/50 pb-6 last:pb-0"
                >
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 rounded-full">
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

export default Hero;
