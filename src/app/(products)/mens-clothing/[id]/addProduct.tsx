"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { FormEvent, useContext, useEffect, useState } from "react";
import { Product, CartItem } from "../../../../../types";
import { CartContext } from "@/app/layout";


export default function AddProduct(currProduct: any) {
  const router = useRouter();
  const [newQuantity, setNewQuantity] = useState(1);
  const [sizes, setSizes] = useState(["S", "M", "L", "XL", "XXL"]);
  const [currSize, setCurrSize] = useState("S")
  const { cart, setCart } = useContext(CartContext)

  const addToCart = (e: any) => {
    e.preventDefault();
    if (cart.length > 0) {
      let index = cart.map((e: any) => e.product).indexOf(currProduct);
      if (index >= 0) {
        setNewQuantity(newQuantity + cart[index].quantity);
      }
    }
    console.log(currProduct)
    var newCartItem = { currProduct, quantity: newQuantity, size: currSize };
    setCart([...cart, newCartItem]);
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const res = await axios.post(`${process.env.BASE_URL}/checkout`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    router.push(res.data);
  }
  useEffect(() => {
    console.log(cart)
  }, [cart])

  return (
    <form>
      <div className="my-2">
        <label className="text-sm">Sizes:</label>

        <div className="flex flex-wrap">
          {sizes.map((s: string, i: number) => (
            <button
              key={i}
              onClick={(e) => {
                e.preventDefault()
                setCurrSize(s);
              }}
              className={` flex justify-center items-center w-10 h-10 mx-2 my-1 bg-white border border-indigo-300 hover:shadow-indigo-300 hover:border-indigo-400 p-2 rounded-md hover:bg-indigo-200 hover:shadow-lg active:bg-indigo-400 active:shadow-sm transition-all duration-100 ease-in-out ${currSize === s ? 'border-2 border-indigo-700 bg-indigo-300' : ''}`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-col my-2">
        <label className="text-sm" htmlFor="quantity">Quantity:</label>
        <input
          className="w-fit p-2 mx-2 my-1 rounded-lg outline-indigo-700 transition-all ease-in-out duration-100"
          name="quantity"
          value={newQuantity}
          type="number"
          min={1}
          max={9}
          onChange={(e) => setNewQuantity(Number(e.target.value))}
        ></input>
      </div>
      
      <button
        name="add-cart-button"
        className="my-4 w-full cursor-pointer flex items-center justify-center rounded-md text-indigo-50 border-b-2 border-indigo-800 shadow-lg bg-indigo-600 hover:bg-indigo-700 hover:shadow-md active:bg-indigo-800 active:shadow-sm transition-all duration-100 ease-in-out p-4"
        onClick={addToCart}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 mr-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
          />
        </svg>
        <label htmlFor="add-cart-button" className="cursor-pointer">Add to cart</label>
      </button>
    </form>
  );
}
