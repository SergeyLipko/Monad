export const EMAIL_REGEXP = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
export const PASSWORD_REGEXP = /^[A-Za-z0-9!@#$%^&*()_]{6,20}$/;


export const regExpValidate = (field, validation) => {
  return validation.test(field);
};
