
import { useState } from 'react';
import { SocialNetworkButton } from '../social/SocialNetworkButton';

interface SocialNetwork {
  icon: string;
  href: string;
  name: string;
  color: string;
}

const socialNetworks: SocialNetwork[] = [
  { 
    icon: "/lovable-uploads/9946ac27-7509-4639-b273-31d6f888c6a1.png",
    href: 'https://instagram.com',
    name: 'instagram',
    color: 'bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600'
  },
  { 
    icon: "/lovable-uploads/9218da51-6de2-4495-b7b0-6b9bad43d2dc.png",
    href: 'https://tiktok.com',
    name: 'tiktok',
    color: 'bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400'
  },
  { 
    icon: "/lovable-uploads/6149cbf1-7bd1-4819-bc51-388bc865b2b6.png",
    href: 'https://youtube.com',
    name: 'youtube',
    color: 'bg-gradient-to-r from-red-500 to-red-600'
  },
  { 
    icon: "/lovable-uploads/79a016fe-1699-4def-bbdd-3d5a0a944fbd.png",
    href: 'https://facebook.com',
    name: 'facebook',
    color: 'bg-gradient-to-r from-blue-600 to-blue-500'
  }
];

interface SocialNetworkSelectorProps {
  selectedNetwork: string;
  onNetworkSelect: (network: string) => void;
}

export const SocialNetworkSelector = ({ selectedNetwork, onNetworkSelect }: SocialNetworkSelectorProps) => {
  const handleNetworkSelection = (href: string) => {
    const networkName = href.split('.com')[0].replace('https://', '');
    onNetworkSelect(networkName);
  };

  return (
    <div className="flex flex-row justify-center gap-2 mb-0 w-full max-w-3xl mx-auto px-4">
      {socialNetworks.map((network, index) => (
        <SocialNetworkButton
          key={index}
          icon={network.icon}
          name={network.name}
          color={network.color}
          isSelected={selectedNetwork === network.name}
          onClick={() => handleNetworkSelection(network.href)}
        />
      ))}
    </div>
  );
};
