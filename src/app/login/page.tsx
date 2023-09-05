'use client'

import { signInWithEmailAndPassword, signInWithCredential } from "firebase/auth";
import { useState } from "react"
import Link from "next/link";
import { auth } from "../../../firebase.config"

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    const signIn = async (e:React.FormEvent<HTMLFormElement>) : Promise<void> => {
        e.preventDefault()
        try {
            var user = await signInWithEmailAndPassword(auth, email, password)
            console.log(user)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='w-screen h-screen flex justify-center items-center'>
            <div className="relative border border-indigo-400 bg-indigo-50 rounded-lg shadow-xl w-96 -top-24 h-auto p-4">
                <Link href='/' className="absolute -top-20 -right-20 font-medium rounded-full p-2 m-2 text-md transition-all  ease-in-out duration-100 cursor-pointer hover:bg-indigo-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </Link>
                <h1 className="text-xl font-semibold m-2 my-">Sign in</h1>
                <form className="m-2 my-4" onSubmit={signIn}>
                    <div className="m-2 flex flex-col">
                        <label htmlFor="email-login-input">Email:</label>
                        <input autoFocus={true} id='email-login-input' className="border border-indigo-400 p-2 mt-1 rounded-md outline-indigo-800 transition-all  ease-in-out duration-100" value={email} onChange={(e) => setEmail(e.target.value)}>
                        </input>
                    </div>
                    <div className="m-2 flex flex-col">
                        <label htmlFor="password-login-input">Password:</label>
                        <input id='password-login-input' className="border border-indigo-400 p-2 mt-1 rounded-md outline-indigo-800 transition-all  ease-in-out duration-100" value={password} onChange={(e) => setPassword(e.target.value)}>
                        </input>
                    </div>
                    <button className="w-full flex my-4 justify-center items-center cursor-pointer rounded-md text-indigo-50 border-b-2 border-indigo-800 shadow-md bg-indigo-600 hover:bg-indigo-700 hover:shadow-sm active:bg-indigo-800 active:shadow-xs transition-all duration-100 ease-in-out p-4 px-2" type='submit'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2 ">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                        </svg>
                        Sign in
                    </button>
                </form>
                <div className="border-t-2 border-slate-400 m-2 flex justify-center">
                    <div className="mt-4 flex flex-col items-center">
                        <h3 className="text-sm mb-4">Dont have an account yet?</h3>

                        <Link href="/signup">
                            <button className="w-32 p-2 mr-4 flex justify-center items-center cursor-pointer rounded-md text-indigo-800 border-b-2 border-indigo-800 shadow-md border border-indigo-800 hover:bg-indigo-300 hover:shadow-sm active:bg-indigo-800 active:shadow-xs transition-all duration-100 ease-in-out p-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                                </svg>
                                Sign up
                            </button>
                        </Link>
                    </div>

                </div>

            </div>
        </div>
    )
  }
  