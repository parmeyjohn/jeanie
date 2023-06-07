'use client'

import { useState } from "react"
import Link from "next/link";

export default function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    
    return (
        <div className='w-screen h-screen flex justify-center items-center bg-slate-500'>
                
                
            <div className="relative bg-slate-200 rounded-lg shadow-xl w-96 h-auto p-4">
                <Link href='/' className="absolute -top-20 -right-20 font-medium text-white rounded-md p-2 m-2 text-md transition-all  ease-in-out duration-100 cursor-pointer hover:bg-slate-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </Link>
                <h1 className="text-xl font-semibold m-2">Login</h1>
                <div className="m-2 flex flex-col">
                    <label htmlFor="username-login-input">Username:</label>
                    <input autoFocus={true} id='username-login-input' className="shadow-inner shadow-slate-300 p-2 mt-1 rounded-md" onChange={(e) => setUsername(e.target.value)}>
                    </input>
                </div>
                <div className="m-2 flex flex-col">
                    <label htmlFor="password-login-input">Password:</label>
                    <input id='password-login-input' className="p-2 mt-1 rounded-md " onChange={(e) => setPassword(e.target.value)}>
                    </input>
                </div>
                <button className="bg-slate-800 rounded-md text-white p-2 m-2 w-full font-medium">
                    Sign in
                </button>
                

                
            </div>
        </div>
    )
  }
  