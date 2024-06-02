import { IUserRegister } from "@/types";
const API_URL_REGISTER = process.env.NEXT_PUBLIC_API_URL;

async function register(userData: IUserRegister) {
  
    const response = await fetch(`${API_URL_REGISTER}users/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData)
    });
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Error during registration')
    }
}

export default register