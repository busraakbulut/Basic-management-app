'use client';
import InputField from '@/components/input/Input';
import { useFormik } from 'formik';

const Company = () => {
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
  <div className="flex items-center justify-center">
   <h1>Next.js Company Add Example</h1>
   <form onSubmit={handleSubmit}>
    <InputField
     type="text"
     name="company_name"
     label="Company Name"
     value={values.company_name}
     onChange={handleChange}
     onBlur={handleBlur}
    />
    <br />
    <InputField
     type="text"
     name="incorporation_country"
     label="Incorporation Country"
     value={values.incorporation_country}
     onChange={handleChange}
     onBlur={handleBlur}
    />
    <br />
    <InputField
     type="number"
     name="company_legal_number"
     label="Company Legal Number"
     value={values.company_legal_number}
     onChange={handleChange}
     onBlur={handleBlur}
    />
    <br />
    <InputField
     type="text"
     name="company_website"
     label="Company Website"
     value={values.company_website}
     onChange={handleChange}
     onBlur={handleBlur}
    />
    <br />
    <button type="submit">Add Company</button>
   </form>
  </div>
 );
};

export default Company;
