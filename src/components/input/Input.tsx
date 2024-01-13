import { TextField, TextFieldProps } from '@mui/material';
import React from 'react';

const InputField = ({ ...rest }: TextFieldProps) => {
 return <TextField {...rest} />;
};

export default InputField;
