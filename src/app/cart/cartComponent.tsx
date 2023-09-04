import Image from "next/image";
import Link from "next/link";
import {useState} from "react"

export default function CartComponent({setCart, c}) {

    return (<div
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
                onChange={(e) => {
                    setCart((prev) => prev.map((cartItem) => {
                        if (cartItem.currProduct.id === c.currProduct.id) {
                            return {...c, quantity: e.target.value}
                        }
                    }))
                }
                
                    
            }
            ></input>
        </div>
        <div className="flex items-center justify-center">
            {(Number(c.currProduct.price) * Number(c.quantity)).toFixed(2)}
        </div>
        <button
            onClick={() =>
                setCart((prev) => prev.filter((cartItem) => cartItem != c))
            }
            className="flex justify-center items-center hover:bg-indigo-400 hover:border hover:border-indigo-500 rounded-xl m-2 h-12 w-12 my-auto transition-all duration-100"
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
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
            </svg>
        </button>
    </div>)


}
