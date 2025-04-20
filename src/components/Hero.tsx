
import { useTranslation } from 'react-i18next';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card } from './ui/card';
import { CreditCard, LineChart, TrendingUp, Zap } from 'lucide-react';

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-white via-orange-50 to-orange-100">
      {/* Effets de fond améliorés */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-orange-200/30 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-orange-300/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-100/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900 tracking-tight leading-tight">
            {t('hero.title_part1')}
            <span className="relative block mt-2 bg-gradient-to-r from-[#F2B33D] via-[#F27830] to-[#F2B33D] bg-clip-text text-transparent overflow-hidden">
              <span className="relative z-10 inline-block">
                {t('hero.title_highlight')}
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></span>
            </span>
            {t('hero.title_part2')}
          </h1>
          
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
            {t('hero.subtitle')}
          </p>

          <Button 
            size="lg"
            className="bg-gradient-to-r from-[#F2B33D] to-[#F27830] text-white hover:from-[#F27830] hover:to-[#F2B33D] shadow-lg hover:shadow-xl transition-all duration-300 rounded-full px-8 py-6 text-lg font-medium"
          >
            {t('hero.button')}
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {[
            {
              title: "Analytics Avancés",
              description: "Suivez vos performances en temps réel",
              icon: LineChart,
              badge: "Premium",
              color: "bg-orange-500/20"
            },
            {
              title: "Paiements Sécurisés",
              description: "Transactions protégées et instantanées",
              icon: CreditCard,
              badge: "Populaire",
              color: "bg-orange-400/20"
            },
            {
              title: "Croissance Rapide",
              description: "Optimisez votre rentabilité",
              icon: TrendingUp,
              badge: "Recommandé",
              color: "bg-orange-300/20"
            }
          ].map((feature, index) => (
            <Card key={index} className="relative overflow-hidden backdrop-blur-sm bg-white/70 border border-orange-200/30 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl">
              <Badge 
                className={`absolute top-4 left-4 ${feature.color} text-orange-700 border-orange-300/50 shadow-sm`}
                variant="secondary"
              >
                {feature.badge}
              </Badge>
              
              <div className="p-6 pt-14">
                <feature.icon className="w-10 h-10 text-orange-500 mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
                
                <div className="mt-6 flex items-center justify-between">
                  <div className="h-10 w-24 bg-orange-400/10 rounded-lg animate-pulse"></div>
                  <Zap className="w-5 h-5 text-orange-500" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
