
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  fr: {
    translation: {
      "hero.title": "Analysez n'importe quel compte Instagram",
      "hero.subtitle": "Meilleure qualité sur le marché Français. Boost l'algorithme.",
      "hero.placeholder": "Entrez un nom d'utilisateur Instagram",
      "hero.button": "Analyser",
      "features.title": "Fonctionnalités",
      "features.engagement": "Taux d'engagement",
      "features.followers": "Analyse des abonnés",
      "features.growth": "Croissance du compte",
      "features.posts": "Analyse des publications",
      "hero.title_part1": "Obtenez des",
      "hero.title_part1_5": "fansss",
      "hero.title_highlight": "français actifs",
      "hero.title_part2": "en quelques secondes !",
      "hero.youtube_subscribers": "Abonnés YouTube",
      "hero.youtube_views": "Vues YouTube",
      "hero.youtube_likes": "Likes YouTube",
      "hero.instant_delivery": "Livraison Instantanée",
      "hero.lifetime_guarantee": "Garantie à vie",
      "hero.best_quality": "Meilleure qualité sur le marché Français",
      "hero.payment_methods": "Apple Pay ou carte de crédit",
      "hero.french_service": "Service 100 % FRANÇAIS"
    }
  },
  en: {
    translation: {
      "hero.title": "Analyze any Instagram account",
      "hero.subtitle": "Best quality on the French market. Boost the algorithm.",
      "hero.placeholder": "Enter an Instagram username",
      "hero.button": "Analyze",
      "features.title": "Features",
      "features.engagement": "Engagement rate",
      "features.followers": "Follower analysis",
      "features.growth": "Account growth",
      "features.posts": "Post analysis",
      "hero.title_part1": "Get",
      "hero.title_highlight": "French active fans",
      "hero.title_part2": "in seconds!",
      "hero.youtube_subscribers": "YouTube Subscribers",
      "hero.youtube_views": "YouTube Views",
      "hero.youtube_likes": "YouTube Likes",
      "hero.instant_delivery": "Instant Delivery",
      "hero.lifetime_guarantee": "Lifetime Guarantee",
      "hero.best_quality": "Best quality on the French market",
      "hero.payment_methods": "Apple Pay or credit card",
      "hero.french_service": "100% FRENCH Service"
    }
  },
  de: {
    translation: {
      "hero.title": "Analysieren Sie jedes Instagram-Konto",
      "hero.subtitle": "Beste Qualität auf dem französischen Markt. Boost den Algorithmus.",
      "hero.placeholder": "Instagram-Benutzernamen eingeben",
      "hero.button": "Analysieren",
      "features.title": "Funktionen",
      "features.engagement": "Engagement-Rate",
      "features.followers": "Follower-Analyse",
      "features.growth": "Konto-Wachstum",
      "features.posts": "Beitragsanalyse",
      "hero.title_part1": "Holen Sie sich",
      "hero.title_highlight": "aktive französische Fans",
      "hero.title_part2": "in Sekunden!",
      "hero.youtube_subscribers": "YouTube Abonnenten",
      "hero.youtube_views": "YouTube Aufrufe",
      "hero.youtube_likes": "YouTube Likes",
      "hero.instant_delivery": "Sofortige Lieferung",
      "hero.lifetime_guarantee": "Lebenslange Garantie",
      "hero.best_quality": "Beste Qualität auf dem französischen Markt",
      "hero.payment_methods": "Apple Pay oder Kreditkarte",
      "hero.french_service": "100% FRANZÖSISCHER Service"
    }
  },
  it: {
    translation: {
      "hero.title": "Analizza qualsiasi account Instagram",
      "hero.subtitle": "Migliore qualità sul mercato francese. Potenzia l'algoritmo.",
      "hero.placeholder": "Inserisci un nome utente Instagram",
      "hero.button": "Analizzare",
      "features.title": "Funzionalità",
      "features.engagement": "Tasso di engagement",
      "features.followers": "Analisi dei follower",
      "features.growth": "Crescita dell'account",
      "features.posts": "Analisi dei post",
      "hero.title_part1": "Ottieni",
      "hero.title_highlight": "fan francesi attivi",
      "hero.title_part2": "in pochi secondi!",
      "hero.youtube_subscribers": "Iscritti YouTube",
      "hero.youtube_views": "Visualizzazioni YouTube",
      "hero.youtube_likes": "Mi piace YouTube",
      "hero.instant_delivery": "Consegna Istantanea",
      "hero.lifetime_guarantee": "Garanzia a vita",
      "hero.best_quality": "Migliore qualità sul mercato francese",
      "hero.payment_methods": "Apple Pay o carta di credito",
      "hero.french_service": "Servizio 100% FRANCESE"
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
