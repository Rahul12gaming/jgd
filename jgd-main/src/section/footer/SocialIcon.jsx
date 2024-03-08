import React from "react";
import { FaFacebook, FaGooglePlus, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const SocialIconsContainer = () => {
  // Array of social network icons with their respective colors and URLs
  const socialIcons = [
    { icon: <FaFacebook size={20} />, color: 'bg-sky-800', url: '/' },
    { icon: <FaGooglePlus size={20} />, color: 'bg-black', url: '/' },
    { icon: <FaInstagram size={20} />, color: 'bg-fuchsia-500', url: '/' },
    { icon: <FaLinkedin size={20} />, color: 'bg-sky-600', url: '/' },
    { icon: <FaGithub />, color: 'bg-stone-950', url: '/' },
  ];

  return (
    <div className="flex justify-center">
      {/* Loop through the socialIcons array */}
      {socialIcons.map((socialIcon, index) => (
        <a key={index} className={`mr-6 text-white dark:text-white ${socialIcon.color} p-2 rounded-full`} href={socialIcon.url}>
          {socialIcon.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialIconsContainer;
