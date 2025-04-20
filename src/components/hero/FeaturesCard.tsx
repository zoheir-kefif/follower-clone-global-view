
import { Card } from '../ui/card';
import { FeatureItem } from '../features/FeatureItem';
import { useTranslation } from 'react-i18next';

export const FeaturesCard = () => {
  const { t } = useTranslation();

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
  );
};
