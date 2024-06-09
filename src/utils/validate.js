export const checkValidData = (email, Password) => {
  const isEmailValid = /^[a-zA-Z0–9._-]+@[a-zA-Z0–9.-]+\.[a-zA-Z]{2,4}$/.test(
    email
  );
  const isPasswordVaild =
    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(Password);

  if (!isEmailValid) return "Email is not vaild";
  if (!isPasswordVaild) return "Password is not vaild";
  //if (name && name.length < 3) return "Name should be 3 characters";

  return null;
};
