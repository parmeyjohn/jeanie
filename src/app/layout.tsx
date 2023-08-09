"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import "./globals.css";
import { Inter } from "next/font/google";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { useState } from "react";

import firebase from "firebase/compat/app";
import * as firebaseui from "firebaseui";
import { useAuthState } from "react-firebase-hooks/auth";
import "firebaseui/dist/firebaseui.css";
import { auth } from "../../firebase.config";
import { CartItem, Product } from "../../types";
import { CartContextProvider } from "./cartContext";
const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [user, loading, error] = useAuthState(auth);
  console.log(user);
  const [showSearch, setShowSearch] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [cart, setCart] = useState(Array<CartItem>)

  return (
    <CartContextProvider>
      <html lang="en">
        <body
          className={`w-screen h-auto bg-gradient-to-tl from-indigo-200 to-indigo-100 overflow-y-auto overflow-x-hidden ${inter.className}`}
        >
          {showSearch && (
            <div className=" bg-slate-600 mx-auto absolute z-10 w-full flex justify-center items-center">
              <div className="p-2 m-2 max-w-4xl w-full flex items-center relative">
                <input
                  className="w-3xl p-2 w-[80%] rounded-lg"
                  placeholder="Search our products"
                ></input>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 absolute right-52"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </div>
              <button
                className="font-medium p-2 m-2 text-md transition-all  ease-in-out duration-100 cursor-pointer hover:bg-slate-300 hover:rounded-md hover:font-semibold"
                onClick={() => setShowSearch(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          )}
          
          <nav className="flex justify-between items-center h-16 mx-auto text-black bg-slate-100 max-w-4xl rounded-b-xl border border-indigo-400 sticky top-0 z-50 border-t-0">
            <div className="flex justify-start">
              <Link
                href=""
                className={
                  "font-medium p-2 m-2 transition-all  ease-in-out duration-100 border border-transparent hover:font-semibold  text-md cursor-pointer hover:border-indigo-300 hover:bg-indigo-200 rounded-md hover:shadow-md shadow-indigo-500 active:shadow-sm active:border-b active:border-b-indigo-600 active:bg-indigo-300"
                }
              >
                Home
              </Link>
              <Link
                href="/mens-clothing"
                className={`${
                  pathname.includes("/mens-clothing")
                    ? "bg-indigo-200 border border-indigo-500"
                    : ""
                } font-medium p-2 m-2 transition-all  ease-in-out duration-100 border border-transparent hover:font-semibold  text-md cursor-pointer hover:border-indigo-300 hover:bg-indigo-200 rounded-md hover:shadow-md shadow-indigo-500 active:shadow-sm active:border-b active:border-b-indigo-600 active:bg-indigo-300`}
              >
                Men
              </Link>
              <Link
                href="/womens-clothing"
                className={`${
                  pathname.includes("/womens-clothing")
                    ? "bg-indigo-200 border border-indigo-500"
                    : ""
                } font-medium p-2 m-2 transition-all  ease-in-out duration-100 border border-transparent hover:font-semibold  text-md cursor-pointer hover:border-indigo-300 hover:bg-indigo-200 rounded-md hover:shadow-md shadow-indigo-500 active:shadow-sm active:border-b active:border-b-indigo-600 active:bg-indigo-300`}
              >
                Women
              </Link>
            </div>

            <div className="flex justify-end">
              <button
                className="font-medium p-2 m-2 transition-all  ease-in-out duration-100 border border-transparent hover:font-semibold  text-md cursor-pointer hover:border-indigo-300 hover:bg-indigo-200 rounded-md hover:shadow-md shadow-indigo-500 active:shadow-sm active:border-b active:border-b-indigo-600 active:bg-indigo-300"
                onClick={() => setShowSearch(true)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </button>

              <Link
                href="/cart"
                className={`${
                  pathname.includes("/cart")
                    ? "bg-indigo-300 border border-indigo-500"
                    : ""
                } flex font-medium p-2 m-2 transition-all  ease-in-out duration-100 border border-transparent hover:font-semibold  text-md cursor-pointer hover:border-indigo-300 hover:bg-indigo-200 rounded-md hover:shadow-md shadow-indigo-500 active:shadow-sm active:border-b active:border-b-indigo-600 active:bg-indigo-300`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
                {cart.length > 0 ? cart.length : ""}
              </Link>
              {pathname !== "/login" && user === undefined && (
                <Link
                  href="/login"
                  className="font-medium p-2 m-2 transition-all  ease-in-out duration-100 text-md rounded-md cursor-pointer border-b-2 border-slate-800 text-slate-100 bg-slate-600 hover:bg-slate-700 hover:text-slate-50 flex"
                >
                  Sign in
                </Link>
              )}
            </div>
          </nav>
          <div className="bg-indigo-600 hover:bg-indigo-700 transition-all duration-100 ease-linear flex justify-center items-end h-16 rounded-xl w-[56rem] mx-auto -translate-y-5 -z-10">
              <p className="p-[0.6rem] text-indigo-50 font-semibold">
              20% off all denim styles
              </p>
          </div>
          <div className="h-auto w-full  overflow-y-auto">
            {children}
          </div>
          <footer className="w-full text-sm  transition-all ease-linear duration-100 h-16 bg-indigo-600 text-indigo-100 flex justify-around items-center">
            
            <div className="p-2">Copyright 2023</div>

            <div className="flex justify-between items-center w-fit p-2">
              <a className="mx-4 hover:underline" href='#'>Contact Us</a>
              <a className="mx-4 hover:underline" href='#'>FAQ</a>
              <a className="mx-4 hover:underline" href='#'>Returns</a>
              <div className="flex">
                <a
                  href="https://www.twitter.com"
                  className="point-on front px-2"
                >
                  <FaTwitter size="1.5rem" />
                </a>
                <a href="https://www.instagram.com" className="point-on front px-2">
                  <FaInstagram  size="1.5rem" />
                </a>
                <a
                  href="https://www.facebook.com"
                  className="point-on front px-2"
                >
                  <FaFacebook size="1.5rem" />
                </a>
              </div>
            </div>
          </footer>
        </body>
      </html>
    </CartContextProvider>
  );
}
