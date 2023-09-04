"use client";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";

import { CartContext } from "../layout";
import Link from "next/link";

export default function Cart() {
    const { cart, setCart } = useContext(CartContext);

    useEffect(() => {
        setCart(prev => [])
        localStorage.clear()
    }, [])

    return (
        <div className="flex flex-col justify-center items-center max-w-4xl w-full min-h-screen mx-auto">
            <div className="flex flex-col justify-center items-center">
                <div className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 mr-2 text-emerald-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-xl font-semibold">Your order has been placed!</p>

                </div>
                <p className="my-2">You'll recieve a confirmation email soon. </p>
                <Link
                    href="/">
                    <button className="w-54 my-4 flex justify-center items-center cursor-pointer rounded-md text-indigo-50 border-b-2 border-indigo-800 shadow-md bg-indigo-600 hover:bg-indigo-700 hover:shadow-sm active:bg-indigo-800 active:shadow-xs transition-all duration-100 ease-in-out p-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                        </svg>

                        Continue Shopping
                    </button>
                </Link>
            </div>
        </div>
    );
}
