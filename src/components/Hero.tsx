
import { useTranslation } from 'react-i18next';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card } from './ui/card';
import { ChartIcon } from './icons/ChartIcon';
import { CreditCard, LineChart, TrendingUp, Zap } from 'lucide-react';

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-white to 60%">
      {/* Éléments de fond élégants */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-orange-50 to-orange-100/50 opacity-40 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-orange-100/80 to-orange-50/50 opacity-30 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-800 bg-clip-text text-transparent tracking-tight leading-tight">
            Simplifiez votre gestion
            <span className="bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent block mt-2">
              financière aujourd'hui
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Gérez vos finances en toute simplicité avec notre solution intuitive et sécurisée.
          </p>

          <Button 
            size="lg"
            className="bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-full px-8 py-6 text-lg font-medium"
          >
            Commencer gratuitement
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {[
            {
              title: "Analytics Avancés",
              description: "Suivez vos performances en temps réel",
              icon: LineChart,
              badge: "Premium",
              color: "bg-orange-500"
            },
            {
              title: "Paiements Sécurisés",
              description: "Transactions protégées et instantanées",
              icon: CreditCard,
              badge: "Populaire",
              color: "bg-orange-400"
            },
            {
              title: "Croissance Rapide",
              description: "Optimisez votre rentabilité",
              icon: TrendingUp,
              badge: "Recommandé",
              color: "bg-orange-300"
            }
          ].map((feature, index) => (
            <Card key={index} className="relative overflow-hidden backdrop-blur-sm border border-orange-100/20 shadow-lg hover:shadow-xl transition-all duration-300">
              <Badge 
                className={`absolute top-4 left-4 ${feature.color} text-white border-none`}
                variant="secondary"
              >
                {feature.badge}
              </Badge>
              
              <div className="p-6 pt-14">
                <feature.icon className="w-10 h-10 text-orange-500 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
                
                <div className="mt-6 flex items-center justify-between">
                  <div className="h-10 w-24 bg-orange-50 rounded-lg animate-pulse"></div>
                  <Zap className="w-5 h-5 text-orange-400" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
