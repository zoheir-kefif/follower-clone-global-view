
interface NetworkColors {
  primary: string;
  secondary: string;
  icon: string;
  border: string;
  cardBg: string;
  indicator: string;
}

export const getNetworkColors = (network: string): NetworkColors => {
  switch(network) {
    case 'instagram':
      return {
        primary: 'text-fuchsia-600',
        secondary: 'from-purple-100 to-pink-100',
        icon: 'text-gradient-to-r from-purple-600 via-pink-600 to-orange-500',
        border: 'border-pink-300',
        cardBg: 'from-purple-50 to-pink-50',
        indicator: 'bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400'
      };
    case 'tiktok':
      return {
        primary: 'text-pink-600',
        secondary: 'from-gray-100 to-pink-100',
        icon: 'text-pink-600',
        border: 'border-pink-300',
        cardBg: 'from-gray-50 to-pink-50',
        indicator: 'bg-gradient-to-r from-black to-pink-500'
      };
    case 'youtube':
      return {
        primary: 'text-red-600',
        secondary: 'from-red-100 to-gray-100',
        icon: 'text-red-600',
        border: 'border-red-300',
        cardBg: 'from-red-50 to-white',
        indicator: 'bg-gradient-to-r from-red-500 to-red-600'
      };
    case 'facebook':
      return {
        primary: 'text-blue-600',
        secondary: 'from-blue-100 to-blue-50',
        icon: 'text-blue-600',
        border: 'border-blue-300',
        cardBg: 'from-blue-50 to-white',
        indicator: 'bg-gradient-to-r from-blue-600 to-blue-500'
      };
    default:
      return {
        primary: 'text-fuchsia-600',
        secondary: 'from-purple-100 to-pink-100',
        icon: 'text-gradient-to-r from-purple-600 via-pink-600 to-orange-500',
        border: 'border-pink-300',
        cardBg: 'from-purple-50 to-pink-50',
        indicator: 'bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400'
      };
  }
};
