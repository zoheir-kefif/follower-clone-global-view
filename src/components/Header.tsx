
import { LanguageSelector } from './LanguageSelector';
import { Instagram, Youtube, Facebook } from 'lucide-react';

export const Header = () => {
  return (
    <header className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="/" className="text-2xl font-bold text-[#F85757]">TopFollowers</a>
          <nav className="hidden md:flex items-center gap-6">
            <a href="/instagram" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
              <Instagram size={20} />
              Instagram
            </a>
            <a href="/tiktok" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
              <Youtube size={20} />
              TikTok
            </a>
            <a href="/youtube" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
              <Youtube size={20} />
              YouTube
            </a>
            <a href="/facebook" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
              <Facebook size={20} />
              Facebook
            </a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <a href="/contact" className="text-gray-600 hover:text-gray-900">Contact</a>
          <LanguageSelector />
          <a href="/cart" className="relative">
            <span className="absolute -top-1 -right-1 bg-[#F85757] text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">0</span>
            <div className="text-gray-600">🛒</div>
          </a>
        </div>
      </div>
    </header>
  );
};

