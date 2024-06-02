'use client'

import Image from 'next/image';
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { login } from '@/helpers/Helpers_Login';
import { IUserLogin, LoginErrorProps } from '@/types';
import { LoginValidate } from '@/helpers/form_validartions/LoginValidate';

function Login() {

  const router = useRouter()
  const { token, setToken } = useAuth();
  const [dataUser, setDataUser] = useState<IUserLogin>({
    email: "",
    password: ""
  });

  const [errorUser, setErrorUser] = useState<LoginErrorProps>({
    email: "",
    password: "",
  })

  useEffect(() => {
    const errors = LoginValidate(dataUser);
    setErrorUser(errors)
  }, [dataUser])

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setDataUser({
      ...dataUser,
      [event.target.name]: event.target.value,
    })
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const response = await login(dataUser);
    localStorage.setItem("token", response.token)
    setToken(response.token)
    alert('You are logged in successfully');
    router.push('/home');
  }

  return (
    <div 
      className="font-sans text-[#3F375C]">
      <div className="flex items-center justify-center min-h-screen px-4 py-6 fle-col">
        <div className="grid items-center w-full gap-4 md:grid-cols-2 max-w-7xl">
          <div className="border bg-[#D9CAB3] border-gray-300 rounded-md p-6 max-w-md shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] max-md:mx-auto">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="mb-10">
                <h3 className="text-4xl font-extrabold">Sign in</h3>
                <p className="mt-4 text-md">
                  Log in with your account and explore a world of unique products designed to your liking.
                </p>
              </div>
              <div>
                <label className="block mb-2 text-md">Email</label>
                <div className="relative items-center">
                  <input
                    id='email'
                    name="email"
                    value={dataUser.email}
                    type="email"
                    onChange={handleChange}
                    required
                    className="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-[#BC8034]"
                    placeholder="Enter email"
                  />
                  {errorUser.email && (
                    <p className='font-medium text-red-600 '>{errorUser.email}</p>
                  )}
                </div>
              </div>
              <div>
                <label className="block mb-2 text-md">Password</label>
                <div className="relative items-center">
                  <input
                    id='password'
                    name='password'
                    value={dataUser.password}
                    type="password"
                    required
                    className="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-[#BC8034]"
                    placeholder="Enter password"
                    onChange={handleChange}
                  />
                  <p className='font-medium text-red-600 '>{errorUser.password}</p>
                </div>
              </div>
              <div className="flex items-center justify-between gap-2">
                <div className="text-sm">
                  <Link
                    href="/contact"
                    className="text-[#3F375C] hover:text-[#BC8034] hover:underline">
                    Forgot your password?
                  </Link>
                </div>
              </div>
              <div className="mt-10">
                <button
                  type="submit"
                  className="w-full shadow-xl py-2.5 px-4 text-sm font-semibold rounded text-white bg-[#3F375C] hover:bg-[#BC8034] focus:outline-none">
                  Log in
                </button>
              </div>
              <p
                className="text-sm !mt-10 text-center">Don´t have an account
                <Link
                  href="/singup"
                  className="text-[#3F375C] hover:text-[#BC8034] hover:underline ml-1 whitespace-nowrap">
                  Register here
                </Link>
              </p>
            </form>
          </div>
          <div>
            <div className="mx-4 mt-4 max-md:hidden">
              <Image
                src="https://img.freepik.com/vector-gratis/concepto-abstracto-sistema-control-acceso_335657-3180.jpg?t=st=1713128367~exp=1713131967~hmac=9737e579cf181e4aa36a6d139159bc4ed52dede63246bdda1e06944d492babce&w=740"
                alt="concepto-abstracto-sistema-control-acceso"
                width={500}
                height={500}
                priority={true}
                className="inline-block object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login