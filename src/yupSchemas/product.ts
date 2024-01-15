import * as yup from 'yup';

export const productSchema = yup.object().shape({
 product_name: yup.string().required('Please provide a product name.'),
 product_amount: yup.number().required('Please provide a product amount.'),
 amount_unit: yup.string().required('Please provide a amount unit.'),
 product_category: yup.string().required('Please provide a product category.'),
 company: yup.string().required('Please provide a company.'),
});
