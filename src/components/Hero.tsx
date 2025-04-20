
import { useTranslation } from 'react-i18next';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card } from './ui/card';
import { ChartIcon } from './icons/ChartIcon';
import { CreditCard, LineChart, TrendingUp, Zap } from 'lucide-react';

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Effets de fond améliorés */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-orange-500/30 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-orange-400/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-300/10 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-100 to-orange-50 tracking-tight leading-tight">
            Simplifiez votre gestion
            <span className="bg-gradient-to-r from-orange-400 to-orange-300 bg-clip-text text-transparent block mt-2">
              financière aujourd'hui
            </span>
          </h1>
          
          <p className="text-xl text-orange-100/80 max-w-3xl mx-auto leading-relaxed mb-8">
            Gérez vos finances en toute simplicité avec notre solution intuitive et sécurisée.
          </p>

          <Button 
            size="lg"
            className="bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 text-white shadow-[0_0_20px_rgba(251,146,60,0.3)] hover:shadow-[0_0_25px_rgba(251,146,60,0.4)] transition-all duration-300 rounded-full px-8 py-6 text-lg font-medium"
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
              color: "bg-orange-500/80"
            },
            {
              title: "Paiements Sécurisés",
              description: "Transactions protégées et instantanées",
              icon: CreditCard,
              badge: "Populaire",
              color: "bg-orange-400/80"
            },
            {
              title: "Croissance Rapide",
              description: "Optimisez votre rentabilité",
              icon: TrendingUp,
              badge: "Recommandé",
              color: "bg-orange-300/80"
            }
          ].map((feature, index) => (
            <Card key={index} className="relative overflow-hidden backdrop-blur-md bg-white/5 border border-orange-200/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(251,146,60,0.15)] transition-all duration-300">
              <Badge 
                className={`absolute top-4 left-4 ${feature.color} text-white border-none shadow-lg`}
                variant="secondary"
              >
                {feature.badge}
              </Badge>
              
              <div className="p-6 pt-14">
                <feature.icon className="w-10 h-10 text-orange-400 mb-4" />
                <h3 className="text-xl font-semibold text-orange-50 mb-2">{feature.title}</h3>
                <p className="text-orange-200/80">{feature.description}</p>
                
                <div className="mt-6 flex items-center justify-between">
                  <div className="h-10 w-24 bg-orange-400/10 rounded-lg animate-pulse"></div>
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
