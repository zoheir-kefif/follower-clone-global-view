
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SocialNetworkSelector } from './hero/SocialNetworkSelector';
import { ServicesCard } from './hero/ServicesCard';
import { FeaturesCard } from './hero/FeaturesCard';
import { getNetworkColors } from './hero/NetworkThemeProvider';

export const Hero = () => {
  const { t } = useTranslation();
  const [selectedNetwork, setSelectedNetwork] = useState('instagram');
  const networkTheme = getNetworkColors(selectedNetwork);

  return (
    <div className="relative min-h-screen pb-[40%] md:pb-[30%] lg:pb-[20%]">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F8F9FF] via-white to-[#F0F2FF]" />
      
      {/* Decorative image layer */}
      <div className="absolute inset-0 pb-[40%] md:pb-[30%] lg:pb-[20%]">
        <img 
          src="/lovable-uploads/2ecbff68-5598-4978-8eff-318724fddc7a.png"
          alt="Social media decoration"
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-auto object-cover"
        />
      </div>
      
      {/* Content layer */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 tracking-tight leading-[1.2] md:leading-[1.1]">
            {t('hero.title_part1')} <img src="/lovable-uploads/3ff93094-3bc0-4421-bf9a-ebc8ec672107.png" alt="heart" className="w-8 h-8 inline mr-1" /> <span>{t('hero.title_part1_5')}</span>
            <span className="bg-[length:200%_100%] animate-shimmer bg-gradient-to-r from-[#9b87f5] via-[#D946EF] to-[#9b87f5] bg-clip-text text-transparent">
              {t('hero.title_highlight')}<br />
            </span>
            <span className="mt-2 md:mt-1">
              {t('hero.title_part2')}
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
            {t('hero.subtitle')}
          </p>

          <div className="relative">
            <SocialNetworkSelector
              selectedNetwork={selectedNetwork}
              onNetworkSelect={setSelectedNetwork}
            />

            <ServicesCard
              selectedNetwork={selectedNetwork}
              networkTheme={networkTheme}
            />
          </div>

          <FeaturesCard />
        </div>
      </div>
    </div>
  );
};

export default Hero;
