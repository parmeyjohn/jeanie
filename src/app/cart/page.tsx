"use client";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";

import { CartContext } from "../layout";
import Link from "next/link";
import CartComponent from "./cartComponent";

export default function Cart() {
  const { cart, setCart } = useContext(CartContext);

  const [subtotal, setSubtotal] = useState(prev => {
    let sum = 0
    cart.forEach( cartItem => {
        sum += Number(cartItem.currProduct.price) * Number(cartItem.quantity)
    })
    return sum
  })

  const submitCheckout = async () => {
    try {
        const res = await fetch("/checkout", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
              },
            body: JSON.stringify(cart)
        })

        const body = await res.json()
        window.location.href = body.url

    } catch (err) {
        console.log(err)
    }
  }

  useEffect(() => {
  
  }, [cart]);

  return (
    <div className="flex flex-col max-w-4xl w-full min-h-screen mx-auto">
      {cart.length > 0 && 
      <div className="w-64 h-64 absolute top-48 right-[17rem]">
        <h2 className="font-semibold text-lg mb-4">Order Summary</h2>
        <div className="flex justify-between items-center">
            <p>Subtotal:</p>
            <p>${subtotal.toFixed(2)}</p>
        </div>
        <div className="flex justify-between items-center">
            <p>Tax:</p>
            <p>${(subtotal / 100 * 7.25).toFixed(2)}</p>
        </div>
    
        <div className="font-medium flex justify-between items-center my-2">
            <p>Total:</p>
            <p>${(subtotal + (subtotal / 100 * 7.25)).toFixed(2)}</p>
        </div>


        <h3 className="text-lg font-medium my-2"></h3>

        <button onClick={() => submitCheckout()} className="w-64 flex justify-center items-center cursor-pointer rounded-md text-indigo-50 border-b-2 border-indigo-800 shadow-md bg-indigo-600 hover:bg-indigo-700 hover:shadow-sm active:bg-indigo-800 active:shadow-xs transition-all duration-100 ease-in-out p-4">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
        </svg>

          Checkout
        </button>
      </div>}

      <h1 className="text-lg font-medium my-4">Cart</h1>
      <div className="grid grid-cols-10 gap-2 mb-4 border-b-2 border-indigo-400 pb-2">
        <div className="col-span-4 ml-2 flex items-center justify-start">
          Item
        </div>
        <div className="flex items-center justify-center">Size</div>
        <div className="flex items-center justify-center">Price</div>
        <div className="col-span-2 flex items-center justify-center">
          Quantity
        </div>
        <div className="flex items-center justify-center">Total Price</div>
        <div></div>
      </div>

      <div className="w-full mx-auto border-b-2 rounded-xl">
        {cart.length > 0 ? (
          cart.map((c, i) => (
            <CartComponent c={c} setCart={setCart} key={i}></CartComponent>
          ))
        ) : (
          <div className="w-full h-80 flex flex-col justify-center items-center">
            <h2 className="text-xl font-semibold text-center">
              Your cart is empty!
            </h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-16 h-16 my-8 text-indigo-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>

            <h3 className="text-lg text-center">Browse for items here:</h3>

            <div className="flex justify-center my-6">
              <Link href="/mens-clothing">
                <button className="w-32 mr-4 flex justify-center items-center cursor-pointer rounded-md text-indigo-50 border-b-2 border-indigo-800 shadow-md bg-indigo-600 hover:bg-indigo-700 hover:shadow-sm active:bg-indigo-800 active:shadow-xs transition-all duration-100 ease-in-out p-4">
                  Men
                </button>
              </Link>
              <Link href="/womens-clothing">
                <button className="w-32 ml-4 flex justify-center items-center cursor-pointer rounded-md text-indigo-50 border-b-2 border-indigo-800 shadow-md bg-indigo-600 hover:bg-indigo-700 hover:shadow-sm active:bg-indigo-800 active:shadow-xs transition-all duration-100 ease-in-out p-4">
                  Women
                </button>
              </Link>
            </div>
          </div>
        )}{" "}
      </div>
    </div>
  );
}
