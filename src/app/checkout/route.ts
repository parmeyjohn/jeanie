import { NextResponse, NextRequest } from 'next/server'
import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
    apiVersion: '2022-11-15'
})



export async function POST(request:NextRequest) {
    const product = {
        name: "name",
        price: 19.99,
        quantity: 3

    }
    console.log(Math.round(product.price * 100))
    try {
        const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
            mode: "payment",
            line_items: [
            {
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: product.name
                    },
                    unit_amount: Math.round(product.price * 100)
                },
                quantity: product.quantity,
            },
            ],
            success_url: `${process.env.BASE_URL}`,
            cancel_url: `${process.env.BASE_URL}`,
        })
        return NextResponse.json(session.url); 
            
    }
        catch (e) {
            console.log(e)
        }
       

}