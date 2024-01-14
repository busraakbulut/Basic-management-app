import Image from 'next/image';
import React from 'react';
import image from '../../../public/logo.png';
import Link from 'next/link';

const Footer = () => {
 return (
  <footer>
   <div className="fixed bottom-0 w-full border-t border-transparent-white m-1 p-2">
    <div className="flex items-center justify-center">
     <span className=" text-sm text-gray-500">
      © 2024 &nbsp;
      <a href="#" className="hover:underline">
       Manage™
      </a>
      . All Rights Reserved.
     </span>
    </div>
   </div>
  </footer>
 );
};

export default Footer;
