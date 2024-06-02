import { IUserLogin } from "@/types";
const API_URL_LOGIN = process.env.NEXT_PUBLIC_API_URL

async function login(userData: IUserLogin) {
  
  const response = await fetch(`${API_URL_LOGIN}users/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
  if (response.ok) {
    return response.json();
  } else {
    const errorResponse = await response.json();
    if (errorResponse.error === userData.password)
      {
        throw new Error('Password Incorrect');
  } else {
    throw new Error('Login failed')
  } 
  }
}

export {
   login
}