import { NextResponse, NextRequest } from 'next/server'
import Stripe from "stripe"
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {typescript: true, apiVersion: "2023-08-16"});




export async function POST(request:NextRequest) {
    const product = {
        name: "name",
        price: 19.99,
        quantity: 3

    }
    var items = []
    
    const cart = await request.json()
    console.log(cart)
    for (const cartItem of cart) {
        //console.log(cartItem.currProduct)
        items.push(
            {
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: cartItem.currProduct.title,
                        images: [cartItem.currProduct.main_img]
                    },
                    unit_amount: Math.round(cartItem.currProduct.price * 100)
                },
                quantity: cartItem.quantity,
            }
        )
    }
    
    console.log('new items', items)
    //const cart = JSON.parse()
    //console.log(cart)
    console.log(Math.round(product.price * 100))
    try {
        const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
            mode: "payment",
            line_items: items,
            success_url: `${process.env.BASE_URL}`,
            cancel_url: `${process.env.BASE_URL}`,
        })
        return NextResponse.json({url: session.url}); 
            
    }
        catch (e) {
            console.log(e)
            return NextResponse.json({ message: e, success: false });

        }
       

}