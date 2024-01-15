'use client';
import React from 'react';
import { useFormik } from 'formik';
import InputField from '@/components/input/Input';
import ButtonComponent from '@/components/buttons/Button';
import { BiCheckCircle, BiErrorCircle } from 'react-icons/bi';
import { loginUserSchema } from '@/yupSchemas/user';
import { toastSuccessNotify, toastWarnNotify } from '@/helper/toasts/toastify';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

const Login = () => {
 const { push } = useRouter();
 const formik = useFormik({
  initialValues: {
   email: '',
   password: '',
  },
  validationSchema: loginUserSchema,
  onSubmit: async (values) => {
   try {
    const response = await fetch('http://localhost:3000/api/account/login', {
     method: 'POST',
     headers: {
      'Content-Type': 'application/json',
     },
     body: JSON.stringify(values),
    });

    if (response.status === 201) {
     const data = await response.json();
     Cookies.set('token', data?.data?.token);
     toastSuccessNotify('Successfully logged in');
     push('/dashboard');
     window.location.reload();
    } else {
     toastWarnNotify('Email or password wrong!');
    }
   } catch (error) {
    console.log('Error:', error);
    toastWarnNotify('Error');
   }
  },
 });
 const { values, errors, touched, handleChange, handleSubmit, handleBlur } =
  formik;
 return (
  <div className="flex items-center justify-center min-h-screen ">
   <div className=" bg-white  rounded-md shadow-lg p-16 ">
    <h1 className="text-xl text-black text-center font-semibold mb-4">
     Log In to Manage
    </h1>
    <form onSubmit={handleSubmit} className="space-y-4">
     <div className="relative">
      <InputField
       label="Email"
       type="email"
       name="email"
       value={values.email}
       InputProps={{ sx: { background: 'white', borderRadius: 5 } }}
       onChange={handleChange}
       onBlur={handleBlur}
       error={!!(touched.email && errors.email)}
       helperText={touched.email && errors.email}
       className="w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
      />
      {touched.email && errors.email ? (
       <div className="absolute flex inset-y-0 right-3 pt-4 text-red-500">
        <BiErrorCircle className="text-2xl" />
       </div>
      ) : (
       touched.email && (
        <div className="absolute flex inset-y-0 right-3 pt-4 text-green-500">
         <BiCheckCircle className="text-2xl" />
        </div>
       )
      )}
     </div>

     <div className="relative">
      <InputField
       label="Password"
       name="password"
       type="password"
       value={values.password}
       onChange={handleChange}
       onBlur={handleBlur}
       InputProps={{ sx: { background: 'white ', borderRadius: 5 } }}
       helperText={touched.password && errors.password}
       error={!!(touched.password && errors.password)}
       className="w-full border rounded-md  focus:outline-none focus:ring focus:border-blue-300"
      />

      {touched.password && errors.password ? (
       <div className="absolute flex inset-y-0 right-3 pt-4 text-red-500">
        <BiErrorCircle className="text-2xl" />
       </div>
      ) : (
       touched.password && (
        <div className="absolute flex inset-y-0 right-3 pt-4 text-green-500">
         <BiCheckCircle className="text-2xl" />
        </div>
       )
      )}
     </div>

     <ButtonComponent type="submit">Log in</ButtonComponent>
    </form>
   </div>
  </div>
 );
};

export default Login;
