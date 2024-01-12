// import React from 'react';
// import { useFormik } from 'formik';

// const AddCompany: React.FC = () => {
//  const formik = useFormik({
//   initialValues: {
//    company_name: '',
//    incorporation_country: '',
//    company_legal_number: '',
//    company_website: '',
//   },

//   onSubmit: (values) => {
//    console.log(values);
//   },
//  });

//  const { values, errors, touched, handleChange, handleSubmit, handleBlur } =
//   formik;

//  return (
//   <div>
//    <form onSubmit={handleSubmit}>
//     <label htmlFor="name"></label>
//     <input type="text" name="name" />
//    </form>
//   </div>
//  );
// };

// export default AddCompany;
'use client';
import { useFormik } from 'formik';
import { useState } from 'react';

const Home = () => {
 const [companyData, setCompanyData] = useState({
  company_name: '',
  incorporation_country: '',
  company_legal_number: '',
  company_website: '',
 });

 const formik = useFormik({
  initialValues: {
   company_name: '',
   incorporation_country: '',
   company_legal_number: '',
   company_website: '',
  },

  onSubmit: (values) => {
   fetch('http://localhost:3000/api/dashboard/company', {
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
    .catch((err) => {
     console.log(err);
    });
  },
 });

 const { values, errors, touched, handleChange, handleSubmit, handleBlur } =
  formik;

 return (
  <div>
   <h1>Next.js Company Add Example</h1>
   <form onSubmit={handleSubmit}>
    <label>
     Company Name:
     <input
      type="text"
      name="company_name"
      value={values.company_name}
      onChange={handleChange}
     />
    </label>
    <br />
    <label>
     Incorporation Country:
     <input
      type="text"
      name="incorporation_country"
      value={values.incorporation_country}
      onChange={handleChange}
     />
    </label>
    <br />
    <label>
     Company Legal Number:
     <input
      type="text"
      name="company_legal_number"
      value={values.company_legal_number}
      onChange={handleChange}
     />
    </label>
    <br />
    <label>
     Company Website:
     <input
      type="text"
      name="company_website"
      value={values.company_website}
      onChange={handleChange}
     />
    </label>
    <br />
    <button type="submit">Add Company</button>
   </form>
  </div>
 );
};

export default Home;
