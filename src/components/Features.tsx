
import { useTranslation } from 'react-i18next';
import { Flag, Globe, ArrowUp, ArrowRight } from 'lucide-react';

export const Features = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      title: t('features.engagement'),
    },
    {
      icon: <Flag className="w-8 h-8 text-blue-600" />,
      title: t('features.followers'),
    },
    {
      icon: <ArrowUp className="w-8 h-8 text-blue-600" />,
      title: t('features.growth'),
    },
    {
      icon: <ArrowRight className="w-8 h-8 text-blue-600" />,
      title: t('features.posts'),
    },
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          {t('features.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              {feature.icon}
              <h3 className="mt-4 text-lg font-medium text-gray-900">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
