
import { LanguageSelector } from './LanguageSelector';

export const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="text-2xl font-bold text-blue-600">TopFollowers</a>
        </div>
        <LanguageSelector />
      </div>
    </header>
  );
};
