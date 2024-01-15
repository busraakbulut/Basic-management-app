import Link from 'next/link';
import React from 'react';
import { VariantProps, cva } from 'class-variance-authority';

interface LinkButtonProps
 extends VariantProps<typeof buttonClasses>,
  React.AnchorHTMLAttributes<HTMLAnchorElement> {
 children: React.ReactNode;
 href: string;
 className?: string;
 onClick?: () => void;
}

const buttonClasses = cva(
 ' bg-gradient rounded-full inline-flex items-center justify-center font-semibold ',
 {
  variants: {
   size: {
    small: 'text-sm px-2 py-4',
    medium: 'text-md px-6 py-2',
    large: 'text-lg px-8 h-10',
   },
  },
  defaultVariants: {
   size: 'medium',
  },
 }
);
const LinkButton = ({ children, href, size, onClick }: LinkButtonProps) => {
 return (
  <Link className={buttonClasses({ size })} href={href} onClick={onClick}>
   {children}
  </Link>
 );
};

export default LinkButton;
