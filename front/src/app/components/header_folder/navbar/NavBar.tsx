'use client'

import Link from "next/link"
import SearchBar from "../searchbar/SearchBar"
import BurguerButton from "../button_burger/ButtonBurger";
import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";


function NavBar() {
  const [clicked, setClicked] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false);

  const { token, setToken } = useAuth()

  useEffect(() => {
    token
      ? setLoggedIn(true)
      : setLoggedIn
  }, [token])

  const handleLogout = () => {
    localStorage.removeItem('token')
    setLoggedIn(false)
    setToken(null)
  }

  const handleClick = () => {
    setClicked(!clicked)
  }

  return (
    <header className="font-sans bg-[#3F375C] text-[#D9CAB3] flex items-center justify-between px-8 py-02">
      <div className="flex text-lg font-bold hover:text-[#D9CAB3] duration-200 cursor-pointer">
        <h1>
          <Link href="/landing">
            Technology
          </Link>
        </h1>
      </div>
      <div className="flex items-center font-semibold">
        <nav className="inline-block text-lg nav max-lg:hidden">
          <ul className="flex items-center">
            <li className="p-4 border-b-2 border-[#BC8034] border-opacity-0 hover:border-opacity-100 hover:text-[#BC8034] duration-200 cursor-pointer">
              <Link href="/home">
                Home
              </Link>
            </li>
            <li className="p-4 border-b-2 border-[#BC8034] border-opacity-0 hover:border-opacity-100 hover:text-[#BC8034] duration-200 cursor-pointer">
              <Link href="/products">
                Products
              </Link>
            </li>
            <li className="p-4 border-b-2 border-[#BC8034] border-opacity-0 hover:border-opacity-100 hover:text-[#BC8034] duration-200 cursor-pointer">
              <Link href="/about">
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="inline-block">
        <SearchBar />
      </div>
      <div className="md:hidden">
        <BurguerButton clicked={clicked} handleClick={handleClick} />
      </div>
      <div className="flex justify-end font-bold">
        <div className="max-md:hidden">
          {loggedIn ? (
            <ul className="flex">
              <li onClick={handleLogout}
                className="p-4 border-b-2 border-[#BC8034] border-opacity-0 hover:border-opacity-100 hover:text-[#BC8034] duration-200 cursor-pointer">
                <Link href="/home">
                  Logout
                </Link>
              </li>
              <li className="p-4 border-b-2 border-[#BC8034] border-opacity-0 hover:border-opacity-100 hover:text-[#BC8034] duration-200 cursor-pointer">
                <Link href="/dashboard">
                  Dashboard
                </Link>
              </li>
            </ul>
          ) : (
            <ul className="flex">
              <li
                className="p-4 border-b-2 border-[#BC8034] border-opacity-0 hover:border-opacity-100 hover:text-[#BC8034] duration-200 cursor-pointer">
                <Link href="/singin">
                  Login
                </Link>
              </li>
              <li className="p-4 border-b-2 border-[#BC8034] border-opacity-0 hover:border-opacity-100 hover:text-[#BC8034] duration-200 cursor-pointer">
                <Link href="/singup">
                  Register
                </Link>
              </li>
            </ul>
          )}
        </div>
        <div>
          <Link href='/cart'>
            <svg className="h-8 p-1 m-2" aria-hidden="true" focusable="false" data-prefix="far" data-icon="shopping-cart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" ><path fill="currentColor" d="M551.991 64H144.28l-8.726-44.608C133.35 8.128 123.478 0 112 0H12C5.373 0 0 5.373 0 12v24c0 6.627 5.373 12 12 12h80.24l69.594 355.701C150.796 415.201 144 430.802 144 448c0 35.346 28.654 64 64 64s64-28.654 64-64a63.681 63.681 0 0 0-8.583-32h145.167a63.681 63.681 0 0 0-8.583 32c0 35.346 28.654 64 64 64 35.346 0 64-28.654 64-64 0-18.136-7.556-34.496-19.676-46.142l1.035-4.757c3.254-14.96-8.142-29.101-23.452-29.101H203.76l-9.39-48h312.405c11.29 0 21.054-7.869 23.452-18.902l45.216-208C578.695 78.139 567.299 64 551.991 64zM208 472c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm256 0c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm23.438-200H184.98l-31.31-160h368.548l-34.78 160z" className="relative text-[#D9CAB3]"></path></svg>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default NavBar
