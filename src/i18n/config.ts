
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  fr: {
    translation: {
      "hero.title": "Analysez n'importe quel compte Instagram",
      "hero.subtitle": "Obtenez des statistiques détaillées sur n'importe quel compte Instagram public",
      "hero.placeholder": "Entrez un nom d'utilisateur Instagram",
      "hero.button": "Analyser",
      "features.title": "Fonctionnalités",
      "features.engagement": "Taux d'engagement",
      "features.followers": "Analyse des abonnés",
      "features.growth": "Croissance du compte",
      "features.posts": "Analyse des publications",
      "hero.main_title": "Obtenez des fans français actifs",
      "hero.subtitle_pack": "Meilleure qualité sur le marché français, livré rapidement.",
      "hero.instagram_pack": "Achetez Instagram",
      "hero.likes_pack": "Likes Instagram",
      "hero.views_pack": "Vues Instagram"
    }
  },
  en: {
    translation: {
      "hero.title": "Analyze any Instagram account",
      "hero.subtitle": "Get detailed statistics on any public Instagram account",
      "hero.placeholder": "Enter an Instagram username",
      "hero.button": "Analyze",
      "features.title": "Features",
      "features.engagement": "Engagement rate",
      "features.followers": "Follower analysis",
      "features.growth": "Account growth",
      "features.posts": "Post analysis",
      "hero.main_title": "Get active French fans",
      "hero.subtitle_pack": "Best quality on the French market, delivered quickly.",
      "hero.instagram_pack": "Buy Instagram",
      "hero.likes_pack": "Instagram Likes",
      "hero.views_pack": "Instagram Views"
    }
  },
  de: {
    translation: {
      "hero.title": "Analysieren Sie jedes Instagram-Konto",
      "hero.subtitle": "Erhalten Sie detaillierte Statistiken zu jedem öffentlichen Instagram-Konto",
      "hero.placeholder": "Instagram-Benutzernamen eingeben",
      "hero.button": "Analysieren",
      "features.title": "Funktionen",
      "features.engagement": "Engagement-Rate",
      "features.followers": "Follower-Analyse",
      "features.growth": "Konto-Wachstum",
      "features.posts": "Beitragsanalyse",
      "hero.main_title": "Holen Sie sich aktive französische Fans",
      "hero.subtitle_pack": "Beste Qualität auf dem französischen Markt, schnell geliefert.",
      "hero.instagram_pack": "Instagram kaufen",
      "hero.likes_pack": "Instagram Likes",
      "hero.views_pack": "Instagram Views"
    }
  },
  it: {
    translation: {
      "hero.title": "Analizza qualsiasi account Instagram",
      "hero.subtitle": "Ottieni statistiche dettagliate su qualsiasi account Instagram pubblico",
      "hero.placeholder": "Inserisci un nome utente Instagram",
      "hero.button": "Analizzare",
      "features.title": "Funzionalità",
      "features.engagement": "Tasso di engagement",
      "features.followers": "Analisi dei follower",
      "features.growth": "Crescita dell'account",
      "features.posts": "Analisi dei post",
      "hero.main_title": "Ottieni fan francesi attivi",
      "hero.subtitle_pack": "Miglior qualità sul mercato francese, consegnato rapidamente.",
      "hero.instagram_pack": "Acquista Instagram",
      "hero.likes_pack": "Like Instagram",
      "hero.views_pack": "Visualizzazioni Instagram"
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
