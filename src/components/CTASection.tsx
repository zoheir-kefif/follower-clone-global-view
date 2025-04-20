
export const CTASection = () => {
  return (
    <div className="bg-gradient-to-r from-orange-400 to-pink-500 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-white mb-8 md:mb-0 max-w-xl">
            <div className="flex items-center gap-2 mb-4">
              <span>★★★★★</span>
              <span className="text-sm">4.5/5 basé sur plus de 250 avis</span>
            </div>
            <h2 className="text-3xl font-bold mb-4">
              Obtenez des followers réels et actifs garantis en quelques secondes !
            </h2>
            <p className="mb-6">
              La meilleure qualité, livré en plus, 100% sans risque et parfaitement sécurisé. Livraison immédiate.
            </p>
            <button className="bg-white text-pink-500 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
              Choisissez un pack
            </button>
          </div>
          <div className="w-full md:w-1/3">
            <img 
              src="/person-image.png" 
              alt="Happy customer"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
