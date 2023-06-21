'use client'

import axios from "axios"
import { useRouter } from "next/navigation"
import { FormEvent, useState } from "react"
import { Product, CartItem } from "../../../../../types"
import { useCartContext } from "@/app/cartContext"



export default function AddProduct( currProduct:any ) {
    const router = useRouter()
    var [newQuantity, setNewQuantity] = useState(1)
    const {cart, setCart} = useCartContext()
    console.log(cart)
    
    function addToCart(e: any) {
      e.preventDefault();
      if (cart.length > 0) {
        let index = cart.map((e:any) => e.product).indexOf(currProduct)
        if (index >= 0) {
          setNewQuantity(newQuantity + cart[index].quantity)
        }
    }
      var newCartItem = {product: {...currProduct}, quantity: newQuantity}
      setCart([...cart, newCartItem])
    }
    
    
    
    async function handleSubmit(e:FormEvent) {
        e.preventDefault()
        const res = await axios.post(`${process.env.BASE_URL}/checkout`, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        router.push(res.data)
        }
        
    return (
        <form>
            <div>
              <label htmlFor="quantity">Quantity:</label>
              <select name="quantity">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </div>
            <button
              name="add-cart-button"
              className=" cursor-pointer flex items-center rounded-md text-indigo-100 border-b-2 border-indigo-800 shadow-lg bg-indigo-600 hover:bg-indigo-700 hover:shadow-md active:bg-indigo-800 active:shadow-sm transition-all duration-100 ease-in-out p-4"
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
              <label htmlFor="add-cart-button">Add to cart</label>
            </button>
          </form>
    )
}