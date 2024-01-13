import Image from 'next/image';
import React from 'react';
import image from '../../../public/logo.png';
import Link from 'next/link';

const Footer = () => {
 return (
  <footer className="fixed bottom-0 border-t border-transparent-white w-full">
   <div className="flex items-center justify-center">
    <span>developed in 2024</span>
   </div>
  </footer>
 );
};

export default Footer;
