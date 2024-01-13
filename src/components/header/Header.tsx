import Image from 'next/image';
import React from 'react';
import image from '../../../public/logo.png';
import Link from 'next/link';

const Header = () => {
 return (
  <header className="fixed top-0 left-0 w-full border-b border-transparent-white backdrop-blur-[12px]">
   <div className=" mx-auto flex h-[var(--navigation-height)] items-center">
    <Link className="flex items-center text-md" href="/">
     <Image className="m-2" src={image} alt="logo" width="50" height="50" />
     Manage
    </Link>

    <nav className="h-full">
     <ul className="flex items-center h-full [&_a]:text-sm [&_a:hover]:text-grey [&_a]:transition-colors [&_li]:ml-6">
      <li>
       <Link href="#">Products</Link>
      </li>
      <li>
       <Link href="#">Companies</Link>
      </li>
     </ul>
    </nav>

    <div className=" h-full flex items-center ml-auto">
     <Link className="text-sm mr-6" href="#">
      Log in
     </Link>
     <Link href="#" className="text-sm mr-6">
      Sign up
     </Link>
    </div>
   </div>
  </header>
 );
};

export default Header;
