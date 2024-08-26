export const checkValidation = (
  formEmail,
  formPassword,
  formConfirmPassword = ""
) => {
  const checkEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formEmail);
  const checkPassword =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(formPassword);

  if (!checkEmail) {
    return "Email Not Valid";
  }

  if (!checkPassword) {
    return "Password Not Valid";
  }

  if (formConfirmPassword && formPassword !== formConfirmPassword) {
    return "Password Don't Match";
  }

  return null;
};
