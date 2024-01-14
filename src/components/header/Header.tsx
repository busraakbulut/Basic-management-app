import Image from 'next/image';
import React from 'react';
import image from '../../../public/logo.png';
import Link from 'next/link';
import Cookies from 'js-cookie';
import LinkButton from '../buttons/LinkButton';
const Header = () => {
 const token = Cookies.get('token');
 return (
  <header className="fixed top-0 left-0 w-full border-b border-transparent-white backdrop-blur-[12px] ">
   <div className=" mx-auto flex h-[var(--navigation-height)] items-center">
    <Link className=" flex items-center justify-center text-xl" href="/">
     <Image className="m-1" src={image} alt="logo" width="50" height="50" />
     Manage
    </Link>

    <nav className="h-full">
     <ul className="flex items-center h-full sm:[&_a]:text-xl [&_a:hover]:text-grey [&_a]:transition-colors [&_li]:ml-6 [&_a]:text-sm">
      <li>
       <Link href="#">Products</Link>
      </li>
      <li>
       <Link href="#">Companies</Link>
      </li>
     </ul>
    </nav>
    {token ? (
     <div className=" h-full flex items-center ml-auto">
      <Link href="#" className="text-sm mr-6">
       Logout
      </Link>
     </div>
    ) : (
     <div className=" h-full flex items-center justify-center ml-auto sm:space-x-3 space-x-1 ">
      <LinkButton href="/account/login">Log in</LinkButton>
      <LinkButton href="/account/register">Sign up</LinkButton>
     </div>
    )}
   </div>
  </header>
 );
};

export default Header;
