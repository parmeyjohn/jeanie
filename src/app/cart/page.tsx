"use client";
import { useCartContext } from "@/app/cartContext";
import Image from "next/image";


export default function Cart() {
    //const { cart, setCart } = useCartContext();
    const cart = [
        {
            "product": {
                "price": 39.99,
                    "category": "pants",
                    "id": 1,
                    "title": "Skinny Black Jeans",
                    "section": "men",
                    "sec_img": "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/men%2Fpants%2Fslim_black_jeans%2F11.jpg?alt=media&token=885b74f8-ea63-448b-a66c-97c86125b04e",
                    "alt_images": [
                        "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/men%2Fpants%2Fslim_black_jeans%2F7.jpg?alt=media&token=ab5c70f8-3e4f-476a-bf4b-df21652e1244",
                        "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/men%2Fpants%2Fslim_black_jeans%2F12.jpg?alt=media&token=162e4d6f-a3d4-4443-b9e0-cdc5f7c0444a"
                    ],
                    "main_img": "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/men%2Fpants%2Fslim_black_jeans%2F10.jpg?alt=media&token=67d37592-6d61-4207-8556-13181449b2e2",
                    "color": "black"
            },
            "quantity": "1",
            "size": "L"
        },
        {
            "product": {
                "price": 39.99,
                    "category": "pants",
                    "id": 1,
                    "title": "Skinny Black Jeans",
                    "section": "men",
                    "sec_img": "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/men%2Fpants%2Fslim_black_jeans%2F11.jpg?alt=media&token=885b74f8-ea63-448b-a66c-97c86125b04e",
                    "alt_images": [
                        "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/men%2Fpants%2Fslim_black_jeans%2F7.jpg?alt=media&token=ab5c70f8-3e4f-476a-bf4b-df21652e1244",
                        "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/men%2Fpants%2Fslim_black_jeans%2F12.jpg?alt=media&token=162e4d6f-a3d4-4443-b9e0-cdc5f7c0444a"
                    ],
                    "main_img": "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/men%2Fpants%2Fslim_black_jeans%2F10.jpg?alt=media&token=67d37592-6d61-4207-8556-13181449b2e2",
                    "color": "black"
            },
            "quantity": "1",
            "size": "L"
        },
        {
            "product": {
                "price": 39.99,
                    "category": "pants",
                    "id": 1,
                    "title": "Skinny Black Jeans",
                    "section": "men",
                    "sec_img": "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/men%2Fpants%2Fslim_black_jeans%2F11.jpg?alt=media&token=885b74f8-ea63-448b-a66c-97c86125b04e",
                    "alt_images": [
                        "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/men%2Fpants%2Fslim_black_jeans%2F7.jpg?alt=media&token=ab5c70f8-3e4f-476a-bf4b-df21652e1244",
                        "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/men%2Fpants%2Fslim_black_jeans%2F12.jpg?alt=media&token=162e4d6f-a3d4-4443-b9e0-cdc5f7c0444a"
                    ],
                    "main_img": "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/men%2Fpants%2Fslim_black_jeans%2F10.jpg?alt=media&token=67d37592-6d61-4207-8556-13181449b2e2",
                    "color": "black"
            },
            "quantity": "1",
            "size": "L"
        }
    ]
    console.log(cart)
    
    return (
        <div className="flex flex-col max-w-4xl w-full mx-auto">
            <h1 className="text-lg font-medium my-4">Cart</h1>
            <div className="grid grid-cols-8 gap-2 mb-4 border-b-2 border-indigo-400">
                <div></div>
                <div className="col-span-2">Item</div>
                <div>Size</div>
                <div>Item Price</div>
                <div>Qty</div>
                <div>Total Price</div>
                <div></div>
            </div>
            {cart.map((c,i) => (
            <div key={i} className="w-full grid grid-cols-8 gap-2 mx-auto border-b-2 bg-indigo-100 hover:bg-indigo-200 transition-all ease-in-out duration-100 first:rounded-t-xl last:rounded-b-xl p-2">
                <div className="w-20 h-20 relative">
                    <Image
                        className="rounded-md border-2"
                        fill={true}
                        alt={`${c.product.title}`}
                        src={c.product.main_img}
                        ></Image>
                </div>
                <div className="col-span-2">
                    <div>{c.product.title}</div>
                    
                    </div>
                <div>{c.size}</div>
                <div>{c.product.price}</div>
                <div>
                    <input type="number" className="w-20" value={c.quantity} onChange={(e) => c.quantity = e.target.value}></input>
                    
                </div>
                <div>{c.product.price * Number(c.quantity)}</div>
                <button className="flex justify-center bg-indigo-400 hover:bg-indigo-500 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>

                


                </button>
            </div>)
                
            )}
        </div>
    )
}