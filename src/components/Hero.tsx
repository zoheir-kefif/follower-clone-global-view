
import { useTranslation } from 'react-i18next';
import { Card } from './ui/card';
import { cn } from '@/lib/utils';
import { User, Heart, Play, Instagram } from 'lucide-react';
import { useState } from 'react';

export const Hero = () => {
  const { t } = useTranslation();
  const [selectedNetwork, setSelectedNetwork] = useState('instagram');

  const socialNetworks = [
    { 
      icon: <Instagram className="w-14 h-14 md:w-16 md:h-16 text-black" />,
      href: 'https://instagram.com',
    },
    { 
      icon: <svg className="w-14 h-14 md:w-16 md:h-16 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12a3 3 0 1 0 6 0 3 3 0 0 0 -6 0"/>
        <path d="M12.5 8.5c.5 -1.5 1.5 -2 2.5 -2 .5 0 1 0 1.5 .5"/>
        <path d="M20 6v6a6 6 0 0 1 -6 6h-4a6 6 0 0 1 -6 -6v-6a6 6 0 0 1 6 -6h4a6 6 0 0 1 6 6z"/>
      </svg>,
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

  const networkServices = {
    instagram: [
      { 
        icon: <User className="w-7 h-7 md:w-8 md:h-8 text-black" />,
        title: t('hero.instagram_followers'),
        href: '/instagram-followers'
      },
      { 
        icon: <Heart className="w-7 h-7 md:w-8 md:h-8 text-black" />,
        title: t('hero.instagram_likes'),
        href: '/instagram-likes'
      },
      { 
        icon: <Play className="w-7 h-7 md:w-8 md:h-8 text-black" />,
        title: t('hero.instagram_views'),
        href: '/instagram-views'
      }
    ],
    tiktok: [
      {
        icon: <User className="w-7 h-7 md:w-8 md:h-8 text-black" />,
        title: 'Abonnés Tiktok',
        href: '/tiktok-followers'
      },
      {
        icon: <Heart className="w-7 h-7 md:w-8 md:h-8 text-black" />,
        title: 'Likes Tiktok',
        href: '/tiktok-likes'
      },
      {
        icon: <Play className="w-7 h-7 md:w-8 md:h-8 text-black" />,
        title: 'Vues Tiktok',
        href: '/tiktok-views'
      }
    ],
    youtube: [
      {
        icon: <User className="w-7 h-7 md:w-8 md:h-8 text-black" />,
        title: 'Abonnés Youtube',
        href: '/youtube-followers'
      },
      {
        icon: <Heart className="w-7 h-7 md:w-8 md:h-8 text-black" />,
        title: 'Likes Youtube',
        href: '/youtube-likes'
      },
      {
        icon: <Play className="w-7 h-7 md:w-8 md:h-8 text-black" />,
        title: 'Vues Youtube',
        href: '/youtube-views'
      }
    ],
    facebook: [
      {
        icon: <User className="w-7 h-7 md:w-8 md:h-8 text-black" />,
        title: 'Abonnés Facebook',
        href: '/facebook-followers'
      },
      {
        icon: <Heart className="w-7 h-7 md:w-8 md:h-8 text-black" />,
        title: 'Likes Facebook',
        href: '/facebook-likes'
      },
      {
        icon: <Play className="w-7 h-7 md:w-8 md:h-8 text-black" />,
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

  // Get services for the selected network, defaulting to Instagram if the selected network doesn't exist
  const currentServices = networkServices[selectedNetwork as keyof typeof networkServices] || networkServices.instagram;
  const isTikTok = selectedNetwork === 'tiktok';

  // Function to handle network selection and ensure it exists in networkServices
  const handleNetworkSelection = (network: string) => {
    // Extract network name from URL
    const networkName = network.split('.com')[0].replace('https://', '');
    
    // Check if this network exists in our services
    if (networkServices[networkName as keyof typeof networkServices]) {
      setSelectedNetwork(networkName);
    } else {
      // Default to Instagram if network not supported
      setSelectedNetwork('instagram');
    }
  };

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
          
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
            {t('hero.subtitle')}
          </p>

          <div className="flex flex-row justify-center gap-2 mb-0 w-full max-w-3xl mx-auto px-4">
            {socialNetworks.map((network, index) => {
              const networkName = network.href.split('.com')[0].replace('https://', '');
              const isSelected = selectedNetwork === networkName;
              
              return (
                <button
                  key={index}
                  onClick={() => handleNetworkSelection(network.href)}
                  className={cn(
                    "relative flex-1 aspect-square rounded-2xl flex items-center justify-center transition-all duration-300",
                    isSelected 
                      ? `bg-gradient-to-b from-white to-${isTikTok ? 'gray-900' : 'orange-50'} shadow-lg scale-105 z-10` 
                      : "bg-white hover:bg-orange-50 shadow-md hover:shadow-lg hover:scale-102"
                  )}
                >
                  <div 
                    className={cn(
                      "w-14 h-14 md:w-16 md:h-16 flex items-center justify-center transition-transform duration-300",
                      isSelected ? "scale-110" : "group-hover:scale-105"
                    )}
                  >
                    {typeof network.icon === 'string' ? (
                      <img 
                        src={network.icon} 
                        alt="" 
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
                        isTikTok ? "border-gray-800/80" : "border-orange-500/80"
                      )} />
                      
                      <div className={cn(
                        "absolute -bottom-4 left-0 right-0 mx-auto w-0.5 h-4",
                        isTikTok 
                          ? "bg-gradient-to-b from-gray-800 to-gray-700"
                          : "bg-gradient-to-b from-orange-500 to-orange-400"
                      )}>
                        <div className={cn(
                          "absolute -bottom-0.5 -left-1 w-2.5 h-2.5 rounded-full animate-pulse",
                          isTikTok ? "bg-gray-800/80" : "bg-orange-500/80"
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
                isTikTok 
                  ? "bg-gradient-to-r from-gray-700 via-gray-800 to-gray-700"
                  : "bg-gradient-to-r from-orange-400 via-orange-500 to-orange-400"
              )} />
              
              <div className={cn(
                "p-4 space-y-2.5",
                isTikTok ? "bg-gray-900" : "bg-white"
              )}>
                {currentServices.map((service, index) => (
                  <a
                    key={index}
                    href={service.href}
                    className={cn(
                      "block w-full rounded-lg p-3 md:p-3.5 flex items-center justify-between shadow-md hover:shadow-lg transition-all duration-200 group",
                      isTikTok
                        ? "bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800"
                        : "bg-gradient-to-r from-orange-50 to-white hover:from-orange-100 hover:to-orange-50"
                    )}
                  >
                    <div className="flex items-center gap-3 md:gap-4">
                      <div className={cn(
                        "w-11 h-11 md:w-12 md:h-12 rounded-xl flex items-center justify-center p-2 group-hover:scale-105 transition-transform duration-300",
                        isTikTok
                          ? "bg-gradient-to-br from-gray-700 to-gray-800"
                          : "bg-gradient-to-br from-orange-100 to-orange-200"
                      )}>
                        {service.icon}
                      </div>
                      <span className={cn(
                        "text-base md:text-lg font-semibold",
                        isTikTok ? "text-white" : "text-gray-900"
                      )}>
                        {service.title}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </Card>
          </div>

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

export default Hero;
