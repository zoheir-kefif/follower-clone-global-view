
import { useTranslation } from 'react-i18next';

export const FAQ = () => {
  const { t } = useTranslation();

  return (
    <div className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Questions fréquentes</h2>
        <div className="space-y-4">
          {[
            "Les profils que vous recevez sont-ils actifs et réels ?",
            "Pourquoi choisir une agence française ?",
            "Y a-t-il un risque à passer commande sur votre site ?",
            "Est-ce qu'il y a un abonnement après la commande ?"
          ].map((question, index) => (
            <div key={index} className="border rounded-lg p-4 cursor-pointer hover:bg-gray-50">
              <div className="flex justify-between items-center">
                <span className="text-gray-900">{question}</span>
                <span className="text-gray-400">›</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
