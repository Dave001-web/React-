import React, { useState } from 'react'
const cartItems = [
    {id: 1, product:"Jean", price: 500},
    { id:2, product: "Trucker Hat", price: 400 },
    {id:3, product: "BaseBall Cap ", price:300},
    {id:4, product: "socks", price:200},
]
const Arrays = () => {
    const [cart, setCart] = useState(cartItems)
    const totalPrice = cart.reduce(( acc, item) => acc + item.price, 0 ) 
    const handleRemoveItem = (itemsId) => {
        const remaining = cart.filter((item) => item.id !== itemsId)
        setCart(remaining)
    }

    if(cart.length === 0){
        return (
            <div className='max-w-[400px] mx-auto my-4 shadow-2xl rounded-lg p-2.5 text-center>'>
                <h1 className="text-2xl mb-2.5">Your Bag is Empty</h1>
                <button onClick={() => setCart(cartItems)} className="bg-black text-white roundeed-md px-4 py-2">  Continue Shopping</button>
            </div>
        )
    }

  return (
    <div className='max-w-[400px] mx-auto my-4 shadow-2xl rounded-lg p-2.5' >
        <div className='flex items-center justify-between'>
            <h1 text-2xl>Your Bag</h1>
            <p>{cart.length}</p>
        </div>
        <div className='flex flex-col gap-4 mt-2.5'>
            {
                cart.map((items) => {
                    return <section key={items.id} className='flex items-center justify-between'>
                        <div className='flex gap-2 items-center'>
                        <button 
                        onClick={() => handleRemoveItem(items.id)} className='rounded-full cursor-pointer text-red-600'>
                        x 
                        </button>
                        <p>{items.product}</p>
                        </div>
                        <p>${items.price}</p>
                    </section>
                })
            }
            <div className='flex items-center justify-between font-bold mt-2.5'>
                <p>Total</p>
                <p>${totalPrice}</p>
            </div>
            <div>
                <button onClick={() => setCart([])}className='bg-red-500 text-white rounded-md px-4 py-2 '>Clear Cart</button>
            </div>
        </div>
    </div>
  )
}

export default Arrays