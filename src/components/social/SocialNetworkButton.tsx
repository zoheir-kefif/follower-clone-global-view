
import { cn } from '@/lib/utils';

interface SocialNetworkButtonProps {
  icon: string;
  name: string;
  color: string;
  isSelected: boolean;
  onClick: () => void;
}

export const SocialNetworkButton = ({
  icon,
  name,
  color,
  isSelected,
  onClick
}: SocialNetworkButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "relative flex-1 aspect-square rounded-2xl flex items-center justify-center transition-all duration-300",
        isSelected 
          ? `bg-gradient-to-b from-${name}-100 to-${name}-50 shadow-lg scale-105 z-10` 
          : "bg-white hover:bg-gray-50 shadow-md hover:shadow-lg hover:scale-102"
      )}
    >
      <div 
        className={cn(
          "w-14 h-14 md:w-16 md:h-16 flex items-center justify-center transition-transform duration-300",
          isSelected ? "scale-110" : "hover:scale-105"
        )}
      >
        <img 
          src={icon} 
          alt={name} 
          className="w-full h-full object-contain p-1.5" 
        />
      </div>
      
      {isSelected && (
        <>
          <div className={cn(
            "absolute inset-0 rounded-2xl border-2 animate-pulse",
            `border-${name}-300`
          )} />
          
          <div className={cn(
            "absolute -bottom-4 left-0 right-0 mx-auto w-0.5 h-4",
            color
          )}>
            <div className={cn(
              "absolute -bottom-0.5 -left-1 w-2.5 h-2.5 rounded-full animate-pulse",
              color
            )} />
          </div>
        </>
      )}
    </button>
  );
};
