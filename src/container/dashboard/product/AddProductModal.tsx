import ButtonComponent from '@/components/buttons/Button';
import InputField from '@/components/input/Input';
import { productSchema } from '@/yupSchemas/product';
import { useFormik } from 'formik';
import { set } from 'mongoose';
import React from 'react';
import { BiCheckCircle, BiErrorCircle } from 'react-icons/bi';
import { RxCross2 } from 'react-icons/rx';
interface addProps {
 handleClose: () => void;
 setFlag: React.Dispatch<React.SetStateAction<boolean>>;
}
const AddProduct: React.FC<addProps> = ({ handleClose, setFlag }) => {
 const formik = useFormik({
  initialValues: {
   product_name: '',
   product_category: '',
   product_amount: '',
   amount_unit: '',
   company: '',
  },
  validationSchema: productSchema,
  onSubmit: (values) => {
   fetch('http://localhost:3000/api/dashboard/product', {
    method: 'POST',
    headers: {
     'Content-Type': 'application/json',
    },
    body: JSON.stringify(values),
   })
    .then((res) => res.json())
    .then(() => {
     setFlag(true);
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
    <h1 className="text-black text-[28px] font-medium ">Add Product</h1>
    <RxCross2 className="text-black" onClick={handleClose} />
   </div>
   <form onSubmit={handleSubmit} className="space-y-4">
    <div className="relative ">
     <InputField
      type="text"
      label="Produc Name"
      name="product_name"
      value={values.product_name}
      onChange={handleChange}
      onBlur={handleBlur}
      InputProps={{ sx: { background: 'white', borderRadius: 5 } }}
      className="w-full border rounded-md  focus:outline-none focus:ring focus:border-blue-300"
      helperText={touched.product_name && errors.product_name}
      error={!!(touched.product_name && errors.product_name)}
     />
     {touched.product_name && errors.product_name ? (
      <div className="absolute flex inset-y-0 right-3 pt-4 text-red-500">
       <BiErrorCircle className="text-2xl" />
      </div>
     ) : (
      touched.product_name && (
       <div className="absolute flex inset-y-0 right-3 pt-4 text-green-500">
        <BiCheckCircle className="text-2xl" />
       </div>
      )
     )}
    </div>

    <div className="relative">
     <InputField
      label="Product Category"
      type="product_category"
      name="product_category"
      value={values.product_category}
      InputProps={{ sx: { background: 'white', borderRadius: 5 } }}
      onChange={handleChange}
      onBlur={handleBlur}
      error={!!(touched.product_category && errors.product_category)}
      helperText={touched.product_category && errors.product_category}
      className="w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
     />
     {touched.product_category && errors.product_category ? (
      <div className="absolute flex inset-y-0 right-3 pt-4 text-red-500">
       <BiErrorCircle className="text-2xl" />
      </div>
     ) : (
      touched.product_category && (
       <div className="absolute flex inset-y-0 right-3 pt-4 text-green-500">
        <BiCheckCircle className="text-2xl" />
       </div>
      )
     )}
    </div>

    <div className="relative">
     <InputField
      label="Product Amount"
      name="product_amount"
      type="product_amount"
      value={values.product_amount}
      onChange={handleChange}
      onBlur={handleBlur}
      InputProps={{ sx: { background: 'white ', borderRadius: 5 } }}
      helperText={touched.product_amount && errors.product_amount}
      error={!!(touched.product_amount && errors.product_amount)}
      className="w-full border rounded-md  focus:outline-none focus:ring focus:border-blue-300"
     />

     {touched.product_amount && errors.product_amount ? (
      <div className="absolute flex inset-y-0 right-3 pt-4 text-red-500">
       <BiErrorCircle className="text-2xl" />
      </div>
     ) : (
      touched.product_amount && (
       <div className="absolute flex inset-y-0 right-3 pt-4 text-green-500">
        <BiCheckCircle className="text-2xl" />
       </div>
      )
     )}
    </div>
    <div className="relative">
     <InputField
      label="Amount Unit"
      name="amount_unit"
      type="amount_unit"
      value={values.amount_unit}
      onChange={handleChange}
      onBlur={handleBlur}
      InputProps={{ sx: { background: 'white ', borderRadius: 5 } }}
      helperText={touched.amount_unit && errors.amount_unit}
      error={!!(touched.amount_unit && errors.amount_unit)}
      className="w-full border rounded-md  focus:outline-none focus:ring focus:border-blue-300"
     />

     {touched.amount_unit && errors.amount_unit ? (
      <div className="absolute flex inset-y-0 right-3 pt-4 text-red-500">
       <BiErrorCircle className="text-2xl" />
      </div>
     ) : (
      touched.amount_unit && (
       <div className="absolute flex inset-y-0 right-3 pt-4 text-green-500">
        <BiCheckCircle className="text-2xl" />
       </div>
      )
     )}
    </div>

    <div className="relative">
     <InputField
      label="Company"
      name="company"
      type="product_amount"
      value={values.company}
      onChange={handleChange}
      onBlur={handleBlur}
      InputProps={{ sx: { background: 'white ', borderRadius: 5 } }}
      helperText={touched.company && errors.company}
      error={!!(touched.company && errors.company)}
      className="w-full border rounded-md  focus:outline-none focus:ring focus:border-blue-300"
     />
     {touched.company && errors.company ? (
      <div className="absolute flex inset-y-0 right-3 pt-4 text-red-500">
       <BiErrorCircle className="text-2xl" />
      </div>
     ) : (
      touched.company && (
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

export default AddProduct;
