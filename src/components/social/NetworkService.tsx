
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface NetworkServiceProps {
  icon: React.ReactNode;
  title: string;
  href: string;
  theme: {
    primary: string;
    secondary: string;
  };
}

export const NetworkService = ({
  icon,
  title,
  href,
  theme
}: NetworkServiceProps) => {
  return (
    <a
      href={href}
      className={cn(
        "block w-full rounded-lg p-3 md:p-3.5 flex items-center justify-between shadow-md hover:shadow-lg transition-all duration-200 group bg-white bg-opacity-70 backdrop-blur-sm hover:bg-opacity-90"
      )}
    >
      <div className="flex items-center gap-3 md:gap-4">
        <div className={cn(
          "w-11 h-11 md:w-12 md:h-12 rounded-xl flex items-center justify-center p-2 group-hover:scale-105 transition-transform duration-300 bg-gradient-to-br",
          theme.secondary
        )}>
          <div className={theme.primary}>
            {icon}
          </div>
        </div>
        <span className="text-base md:text-lg font-semibold text-gray-800">
          {title}
        </span>
      </div>
      <div className="flex items-center justify-center">
        <ArrowRight className={cn("w-5 h-5 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all", theme.primary)} />
      </div>
    </a>
  );
};
