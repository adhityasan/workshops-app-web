import React from 'react';
import {
  TextField as MuiTextField,
} from '@material-ui/core';

const TextField = ({
  name,
  id,
  error,
  helperText,
  label,
  onChange,
  variant,
  inputProps,
  value,
  placeholder,
  autoComplete,
  type,
}) => (
  <MuiTextField
    fullWidth
    error={error}
    helperText={helperText}
    id={id}
    variant={variant}
    label={label}
    placeholder={placeholder}
    name={name}
    onChange={onChange}
    inputProps={{ ...inputProps, value }}
    value={value}
    autoComplete={autoComplete}
    type={type}
  />
);

/**
 * render Material UI TextField
 * @param {Object} props Passed properties from react-final-form.field
 * @param {Object} props.meta Provided by react-final-form.field
 * @param {Object} props.input.* Provided by react-final-form.field
 * @param {String} props.id Field id
 * @param {String} props.name Field name
 * @param {String} props.label Field label
 * @param {String} props.variant Mui Field variant, "filled",  "outlined", "standard"
 * @param {String} props.placeholder Field placeholder
 * @param {String} props.autoComplete Field autocomplete type
 */
export const renderTextField = ({
  meta,
  input: {
    onChange,
    value,
    ...restInput
  },
  id,
  name,
  label,
  variant,
  placeholder,
  autoComplete,
  type,
}) => (
  <TextField
    error={meta.error && meta.touched}
    helperText={meta && meta.touched ? meta.error : undefined}
    id={id}
    name={name}
    label={label}
    onChange={onChange}
    value={value}
    variant={variant}
    placeholder={placeholder}
    inputProps={{ ...restInput }}
    autoComplete={autoComplete}
    type={type}
  />
);

export default TextField;
