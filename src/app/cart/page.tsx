"use client";
import Image from "next/image";
import { useContext, useEffect } from "react"
import { CartContext } from "../layout";

export default function Cart() {
    const { cart, setCart } = useContext(CartContext)
    useEffect(() => {
        console.log('cart page', cart)
    }, [cart])
    return (
        <div className="flex flex-col max-w-4xl w-full min-h-screen mx-auto">
            <h1 className="text-lg font-medium my-4">Cart</h1>
            <div className="grid grid-cols-10 gap-2 mb-4 border-b-2 border-indigo-400">
                <div className="col-span-4">Item</div>
                <div></div>
                <div>Size</div>
                <div>Item Price</div>
                <div>Qty</div>
                <div>Total Price</div>
                <div></div>
            </div>
            {cart.length > 0 ? cart.map((c,i) => (
            <div key={i} className="w-full grid grid-cols-10 gap-2 mx-auto border-b-2 bg-indigo-100 hover:bg-indigo-200 transition-all ease-in-out duration-100 first:rounded-t-xl last:rounded-b-xl p-2">
                <div className="w-20 h-20 relative flex justify-left items-center">
                    <Image
                        className="rounded-md border-2"
                        fill={true}
                        alt={`${c.currProduct.title}`}
                        src={c.currProduct.main_img || '/#'}
                        ></Image>
                </div>
                <div className="col-span-4 flex justify-left items-center">
                    {c.currProduct.title}
                </div>
                <div className="flex items-center">{c.size}</div>
                <div className="flex items-center">{c.currProduct.price}</div>
                <div className="flex items-center">
                    <input type="number" className="w-16 p-1 rounded-md" value={c.quantity} onChange={(e) => c.quantity = e.target.value}></input>
                    
                </div>
                <div className="flex items-center">{Number(c.currProduct.price) * Number(c.quantity)}</div>
                <button className="flex justify-center items-center bg-indigo-400 hover:bg-indigo-500 rounded-xl m-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>

                


                </button>
            </div>) 
            ): <div>Add some items to the cart</div>
        }
        </div>
    )
}