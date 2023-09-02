"use client";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../layout";
import Link from "next/link";

export default function Cart() {
  const { cart, setCart } = useContext(CartContext);
  const [subtotal, setSubtotal] = useState(prev => {
    let sum = 0
    cart.forEach( cartItem => {
        sum += Number(cartItem.currProduct.price) * Number(cartItem.quantity)
    })
    return sum
  })

  useEffect(() => {
    console.log("cart page", cart);
  }, [cart]);

  return (
    <div className="flex flex-col max-w-4xl w-full min-h-screen mx-auto">
      {cart.length > 0 && 
      <div className="w-64 h-64 absolute top-48 right-[17rem]">
        <h2 className="font-semibold text-lg mb-4">Order Summary</h2>
        <div className="flex justify-between items-center">
            <p>Subtotal:</p>
            <p>${subtotal}</p>
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

        <button className="w-64 flex justify-center items-center cursor-pointer rounded-md text-indigo-50 border-b-2 border-indigo-800 shadow-md bg-indigo-600 hover:bg-indigo-700 hover:shadow-sm active:bg-indigo-800 active:shadow-xs transition-all duration-100 ease-in-out p-4">
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
            <div
              key={i}
              className="grid grid-cols-10 gap-2 bg-indigo-100 hover:bg-indigo-200 transition-all ease-in-out duration-100 p-2 first:rounded-t-xl last:rounded-b-xl border-b border border-indigo-300"
            >
              <div className="flex justify-start items-center col-span-4">
                <div className="w-28 h-32 relative border border-indigo-300 rounded-md">
                  <Link
                    className=""
                    href={`/${c.currProduct.section}s-clothing/${c.currProduct.id}`}
                  >
                    <Image
                      className="rounded-md border-2 hover:border-2 hover:border-indigo-400 transition-all duration-100 ease-in-out"
                      fill={true}
                      alt={`${c.currProduct.title}`}
                      src={c.currProduct.main_img || "/#"}
                    ></Image>
                  </Link>
                </div>
                <Link
                  className=" hover:underline transition-all ease-linear duration-75 mx-4"
                  href={`/${c.currProduct.section}s-clothing/${c.currProduct.id}`}
                >
                  {c.currProduct.title}
                </Link>
              </div>
              <div className="flex items-center justify-center">{c.size}</div>
              <div className="flex items-center justify-center">
                {c.currProduct.price}
              </div>
              <div className="flex items-center justify-center col-span-2">
                <input
                  type="number"
                  className="w-16 p-1 rounded-md"
                  value={c.quantity}
                  onChange={(e) => (c.quantity = e.target.value)}
                ></input>
              </div>
              <div className="flex items-center justify-center">
                {Number(c.currProduct.price) * Number(c.quantity)}
              </div>
              <button
                onClick={() =>
                  setCart((prev) => prev.filter((cartItem) => cartItem != c))
                }
                className="flex justify-center items-center bg-indigo-400 hover:bg-indigo-500 rounded-xl m-2 h-12 w-12 my-auto"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-indigo-50"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
            </div>
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
