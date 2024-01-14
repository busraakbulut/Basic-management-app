import { VariantProps, cva } from 'class-variance-authority';
import React from 'react';

interface ButtonComponentProps
 extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonClasses> {
 children: React.ReactNode;
}

const buttonClasses = cva(
 'bg-gradient rounded-full w-full inline-flex items-center justify-center font-semibold',
 {
  variants: {
   size: {
    medium: 'text-md px-6 py-2',
    large: 'text-lg px-8 py-4',
   },
  },
  defaultVariants: {
   size: 'medium',
  },
 }
);

const ButtonComponent: React.FC<ButtonComponentProps> = ({
 size,
 children,
 ...rest
}) => {
 return (
  <button className={buttonClasses({ size: size })} {...rest}>
   {children}
  </button>
 );
};

export default ButtonComponent;
