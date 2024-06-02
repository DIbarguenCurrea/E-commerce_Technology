import { IUserRegister, RegisterErrorProps } from "@/types";


function RegisterValidate(
  values: IUserRegister
): RegisterErrorProps {
  let errors: RegisterErrorProps = {};
  if (!values.name) {
    errors.name = "Name is required";
  } else if (!values.email) {
    errors.email = "Email is required"
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email is invalid"
  } else if (!values.password) {
    errors.password = "Password is required"
  } else if (!values.address) {
    errors.address = "Adress is required"
  } else if (!values.phone) {
    errors.phone = "Phone is required"
  }
  return errors;
}




export default RegisterValidate