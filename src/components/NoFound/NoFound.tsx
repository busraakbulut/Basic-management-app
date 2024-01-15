'use client';
import { Result } from 'antd';
import React from 'react';
import ButtonComponent from '../buttons/Button';
import { useRouter } from 'next/navigation';

const NotFoundComponent = () => {
 const { push } = useRouter();
 const handleClick = () => {
  push('/');
 };
 return (
  <div>
   <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={<ButtonComponent onClick={handleClick}>Back Home</ButtonComponent>}
   />
  </div>
 );
};

export default NotFoundComponent;
