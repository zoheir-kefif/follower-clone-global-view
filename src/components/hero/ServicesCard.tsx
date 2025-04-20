import { Card } from '../ui/card';
import { NetworkService } from '../social/NetworkService';
import { cn } from '@/lib/utils';
import { Instagram, Heart, Play, Youtube, Facebook, User } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface ServicesCardProps {
  selectedNetwork: string;
  networkTheme: {
    primary: string;
    secondary: string;
    icon: string;
    border: string;
    cardBg: string;
    indicator: string;
  };
}

export const ServicesCard = ({ selectedNetwork, networkTheme }: ServicesCardProps) => {
  const { t } = useTranslation();

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

  const currentServices = networkServices[selectedNetwork as keyof typeof networkServices] || networkServices.instagram;

  return (
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
  );
};
