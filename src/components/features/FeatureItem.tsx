
interface FeatureItemProps {
  icon: string;
  title: string;
}

export const FeatureItem = ({ icon, title }: FeatureItemProps) => {
  return (
    <div className="flex items-center gap-4 text-left border-b last:border-0 border-gray-100/50 pb-6 last:pb-0">
      <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 rounded-full">
        <span className="text-2xl">{icon}</span>
      </div>
      <span className="text-lg font-bold text-gray-800">{title}</span>
    </div>
  );
};
