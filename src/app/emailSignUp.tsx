"use client";
import { useState } from "react";
import Image from "next/image";

export default function EmailSignUp() {
  const [showWindow, setShowWindow] = useState(true);
  const [signedUp, setSignedUp] = useState(false);
  if (showWindow) {
    return (
      <div className="flex border mb-8 p-4 h-44 shadow-lg shadow-indigo-300 border-indigo-500 bg-gradient-to-tr from-indigo-300 to-indigo-200 rounded-xl max-w-4xl relative">
        <div
          onClick={() => setShowWindow(false)}
          className="absolute right-0 top-0 m-4 p-2 hover:bg-indigo-300 rounded-full transition-all ease-linear duration-100 cursor-pointer "
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
        </div>
        <div className="flex items-start justify-center mr-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>
        </div>
        <div>
          <h2 className="text-lg font-semibold">
            {signedUp ? 'Email sign up successful!' : 'Sign up with your email and get 15% off'}
          </h2>
          <p className="mb-2">
            {signedUp ? 'Thank you for signing up. A verification email will be sent within 24 hours.' : 'Receive emails and get first dibs on new arrivals, sales, exclusive content, events and more!'}
          </p>
          {signedUp ? <></> :
          
          <div className="">
            <label htmlFor="emailSignup" className="text-sm font-semibold">
              Email:
            </label>
            <br></br>
            <div className="flex ml-2 justify-start items-center">
              <input
                type="email"
                id="emailSignup"
                className="w-[75%] p-2 my-1 rounded-lg outline-indigo-700 transition-all ease-in-out duration-100 max-w-sm"
              ></input>
              <button onClick={() => setSignedUp(true)} className="h-fit w-[25%] cursor-pointer ml-4 max-w-[8rem] flex items-center justify-center rounded-md text-indigo-50 border-b-2 border-indigo-800 shadow-lg bg-indigo-600 hover:bg-indigo-700 hover:shadow-md active:bg-indigo-800 active:shadow-sm transition-all duration-100 ease-in-out p-2">
                Sign Up
              </button>
            </div>
          </div>}
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
