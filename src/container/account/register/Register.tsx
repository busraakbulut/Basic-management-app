'use client';
import React from 'react';
import { useFormik } from 'formik';
import InputField from '@/components/input/Input';
import { toastSuccessNotify, toastWarnNotify } from '@/helper/toasts/toastify';
import { useRouter } from 'next/navigation';
import { stat } from 'fs';

const Register = () => {
 const { push } = useRouter();
 const formik = useFormik({
  initialValues: {
   email: '',
   password: '',
   username: '',
  },
  onSubmit: async (values) => {
   try {
    const response = await fetch('http://localhost:3000/api/auth/register', {
     method: 'POST',
     headers: {
      'Content-Type': 'application/json',
     },
     body: JSON.stringify(values),
    });

    if (response.status === 200) {
     toastSuccessNotify('Successfully registered');
     push('/login');
    } else {
     toastWarnNotify('Error');
    }
   } catch (error) {
    console.error('Error:', error);
    toastWarnNotify('Error');
   }
  },
 });

 const { values, errors, touched, handleChange, handleSubmit, handleBlur } =
  formik;

 return (
  <div>
   <form onSubmit={handleSubmit}>
    <InputField
     type="text"
     label="Username"
     name="username"
     value={values.username}
     onChange={handleChange}
     onBlur={handleBlur}
     InputProps={{ sx: { background: 'white' } }}
    />
    <InputField
     label="Email"
     name="email"
     type="text"
     value={values.email}
     onChange={handleChange}
     onBlur={handleBlur}
     InputProps={{ sx: { background: 'white' } }}
    />
    <InputField
     label="Password"
     name="password"
     type="password"
     value={values.password}
     onChange={handleChange}
     onBlur={handleBlur}
     InputProps={{ sx: { background: 'white' } }}
    />
    <button type="submit">Login</button>
   </form>
  </div>
 );
};

export default Register;
