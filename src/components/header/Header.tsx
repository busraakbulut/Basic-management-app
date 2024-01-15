'use client';
import Image from 'next/image';
import React, { use, useEffect } from 'react';
import image from '../../../public/logo.png';
import Link from 'next/link';
import Cookies from 'js-cookie';
import LinkButton from '../buttons/LinkButton';
import ButtonComponent from '../buttons/Button';
import { useRouter } from 'next/navigation';
const Header = () => {
 const { push } = useRouter();
 const token = Cookies.get('token');

 useEffect(() => {
  console.log(token);
 }, [token]);

 const handleLogout = () => {
  Cookies.remove('token');
 };

 return (
  <header className="fixed top-0 left-0 w-full border-b border-transparent-white backdrop-blur-[12px]  ">
   <div className=" mx-auto flex h-[var(--navigation-height)] items-center">
    <Link className=" flex items-center justify-center text-xl" href="/">
     <Image className="m-1" src={image} alt="logo" width="50" height="50" />
     Manage
    </Link>

    <nav className="h-full">
     <ul className="flex items-center h-full sm:[&_a]:text-xl [&_a:hover]:text-grey [&_a]:transition-colors [&_li]:ml-6 [&_a]:text-sm">
      <li>
       <Link href="/dashboard/product">Products</Link>
      </li>
      <li>
       <Link href="/dashboard/company">Companies</Link>
      </li>
     </ul>
    </nav>
    {token ? (
     <div className=" h-full flex items-center justify-center ml-auto sm:space-x-3 space-x-1 px-4 ">
      <LinkButton href="/account/login" onClick={handleLogout}>
       Logout
      </LinkButton>
     </div>
    ) : (
     <div className=" h-full flex items-center justify-center ml-auto sm:space-x-3 space-x-1 px-4 ">
      <LinkButton href="/account/login">Log in</LinkButton>
      <LinkButton href="/account/register">Sign up</LinkButton>
     </div>
    )}
   </div>
  </header>
 );
};

export default Header;
