import * as yup from 'yup';

export const companySchema = yup.object().shape({
 company_name: yup.string().required('Please provide a company name.'),
 incorporation_country: yup
  .string()
  .required('Please provide a company address.'),
 company_legal_number: yup
  .number()
  .required('Please provide a company legal number.'),
 company_website: yup.string().required('Please provide a company website.'),
});
