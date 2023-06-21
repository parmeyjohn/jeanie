'use client'
import { Dispatch, SetStateAction, createContext, useContext, useState } from "react"
import { CartItem } from "../../types"

interface CartContextProps {
    cart: CartItem[],
    setCart: Dispatch<SetStateAction<CartItem[]>>
}

const CartContext = createContext<CartContextProps>({
    cart: [],
    setCart: (): CartItem[] => []
})

export const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState<[] | CartItem[]>([])

    return (
        <CartContext.Provider value={{cart, setCart}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCartContext = () => useContext(CartContext)