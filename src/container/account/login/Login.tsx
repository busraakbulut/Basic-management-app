'use client';
import React from 'react';
import { useFormik } from 'formik';
import InputField from '@/components/input/Input';

const Login = () => {
 const formik = useFormik({
  initialValues: {
   email: '',
   password: '',
  },
  onSubmit: (values) => {
   fetch('http://localhost:3000/api/account/login', {
    method: 'POST',
    headers: {
     'Content-Type': 'application/json',
    },
    body: JSON.stringify(values),
   })
    .then((res) => res.json())
    .then((data) => {
     console.log(data);
    })
    .catch((error) => {
     console.error('Error during login:', error);
    });
  },
 });

 const { values, handleChange, handleSubmit } = formik;

 return (
  <div>
   <form onSubmit={handleSubmit}>
    <InputField
     label="Email"
     name="email"
     type="text"
     value={values.email}
     onChange={handleChange}
    />
    <InputField
     label="Password"
     name="password"
     type="password"
     value={values.password}
     onChange={handleChange}
    />
    <button type="submit">Login</button>
   </form>
  </div>
 );
};

export default Login;
