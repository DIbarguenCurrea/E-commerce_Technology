'use client'

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import register from '@/helpers/Helpers_Register';
import { IUserRegister, RegisterErrorProps } from '@/types';
import RegisterValidate from '@/helpers/form_validartions/RegisterValidate';

function Register() {

  const router = useRouter()
  const [dataUser, setDataUser] = useState<IUserRegister>({
    name: "",
    email: "",
    password: "",
    address: "",
    phone: ""
  });

  const [errorUser, setErrorUser] = useState<RegisterErrorProps>({
    name: "",
    email: "",
    password: "",
    address: "",
    phone: ""
  })

  useEffect(() => {
    const errors = RegisterValidate(dataUser);
    setErrorUser(errors);
  }, [dataUser])

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setDataUser({
      ...dataUser,
      [event.target.name]: event.target.value,
    });
  }

  async function handleSubmit (event: React.FormEvent<HTMLFormElement>){
    event.preventDefault();
    const response = await register (dataUser);
    // console.log(response)
    alert('Successful registration')
    router.push('/singin');
  }

  return (
    <div className="max-w-4xl mx-auto font-sans text-[#3F375C] p-6">
      <div className="mb-16 text-center">
        <h4 className="mt-3 text-3xl font-bold">Create a new account</h4>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="grid sm:grid-cols-2 gap-y-7 gap-x-12">
          <div>
            <label className="block mb-2 font-semibold text-md">Name</label>
            <input
              id='name'
              name="name"
              value={dataUser.name}
              type="text"
              onChange={handleChange}
              className="bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-[#BC8034]"
              placeholder="Enter name"
            />
            {errorUser.name && (
              <p className='font-medium text-red-600 '>{errorUser.name}</p>
            )}
          </div>
          <div>
            <label className="block mb-2 font-semibold text-md">Email</label>
            <input
              id='email'
              name="email"
              value={dataUser.email}
              type="text"
              onChange={handleChange}
              className="bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-[#BC8034]"
              placeholder="Enter email"
            />
            <p className='font-semibold text-red-600 '>{errorUser.email}</p>
          </div>
          <div>
            <label className="block mb-2 font-semibold text-md">Password</label>
            <input
              id='password'
              name="password"
              value={dataUser.password}
              type="password"
              onChange={handleChange}
              className="bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-[#BC8034]"
              placeholder="Enter password"
            />
            <p className='font-semibold text-red-600 '>{errorUser.password}</p>
          </div>
          <div>
            <label className="block mb-2 font-semibold text-md">Address</label>
            <input
              id='address'
              name="address"
              value={dataUser.address}
              type="text"
              onChange={handleChange}
              className="bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-[#BC8034]"
              placeholder="Enter address"
            />
            <p className='font-semibold text-red-600 '>{errorUser.address}</p>
          </div>
          <div>
            <label className="block mb-2 font-semibold text-md">Phone</label>
            <input
              id='phone'
              name="phone"
              value={dataUser.phone}
              type="text"
              onChange={handleChange}
              className="bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-[#BC8034]"
              placeholder="Enter mobile number"
            />
            <p className='font-semibold text-red-600 '>{errorUser.phone}</p>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              disabled={Object.keys(errorUser).length > 0}
              className="min-w-[150px] py-3 px-4 text-md font-semibold rounded text-white bg-[#3F375C] focus:outline-none">
              Sign up
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Register