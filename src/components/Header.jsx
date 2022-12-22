import React, { useState } from 'react';
import logo from "../images/wl-agency-logo.png"
import logoSmall from "../images/wl-agency-logo-small.png"
import '../index.css'

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div>
      <nav class="relative px-4 py-4 lg:mx-auto lg:max-w-screen-2xl flex justify-between items-center bg-gry-50">
        <a class="text-3xl font-bold leading-none" href="/">
          <img class="h-12" src={logo} alt="" />
        </a>
        <div class="lg:hidden"
          onClick={() => setIsNavOpen((prev) => !prev)}>
          <button class="navbar-burger flex items-center text-black p-3">
            <svg class="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <ul class={isNavOpen ? 'absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6' : 'hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6'}>
          <li><a class="text-base text-[#413F3D] font-semibold hover:text-red-500" href="/">Home</a></li>
          <li class="text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" class="w-4 h-4 current-fill" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
          </li>
          <li><a class="text-base text-[#413F3D] font-semibold hover:text-red-500" href="/about">About Us</a></li>
          <li class="text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" class="w-4 h-4 current-fill" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
          </li>
          <li><a class="text-base text-[#413F3D] font-semibold hover:text-red-500" href="/store">Pricing</a></li>
          <li class="text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" class="w-4 h-4 current-fill" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
          </li>
          <li><a class="text-base text-[#413F3D] font-semibold hover:text-red-500" href="/faqs">Faqs</a></li>
        </ul>
        <a class="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 text-sm text-red-600 shadow hover:text-red-700 rounded font-bold transition duration-200" href="/">Sign In</a>
        <a class="hidden lg:inline-block py-2 px-6 bg-red-600 shadow hover:bg-red-700 text-sm text-white font-bold rounded transition duration-200" href="/">Sign up</a>
      </nav>
      <div class={isNavOpen ? 'navbar-menu relative z-50' : 'navbar-menu relative z-50 hidden'}>
        <div class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
        <nav class="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
          <div class="flex items-center mb-8">
            <a class="mr-auto text-3xl font-bold leading-none" href="/">
              <img class="h-12" src={logoSmall} alt="" />
            </a>
            <button class="navbar-close" onClick={() => setIsNavOpen((prev) => !prev)}>
              <svg class="h-6 w-6 text-[#413F3D] cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <div>
            <ul>
              <li class="mb-1">
                <a class="block p-4 text-sm font-semibold text-[#413F3D] hover:bg-blue-50 hover:text-red-500 rounded" href="/">Home</a>
              </li>
              <li class="mb-1">
                <a class="block p-4 text-sm font-semibold text-[#413F3D] hover:bg-blue-50 hover:text-red-500 rounded" href="/about">About Us</a>
              </li>
              <li class="mb-1">
                <a class="block p-4 text-sm font-semibold text-[#413F3D] hover:bg-blue-50 hover:text-red-500 rounded" href="/store">Pricing</a>
              </li>
              <li class="mb-1">
                <a class="block p-4 text-sm font-semibold text-[#413F3D] hover:bg-blue-50 hover:text-red-500 rounded" href="/faqs">Faqs</a>
              </li>
            </ul>
          </div>
          <div class="mt-auto">
            <div class="pt-6">
              <a class="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold leading-none bg-gray-50 hover:bg-gray-100 rounded" href="/">Sign in</a>
              <a class="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-red-600 shadow hover:bg-red-700  rounded" href="/">Sign Up</a>
            </div>
            <p class="my-4 text-xs text-center text-[#413F3D]">
              <span>Copyright © 2022 FUT Service - All Rights Reserved.</span>
            </p>
          </div>
        </nav>
      </div>
    </div>
  );
}