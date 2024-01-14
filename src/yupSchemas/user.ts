import * as yup from 'yup';

export const registerUserSchema = yup.object().shape({
 username: yup.string().required('Name is required!'),
 email: yup
  .string()
  .email()
  .test('containsDot', 'Please enter a valid email!', (value) => {
   if (value && value.includes('.')) {
    return true;
   }
   return false;
  })
  .required('Email is required!'),
 password: yup
  .string()
  .min(6, 'Password must be more than 6 characters!')
  .required('Password is required!'),
 confirmPassword: yup
  .string()
  .oneOf([yup.ref('password'), ''], 'Passwords must match!')
  .required('Confirm Password is required!'),
});

export const loginUserSchema = yup.object().shape({
 email: yup.string().email().required('Email is required!'),
 password: yup.string().required('Password is required!'),
});
