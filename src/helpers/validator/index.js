import { getI18n } from 'react-i18next';

export const composeValidators = (...validators) => (value, allValues, meta) => validators
  .reduce((error, validator) => error || validator(value, allValues, meta), undefined);

/**
 * Required validator for react-final-form field level validator
 * @param {String} fieldName name of the field
 */
export const required = fieldName => value => {
  if (typeof value !== 'boolean') {
    return (value && value !== '' && value !== '""' ? undefined : `${fieldName || 'Field'} is required`);
  }
  return undefined;
};

/**
 * Equal validator for react-final-form field level validator
 * @param {String} fieldName the field name
 * @param {String} baseFieldName the base field name to diff
 */
export const equal = (fieldName, baseFieldName) => (value, allValues) => {
  if (value !== allValues[baseFieldName]) {
    const message = getI18n().t('invalid.equal', {
      fieldName,
      baseFieldName,
    });
    return message;
  }
  return undefined;
};

/**
 * Not Empty validatorfor react-final-form field level validator
 * @param {String} fieldName
 */
export const notEmpty = fieldName => value => {
  if (value === '' || value === {} || value === [] || value === 0) {
    const message = getI18n().t('invalid.empty', {
      fieldName,
    });
    return message;
  }
  return undefined;
};

/**
 * Email validator react-final-form field level validator
 * @param {String} fieldName
 */
export const email = fieldName => value => {
  const pattern = /\S+@\S+\.\S+$/;
  if (pattern.test(String(value).toLowerCase())) return undefined;
  const message = getI18n().t('invalid.default', {
    fieldName,
  });
  return message;
};

/**
 * Phone number validator react-final-form field level validator
 * @param {String} fieldName
 */
export const phoneNumber = fieldName => value => {
  const pattern = /^\+\d{9,30}$/;
  if (pattern.test(value)) return undefined;
  const message = getI18n().t('invalid.phone', {
    fieldName,
  });
  return message;
};

/**
 * Username [email, phone] validator react-final-form field level validator
 * @param {String} fieldName
 */
export const username = fieldName => value => {
  const pattern = /\S+@\S+\.\S+$/;
  if (!pattern.test(String(value).toLowerCase())) {
    const message = getI18n().t('invalid.default', {
      fieldName,
    });
    return message;
  }
  return undefined;
};

/**
 * Multiple emails in string "adhitya@gmail.com, kao@gmail.com" validator
 * @param {String} fieldName
 */
export const emails = fieldName => value => {
  const nospace = String(value).replace(' ', '');
  const ok = (/^[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}(?:[,;][A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4})*$/i.test(nospace));
  if (!ok) {
    const message = getI18n().t('invalid.default', {
      fieldName,
    });
    return message;
  }
  return undefined;
};
