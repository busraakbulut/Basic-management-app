'use client';
import ButtonComponent from '@/components/buttons/Button';
import InputField from '@/components/input/Input';
import { productSchema } from '@/yupSchemas/product';
import { useFormik } from 'formik';
import { BiCheckCircle, BiErrorCircle } from 'react-icons/bi';
import { RxCross2 } from 'react-icons/rx';

interface addProps {
 handleClose: () => void;
}
const AddCompany: React.FC<addProps> = ({ handleClose }) => {
 const formik = useFormik({
  initialValues: {
   company_name: '',
   incorporation_country: '',
   company_legal_number: '',
   company_website: '',
  },
  validationSchema: productSchema,
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
  <>
   <div className="flex items-center justify-between mb-4">
    <h1 className="text-black text-[28px] font-medium ">Add Company</h1>
    <RxCross2 className="text-black" onClick={handleClose} />
   </div>
   <form onSubmit={handleSubmit} className="space-y-4">
    <div className="relative ">
     <InputField
      type="text"
      label="Company Name"
      name="company_name"
      value={values.company_name}
      onChange={handleChange}
      onBlur={handleBlur}
      InputProps={{ sx: { background: 'white', borderRadius: 5 } }}
      className="w-full border rounded-md  focus:outline-none focus:ring focus:border-blue-300"
      helperText={touched.company_name && errors.company_name}
      error={!!(touched.company_name && errors.company_name)}
     />
     {touched.company_name && errors.company_name ? (
      <div className="absolute flex inset-y-0 right-3 pt-4 text-red-500">
       <BiErrorCircle className="text-2xl" />
      </div>
     ) : (
      touched.company_name && (
       <div className="absolute flex inset-y-0 right-3 pt-4 text-green-500">
        <BiCheckCircle className="text-2xl" />
       </div>
      )
     )}
    </div>

    <div className="relative">
     <InputField
      label="Incorporation Country"
      type="incorporation_country"
      name="incorporation_country"
      value={values.incorporation_country}
      InputProps={{ sx: { background: 'white', borderRadius: 5 } }}
      onChange={handleChange}
      onBlur={handleBlur}
      error={!!(touched.incorporation_country && errors.incorporation_country)}
      helperText={touched.incorporation_country && errors.incorporation_country}
      className="w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
     />
     {touched.incorporation_country && errors.incorporation_country ? (
      <div className="absolute flex inset-y-0 right-3 pt-4 text-red-500">
       <BiErrorCircle className="text-2xl" />
      </div>
     ) : (
      touched.incorporation_country && (
       <div className="absolute flex inset-y-0 right-3 pt-4 text-green-500">
        <BiCheckCircle className="text-2xl" />
       </div>
      )
     )}
    </div>

    <div className="relative">
     <InputField
      label="Company Legal Number"
      name="company_legal_number"
      type="company_legal_number"
      value={values.company_legal_number}
      onChange={handleChange}
      onBlur={handleBlur}
      InputProps={{ sx: { background: 'white ', borderRadius: 5 } }}
      helperText={touched.company_legal_number && errors.company_legal_number}
      error={!!(touched.company_legal_number && errors.company_legal_number)}
      className="w-full border rounded-md  focus:outline-none focus:ring focus:border-blue-300"
     />

     {touched.company_legal_number && errors.company_legal_number ? (
      <div className="absolute flex inset-y-0 right-3 pt-4 text-red-500">
       <BiErrorCircle className="text-2xl" />
      </div>
     ) : (
      touched.company_legal_number && (
       <div className="absolute flex inset-y-0 right-3 pt-4 text-green-500">
        <BiCheckCircle className="text-2xl" />
       </div>
      )
     )}
    </div>

    <div className="relative">
     <InputField
      label="Company Website"
      name="company_website"
      type="company_legal_number"
      value={values.company_website}
      onChange={handleChange}
      onBlur={handleBlur}
      InputProps={{ sx: { background: 'white ', borderRadius: 5 } }}
      helperText={touched.company_website && errors.company_website}
      error={!!(touched.company_website && errors.company_website)}
      className="w-full border rounded-md  focus:outline-none focus:ring focus:border-blue-300"
     />
     {touched.company_website && errors.company_website ? (
      <div className="absolute flex inset-y-0 right-3 pt-4 text-red-500">
       <BiErrorCircle className="text-2xl" />
      </div>
     ) : (
      touched.company_website && (
       <div className="absolute flex inset-y-0 right-3 pt-4 text-green-500">
        <BiCheckCircle className="text-2xl" />
       </div>
      )
     )}
    </div>

    <ButtonComponent type="submit">Add Company</ButtonComponent>
   </form>
  </>
 );
};

export default AddCompany;
