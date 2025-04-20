
import { useTranslation } from 'react-i18next';

export const About = () => {
  const { t } = useTranslation();

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">À propos de TopFollowers</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Nous sommes spécialistes des réseaux sociaux, offrant des services de qualité pour augmenter votre visibilité en ligne avec des abonnés réels et actifs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-blue-600 text-4xl font-bold mb-2">5+</div>
            <p className="text-gray-800 font-medium">Années d'expérience</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-blue-600 text-4xl font-bold mb-2">10K+</div>
            <p className="text-gray-800 font-medium">Clients satisfaits</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-blue-600 text-4xl font-bold mb-2">99%</div>
            <p className="text-gray-800 font-medium">Taux de satisfaction</p>
          </div>
        </div>
      </div>
    </div>
  );
};
