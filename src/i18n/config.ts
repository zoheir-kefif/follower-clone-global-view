
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
      "features.posts": "Analyse des publications"
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
      "features.posts": "Post analysis"
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
      "features.posts": "Beitragsanalyse"
    }
  },
  es: {
    translation: {
      "hero.title": "Analiza cualquier cuenta de Instagram",
      "hero.subtitle": "Obtén estadísticas detalladas de cualquier cuenta pública de Instagram",
      "hero.placeholder": "Introduce un nombre de usuario de Instagram",
      "hero.button": "Analizar",
      "features.title": "Características",
      "features.engagement": "Tasa de engagement",
      "features.followers": "Análisis de seguidores",
      "features.growth": "Crecimiento de la cuenta",
      "features.posts": "Análisis de publicaciones"
    }
  },
  it: {
    translation: {
      "hero.title": "Analizza qualsiasi account Instagram",
      "hero.subtitle": "Ottieni statistiche dettagliate su qualsiasi account Instagram pubblico",
      "hero.placeholder": "Inserisci un nome utente Instagram",
      "hero.button": "Analizza",
      "features.title": "Funzionalità",
      "features.engagement": "Tasso di engagement",
      "features.followers": "Analisi dei follower",
      "features.growth": "Crescita dell'account",
      "features.posts": "Analisi dei post"
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
