
import { Instagram, Tiktok, Youtube, Facebook } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">TopFollowers</h3>
            <p className="text-gray-600 text-sm">
              Leader dans la vente de followers et likes sur les réseaux sociaux.
            </p>
            <div className="flex gap-4 mt-4">
              <img src="/payment-methods.png" alt="Payment methods" className="h-8" />
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Nos services</h3>
            <ul className="space-y-2">
              <li><a href="/instagram" className="text-gray-600 hover:text-gray-900">Instagram</a></li>
              <li><a href="/tiktok" className="text-gray-600 hover:text-gray-900">TikTok</a></li>
              <li><a href="/youtube" className="text-gray-600 hover:text-gray-900">YouTube</a></li>
              <li><a href="/facebook" className="text-gray-600 hover:text-gray-900">Facebook</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Liens utiles</h3>
            <ul className="space-y-2">
              <li><a href="/faq" className="text-gray-600 hover:text-gray-900">FAQ</a></li>
              <li><a href="/conditions" className="text-gray-600 hover:text-gray-900">Conditions générales</a></li>
              <li><a href="/privacy" className="text-gray-600 hover:text-gray-900">Politique de confidentialité</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Contactez-nous</h3>
            <button className="bg-[#F85757] text-white px-6 py-2 rounded-full hover:bg-[#E74747] transition-colors">
              Commander un service
            </button>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center text-sm text-gray-600">
          © 2024 TopFollowers - Tous droits réservés
        </div>
      </div>
    </footer>
  );
};
