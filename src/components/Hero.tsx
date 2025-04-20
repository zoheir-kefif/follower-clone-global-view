import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Card } from './ui/card';
import { User, Heart, Play, Instagram, Youtube, Facebook } from 'lucide-react';
import { SocialNetworkButton } from './social/SocialNetworkButton';
import { NetworkService } from './social/NetworkService';
import { FeatureItem } from './features/FeatureItem';
import { cn } from '@/lib/utils';

export const Hero = () => {
  const { t } = useTranslation();
  const [selectedNetwork, setSelectedNetwork] = useState('instagram');

  const socialNetworks = [
    { 
      icon: "/lovable-uploads/9946ac27-7509-4639-b273-31d6f888c6a1.png", // TikTok logo
      href: 'https://instagram.com',
      name: 'instagram',
      color: 'bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600'
    },
    { 
      icon: "/lovable-uploads/9218da51-6de2-4495-b7b0-6b9bad43d2dc.png", // Instagram logo
      href: 'https://tiktok.com',
      name: 'tiktok',
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
    <div className="relative min-h-screen bg-gradient-to-br from-[#FEC6A1] via-[#FFE5CE] to-[#FFF2E6]">
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
            {socialNetworks.map((network, index) => (
              <SocialNetworkButton
                key={index}
                icon={network.icon}
                name={network.name}
                color={network.color}
                isSelected={selectedNetwork === network.name}
                onClick={() => handleNetworkSelection(network.href)}
              />
            ))}
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
                  <NetworkService
                    key={index}
                    icon={service.icon}
                    title={service.title}
                    href={service.href}
                    theme={{
                      primary: networkTheme.primary,
                      secondary: networkTheme.secondary
                    }}
                  />
                ))}
              </div>
            </Card>
          </div>

          <Card className="max-w-4xl mx-auto mt-16 bg-white/90 backdrop-blur shadow-xl border-gray-100/30">
            <div className="p-8 space-y-6">
              {features.map((feature, index) => (
                <FeatureItem
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                />
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Hero;
