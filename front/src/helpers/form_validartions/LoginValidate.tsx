import { IUserLogin, LoginErrorProps } from "@/types";

function LoginValidate(
  values: IUserLogin
): LoginErrorProps {
  let errors: LoginErrorProps = {};
  if (!values.email) {
    errors.email = "Email is required"
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email is invalid"
  } else if (!values.password) {
    errors.password = "Password is required"
  } 
  return errors;
}

export {
  LoginValidate
}