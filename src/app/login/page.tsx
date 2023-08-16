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
            <div className="relative bg-slate-200 rounded-lg shadow-xl w-96 h-auto p-4">
                <Link href='/' className="absolute -top-20 -right-20 font-medium text-white rounded-md p-2 m-2 text-md transition-all  ease-in-out duration-100 cursor-pointer hover:bg-slate-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </Link>
                <h1 className="text-xl font-semibold m-2">Login</h1>
                <form onSubmit={signIn}>
                    <div className="m-2 flex flex-col">
                        <label htmlFor="email-login-input">Email:</label>
                        <input autoFocus={true} id='email-login-input' className="shadow-inner shadow-slate-300 p-2 mt-1 rounded-md" value={email} onChange={(e) => setEmail(e.target.value)}>
                        </input>
                    </div>
                    <div className="m-2 flex flex-col">
                        <label htmlFor="password-login-input">Password:</label>
                        <input id='password-login-input' className="p-2 mt-1 rounded-md " value={password} onChange={(e) => setPassword(e.target.value)}>
                        </input>
                    </div>
                    <button className="bg-slate-800 rounded-md text-white p-2 m-2 w-full font-medium" type='submit'>
                        Sign in
                    </button>
                </form>
            <div className="border-t-2 border-slate-400 m-2 flex justify-center">
                <div className="mt-4 flex flex-col items-center">
                    <h3 className="text-sm">Dont have an account yet?</h3>
                        
                    <Link href="/signup">
                        <button className="bg-slate-500 rounded-md border-b-2 border-b-slate-700 p-2 m-2 w-fit text-sm text-slate-200 hover:bg-slate-600 transition-all  ease-in-out duration-100">Sign up</button>
                    </Link>
                </div>
                
            </div>
                
            </div>
        </div>
    )
  }
  