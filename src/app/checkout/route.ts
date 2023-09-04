import { NextResponse, NextRequest } from 'next/server'
import Stripe from "stripe"
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {typescript: true, apiVersion: "2023-08-16"});




export async function POST(request:NextRequest) {
    var items = []
    const cart = await request.json()
    for (const cartItem of cart) {
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

    try {
        const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
            mode: "payment",
            line_items: items,
            success_url: `${process.env.BASE_URL}/success`,
            cancel_url: `${process.env.BASE_URL}`,
        })
        return NextResponse.json({url: session.url}); 
            
    }
        catch (e) {
            console.log(e)
            return NextResponse.json({ message: e, success: false });

        }
       

}