import { useState } from 'react';
import { LanguageSelector } from './LanguageSelector';
import { Menu, Instagram, Youtube, Facebook } from 'lucide-react';
import { cn } from '@/lib/utils';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center gap-2">
              <img 
                src="/lovable-uploads/916e8d18-4dd9-45ff-b0bd-4da2ee9e817a.png" 
                alt="BoostYourFame" 
                className="h-8 md:h-10"
              />
            </a>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <a href="/instagram" className="flex items-center gap-2 text-gray-600 hover:text-[#9b87f5] transition-colors duration-200">
              <Instagram size={20} />
              <span>Instagram</span>
            </a>
            <a href="/tiktok" className="flex items-center gap-2 text-gray-600 hover:text-[#9b87f5] transition-colors duration-200">
              <Youtube size={20} />
              <span>TikTok</span>
            </a>
            <a href="/youtube" className="flex items-center gap-2 text-gray-600 hover:text-[#9b87f5] transition-colors duration-200">
              <Youtube size={20} />
              <span>YouTube</span>
            </a>
            <a href="/facebook" className="flex items-center gap-2 text-gray-600 hover:text-[#9b87f5] transition-colors duration-200">
              <Facebook size={20} />
              <span>Facebook</span>
            </a>
          </nav>

          <div className="flex items-center gap-2 md:gap-4">
            <a href="/contact" className="hidden md:block text-gray-600 hover:text-[#9b87f5] transition-colors duration-200">
              Contact
            </a>
            <div className="z-50 relative">
              <LanguageSelector />
            </div>
            <a href="/cart" className="relative">
              <span className="absolute -top-1 -right-1 bg-[#9b87f5] text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                0
              </span>
              <div className="text-gray-600">🛒</div>
            </a>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100/50 transition-colors duration-200"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>

        <div
          className={cn(
            "fixed inset-x-0 top-[65px] p-4 md:hidden bg-white/95 backdrop-blur-sm border-b border-gray-100 transition-all duration-300 ease-in-out transform",
            isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
          )}
        >
          <nav className="flex flex-col space-y-4">
            <a href="/instagram" className="flex items-center gap-2 px-3 py-2 rounded-md text-gray-600 hover:text-[#9b87f5] hover:bg-gray-50">
              <Instagram size={20} />
              <span>Instagram</span>
            </a>
            <a href="/tiktok" className="flex items-center gap-2 px-3 py-2 rounded-md text-gray-600 hover:text-[#9b87f5] hover:bg-gray-50">
              <Youtube size={20} />
              <span>TikTok</span>
            </a>
            <a href="/youtube" className="flex items-center gap-2 px-3 py-2 rounded-md text-gray-600 hover:text-[#9b87f5] hover:bg-gray-50">
              <Youtube size={20} />
              <span>YouTube</span>
            </a>
            <a href="/facebook" className="flex items-center gap-2 px-3 py-2 rounded-md text-gray-600 hover:text-[#9b87f5] hover:bg-gray-50">
              <Facebook size={20} />
              <span>Facebook</span>
            </a>
            <a href="/contact" className="px-3 py-2 rounded-md text-gray-600 hover:text-[#9b87f5] hover:bg-gray-50">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};
